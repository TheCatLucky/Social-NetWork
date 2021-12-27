import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  let avatar = props.profile.photos.small;
  
  return (
    <div className={style.profile}>
      <div>
        <img className={style.avatar} src={avatar} alt="avatar" />
      </div>
    </div>
  )
}

export default ProfileInfo;