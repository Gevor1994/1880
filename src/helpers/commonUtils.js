import { randomInt } from 'mathjs';
import { toInteger, cloneDeep, capitalize } from 'lodash';
import getPathValue from 'lodash/get';
import React from 'react';

export function randomID(maxValue = 100) {

  return randomInt(0, maxValue + 1);
}

export function isID(id) {
  return ( toInteger(id) > 0 );
}

export function safeMerge(target, source, addNewFields = false) {

  const result     = cloneDeep(target);
  const targetKeys = Object.keys(result);
  const sourceKeys = Object.keys(source);

  targetKeys.forEach( targetKey => {
    if (!sourceKeys.includes(targetKey)) {
      return;
    };

    result[targetKey] = cloneDeep(source[targetKey]);
  });

  if (addNewFields) {
    const newKeys = sourceKeys.filter( sourceKey => {
      return !targetKeys.includes(sourceKey);
    });

    newKeys.forEach( sourceKey => {
      result[sourceKey] = cloneDeep(source[sourceKey]);
    });
  };

  return result;
}

export const formatServerError = (errorInstance = null) => {
  if (errorInstance) {
    const errorDescription = getServerError(errorInstance);
    return errorDescription
      ? (
        <div>
          <div>{capitalize(errorDescription.toString().toLowerCase().replace(/_/g, ' '))}</div>
        </div>
      )
      : '';
  };
  return '';
};

export const getServerError = (error) => {
  const errorPath = 'response.data.text';
  return  getPathValue(error, errorPath, '');
};

export function createEntities(list) {

  const result = {};
  list.forEach( item => {
    const itemID = item.id;
    result[itemID] = item;
  });

  return result;
}