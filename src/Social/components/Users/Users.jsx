import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
  let state = props.users;


  let usersResult = state.map((u) => {
    let follow = () => {
      props.followUser(u.id);
    }
    let unfollow = () => {
      props.unfollowUser(u.id);
    }
    return (
      <div key={u.id} className={style.user}>
        <div >
          <img className={style.img} src={u.photoUrl} alt='avatar' />
          {u.followed
            ? <button onClick={unfollow}>Unfollow</button>
            : <button onClick={follow}> Follow</button>}
        </div>
        <div className={style.user_info}>
          <div className={style.name}>
            <div>{u.name} </div>
            <div>{u.status}</div>
          </div>
          <div className={style.location}>
            <div>{u.location.city} </div>
            <div>{u.location.country}</div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>{usersResult}</div>
  )
}

export default Users;