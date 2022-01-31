import { nanoid } from 'nanoid';
import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostForm from './PostForm/PostForm';
import { useDispatch } from 'react-redux';

function genId() { //кастомная генерация id
  let modelId = nanoid();
  return modelId;
}

const MyPosts = (props) => {
  const dispatch = useDispatch();
  let postsResult = props.postsData.map((post) => {
    return (
      <Post key={genId()}
        id={post.id}
        message={post.message}
        name={post.name}
        age={post.age}
        removePost={props.removePost}
      />)
  });

  let addPost = (message) => {
    dispatch(addPost(message.newPost))
  }

  return (
    <div className={style.posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <NewPostForm
            onSubmit={addPost}
          />
        </div>
        {postsResult}
      </div>
    </div>
  );
}

export default MyPosts;