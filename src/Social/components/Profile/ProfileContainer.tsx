import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../Hoc/WithAuthRedirect";
import { getProfile, getStatus } from "../../redux/Reducers/ProfileReducer";
import { getAuthState, getProfileState } from "../../redux/Selectors/Selectors";
import Profile from "./Profile";

const ProfileContainer = (props: any) => {
  const { userId } = useSelector(getAuthState);
  const { profile, status } = useSelector(getProfileState);
	const dispatch = useDispatch();
	const refreshProfile = () => {
		let curUserId = props?.match;
		if (!curUserId) {
			curUserId = userId;
		}
		dispatch(getProfile(curUserId));
		dispatch(getStatus(curUserId));
	};

	useEffect(() => {
		refreshProfile();
	}, [props.match]);

	return <Profile {...props} isOwner={!props?.match} profile={profile} status={status} />;
};

const ProfileMatch = (props: any) => {
	let { userId } = useParams();
	return <ProfileContainer {...props} match={userId} />;
};

export default compose<React.ComponentType>(withAuthRedirect)(ProfileMatch);