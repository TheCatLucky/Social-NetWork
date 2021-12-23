import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div className={style.profile}>
      <div>
        <img className={style.avatar} src="https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg" alt="" />
      </div>
    </div>
  )
}

export default ProfileInfo;