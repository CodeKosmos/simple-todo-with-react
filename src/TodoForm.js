import React, { useState } from 'react';

/* The TodoForm component allows the user to add new todos */
function TodoForm({ addTodo }) {
  const [value, setValue] = useState(''); /* State to track the value of the input field */

  /* Handler for form submission */
  const handleSubmit = (e) => {
    e.preventDefault(); /* Prevent the default form submission behavior */
    if (!value) return; /* Do nothing if the input field is empty */
    addTodo(value); /* Call the addTodo function passed as a prop */
    setValue(''); /* Reset the input field value */
  };

  /* Styles for the add button */
  const addButtonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 40px', /* Larger padding */
    cursor: 'pointer',
    fontSize: '16px', /* Larger font size */
  };

  return (
    <form onSubmit={handleSubmit}> {/* Attach the submit handler to the form */}
      <input
        type="text"
        className="input"
        value={value} /* Bind the input value to the state */
        onChange={(e) => setValue(e.target.value)} /* Update the state on input change */
        placeholder="Write here ..."
      />
      <button style={addButtonStyle} type="submit">Add</button> {/* Apply the style object */}
    </form>
  );
}

export default TodoForm; /* Export the TodoForm component as the default export */
