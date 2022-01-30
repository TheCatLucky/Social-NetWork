import { FC } from "react";
import { WrappedFieldProps } from "redux-form";
import style from "./FormControls.module.css";

const FormControl: FC<WrappedFieldProps> = (props) => {
  const hasError = props.meta.touched && props.meta.error;
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      {props.children}
      {hasError && <span>{props.meta.error}</span>}
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
