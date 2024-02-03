export type Todo = {
	id: string;
	text: string;
	isComplete: boolean;
};

export enum TodoFilter {
	ALL = "All",
	ACTIVE = "Active",
	COMPLETED = "Completed",
}
