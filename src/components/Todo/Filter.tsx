"use client";

import { useTodoContext } from "../../context";
import { TodoFilter as Filters } from "../../types";

export const TodoFilter = () => {
	const filters = Object.values(Filters);
	const { todoFilter, setTodoFilter } = useTodoContext();

	const handleClick = (filter: Filters) => () => {
		setTodoFilter(filter);
	};

	return filters.map((filter) => (
		<button
			key={filter}
			className={`inline-block border rounded py-1 px-3 mr-2 ${
				todoFilter === filter
					? "border-purple-500 bg-purple-500 text-white"
					: "border-white text-purple-500 hover:border-gray-200 hover:bg-gray-200"
			}`}
			type="button"
			onClick={handleClick(filter)}
		>
			{filter}
		</button>
	));
};
