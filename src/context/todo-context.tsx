"use client";

import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";
import { TodoFilter, type Todo } from "../types";

type TodoContextProvideProps = {
	initialValues?: Todo[];
	children: ReactNode;
};

type TodoContext = {
	todoList: Todo[];
	setTodoList: Dispatch<SetStateAction<Todo[]>>;
	todoFilter: TodoFilter;
	setTodoFilter: Dispatch<SetStateAction<TodoFilter>>;
	addTodoList: (todo: Todo) => void;
	toggleTodoComplete: (id: Todo["id"]) => void;
	deleteTodo: (id: Todo["id"]) => void;
};

const TodoContext = createContext<TodoContext | null>(null);

export const TodoContextProvider = ({
	initialValues,
	children,
}: TodoContextProvideProps) => {
	const [todoList, setTodoList] = useState<Todo[]>(initialValues || []);
	const [todoFilter, setTodoFilter] = useState<TodoFilter>(TodoFilter.ALL);

	const addTodoList = (todo: Todo) => {
		setTodoList([...todoList, todo]);
	};

	const toggleTodoComplete = (id: Todo["id"]) => {
		const updatedTodos = todoList.map((record: Todo) =>
			record.id === id ? { ...record, isComplete: !record.isComplete } : record,
		);
		setTodoList(updatedTodos);
	};

	const deleteTodo = (id: Todo["id"]) => {
		const updatedTodos = todoList.filter((record: Todo) => record.id !== id);
		setTodoList(updatedTodos);
	};

	return (
		<TodoContext.Provider
			value={{
				todoList,
				setTodoList,
				addTodoList,
				todoFilter,
				setTodoFilter,
				toggleTodoComplete,
				deleteTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodoContext = () => {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error("useTodoContext must be in TodoContext");
	}
	return context;
};
