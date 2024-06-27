import React, { useState } from 'react';

const CreateTodo = ({ onAddTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-todo">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default CreateTodo;
