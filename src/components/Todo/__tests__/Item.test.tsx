import { Todo } from "@/src/types";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { TodoContextProvider } from "../../../context";
import { TodoItem } from "../Item";

describe("<TodoItem />", () => {
	const setup = (todo: Todo) => {
		const handleDelete = vi.fn();
		const handleToggleTodo = vi.fn();
		const utils = render(
			<TodoContextProvider>
				<TodoItem
					handleDelete={handleDelete}
					handleToggleComplete={handleToggleTodo}
					{...todo}
				/>
			</TodoContextProvider>,
		);
		return {
			handleDelete,
			handleToggleTodo,
			...utils,
		};
	};

	describe("render check box, text and delete button", () => {
		it("show render as active todo", () => {
			const todo: Todo = { id: "1", text: "example", isComplete: false };
			const { unmount } = setup(todo);
			const input = screen.getByTestId("todo-item-checkbox");
			const text = screen.getByText(todo.text);
			const button = screen.getByTestId("todo-item-delete-button");
			expect(input).toBeDefined();
			expect(text).toBeDefined();
			expect(button).toBeDefined();
			expect(input).toHaveProperty("checked", false);
			expect(text.className).not.toContain("line-through text-gray-400");
			unmount();
		});

		it("should render as complete todo", () => {
			const todo = { id: "1", text: "example", isComplete: true };
			const { unmount } = setup(todo);
			const input = screen.getByTestId("todo-item-checkbox");
			const text = screen.getByText(todo.text);
			const button = screen.getByTestId("todo-item-delete-button");
			expect(input).toBeDefined();
			expect(text).toBeDefined();
			expect(button).toBeDefined();
			expect(input).toHaveProperty("checked");
			expect(text.className).toContain("line-through text-gray-400");
			unmount();
		});
	});

	it("should able to check button and call function toggle", () => {
		const todo: Todo = { id: "1", text: "example", isComplete: false };
		const { handleToggleTodo, unmount } = setup(todo);
		const input = screen.getByTestId("todo-item-checkbox");
		fireEvent.click(input);
		expect(handleToggleTodo).toHaveBeenCalledTimes(1);
		unmount();
	});

	it("should able to delete todo", () => {
		const todo: Todo = { id: "1", text: "example", isComplete: false };
		const { handleDelete, unmount } = setup(todo);
		const button = screen.getByTestId("todo-item-delete-button");
		fireEvent.click(button);
		expect(handleDelete).toHaveBeenCalledTimes(1);
		unmount();
	});
});
