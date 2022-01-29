import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/authReducer";
import { AppStateType } from "../../redux/reduxStore";
import style from "./Header.module.css";
const Header = () => {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const login = useSelector((state: AppStateType) => state.auth.login);
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
