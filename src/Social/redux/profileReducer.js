import { nanoid } from 'nanoid';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const REMOVE_POST = "REMOVE-POST";
const genId = () => { //кастомная генерация id
  let id = nanoid();
  return id;
}

let initialState = {
  postsData: [
    { id: 1, message: "Hello", name: "Kira", age: "13" },
    { id: 2, message: "How are you?", name: "Line", age: 52 },
    { id: 3, message: "Are you fine?", name: "Lina", age: 12 },
    { id: 4, message: "How old are you?", name: "Kostya", age: 53 },
    { id: 5, message: "Glad to see you", name: "Dasha", age: 36 },
  ],
  newPostText: ""
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: genId(),
        message: state.newPostText,
        name: "Masha",
        age: 20
      }
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    case REMOVE_POST:
      state.postsData.pop();
      return state;
    default:
      return state;
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


export default profileReducer;