import { combineReducers } from 'redux';
import phrasesReducer from './phrases/phrasesReducer';

const rootReducer = combineReducers({
  phrases: phrasesReducer,

});

export default rootReducer;
