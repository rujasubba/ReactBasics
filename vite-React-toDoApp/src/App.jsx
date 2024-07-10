// import React from 'react';
// import Todo from './Components/lists';



// function App() {
  

//   return (
//     <div class='container'>
//          <Todo />

//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import TodoItem from './Components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const completeItem = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" placeholder ="Enter your to-dos" value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
      />
      <button id='add-here' onClick={addItem}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            index={index} 
            todo={todo} 
            deleteTodo={deleteItem} 
            completeTodo={completeItem} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

