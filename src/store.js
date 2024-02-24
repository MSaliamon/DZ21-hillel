// store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlise';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});