import { combineReducers } from 'redux';
import fermReducer from './fermReducer.js'
import hopReducer from './hopReducer';
import calcReducer from './calcReducer'
export default combineReducers({
  fermReducer, hopReducer, calcReducer
})
