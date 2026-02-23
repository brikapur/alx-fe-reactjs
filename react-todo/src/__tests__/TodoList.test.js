import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, {
      target: { value: "New Todo Item" },
    });

    fireEvent.click(button);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(
      screen.queryByText("Learn React")
    ).not.toBeInTheDocument();
  });
});