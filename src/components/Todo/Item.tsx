"use client";

import { type Todo } from "../../types";

export type TodoItemProps = Todo & {
	handleDelete: (id: Todo["id"]) => void;
	handleToggleComplete: (id: Todo["id"]) => void;
};

export const TodoItem = ({
	id,
	text,
	isComplete,
	handleDelete,
	handleToggleComplete,
}: TodoItemProps) => {
	return (
		<div
			data-testid="todo-item"
			className="w-full flex border-r border-b border-l border-t my-1 border-gray-400 py-2 rounded items-center justify-center"
		>
			<div>
				<input
					data-testid="todo-item-checkbox"
					className="mx-2 w-6 h-6 rounded accent-purple-500"
					type="checkbox"
					name="complete"
					defaultChecked={isComplete}
					onChange={() => handleToggleComplete(id)}
				/>
			</div>
			<span
				data-testid="todo-item-text"
				className={`text-lg grow${
					isComplete ? " line-through text-gray-400" : ""
				}`}
			>
				{text}
			</span>
			<button
				type="button"
				data-testid="todo-item-delete-button"
				className="mx-3 rounded py-1 px-3 hover:border-gray-200 hover:bg-gray-200"
				onClick={() => handleDelete(id)}
			>
				<svg
					className="h-6 w-6 text-purple-500"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<title>bin</title>
					<polyline points="3 6 5 6 21 6" />{" "}
					<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
					<line x1="10" y1="11" x2="10" y2="17" />{" "}
					<line x1="14" y1="11" x2="14" y2="17" />
				</svg>
			</button>
		</div>
	);
};
