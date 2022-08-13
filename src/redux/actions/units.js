import * as types from '../actionTypes/unitTypes'


export const loadUnitsStart = ()=> ({
    type: types.LOAD_UNITS_START,
});

export const loadUnitsSuccess = (units)=> ({
    type: types.LOAD_UNITS_SUCCESS,
    payload: units
});

export const loadUnitsError = (error)=> ({
    type: types.LOAD_UNITS_ERROR,
    payload: error,
});

 /* export const filterByAgeStart = (units, value)=> ({
    type: types.FILTER_BY_AGE_START,
    payload: {
        units:units,
        value:value
    },
});

export const filterByAgeSuccess = (units)=> ({
    type: types.FILTER_BY_AGE_SUCCESS,
    payload: units
});

export const filterByAgeError = (error)=> ({
    type: types.FILTER_BY_AGE_ERROR,
    payload: error,
});

export const filterByCostStart = (units, value, cost)=> ({
    type: types.FILTER_BY_COST_START,
    payload: {
        units:units,
        value:value,
        cost: cost
    },
});

export const filterByCostSuccess = (units)=> ({
    type: types.FILTER_BY_COST_SUCCESS,
    payload: units
});

export const filterByCostError = (error)=> ({
    type: types.FILTER_BY_COST_ERROR,
    payload: error,
});   */


export const filterStart = (units, value,costObject)=> ({  // value -> age 
    type: types.FILTER_START,
    payload: {
        units:units,
        value:value,
        costObject:costObject
    },
});

export const filterSuccess = (units)=> ({
    type: types.FILTER_SUCCESS,
    payload: units
});

export const filterError = (error)=> ({
    type: types.FILTER_ERROR,
    payload: error,
});
