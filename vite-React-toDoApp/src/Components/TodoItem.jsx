

import React from 'react';

function TodoItem({ todo, index, deleteTodo, completeTodo }) {
  return (
    <li>
      <span 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', backgroundColor: todo.completed ? 'lightgreen': 'transparent'}}
        onClick={() => completeTodo(index)}>
        {todo.text}
      </span>
      <button id="delete-me" onClick={() => deleteTodo(index)}>X</button>
    </li>
  );
}

export default TodoItem;

