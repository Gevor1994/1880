import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { toInteger, last } from 'lodash';
import FORMATS from '../constants/formats';
import { CURRENCY_SYMBOLS } from '../constants/currency';

class Formatter {

  logWarning = true;

  setLogWarning(value) {
    this.logWarning = Boolean(value);
  }

  invalidArgument(funcName, value) {
    if (this.logWarning) {
      console.log(`Formatter.${funcName}: Invalid argument: `, value);
    };
  }

  // date
  date(value) {
    if (!value) {
      return '';
    };

    const momentValue = moment(new Date(value));
    if (!momentValue) {
      this.invalidArgument('date', value);
      return '';
    };

    return momentValue.format(FORMATS.date);
  }

  dayMonth(value) {
    if (!value) {
      return '';
    }

    const momentValue = moment(new Date(value));
    if (!momentValue) {
      this.invalidArgument('dateTime', value);
      return '';
    }

    return momentValue.format(FORMATS.dayMonth);
  }

  dateHyphen(value) {
    if (!value) {
      return '';
    };

    const momentValue = moment(new Date(value));
    if (!momentValue) {
      this.invalidArgument('date', value);
      return '';
    };

    return momentValue.format(FORMATS.dateHyphen);
  }

  dateTime(value) {
    if (!value) {
      return '';
    };

    const momentValue = moment(new Date(value));
    if (!momentValue) {
      this.invalidArgument('dateTime', value);
      return '';
    };

    return momentValue.format(FORMATS.dateTime);
  }

  time(value) {
    if (!value) {
      return '';
    };

    const momentValue = moment(new Date(value));
    if (!momentValue) {
      this.invalidArgument('time', value);
      return '';
    };

    return momentValue.format(FORMATS.time);
  }

  fullDateTime(value) {
    if (!value) {
      return '';
    };

    const momentValue = moment(new Date(value));
    if (!momentValue) {
      this.invalidArgument('fullDateTime', value);
      return '';
    };

    return momentValue.format(FORMATS.fullDateTime);
  }

  betDateTime(value) {
    if (!value) {
      return '';
    }

    const momentValue = moment(new Date(value));
    if (!momentValue) {
      this.invalidArgument('dateTime', value);
      return '';
    }

    return momentValue.format(FORMATS.betDateTime);
  }

  humanDuration(value) {
    if (!value) {
      return '';
    };
    
    const momentValue = moment.duration(value);
    if (!momentValue) {
      this.invalidArgument('humanDuration', value);
      return '';
    };

    return momentValue.humanize();
  }

  // numbers
  integer(value) {
    const numeralValue = numeral(value);
    if (!numeralValue) {
      this.invalidArgument('integer', value);
      return '';
    };

    return numeralValue.format(FORMATS.integer);
  }

  decimal(value) {
    const numeralValue = numeral(value);
    if (!numeralValue) {
      this.invalidArgument('decimal', value);
      return '';
    };

    return numeralValue.format(FORMATS.decimal);
  }

  sum(value) {
    const numeralValue = numeral(value);
    if (!numeralValue) {
      this.invalidArgument('sum', value);
      return '';
    };

    return numeralValue.format(FORMATS.sum);
  }

  finance(value, currencyCode = null) {
    const numeralValue = numeral(value);
    if (!numeralValue) {
      this.invalidArgument('finance', value);
      return '';
    };

    if (!currencyCode) {
      return numeralValue.format(FORMATS.finance);
    }

    const sum    = numeralValue.format(FORMATS.sum);
    const symbol = this.getCurrencySymbol(currencyCode);
    return `${symbol} ${sum}`;
  }

  percent(value) {
    const numeralValue = numeral(value);
    if (!numeralValue) {
      this.invalidArgument('percent', value);
      return '';
    };

    return numeralValue.format(FORMATS.percent);
  }

  getCurrencySymbol(currencyCode) {

    const upCode = String(currencyCode).toUpperCase();
    const symbol = CURRENCY_SYMBOLS[upCode];
    if (!symbol) {
      return upCode;
    };

    return symbol;
  }

  // ordinals
  ordinals(value) {
    const intValue = toInteger(value);
    const lastDigit = last(String(intValue).split(''));
    let suffix = 'th';
    if (intValue < 10 || intValue > 20) {
      switch (lastDigit) {
        case '1':
          suffix = 'st';
          break;

        case '2':
          suffix = 'nd';
          break;

        case '3':
          suffix = 'rd';
          break;

        default:
      }
    };

    return (
      <span className="formatter-ordinals">
        {intValue}<sup> {suffix}</sup>
      </span>
    );
  }
}

export default new Formatter();