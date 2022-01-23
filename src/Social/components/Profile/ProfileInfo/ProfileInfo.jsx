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
  const handlePhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={style.profile}>
      <div>
        <p>{props.profile.fullName}</p>
        <img className={style.avatar} src={avatar ? avatar : userPhoto} alt="avatar" />
        {props.isOwner && <input type={"file"} onChange={handlePhoto} />}
        <div>
          <p><b>Ищу работу :</b> {props.profile.lookingForAJob ? "да" : "нет"}</p>
          {props.profile.lookingForAJob && <p>{props.profile.lookingForAJobDesccrption}</p>}
          <p><b>Обо мне :</b> {props.aboutMe}</p>
          <p><b>Контакты :</b>{Object.keys(props.profile.contacts).map(key => {
            return <Contact contactTitle={key}
              key={key}
              contactValue={props.profile.contacts[key]}
            />
          }
          )}
          </p>
        </div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
          changeStatus={props.changeStatus}
        />
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <p><b>{contactTitle}</b>: {contactValue || "нет"}</p>
}

export default ProfileInfo;