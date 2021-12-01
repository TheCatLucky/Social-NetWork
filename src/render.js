import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Social/App';
import { addPost, removePost, updateNewPostText } from "./Social/redux/state";



export let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <App
      appState={props}
      addPost={addPost}
      removePost={removePost}
      updateNewPostText={updateNewPostText}
    />,
    document.getElementById('root')
  );
}
