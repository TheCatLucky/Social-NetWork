import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

function genId() { //кастомная генерация id
  let modelId = nanoid();
  return modelId;
}
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialogs__item} >
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={style.messages__item}>{props.message}</div>
  )
}
const Dialogs = (props) => {

  let addMessage = () => {
    props.dispatch({
      type: "ADD-MESSAGE"
    });
  }

  let updateNewMessage = () => {
    let text = newPostElement.current.value;
    props.dispatch({
      type: "UPDATE-NEW-MEESSAGE-TEXT",
      newText: text,
    });
  }

  let dialogResult = props.dialogsData.map((id) => {
    return <DialogItem key={genId()} id={id.id} name={id.name} />
  })

  let messagesResult = props.messagesData.map((id) => {
    return <Message key={genId()} id={id.id} message={id.message} />
  })
  let newPostElement = React.createRef();
  return (
    <div className={style.page}>
      <div className={style.dialogs}> Имена
        {dialogResult}
      </div>
      <div className={style.messages}>Сообщения
        {messagesResult}
        <div>
          <textarea
            ref={newPostElement}
            value={props.newMessageText}
            onChange={updateNewMessage}>
          </textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs