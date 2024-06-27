import React, { useState } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo.jsx';
import TodoList from './components/TodoList.jsx';
import TodoCounter from './components/TodoCounter.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      setTodos([...todos, { text: trimmedInput, status: 'incomplete' }]);
    }
  };

  const setChecked = (indexToBeChecked, checked) => {
    setTodos(
      todos.map((todo, index) =>
        index === indexToBeChecked
          ? { ...todo, status: checked ? 'complete' : 'incomplete' }
          : todo
      )
    );
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <CreateTodo onAddTodo={addTodo} />
      <TodoList todos={todos} setChecked={setChecked} deleteTodo={deleteTodo} />
      <TodoCounter todos={todos} />
    </div>
  );
}

export default App;
