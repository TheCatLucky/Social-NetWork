import profileReducer, { actions, InitialStateType } from "../redux/ProfileReducer";

const state: InitialStateType = {
	postsData: [
		{ id: 1, message: "Hello", name: "Kira", age: 13 },
		{ id: 2, message: "How are you?", name: "Line", age: 52 },
		{ id: 3, message: "Are you fine?", name: "Lina", age: 12 },
		{ id: 4, message: "How old are you?", name: "Kostya", age: 53 },
		{ id: 5, message: "Glad to see you", name: "Dasha", age: 36 },
	],
	profile: null,
	status: ""
};

it("length of posts should be incremented", () => {
	let action = actions.addPost("test text");
	let newState = profileReducer(state, action);
	expect(newState.postsData.length).toBe(6);
});

it("message of the last post should be correct", () => {
	let action = actions.addPost("test text");
	let newState = profileReducer(state, action);
	expect(newState.postsData[5].message).toBe("test text");
});
it("length of posts should be decrement", () => {
	let action = actions.removePost(1);
	let newState = profileReducer(state, action);
	expect(newState.postsData.length).toBe(4);
});
