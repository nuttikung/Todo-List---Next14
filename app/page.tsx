import { TodoFilter, TodoInput, TodoList } from "../src/components/Todo";

export default function Home() {
	return (
		<main
			data-testid="home-page"
			className="flex min-h-screen flex-col items-center p-5 sm:p-10 md:p-16 lg:p-20"
		>
			<h1 className="font-bold text-2xl uppercase">todo list</h1>
			<form className="flex my-5 w-full justify-center">
				<TodoInput />
			</form>
			<div className="flex my-2 w-full justify-center">
				<TodoFilter />
			</div>
			<div className="flex my-5 w-full flex-col justify-center sm:w-9/12 md:w-6/12 lg:w-5/12">
				<TodoList />
			</div>
		</main>
	);
}
