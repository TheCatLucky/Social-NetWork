import { nanoid } from 'nanoid';
import profileReducer from './profileReducer';
import diallogsReducer from './dialogsReducer';

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
    let id = nanoid();
    return id;
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = diallogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;