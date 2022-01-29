import { FC } from "react";
import { AppStateType } from "../../redux/reduxStore";
import { ProfileType } from "../../types/types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
  isOwner: boolean;
  status: string;
  savePhoto: () => void;
  updateStatus: () => void;
  changeStatus: () => void;
  profile: ProfileType;
  store: AppStateType;
};

const Profile: FC<PropsType> = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        changeStatus={props.changeStatus}
      />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
