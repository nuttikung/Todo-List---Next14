import { fireEvent, render, screen } from "@testing-library/react";
import { TodoContextProvider } from "../../../context";
import { TodoFilter } from "../Filter";

describe("<TodoFilter />", () => {
	it("should render filters wirh All, Active and Completed", () => {
		const { unmount } = render(
			<TodoContextProvider>
				<TodoFilter />
			</TodoContextProvider>,
		);
		expect(screen.getByText("All")).toBeDefined();
		expect(screen.getByText("Active")).toBeDefined();
		expect(screen.getByText("Completed")).toBeDefined();
		unmount();
	});

	it("should able to switch filter", () => {
		const { unmount } = render(
			<TodoContextProvider>
				<TodoFilter />
			</TodoContextProvider>,
		);
		const activeClass =
			"inline-block border rounded py-1 px-3 mr-2 border-purple-500 bg-purple-500 text-white";
		const inActiveClass =
			"inline-block border rounded py-1 px-3 mr-2 border-white text-purple-500 hover:border-gray-200 hover:bg-gray-200";
		expect(screen.getByText("All").className).toContain(activeClass);
		expect(screen.getByText("Active").className).toContain(inActiveClass);
		expect(screen.getByText("Completed").className).toContain(inActiveClass);
		fireEvent.click(screen.getByText("Completed"));
		expect(screen.getByText("All").className).toContain(inActiveClass);
		expect(screen.getByText("Active").className).toContain(inActiveClass);
		expect(screen.getByText("Completed").className).toContain(activeClass);
		unmount();
	});
});
