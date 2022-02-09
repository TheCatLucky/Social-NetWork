import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/Reducers/AuthReducer";
import { getAuthState } from "../../redux/Selectors/Selectors";
import style from "./MyHeader.module.css";
const MyHeader: FC = () => {
	const { isAuth, login } = useSelector(getAuthState);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logOut());
	};
	return (
		<header className={style.header}>
			<div className={style.login}>
				<Avatar  icon={<UserOutlined /> } />
				{isAuth ? (
					<div className={style.user}>
						{login}
						<button onClick={handleLogout} className={style.button}>
							Выйти
						</button>
					</div>
				) : (
					<NavLink to={"/login"} className={style.button}>
						Войти
					</NavLink>
				)}
			</div>
		</header>
	);
};

export default MyHeader;
