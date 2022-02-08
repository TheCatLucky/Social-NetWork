import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "./../../../img/user_default.png";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import { FC } from "react";
import { ProfileType } from "../../../types/types";
import { useDispatch } from "react-redux";
import { savePhoto } from "../../../redux/Reducers/ProfileReducer";
import { ChangeEvent } from "react";

type Props = {
	profile: ProfileType;
	isOwner: boolean;
	status: string;
};

const ProfileInfo: FC<Props> = ({ profile, isOwner, status }) => {
	const dispatch = useDispatch();
	if (!profile) {
		return <Preloader />;
	}
	let avatar = profile.photos.small;
	const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length) {
			console.log(e.target.files[0]);
			dispatch(savePhoto(e.target.files[0]));
		}
	};
	console.log(isOwner);
	return (
		<div className={style.profile}>
			<div>
				<p>{profile.fullName}</p>
				<img className={style.avatar} src={avatar ? avatar : userPhoto} alt="avatar" />
				{true && <input type={"file"} onChange={handlePhoto} />}
				<ProfileStatus status={status} />
			</div>
		</div>
	);
};

export default ProfileInfo;
