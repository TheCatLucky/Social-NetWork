import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../Hoc/WithAuthRedirect";
import { getProfile, getStatus } from "../../redux/Reducers/ProfileReducer";
import { getAuthState, getProfileState } from "../../redux/Selectors/Selectors";
import Profile from "./Profile";

const ProfileContainer = () => {
  const { id } = useParams();
  const { userId } = useSelector(getAuthState);
  const { profile, status } = useSelector(getProfileState);
  const dispatch = useDispatch();
  let isOwner = false; // решить эту проблему
  const refreshProfile = () => {
    if (typeof (id) === "undefined") {
      return;
    }
		const curUserId = userId ?? +id;
		dispatch(getProfile(curUserId));
		dispatch(getStatus(curUserId));
  };
	useEffect(() => {
		refreshProfile();
	}, [id, userId]);

	return <Profile isOwner={isOwner} profile={profile} status={status} />;
};



export default compose<React.ComponentType>(withAuthRedirect)(ProfileContainer);