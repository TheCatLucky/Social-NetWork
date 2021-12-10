import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator, removePostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    props.store.dispatch(onPostChangeActionCreator(text));
  }
  let removePost = () => {
    props.store.dispatch(removePostActionCreator());
  }

  return (<MyPosts
    removePost={removePost}
    updateNewPostText={onPostChange}
    addPost={addPost}
    postsData={state.profilePage.postsData}
    newPostText={state.profilePage.newPostText}
  />
  );
}

export default MyPostsContainer;