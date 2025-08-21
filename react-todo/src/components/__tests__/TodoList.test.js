import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles todo completion on click", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Initially no line-through
    expect(todoItem).toHaveStyle("text-decoration: none");

    fireEvent.click(todoItem);

    // After click, line-through
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);

    // Toggle back
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButtons = screen.getAllByTestId("delete-button");

    fireEvent.click(deleteButtons[0]);

    expect(todoItem).not.toBeInTheDocument();
  });
});
