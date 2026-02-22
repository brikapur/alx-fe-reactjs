import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  test("adds new todo", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "New Todo" } });

    fireEvent.submit(input.closest("form"));

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });
});