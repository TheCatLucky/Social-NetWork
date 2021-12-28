import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <div className={style.message}>
        <img className={style.img} src="https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg" alt="" />
        <span className={style.message__text}>{props.message}</span>
      </div>
      <div className={style.item__info}>
        <span className={style.name}>Name: {props.name} Age: {props.age}</span>
        <span className={style.button__like} >Like</span>
      </div>
    </div>
  );
}

export default Post;