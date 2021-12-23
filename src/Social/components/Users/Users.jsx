import * as axios from 'axios';
import React from 'react';
import style from './Users.module.css';
import classNames from 'classnames';
import userPhoto from "../../img/user_default.png"

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) { // для остановки запросов на сервер. для работы изменить на 0
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          console.log(response)
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        console.log(response)
        this.props.setUsers(response.data.items)
      })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) ;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }
    return (
      <>
        <div className={style.pagesNumber}>
          {pages.map(p => { 
            return <span className={classNames(this.props.currentPage === p && style.selected,style.pageNumber)}
              onClick={() => { this.onPageChanged(p)}}>{p}</span>
          })}
        </div>
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