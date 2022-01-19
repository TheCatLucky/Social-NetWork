import { NavLink } from 'react-router-dom';
import userPhoto from "../../img/user_default.png";
import style from './Users.module.css';

const User = (props) => {
  return (
    <div className={style.user}>
      <div className={style.ava}>
        <NavLink to={'/profile/' + props.user.id}>
          <img className={style.img} src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt='avatar' />
        </NavLink>
        {props.user.followed
          ? <button className={style.button} disabled={props.followingProgress.some(id => id === props.user.id)}
            onClick={() => { props.unfollow(props.user.id) }}>
            Unfollow</button>
          : <button className={style.button} disabled={props.followingProgress.some(id => id === props.user.id)}
            onClick={() => { props.follow(props.user.id) }}>
            Follow</button>}
      </div>
      <div className={style.userInfo}>
        <div className={style.name}>
          <div>{props.user.name} </div>
          <div className={style.userName}>{props.user.status}</div>
        </div>
      </div>
    </div>
  )
}
export default User;