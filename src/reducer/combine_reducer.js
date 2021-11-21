import { combineReducers } from 'redux';
import anatomyReducer from './anatomy_reducer';

const rootReducer = () => combineReducers({
    anatomy: anatomyReducer
});

export default rootReducer;