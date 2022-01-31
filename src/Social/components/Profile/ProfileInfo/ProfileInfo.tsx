import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from "./../../../img/user_default.png";
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import { FC } from 'react';
import { ProfileType } from '../../../types/types';
import { useDispatch } from 'react-redux';
import { savePhoto } from '../../../redux/profileReducer';
import { ChangeEvent } from 'react';

type Props = {
  profile: ProfileType,
  isOwner: boolean,
  status: string,
}

const ProfileInfo: FC<Props> = (props) => {
  const dispatch = useDispatch();
  if (!props.profile) {
    return <Preloader />
  }
  let avatar = props.profile.photos.small;
  const handlePhoto = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      dispatch(savePhoto(e.target.files[0]));
    }
  }
  return (
    <div className={style.profile}>
      <div>
        <p>{props.profile.fullName}</p>
        <img className={style.avatar} src={avatar ? avatar : userPhoto} alt="avatar" />
        {props.isOwner && <input type={"file"} onChange={handlePhoto} />}
        <ProfileStatus
          status={props.status}
        />
      </div>
    </div>
  )
}



export default ProfileInfo;