import React, { useState } from 'react';
import '../src/App.css';

function App() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(''); 

  
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]); 
      setNewTask(''); 
    }
  };

  
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              onClick={() => toggleComplete(index)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;