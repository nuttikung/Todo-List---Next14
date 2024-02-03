import { render, screen } from "@testing-library/react";
import { TodoContextProvider } from "../../src/context";
import Home from "../page";

describe("Home page", () => {
	it("should render component", () => {
		const { unmount } = render(
			<TodoContextProvider>
				<Home />
			</TodoContextProvider>,
		);
		expect(screen.getByTestId("home-page")).toBeInTheDocument();
		unmount();
	});
});
