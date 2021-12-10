import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { sendMessageActionCreatior, onMessageTextActionCreator} from "../../redux/dialogsReducer"

function genId() { //кастомная генерация id
  let modelId = nanoid();
  return modelId;
}
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialogs__item} >
      <NavLink to={path} className={({ isActive }) => isActive ? `${style.active}` : ""}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={style.messages__item}>{props.message}</div>
  )
}
const Dialogs = (props) => {

  let onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreatior());
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    console.log(text)
    props.dispatch(onMessageTextActionCreator(text));
  }

  let dialogResult = props.dialogsData.map((id) => {
    return <DialogItem key={genId()} id={id.id} name={id.name} />
  })

  let messagesResult = props.messagesData.map((id) => {
    return <Message key={genId()} id={id.id} message={id.message} />
  })
  let newMessageText = props.newMessageText;


  return (
    <div className={style.page}>
      <div className={style.dialogs}> Имена
        {dialogResult}
      </div>
      <div className={style.messages}>Сообщения
        {messagesResult}
        <div>
          <textarea
            cols={30}
            rows={3}
            placeholder='Введите сообщение'
            value={newMessageText}
            onChange={onMessageChange}>
          </textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs