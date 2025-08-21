import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write tests", completed: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          data-testid="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li
            key={id}
            data-testid="todo-item"
            onClick={() => toggleTodo(id)}
            style={{ textDecoration: completed ? "line-through" : "none", cursor: "pointer" }}
          >
            {text}
            <button
              data-testid="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(id);
              }}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
