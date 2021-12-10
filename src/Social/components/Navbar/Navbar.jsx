import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.item}><NavLink to="/profile" className={({ isActive }) => isActive ? `${style.active}` : ""}>Profile</NavLink></li>
        <li className={style.item}><NavLink to="/dialogs" className={({ isActive }) => isActive ? `${style.active}` : ""}>Messages</NavLink></li>
        <li className={style.item}><NavLink to="/news" >News</NavLink></li>
        <li className={style.item}><NavLink to="/music">Music</NavLink></li>
        <li className={style.item}><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;