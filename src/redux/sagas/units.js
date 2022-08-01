import * as types from "../actionTypes/unitTypes";
import {
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  loadUnitsError,
  loadUnitsSuccess,
  filterSuccess,
  filterError,
} from "../actions/units";
import { loadUnitsApi} from "../api";
import {filterUnits} from "../util/filterUtil";

export function* onLoadUnitsStartAsync() {
  // getting reponse from the api calling
  try {
    const response = yield call(loadUnitsApi);
    // console.log(response.data);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUnitsSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUnitsError(error.response.data));
  }
}

 /* export function* onFilterByAgeStartAsync(payload) {
  // getting reponse from the fucntion calling
  try {
    const response = yield call(filterUnitsByAge, payload.payload);
    yield put(filterByAgeSuccess(response));
  } catch (error) {
    yield put(filterByAgeError(error.response.data));
  }
}

export function* onFilterByCostStartAsync(payload) {
  try {
    const response = yield call(filterUnitsByCost, payload.payload);
    yield put(filterByCostSuccess(response));
  } catch (error) {
    yield put(filterByCostError(error.response.data));
  }
}  */


export function* onFilterStart(payload) {
  try {
    const response = yield call(filterUnits, payload.payload);
    yield put(filterSuccess(response));
  } catch (error) {
    yield put(filterError(error.response.data));
  }
}


export function* onLoadUnits() {
  yield takeEvery(types.LOAD_UNITS_START, onLoadUnitsStartAsync);
}

/* export function* onFilterByAge() {
  yield takeLatest(types.FILTER_BY_AGE_START, onFilterByAgeStartAsync);
}

export function* onFilterByCost() {
  yield takeLatest(types.FILTER_BY_COST_START, onFilterByCostStartAsync);   
} */

export function* onFilter() {
  yield takeLatest(types.FILTER_START, onFilterStart);
}


const unitSagas = [
  fork(onLoadUnits),
  // fork(onFilterByAge),
  // fork(onFilterByCost),
  fork(onFilter)
];

export default function* rootSaga() {
  yield all([...unitSagas]);
}
