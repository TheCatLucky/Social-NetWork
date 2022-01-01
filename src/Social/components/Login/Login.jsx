import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { authAPI } from '../../API/Api';

import style from './Login.module.css';

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    authAPI.logIn(formData.login, formData.password);
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
      <p className={style.login}>Нужно залогиниться на<a href="https://social-network.samuraijs.com/" className={style.login__a} target="_blank" rel="noreferrer">сайте</a>,
        прежде чем смотреть страницы сайта!</p>
    </div>
  )
}

const LoginForm = (props) => {
  return (
    <form className={style.login__form} onSubmit={props.handleSubmit}>
      <div>
        <Field name={"login"} component={"input"} className={style.login__input} placeholder={"Login"} />
      </div>
      <div>
        <Field name={"password"} component={"input"} className={style.login__input} placeholder={"Password"} type={"password"} />
      </div>
      <div>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"} className={style.login__input} />remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}


const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
export default Login;