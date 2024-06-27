import React from 'react';

const TodoCounter = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.status === 'complete');
  const incompleteTodos = todos.filter((todo) => todo.status === 'incomplete');

  return (
    <p className="todo-counter">
      {todos.length} todos, ({incompleteTodos.length} incomplete,{' '}
      {completedTodos.length} complete)
    </p>
  );
};

export default TodoCounter;
