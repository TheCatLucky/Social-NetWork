import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.header__login}>
        {props.isAuth ?
          <div>{props.login} - <button onClick={props.logOut}>Выйти</button></div>
          : <NavLink to={"/login"} className={style.button}>Войти</NavLink> }
        
      </div>
    </header>
  );
}

export default Header;