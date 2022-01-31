import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import MessageForm from './MessageForm/MessageForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import { actions } from '../../redux/dialogsReducer';

type DialogsFormType = {
  dialogNewMessage: string
};
const Dialogs = () => {
  const state = useSelector((state: AppStateType) => state.dialogsPage)
  const dispatch = useDispatch()
  let dialogResult = state.dialogsData.map((id) => {
    return <DialogItem key={id.id} id={id.id} name={id.name} />
  })
  let messagesResult = state.messagesData.map((id) => {
    return <Message key={id.id} id={id.id} message={id.message} />
  })

  let onSendMessageClick = (messageData: DialogsFormType) => {
    dispatch(actions.sendMessage(messageData.dialogNewMessage));
  };

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