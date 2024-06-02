import React from 'react';
import './Done.css'; /* Import the CSS file */

function Done({ todo, index, removeTodo, goBack }) {
  const todoClass = 'todo completed'; /* Assign the class for completed todos */

  return (
    <div className={todoClass}>
      {todo.text}
      <div>
        <button
          className="remove-button" /* Class for the Remove button */
          onClick={() => removeTodo(index)}
        >
          Remove
        </button>
        <button
          className="go-back-button" /* Class for the Go Back button */
          onClick={() => goBack(index)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Done;
