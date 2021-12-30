import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from "./../../../img/user_default.png"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  let avatar = props.profile.photos.small;

  return (
    <div className={style.profile}>
      <div>
        <p>{props.profile.fullName}</p>
        <img className={style.avatar} src={avatar ? avatar : userPhoto} alt="avatar" />
      </div>
    </div>
  )
}

export default ProfileInfo;