import { nanoid } from 'nanoid';
const UPDATE_NEW_MEESSAGE_TEXT = "UPDATE-NEW-MEESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const genId = () => { //кастомная генерация id
  let id = nanoid();
  return id;
}

let initialState = {
  dialogsData: [
    { id: 1, name: "Петя" },
    { id: 2, name: "Маша" },
    { id: 3, name: "Катя" },
    { id: 4, name: "Ваня" },
    { id: 5, name: "Кира" },
  ],
  messagesData: [
    { id: 1, message: "Ку!" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Все гуд" },
  ],
  newMessageText: ""
}
const diallogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let message = {
        id: genId(),
        message: state.newMessageText,
      }
      state.messagesData.push(message);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MEESSAGE_TEXT:
      state.newMessageText = action.message;
      return state;
    default:
      return state;
  }
}
export const sendMessageActionCreatior = () => ({ type: SEND_MESSAGE })
export const onMessageTextActionCreator = (text) => (
  {
    type: UPDATE_NEW_MEESSAGE_TEXT,
    message: text
  }
)

export default diallogsReducer;