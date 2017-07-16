import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //any key to the object that we provide to the combineReducers ends up as a key on our global state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
