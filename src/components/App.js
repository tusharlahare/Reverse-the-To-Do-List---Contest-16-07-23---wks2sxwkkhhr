import React, { useState } from 'react'
import '../styles/App.css';

function ToDo() {
  return (
    <tr>
    <td>
      <p>{id}</p>
    </td>
    <td>
      <input />
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>
    );
}

function App() {
  const [todos, setTodos] = useState([
    {
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);

  const reverseOrder = () => {
    setTools(prevTodos => [...prevTodos].reverse());
  };

  return (
    <div id="main">
      <button onclick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
    {todos.map(todo => (
      <ToDo key={todo.id} id={todo.id} createdAt={todo.createAt} />
  ))}
        </tbody>
      </table>
    </div>
  );
}


export default App;
