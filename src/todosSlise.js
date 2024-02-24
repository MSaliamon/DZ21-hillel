// todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [], newTodo: '' },
  reducers: {
    setNewTodo: (state, action) => {
      state.newTodo = action.payload;
    },
    addTodo: (state) => {
      state.todos.push({ task: state.newTodo, completed: false });
      state.newTodo = '';
    },
    toggleTodo: (state, action) => {
      const index = action.payload;
      state.todos[index].completed = !state.todos[index].completed;
    },
  },
});

export const { setNewTodo, addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;