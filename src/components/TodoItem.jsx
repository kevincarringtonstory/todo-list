import React from 'react';

const TodoItem = ({ todo, index, setChecked, deleteTodo }) => {
  return (
    <li
      className={`todo-item ${
        todo.status === 'complete' ? 'strike-through' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={todo.status === 'complete'}
        onChange={(event) => setChecked(index, event.target.checked)}
      />
      <span className="text">{todo.text}</span>
      <button className="delete-btn" onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
