import React from 'react'
import style from "./FormControls.module.css"

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  return (
    <FormControl {...props}><textarea {...props.input} {...props} /></FormControl>
  )
}

export const Input = (props) => {
  return (
    <FormControl {...props}><input {...props.input} {...props}></input></FormControl>
  )
}