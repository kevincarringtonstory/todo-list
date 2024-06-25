import React from 'react';
import { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [input, setInput] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onAddTodo(input);
        setInput('');
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
