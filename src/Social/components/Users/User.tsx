import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import userPhoto from "../../img/user_default.png";
import { AppStateType } from '../../redux/reduxStore';
import { follow, unfollow } from '../../redux/usersReducer';
import { UserType } from '../../types/types';
import style from './Users.module.css';

type PropsType = {
  user: UserType;
};

const User: FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const handleFollow = (id: number) => {
    dispatch(follow(id));
  };
  const handleUnFollow = (id: number) => {
    dispatch(unfollow(id));
  };
  const followingProgress = useSelector((state: AppStateType) => state.usersPage.followingProgress);
  return (
    <div className={style.user}>
      <div className={style.ava}>
        <NavLink to={"/profile/" + props.user.id}>
          <img
            className={style.img}
            src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
            alt="avatar"
          />
        </NavLink>
        {props.user.followed ? (
          <button
            className={style.button}
            disabled={followingProgress.some((id) => id === props.user.id)}
            onClick={() => {
              handleUnFollow(props.user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            className={style.button}
            disabled={followingProgress.some((id) => id === props.user.id)}
            onClick={() => {
              handleFollow(props.user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={style.userInfo}>
        <div className={style.name}>
          <div>{props.user.name} </div>
          <div className={style.userName}>{props.user.status}</div>
        </div>
      </div>
    </div>
  );
};
export default User;