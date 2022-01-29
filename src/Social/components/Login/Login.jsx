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
    props.logIn(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }
  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
      <p className={style.login}>Нужно залогиниться на<a href="https://social-network.samuraijs.com/" className={style.a} target="_blank" rel="noreferrer">сайте</a>,
        прежде чем смотреть страницы сайта!</p>
    </div>
  )
}

const LoginForm = (props) => {
  return (
    <form className={style.form} onSubmit={props.handleSubmit}>
      {props.error && <p className={style.formSummaryError}>
       { props.error}
      </p>}
      <div>
        <Field name={"email"} component={Input}
          validate={[required]} className={style.formInput}
          placeholder={"Login"}
        />
      </div>
      <div>
        <Field name={"password"} component={Input}
          validate={[required]} className={style.formInput}
          placeholder={"Password"} type={"password"}
        />
      </div>
      <div className={style.remember}>
        <Field name={"rememberMe"} component={Input}
          type={"checkbox"}
          className={style.remember}
        />remember me
      </div>
      {props.captchaURL && <img className={style.captcha}src={props.captchaURL} alt="captcha"/>}
      {props.captchaURL && <Field name={"captcha"} component={Input}
        type={"Input"}
        className={style.formInput}
      />}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaURL: state.auth.captchaURL
})
export default connect(mapStateToProps, {
  logIn,
  logOut
})(Login);