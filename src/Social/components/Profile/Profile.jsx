import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts
        postsData={props.postsData}
        newPostText={props.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default Profile;