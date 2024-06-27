import React from 'react';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, setChecked, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          setChecked={setChecked}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
