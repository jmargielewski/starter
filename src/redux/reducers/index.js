import { combineReducers } from 'redux';
import initReducer from './initReducer';

const reducer = combineReducers({
  init: initReducer,
});

export default reducer;
