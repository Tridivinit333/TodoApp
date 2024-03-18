import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import { FaTrash } from 'react-icons/fa';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "1/2 kg gajar" },
    { id: 2, text: "2 kg pyaj" },
    { id: 3, text: "3 kilo aloo" }
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      // Create a new todo object with incremented ID and text from inputValue
      const newTodo = { id: todos.length + 1, text: inputValue };
      // Add the new todo to the todos array
      setTodos([...todos, newTodo]);
      // Clear the input field
      setInputValue("");
    }
  };

  function handleCheckboxChange(todoId) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  function handleDelete(todoId) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  }

  return (
    <>
      <Navbar />
      <br />
      <div className='todo'>
        <h3>Your Todo's</h3>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Add Todo"
            aria-label="Search"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="btn btn-outline-success" type="button" onClick={handleClick}>
            Add
          </button>
        </form>

        <br />
        {todos.map(todo => (
          <div className='realtodo' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} key={todo.id}>

            <div className='form-check form-check-inline'>
              <input className="form-check-input" type="checkbox" id={`inlineCheckbox${todo.id}`} value="option1" checked={todo.checked} onChange={() => handleCheckboxChange(todo.id)} />
              <label className={`form-check-label ${todo.checked ? 'canceled' : ''}`} htmlFor={`inlineCheckbox${todo.id}`}>
                <strong><p>{todo.text}</p></strong>
              </label>
            </div>
            <FaTrash onClick={() => handleDelete(todo.id)} style={{ cursor: 'pointer' }} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
