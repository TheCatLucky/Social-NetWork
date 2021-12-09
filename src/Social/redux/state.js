import { nanoid } from 'nanoid';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MEESSAGE_TEXT = "UPDATE-NEW-MEESSAGE-TEXT";
const REMOVE_POST = "REMOVE-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hello", name: "Kira", age: "13" },
        { id: 2, message: "How are you?", name: "Line", age: 52 },
        { id: 3, message: "Are you fine?", name: "Lina", age: 12 },
        { id: 4, message: "How old are you?", name: "Kostya", age: 53 },
        { id: 5, message: "Glad to see you", name: "Dasha", age: 36 },
      ],
      newPostText: ""
    },
    dialogsPage: {
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
  },
  _genId() { //кастомная генерация id
    let modelId = nanoid();
    return modelId;
  },
  _callSubscriber() {
    console.log('State was changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._genId(),
        message: this._state.profilePage.newPostText,
        name: "Masha",
        age: 20
      }
      this._state.profilePage.postsData.push(newPost);
      this._callSubscriber(this._state);
      this._state.profilePage.newPostText = "";
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === REMOVE_POST) {
      this._state.profilePage.postsData.pop();
      this._callSubscriber(this._state);
    }
    else if (action.type === ADD_MESSAGE) {
      let message = {
        id: this._genId(),
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messagesData.push(message);
      this._callSubscriber(this._state);
      this._state.dialogsPage.newMessageText = "";
    }
    else if (action.type === UPDATE_NEW_MEESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (text) => (
  {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
)
export const removePostActionCreator = () => ({ type: REMOVE_POST })
export default store;