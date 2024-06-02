import React, { useState } from 'react';
import './Todo.css'; /* Import the CSS file for styling */

/* The Todo component represents a single todo item */
function Todo({ todo, index, completeTodo, editTodo, removeTodo }) {
  const [isEditing, setIsEditing] = useState(false); /* State to track if the todo is being edited */
  const [newText, setNewText] = useState(todo.text); /* State to track the new text for the todo */

  /* Handler for when the edit button is clicked */
  const handleEditClick = () => {
    setIsEditing(true);
  };

  /* Handler for when the cancel button is clicked */
  const handleCancelClick = () => {
    setIsEditing(false);
    setNewText(todo.text); /* Reset the text to the original todo text */
  };

  /* Handler for when the save button is clicked */
  const handleSaveClick = () => {
    editTodo(index, newText); /* Call the editTodo function passed as a prop */
    setIsEditing(false);
  };

  /* Handler for when the input text changes */
  const handleInputChange = (e) => {
    setNewText(e.target.value); /* Update the new text state */
  };

  /* Determine the CSS class for the todo based on its completion status */
  const todoClass = todo.isCompleted ? 'todo completed' : 'todo not-completed';

  return (
    <div className={todoClass}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={handleInputChange} /* Attach the input change handler */
          />
          <button className="save-button" onClick={handleSaveClick}>Save</button>
          <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <div>{todo.text}</div>
          <div>
            <button className="complete-button" onClick={() => completeTodo(index)}>
              {todo.isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            <button className="remove-button" onClick={() => removeTodo(index)}>
              {todo.isCompleted ? 'Go Back' : 'Remove'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo; /* Export the Todo component as the default export */