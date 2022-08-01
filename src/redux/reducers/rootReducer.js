import {combineReducers} from 'redux';
import unitsreducer from '../reducers/units';

const rootReducer = combineReducers({
     data: unitsreducer,
});

export default rootReducer;