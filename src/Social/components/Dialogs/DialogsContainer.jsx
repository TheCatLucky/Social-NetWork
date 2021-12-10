import React from 'react';
import { sendMessageActionCreatior, onMessageTextActionCreator} from "../../redux/dialogsReducer"
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreatior());
  }
  let onNewMessageChange = (text) => {
    props.store.dispatch(onMessageTextActionCreator(text));
  }

  return (
    <Dialogs
      updateNewMessageText={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer