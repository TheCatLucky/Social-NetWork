import { nanoid } from 'nanoid';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const REMOVE_POST = "REMOVE-POST";
const genId = () => { //кастомная генерация id
  let id = nanoid();
  return id;
}
const profileReducer = (state, action) => {
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