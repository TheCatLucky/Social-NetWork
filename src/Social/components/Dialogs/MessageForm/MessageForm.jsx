import { Field, reduxForm } from 'redux-form';
import { reset } from 'redux-form';
import style from './../Dialogs.module.css';

const NewMessge = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={"dialogNewMessage"} component={"textarea"}
        cols={30} rows={3}
        placeholder={'Введите сообщение'} className={style.message__zone}
      />
      <div>
        <button>Отправить сообщение</button>
      </div>
    </form>
  )
}
const clear = (res, dispatch) => {
  dispatch(reset('dialogNewMessage'));
}
const MessageForm = reduxForm({
  form: 'dialogNewMessage',
  onSubmitSuccess: clear
})(NewMessge)

export default MessageForm