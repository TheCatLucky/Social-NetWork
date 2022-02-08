import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { logIn } from "../../redux/Reducers/AuthReducer";
import { getAuthState } from "../../redux/Selectors/Selectors";
import { Input } from "../Common/FormsControlls/FormsControls";
import { required } from "../Utils/Validators/Validators";
import style from "./Login.module.css";
type LoginFormValuesType = {
	email: string;
	password: string;
	rememberMe: boolean;
	captcha: string;
};
type LoginFormOwnPropsType = {
	captchaURL: string | null;
};
const Login: FC = () => {
	const { isAuth, captchaURL } = useSelector(getAuthState);
	const dispatch = useDispatch();
	const onSubmit = (formData: LoginFormValuesType) => {
		dispatch(logIn(formData.email, formData.password, formData.rememberMe, formData.captcha));
	};
	if (isAuth) {
		return <Navigate to={"/profile"} />;
	}
	return (
		<div>
			<h1>Login</h1>
			<ReduxLoginForm onSubmit={onSubmit} captchaURL={captchaURL} />
			<p className={style.login}>
				Нужно залогиниться на
				<a
					href="https://social-network.samuraijs.com/"
					className={style.a}
					target="_blank"
					rel="noreferrer"
				>
					сайте
				</a>
				, прежде чем смотреть страницы сайта!
			</p>
		</div>
	);
};

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({
	handleSubmit,
	error,
	captchaURL,
}) => {
	return (
		<form className={style.form} onSubmit={handleSubmit}>
			{error && <p className={style.formSummaryError}>{error}</p>}
			<div>
				<Field
					name={"email"}
					component={Input}
					validate={[required]}
					className={style.formInput}
					placeholder={"Login"}
				/>
			</div>
			<div>
				<Field
					name={"password"}
					component={Input}
					validate={[required]}
					className={style.formInput}
					placeholder={"Password"}
					type={"password"}
				/>
			</div>
			<div className={style.remember}>
				<Field name={"rememberMe"} component={Input} type={"checkbox"} className={style.remember} />
				remember me
			</div>
			{captchaURL && <img className={style.captcha} src={captchaURL} alt="captcha" />}
			{captchaURL && (
				<Field name={"captcha"} component={Input} type={"Input"} className={style.formInput} />
			)}
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};

const ReduxLoginForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({ form: "login" })(
	LoginForm
);
export default Login;
