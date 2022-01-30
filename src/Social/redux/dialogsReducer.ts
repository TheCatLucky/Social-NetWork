const SEND_MESSAGE = "SEND-MESSAGE";
type InitialStateType = typeof initialState;
export type DialogType = {
  id: number;
  name: string;
};
export type MessagesType = {
  id: number;
  message: string;
};
export type SendMessageType = {
  type: typeof SEND_MESSAGE;
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

type ActionType = SendMessageType;
const diallogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
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

export const sendMessage = (message: string): SendMessageType => ({
  type: SEND_MESSAGE,
  message,
});

export default diallogsReducer;
