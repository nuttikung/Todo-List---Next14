import { Todo } from "@/src/types";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoContextProvider } from "../../../context";
import { TodoList } from "../List";

describe("<TodoList />", () => {
	const setup = (todos: Todo[]) => {
		const utils = render(
			<TodoContextProvider initialValues={todos}>
				<TodoList />
			</TodoContextProvider>,
		);
		return {
			...utils,
		};
	};

	it("should render empty todo list", () => {
		const { container, unmount } = setup([]);
		expect(container.firstChild).toBeNull();
		unmount();
	});

	it("should render todo list as provide data", () => {
		const mockData: Todo[] = [
			{
				id: "1",
				text: "example",
				isComplete: false,
			},
			{
				id: "2",
				text: "hello world",
				isComplete: true,
			},
		];
		const { unmount } = setup(mockData);
		expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
		unmount();
	});

	it("should able to toggle as completed todo", () => {
		const mockData: Todo[] = [
			{
				id: "1",
				text: "example",
				isComplete: false,
			},
			{
				id: "2",
				text: "hello world",
				isComplete: true,
			},
		];
		const { unmount } = setup(mockData);
		fireEvent.click(screen.getAllByTestId("todo-item-checkbox")[0]);
		expect(screen.getAllByTestId("todo-item-checkbox")[0]).toHaveProperty(
			"checked",
		);
		expect(screen.getAllByTestId("todo-item-text")[0].className).toContain(
			"line-through text-gray-400",
		);
		unmount();
	});

	it("should able to mark todo as active", () => {
		const mockData: Todo[] = [
			{
				id: "1",
				text: "example",
				isComplete: false,
			},
			{
				id: "2",
				text: "hello world",
				isComplete: true,
			},
		];
		const { unmount } = setup(mockData);
		fireEvent.click(screen.getAllByTestId("todo-item-checkbox")[1]);
		expect(screen.getAllByTestId("todo-item-checkbox")[1]).toHaveProperty(
			"checked",
			false,
		);
		expect(screen.getAllByTestId("todo-item-text")[1].className).not.toContain(
			"line-through text-gray-400",
		);
		unmount();
	});

	it("should show correct todos amount when user delete some of it", () => {
		const mockData: Todo[] = [
			{
				id: "1",
				text: "example",
				isComplete: false,
			},
			{
				id: "2",
				text: "hello world",
				isComplete: true,
			},
		];
		const { unmount } = setup(mockData);
		expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
		fireEvent.click(screen.getAllByTestId("todo-item-delete-button")[1]);
		expect(screen.getAllByTestId("todo-item")).toHaveLength(1);
		unmount();
	});
});
