import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../redux/profileReducer';
import style from './Post.module.css';
type Props = {
  id: number,
  message: string,
  name: string,
  age:number
}
const Post: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const removePost = (id:number) => {
    console.log(id);
    dispatch(actions.removePost(id));
  };
  return (
    <div className={style.item}>
      <div className={style.message}>
        <img
          className={style.img}
          src="https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg"
          alt="avatar"
        />
        <span className={style.messageText}>{props.message}</span>
      </div>
      <div className={style.itemInfo}>
        <span className={style.name}>
          Name: {props.name} Age: {props.age}
        </span>
        <span className={style.buttonLike}>Like</span>
        <button onClick={() => removePost(props.id)} className={style.buttonDelete}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Post;