import { nanoid } from 'nanoid';
import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import style from './Dialogs.module.css';
import Message from "./Message/Message";


function genId() { //кастомная генерация id
  let modelId = nanoid();
  return modelId;
}

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogResult = state.dialogsData.map((id) => {
    return <DialogItem key={genId()} id={id.id} name={id.name} />
  })
  let messagesResult = state.messagesData.map((id) => {
    return <Message key={genId()} id={id.id} message={id.message} />
  })
  let newMessageText = state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={style.page}>
      <div className={style.dialogs}> Имена
        {dialogResult}
      </div>
      <div className={style.messages}>Сообщения
        {messagesResult}
        <div>
          <textarea
            className={style.message__zone}
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