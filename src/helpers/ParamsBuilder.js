import moment from 'moment';
import { toInteger, toNumber, isBoolean, isArray } from 'lodash';

import FORMATS from '../constants/formats';
import { isID } from './commonUtils';

const formatDate = FORMATS.date;
const formatOnlyTime = FORMATS.time;
const formatTime = FORMATS.fullDateTime;

export default class ParamsBuilder {
  RULES = {
    noCondition: 'noCondition',
    isExist: 'isExist',
    isID: 'isID',
    isBoolean: 'isBoolean',
    isNumber: 'isNumber',
    isDate: 'isDate',
    isDateTime: 'isDateTime',
    isString: 'isString',
    isDateRange: 'isDateRange',
    isDateTimeRange: 'isDateTimeRange',
    isISOStringRange: 'isISOStringRange',
    isArrayID: 'isArrayID',
    isArrayString: 'isArrayString',
    isNumberRange: 'isNumberRange',
    isTimeRange: 'isTimeRange',
    isPositiveNumber: 'isPositiveNumber',
    isTrue: 'isTrue',
  };

  fields = [];

  values = [];

  addValue(paramsName, value) {
    this.values.push({
      paramsName,
      value,
    });
  }

  addField(rule, objectName, paramsName = null) {
    this.fields.push({
      rule,
      objectName,
      paramsName: paramsName || objectName,
    });
  }

  addRangeField(rule, valueRange, paramsNames = []) {
    this.fields.push({
      rule,
      valueRange,
      paramsNames,
    });
  }

  biuldParams(initObject) {
    const params = {};

    this.values.forEach(item => {
      params[item.paramsName] = item.value;
    });

    this.fields.forEach(field => {
      const { rule, objectName, paramsName } = field;
      const value = initObject[objectName];

      switch (rule) {
        case this.RULES.isExist: {
          if (value !== undefined && value !== null) {
            params[paramsName] = value;
          }
          break;
        }
        case this.RULES.isID: {
          if (isID(value)) {
            params[paramsName] = toInteger(value);
          }
          break;
        }
        case this.RULES.isBoolean: {
          if (isBoolean(value)) {
            params[paramsName] = Boolean(value);
          }
          break;
        }
        case this.RULES.isNumber: {
          // eslint-disable-next-line no-restricted-globals
          if (!isNaN(toNumber(value))) {
            params[paramsName] = toNumber(value);
          }
          break;
        }
        case this.RULES.isString: {
          if (value !== undefined && value !== null && value !== '') {
            params[paramsName] = value;
          }
          break;
        }
        case this.RULES.isDate: {
          const valueDate = moment(value);
          if (valueDate) {
            params[paramsName] = valueDate.format(formatDate);
          }
          break;
        }
        case this.RULES.isDateTime: {
          const valueDateTime = moment(value);
          if (valueDateTime) {
            params[paramsName] = valueDateTime.format(formatTime);
          }
          break;
        }
        case this.RULES.isDateRange: {
          this.checkDateRange(params, field);
          break;
        }
        case this.RULES.isDateTimeRange: {
          this.checkDateTimeRange(params, field);
          break;
        }
        case this.RULES.isISOStringRange: {
          this.checkISOStringRange(params, field);
          break;
        }
        case this.RULES.isTimeRange: {
          this.checkTimeRange(params, field);
          break;
        }
        case this.RULES.isArrayID: {
          const arrayID = this.getArrayID(value);
          if (arrayID.length > 0) {
            params[paramsName] = arrayID;
          }
          break;
        }
        case this.RULES.isArrayString: {
          const arrayString = this.getArrayString(value);
          if (arrayString.length > 0) {
            params[paramsName] = arrayString;
          }
          break;
        }
        case this.RULES.isNumberRange: {
          this.checkNumberRange(params, field);
          break;
        }
        case this.RULES.isPositiveNumber: {
          const numValue = toNumber(value);
          // eslint-disable-next-line no-restricted-globals
          if (!isNaN(numValue) && numValue > 0) {
            params[paramsName] = numValue;
          }
          break;
        }
        case this.RULES.isTrue: {
          if (isBoolean(value) && value) {
            params[paramsName] = Boolean(value);
          }
          break;
        }
        default: {
          params[paramsName] = value;
        }
      }
    });

    return params;
  }

  checkDateRange(params, field) {
    const { valueRange, paramsNames } = field;
    if (!valueRange) {
      return;
    }

    valueRange.forEach((value, index) => {
      const paramsName = paramsNames[index];
      if (!value || !paramsName) {
        return;
      }
      if(moment.isMoment(value)) {
        params[paramsName] = value.format(formatDate);
      } else {
        const valueDate = moment(value);
        if (valueDate) {
          params[paramsName] = valueDate.format(formatDate);
        }
      }
    });
  }

  checkDateTimeRange(params, field) {
    const { valueRange, paramsNames } = field;
    if (!valueRange) {
      return;
    }

    valueRange.forEach((value, index) => {
      const paramsName = paramsNames[index];
      if (!value || !paramsName) {
        return;
      }
      if(moment.isMoment(value)) {
        params[paramsName] = value.format(formatTime);
      } else {
        const valueDate = moment(value);
        if (valueDate) {
          params[paramsName] = valueDate.format(formatTime);
        }
      }

    });
  }

  checkISOStringRange(params, field) {
    const { valueRange, paramsNames } = field;
    if (!valueRange) {
      return;
    }

    valueRange.forEach((value, index) => {
      const paramsName = paramsNames[index];
      if (!value || !paramsName) {
        return;
      }
      if(moment.isMoment(value)) {
        params[paramsName] = value.toISOString();
      } else {
        const valueDate = moment(value);
        if (valueDate) {
          params[paramsName] = valueDate.toISOString();
        }
      }

    });
  }

  checkTimeRange(params, field) {
    const { valueRange, paramsNames } = field;
    if (!valueRange) {
      return;
    }

    valueRange.forEach((value, index) => {
      const paramsName = paramsNames[index];
      if (!value || !paramsName) {
        return;
      }
      const valueDate = moment(value);
      if (valueDate) {
        params[paramsName] = valueDate.format(formatOnlyTime);
      }
    });
  }

  checkNumberRange(params, field) {
    const { valueRange, paramsNames } = field;
    if (!valueRange) {
      return;
    }

    valueRange.forEach((value, index) => {
      const paramsName = paramsNames[index];
      if (!value || !paramsName) {
        return;
      }
      const valueNumber = toNumber(value);
      if (valueNumber) {
        params[paramsName] = valueNumber;
      }
    });
  }

  getArrayID(rawArrayID) {
    if (!isArray(rawArrayID)) {
      return [];
    }

    const arrayID = rawArrayID.filter(item => {
      return isID(item);
    });

    return arrayID;
  }

  getArrayString(rawArrayString) {
    if (!isArray(rawArrayString)) {
      return [];
    }

    const arrayString = rawArrayString.filter(item => {
      return Boolean(item);
    });

    return arrayString;
  }
}
