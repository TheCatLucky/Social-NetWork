import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuthState } from "../../redux/Selectors/Selectors";
import style from "./Navbar.module.css";

const Navbar: FC = () => {
	const { userId } = useSelector(getAuthState);
	return (
		<nav className={style.nav}>
			<ul>
				<li className={style.item}>
					<NavLink
						to={`/profile/${userId}`}
						className={({ isActive }) => (isActive ? `${style.active}` : "")}
					>
						Profile
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to="/dialogs" className={({ isActive }) => (isActive ? `${style.active}` : "")}>
						Messages
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to="/users" className={({ isActive }) => (isActive ? `${style.active}` : "")}>
						Users
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to="/news" className={({ isActive }) => (isActive ? `${style.active}` : "")}>
						News
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to="/music" className={({ isActive }) => (isActive ? `${style.active}` : "")}>
						Music
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to="/settings" className={({ isActive }) => (isActive ? `${style.active}` : "")}>
						Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
