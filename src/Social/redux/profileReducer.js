import { nanoid } from 'nanoid';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const REMOVE_POST = "REMOVE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const genId = () => { //кастомная генерация id
  let id = nanoid();
  return id;
}

let initialState = {
  postsData: [
    { id: genId(), message: "Hello", name: "Kira", age: "13" },
    { id: genId(), message: "How are you?", name: "Line", age: 52 },
    { id: genId(), message: "Are you fine?", name: "Lina", age: 12 },
    { id: genId(), message: "How old are you?", name: "Kostya", age: 53 },
    { id: genId(), message: "Glad to see you", name: "Dasha", age: 36 },
  ],
  newPostText: "",
  profile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText === "") {
        return state;
      }
      let newPost = {
        id: genId(),
        message: state.newPostText,
        name: "Masha",
        age: 20
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ""
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case REMOVE_POST:
      return {
        ...state,
        postsData: [...state.postsData].slice(0, state.postsData.length - 1)
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
}
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => (
  {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
)
export const removePost = () => ({ type: REMOVE_POST })
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})


export default profileReducer;