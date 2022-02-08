import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/Reducers/AuthReducer";
import { getAuthState } from "../../redux/Selectors/Selectors";
import style from "./Header.module.css";
const Header: FC = () => {
	const { isAuth, login } = useSelector(getAuthState);
	const dispatch = useDispatch();
  const handleLogout = () => {
		dispatch(logOut());
	};
	return (
		<header className={style.header}>
			<div className={style.login}>
				{isAuth ? (
					<div>
						{login} - <button onClick={handleLogout}>Выйти</button>
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

export default Header;
