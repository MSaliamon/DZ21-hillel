
// App.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNewTodo, addTodo, toggleTodo } from './todosSlise';

function App() {
  const todos = useSelector(state => state.todos.todos);
  const newTodo = useSelector(state => state.todos.newTodo);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo());
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <div>
      <input type="text" value={newTodo} onChange={(e) => dispatch(setNewTodo(e.target.value))} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleToggleTodo(index)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;