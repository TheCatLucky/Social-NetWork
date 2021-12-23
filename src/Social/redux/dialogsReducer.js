import { nanoid } from 'nanoid';
const UPDATE_NEW_MEESSAGE_TEXT = "UPDATE-NEW-MEESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const genId = () => { //кастомная генерация id
  let id = nanoid();
  return id;
}
let initialState = {
  dialogsData: [
    { id: genId(), name: "Петя" },
    { id: genId(), name: "Маша" },
    { id: genId(), name: "Катя" },
    { id: genId(), name: "Ваня" },
    { id: genId(), name: "Кира" },
  ],
  messagesData: [
    { id: genId(), message: "Ку!" },
    { id: genId(), message: "Как дела?" },
    { id: genId(), message: "Все гуд" },
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
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, message]
      }
    case UPDATE_NEW_MEESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.message
      }
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