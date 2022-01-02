import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControlls/FormsControls';
import { required } from '../Utils/Validators/Validators';
import { logIn, logOut } from './../../redux/authReducer';
import style from './Login.module.css';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  const onSubmit = (formData) => {
    props.logIn(formData.login, formData.password, formData.rememberMe);
  }
  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
      <p className={style.login}>Нужно залогиниться на<a href="https://social-network.samuraijs.com/" className={style.login__a} target="_blank" rel="noreferrer">сайте</a>,
        прежде чем смотреть страницы сайта!</p>
    </div>
  )
}

const LoginForm = (props) => {
  return (
    <form className={style.login__form} onSubmit={props.handleSubmit}>
      <div>
        <Field name={"login"} component={Input}
          validate={[required]} className={style.login__input}
          placeholder={"Login"}
        />
      </div>
      <div>
        <Field name={"password"} component={Input}
          validate={[required]} className={style.login__input}
          placeholder={"Password"} type={"password"}
        />
      </div>
      <div className={style.login__remember}>
        <Field name={"rememberMe"} component={Input}
          type={"checkbox"}
          className={style.login__remember}
        />remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {
  logIn,
  logOut
})(Login);