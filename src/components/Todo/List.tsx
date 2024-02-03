"use client";

import { TodoFilter as Filters, Todo } from "@/src/types";
import { useMemo } from "react";
import { useTodoContext } from "../../context";
import { TodoItem } from "./Item";

export const TodoList = () => {
	const { todoList, todoFilter, toggleTodoComplete, deleteTodo } =
		useTodoContext();

	const list = useMemo(() => {
		if (todoFilter === Filters.ALL) {
			return todoList;
		}
		if (todoFilter === Filters.ACTIVE) {
			return todoList.filter((value) => !value.isComplete);
		}
		return todoList.filter((value) => value.isComplete);
	}, [todoList, todoFilter]);

	const handleToggleTodo = (id: Todo["id"]) => {
		toggleTodoComplete(id);
	};

	const handleDeleteTodo = (id: Todo["id"]) => {
		deleteTodo(id);
	};

	return list.map(({ id, text, isComplete }: Todo) => (
		<TodoItem
			key={id}
			id={id}
			text={text}
			isComplete={isComplete}
			handleDelete={handleDeleteTodo}
			handleToggleComplete={handleToggleTodo}
		/>
	));
};
