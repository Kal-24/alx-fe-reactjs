import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="todo-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" data-testid="add-button">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
<form onSubmit={handleSubmit}>
  <input
    data-testid="todo-input"  // 👈 this is important
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button
    type="submit"
    data-testid="add-button"  // 👈 this too
  >
    Add Todo
  </button>
</form>
