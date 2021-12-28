import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.header__login}>
        {props.isAuth ?
          props.login
          : <NavLink to={"/login"} className={style.button}>Login</NavLink> }
        
      </div>
    </header>
  );
}

export default Header;