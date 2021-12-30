import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import userPhoto from "../../img/user_default.png";
import style from './Users.module.css';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className={style.pagesNumber}>
        {pages.map(p => {
          return <span key={p} className={classNames(props.currentPage === p && style.selected, style.pageNumber)}
            onClick={() => { props.onPageChanged(p) }}>{p}</span>
        })}
      </div>
      {
        props.users.map((u) => {
          return (
            <div key={u.id} className={style.user}>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img className={style.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar' />
                </NavLink>
                {u.followed
                  ? <button disabled={props.followingProgress.some(id => id === u.id)}
                    onClick={() => { props.unfollow(u.id) }}>
                    Unfollow</button>
                  : <button disabled={props.followingProgress.some(id => id === u.id)}
                    onClick={() => { props.follow(u.id) }}>
                    Follow</button>}
              </div>
              <div className={style.user_info}>
                <div className={style.name}>
                  <div>{u.name} </div>
                  <div className={style.name_name}>{u.status}</div>
                </div>
              </div>
            </div>)
        })
      }
    </>
  )
}
export default Users;