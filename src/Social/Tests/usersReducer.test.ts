import { actions, InitialState } from "../redux/UsersReducer";
import usersReducer from "../redux/UsersReducer";

//@ts-ignore

let state: InitialState = {
	usersData: [
		{
			id: 0,
			name: "Evgeniy",
			status: "online",
			photos: {
				small: null,
				large: null,
			},
			followed: true,
		},
		{
			id: 1,
			name: "Valya",
			status: "online",
			photos: {
				small: null,
				large: null,
			},
			followed: false,
		},
		{
			id: 2,
			name: "Natasha",
			status: "afk",
			photos: {
				small: null,
				large: null,
			},
			followed: true,
		},
		{
			id: 3,
			name: "Dasha",
			status: "brb",
			photos: {
				small: null,
				large: null,
			},
			followed: false,
		},
	],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingProgress: [],
};
beforeEach(() => {
	state = {
		usersData: [
			{
				id: 0,
				name: "Evgeniy",
				status: "online",
				photos: {
					small: null,
					large: null,
				},
				followed: true,
			},
			{
				id: 1,
				name: "Valya",
				status: "online",
				photos: {
					small: null,
					large: null,
				},
				followed: false,
			},
			{
				id: 2,
				name: "Natasha",
				status: "afk",
				photos: {
					small: null,
					large: null,
				},
				followed: true,
			},
			{
				id: 3,
				name: "Dasha",
				status: "brb",
				photos: {
					small: null,
					large: null,
				},
				followed: false,
			},
		],
		pageSize: 5,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: true,
		followingProgress: [],
	};
});
test("follow test", () => {
	const newState = usersReducer(state, actions.acceptFollow(1));
	expect(newState.usersData[0].followed).toBeTruthy();
	expect(newState.usersData[1].followed).toBeTruthy();
});

test("unfollow success", () => {
	const newState = usersReducer(state, actions.acceptUnfollow(0));
	expect(newState.usersData[1].followed).toBeFalsy();
	expect(newState.usersData[0].followed).toBeFalsy();
});
