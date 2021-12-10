import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { nanoid } from 'nanoid';

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

  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }
  let onRemovePost = () => {
    props.removePost();
  }

  return (
    <div className={style.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            cols={40}
            rows={4}
            placeholder='Начните печатать свой пост'
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
          <button onClick={onRemovePost}>Remove</button>
        </div>
        {postsResult}
      </div>
    </div>
  );
}

export default MyPosts;