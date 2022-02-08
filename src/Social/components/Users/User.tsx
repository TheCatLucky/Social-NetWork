import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import userPhoto from "../../img/user_default.png";
import { follow, unfollow } from "../../redux/Reducers/UsersReducer";
import { getUsersState } from "../../redux/Selectors/Selectors";
import { UserType } from "../../types/types";
import style from "./Users.module.css";

type PropsType = {
	user: UserType;
};

const User: FC<PropsType> = React.memo(({user}) => {
	const dispatch = useDispatch();
	const handleFollow = (id: number) => {
		dispatch(follow(id));
	};
	const handleUnFollow = (id: number) => {
		dispatch(unfollow(id));
	};
	const { followingProgress } = useSelector(getUsersState);
	return (
		<div className={style.user}>
			<div className={style.ava}>
				<NavLink to={"/profile/" + user.id}>
					<img
						className={style.img}
						src={
							user.photos.small != null
								? user.photos.small
								: userPhoto
						}
						alt="avatar"
					/>
				</NavLink>
				{user.followed ? (
					<button
						className={style.button}
						disabled={followingProgress.some((id) => id === user.id)}
						onClick={() => {
							handleUnFollow(user.id);
						}}
					>
						Unfollow
					</button>
				) : (
					<button
						className={style.button}
						disabled={followingProgress.some((id) => id === user.id)}
						onClick={() => {
							handleFollow(user.id);
						}}
					>
						Follow
					</button>
				)}
			</div>
			<div className={style.userInfo}>
				<div className={style.name}>
					<div>{user.name} </div>
					<div className={style.userName}>{user.status}</div>
				</div>
			</div>
		</div>
	);
});
export default User;
