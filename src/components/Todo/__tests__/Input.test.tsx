import { fireEvent, render, screen } from "@testing-library/react";
import { TodoContextProvider } from "../../../context";
import { TodoInput } from "../Input";

describe("<TodoInput />", () => {
	const setup = () => {
		const utils = render(
			<TodoContextProvider>
				<TodoInput />
			</TodoContextProvider>,
		);
		const input = screen.getByTestId("todo-input");
		const button = screen.getByText("Add");
		return {
			input,
			button,
			...utils,
		};
	};

	it("should render input and add button", () => {
		const { button, input, unmount } = setup();
		expect(input).toBeDefined();
		expect(input).toHaveProperty("value", "");
		expect(button).toBeDefined();
		expect(button).toHaveProperty("disabled");
		unmount();
	});

	it("should able to type for input and the button is changing disabled state depend on input value", () => {
		const { button, input, unmount } = setup();
		expect(input).toHaveProperty("value", "");
		fireEvent.change(input, { target: { value: "Example" } });
		expect(input).toHaveProperty("value", "Example");
		expect(button).toHaveProperty("disabled", false);
		fireEvent.change(input, { target: { value: "" } });
		expect(button).toHaveProperty("disabled");
		unmount();
	});

	it("should clear input state when user clicked add button", () => {
		const { button, input, unmount } = setup();
		fireEvent.change(input, { target: { value: "Example" } });
		expect(input).toHaveProperty("value", "Example");
		fireEvent.click(button);
		expect(input).toHaveProperty("value", "");
		unmount();
	});
});
