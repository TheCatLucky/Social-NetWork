import React from 'react';
import style from './Login.module.css';

const Login = (props) => {
  return (
    <p className={style.login}>Нужно залогиниться на<a href="https://social-network.samuraijs.com/" className={style.login__a} target="_blank" rel="noreferrer">сайте</a>,
      прежде чем смотреть страницы сайта!</p>
  )
}

export default Login;