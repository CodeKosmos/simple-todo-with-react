/* Importing necessary dependencies and components */
import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import Done from './Done';
import TodoForm from './TodoForm';
import './App.css';
import workImage from './images/work.png';

function App() {
  /* State for managing todos and completed todos */
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  /* useEffect hook to load todos and completed todos from local storage when the component mounts */
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    const storedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));

    if (storedTodos) {
      setTodos(storedTodos);
    }
    if (storedCompletedTodos) {
      setCompletedTodos(storedCompletedTodos);
    }
  }, []);

  /* Function to add a new todo */ 
  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  /* Function to mark a todo as completed */
  const completeTodo = (index) => {
    const newTodos = [...todos];
    const completedTodo = newTodos.splice(index, 1)[0];
    setTodos(newTodos);

    const newCompletedTodos = [...completedTodos, completedTodo];
    setCompletedTodos(newCompletedTodos);

    localStorage.setItem('todos', JSON.stringify(newTodos));
    localStorage.setItem('completedTodos', JSON.stringify(newCompletedTodos));
  };

  /* Function to edit an existing todo */
  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  /* Function to remove a todo, either from the todos list or the completed todos list */
  const removeTodo = (index, isCompleted = false) => {
    if (isCompleted) {
      const newCompletedTodos = [...completedTodos];
      newCompletedTodos.splice(index, 1);
      setCompletedTodos(newCompletedTodos);
      localStorage.setItem('completedTodos', JSON.stringify(newCompletedTodos));
    } else {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  };

  /* Function to move a completed todo back to the todos list */
  const goBack = (index) => {
    const completedTodo = completedTodos[index];
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);
    setCompletedTodos(newCompletedTodos);

    const newTodos = [...todos, completedTodo];
    setTodos(newTodos);

    localStorage.setItem('completedTodos', JSON.stringify(newCompletedTodos));
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <div className="header">
      <h1>Welcome to Todo Firas App</h1>
      <img src={workImage} alt="Work" className="work-image" />
      <TodoForm addTodo={addTodo} />
      <div className="content">
        <div className="left-panel">
          <h1>Todo List</h1>
          <div className="todo-list">
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                editTodo={editTodo}
                removeTodo={removeTodo}
              />
            ))}
          </div>
        </div>
        <div className="right-panel">
          <h1>Completed Todos</h1>
          <div className="completed-todos-list">
            {completedTodos.map((todo, index) => (
              <Done
                key={index}
                index={index}
                todo={todo}
                removeTodo={() => removeTodo(index, true)}
                goBack={() => goBack(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
