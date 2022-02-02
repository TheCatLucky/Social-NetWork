import { InferActionsTypes } from "./ReduxStore";

type InitialStateType = typeof initialState;
export type DialogType = {
	id: number;
	name: string;
};
export type MessagesType = {
	id: number;
	message: string;
};
const initialState = {
	dialogsData: [
		{ id: 1, name: "Петя" },
		{ id: 2, name: "Маша" },
		{ id: 3, name: "Катя" },
		{ id: 4, name: "Ваня" },
		{ id: 5, name: "Кира" },
	] as Array<DialogType>,
	messagesData: [
		{ id: 1, message: "Ку!" },
		{ id: 2, message: "Как дела?" },
		{ id: 3, message: "Все гуд" },
	] as Array<MessagesType>,
};

type ActionsType = InferActionsTypes<typeof actions>;
const diallogsReducer = (
	state: InitialStateType = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case "SEND_MESSAGE":
			if (action.message === undefined) {
				return state;
			}
			let message = {
				id: 4,
				message: action.message,
			};
			return {
				...state,
				messagesData: [...state.messagesData, message],
			};

		default:
			return state;
	}
};
export const actions = {
	sendMessage: (message: string) =>
		({
			type: "SEND_MESSAGE",
			message,
		} as const),
};

export default diallogsReducer;
