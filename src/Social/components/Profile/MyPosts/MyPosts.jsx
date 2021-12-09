import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { nanoid } from 'nanoid';
import { addPostActionCreator, onPostChangeActionCreator, removePostActionCreator } from './../../../redux/state';


function genId() { //кастомная генерация id
  let modelId = nanoid();
  return modelId;
}


const MyPosts = (props) => {
  let postsResult = props.postsData.map((post) => {
    return (
      <Post key={genId()}
        message={post.message}
        name={post.name}
        age={post.age}
      />)
  });


  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreator(text));
  }
  let removePost = () => {
    props.dispatch(removePostActionCreator());
  }

  return (
    <div className={style.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button onClick={removePost}>Remove</button>
        </div>
        {postsResult}
      </div>
    </div>
  );
}

export default MyPosts;