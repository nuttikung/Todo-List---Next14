// import { TodoContextProvider } from "../../../context";
// import { TodoFilter } from "../Filter";
import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import { useTodoContext } from "../todo-context";

describe("useTodoContext", () => {
	it("should throw error when not provide context", () => {
		const { result } = renderHook(() => useTodoContext());
		expect(result.error).toEqual(
			Error("useTodoContext must be in TodoContext"),
		);
	});
});
