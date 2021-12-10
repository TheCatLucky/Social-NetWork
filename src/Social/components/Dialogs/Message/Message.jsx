import style from "./../Dialogs.module.css"

const Message = (props) => {
  return (
    <div className={style.messages__item}>{props.message}</div>
  )
}

export default Message;