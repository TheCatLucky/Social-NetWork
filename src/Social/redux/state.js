import { rerenderEntireTree } from '../../render';
const state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hello", name: "Kira", age: "13" },
      { id: 2, message: "How are you?", name: "Line", age: 52 },
      { id: 3, message: "Are you fine?", name: "Lina", age: 12 },
      { id: 4, message: "How old are you?", name: "Kostya", age: 53 },
      { id: 5, message: "Glad to see you", name: "Dasha", age: 36 },
    ],
    newPostText: ''
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
  }
}
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    name: "Masha",
    age: 20
  }
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
  state.profilePage.newPostText = "";
}
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let removePost = () => {
  state.profilePage.postsData.pop();
  rerenderEntireTree(state);
}
export default state;