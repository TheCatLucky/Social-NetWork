import { FC } from "react";
import { AppStateType } from "../../redux/ReduxStore";
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

const Profile: FC<PropsType> = ({ isOwner, profile, status }) => {
	return (
		<div className={style.profile}>
			<ProfileInfo isOwner={isOwner} profile={profile} status={status} />
			<MyPosts />
		</div>
	);
};

export default Profile;
