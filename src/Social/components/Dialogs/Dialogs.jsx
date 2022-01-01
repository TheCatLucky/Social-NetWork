import { nanoid } from 'nanoid';
import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import MessageForm from './MessageForm/MessageForm';

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

  let onSendMessageClick = (messageData) => {
    props.sendMessage(messageData.dialogNewMessage);
  }

  return (
    <div className={style.page}>
      <div className={style.dialogs}> Имена
        {dialogResult}
      </div>
      <div className={style.messages}>Сообщения
        {messagesResult}
        <MessageForm onSubmit={onSendMessageClick} />
      </div>
    </div>
  )
}

export default Dialogs