import { combineReducers } from 'redux';
import fermReducer from './fermReducer.js'
import hopReducer from './hopReducer';
import calcReducer from './calcReducer'
import modalReducer from './modalReducer'
export default combineReducers({
  fermentation: fermReducer, hops: hopReducer, calculations: calcReducer, modalClick: modalReducer
})
