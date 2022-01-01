import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from "./../../../img/user_default.png";
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

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
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
          changeStatus={props.changeStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo;