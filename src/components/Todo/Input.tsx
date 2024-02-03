"use client";

import { Todo } from "@/src/types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoContext } from "../../context";

export const TodoInput = () => {
	const { addTodoList } = useTodoContext();
	const [todo, setTodo] = useState<Todo>({
		id: uuidv4(),
		text: "",
		isComplete: false,
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodo({ ...todo, text: event.target.value });
	};

	const handleClick = () => {
		addTodoList(todo);
		setTodo({
			id: uuidv4(),
			text: "",
			isComplete: false,
		});
	};

	return (
		<>
			<input
				className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="todo-input"
				data-testid="todo-input"
				type="text"
				placeholder="type something"
				autoComplete="off"
				value={todo.text}
				onChange={handleChange}
			/>
			<button
				className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-2 shadow${
					todo.text.length === 0 ? " cursor-not-allowed opacity-50" : ""
				}`}
				type="button"
				onClick={handleClick}
				disabled={todo.text.length === 0}
			>
				Add
			</button>
		</>
	);
};
