import { useState } from 'react';
import './App.css';

function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState('');

  const AddTodo = () => {
    setTodos([...todos, input]);
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          AddTodo();
          setInput('');
        }}
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <p>0 todos, (0 incomplete, 0 complete)</p>
    </div>
  );
}

export default App;
