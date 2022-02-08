import { FC } from "react";
import { WrappedFieldProps } from "redux-form";
import style from "./FormControls.module.css";

const FormControl: FC<WrappedFieldProps> = ({ meta, children }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={style.formControl + " " + (hasError ? style.error : "")}>
			{children}
			{hasError && <span>{meta.error}</span>}
		</div>
	);
};

export const Textarea: FC<WrappedFieldProps> = (props) => {
	return (
		<FormControl {...props}>
			<textarea {...props.input} {...props} />
		</FormControl>
	);
};

export const Input: FC<WrappedFieldProps> = (props) => {
	return (
		<FormControl {...props}>
			<input {...props.input} {...props}></input>
		</FormControl>
	);
};
