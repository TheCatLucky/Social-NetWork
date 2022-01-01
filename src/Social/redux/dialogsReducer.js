import { nanoid } from 'nanoid';
const SEND_MESSAGE = "SEND-MESSAGE";
const genId = () => { //кастомная генерация id
  let id = nanoid();
  return id;
}
const initialState = {
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
}

const diallogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      if (action.message === undefined) {
        return state;
      }
      let message = {
        id: genId(),
        message: action.message ,
      }
      return {
        ...state,
        messagesData: [...state.messagesData, message]
      }

    default:
      return state;
  }
}

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message
})


export default diallogsReducer;