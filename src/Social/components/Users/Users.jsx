import style from './Users.module.css';
import classNames from 'classnames';
import userPhoto from "../../img/user_default.png"

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className={style.pagesNumber}>
        {pages.map(p => {
          return <span className={classNames(props.currentPage === p && style.selected, style.pageNumber)}
            onClick={() => { props.onPageChanged(p) }}>{p}</span>
        })}
      </div>
      {
        props.users.map((u) => {
          return (
            <div key={u.id} className={style.user}>
              <div >
                <img className={style.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar' />
                {u.followed
                  ? <button
                    onClick={() => {
                      props.unfollowUser(u.id)
                    }}>
                    Unfollow</button>
                  : <button
                    onClick={() => {
                      props.followUser(u.id)
                    }}>
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