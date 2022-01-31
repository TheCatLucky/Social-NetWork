import { FC } from "react";
import { AppStateType } from "../../redux/reduxStore";
import { ProfileType } from "../../types/types";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
  isOwner: boolean;
  status: string;
  profile: ProfileType;
  store: AppStateType;
};

const Profile: FC<PropsType> = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
      />
      <MyPosts/>
    </div>
  );
};

export default Profile;
