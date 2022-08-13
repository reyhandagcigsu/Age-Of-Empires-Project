import * as types from "../actionTypes/unitTypes";

const initialState = {
  units: [],
  oldUnits:[],
  loading: false,
  error: null,
};

const unitsreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_UNITS_START:
    case types.FILTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_UNITS_SUCCESS: 
      return {
        ...state,
        loading: false,
        units: action.payload,
        oldUnits: action.payload,
      };
    case types.FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        units: action.payload,
      }
    case types.LOAD_UNITS_ERROR:
      case types.FILTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default unitsreducer;
