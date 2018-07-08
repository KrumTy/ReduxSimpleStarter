import { combineReducers } from 'redux';
import booksReducer from './Books';
import activeBookReducer from './ActiveBook';

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: activeBookReducer,
});

export default rootReducer;
