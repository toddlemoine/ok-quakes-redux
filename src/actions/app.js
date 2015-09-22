import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

export function setDateRange(from, to) {
  return { type: types.SET_DATE_RANGE, dateRange: [from, to] };
}

export function loadQuakeData() {
    return fetch(`/quakes.json`)
      .then(response => response.json())
      .then(loadQuakeDataCompleted)
      .catch(loadQuakeDataFailed);
}

export function loadQuakeDataFailed(error) {
    console.log('failed', error);
    return {type: types.LOAD_QUAKE_DATA_FAILED, error};
}

export function loadQuakeDataCompleted(data) {
    return {type: types.LOAD_QUAKE_DATA_COMPLETED, data};
}

