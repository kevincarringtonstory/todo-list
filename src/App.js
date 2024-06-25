import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/addTodo';

function App() {
  const [todos, setTodos] = useState([]);

  let completedTodos = todos.filter((todo) => todo.status === 'complete');
  let incompletedTodos = todos.filter((todo) => todo.status === 'incomplete');

  const setChecked = (indexToBeChecked, checked) => {
    if (checked) {
      setTodos(
        todos.map((todo, index) =>
          index === indexToBeChecked ? { ...todo, status: 'complete' } : todo
        )
      );
    } else {
      setTodos(
        todos.map((todo, index) =>
          index === indexToBeChecked ? { ...todo, status: 'incomplete' } : todo
        )
      );
    }
  };

  const addTodo = (input) => {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      let newObject = { text: trimmedInput, status: 'incomplete' };
      setTodos([...todos, newObject]);
    }
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo onAddTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={todo.status === 'complete' ? 'strike-through' : ''}
          >
            <input
              type="checkbox"
              checked={todo.status === 'complete'}
              onChange={(event) => setChecked(index, event.target.checked)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>
        {todos.length} todos, ({incompletedTodos.length} incomplete,{' '}
        {completedTodos.length} complete)
      </p>
    </div>
  );
}

export default App;
