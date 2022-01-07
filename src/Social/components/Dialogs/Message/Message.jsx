import style from "./../Dialogs.module.css"

const Message = (props) => {
  return (
    <div className={style.messageItem}>{props.message}</div>
  )
}

export default Message;