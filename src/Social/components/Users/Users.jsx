import * as axios from 'axios';
import React from 'react';
import style from './Users.module.css';
import userPhoto from "../../img/user_default.png"

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === -1) { // для остановки запросов на сервер. для работы изменить на 0
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          console.log(response)
          this.props.setUsers(response.data.items)
        })
    }
  }

  render() {
    return (
      <>
        {
          this.props.users.map((u) => {
            return (
              <div key={u.id} className={style.user}>
                <div >
                  <img className={style.img} src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar' />
                  {u.followed
                    ? <button
                      onClick={() => {
                        this.props.unfollowUser(u.id)
                      }}>
                      Unfollow</button>
                    : <button
                      onClick={() => {
                        this.props.followUser(u.id)
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
}

export default Users;