import { FC } from 'react';
import { Field, InjectedFormProps, reduxForm, reset } from 'redux-form';
import { Textarea } from '../../Common/FormsControlls/FormsControls';
import { maxLengthCreator, required } from '../../Utils/Validators/Validators';
import style from './../Dialogs.module.css';
const maxLength = maxLengthCreator(50);

type DialogsFormType = {
  dialogNewMessage: string;
};
const NewMessge: FC<InjectedFormProps<DialogsFormType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"dialogNewMessage"}
        component={Textarea}
        validate={[required, maxLength]}
        cols={30}
        rows={3}
        placeholder={"Введите сообщение"}
        className={style.messageArea}
      />
      <div>
        <button>Отправить сообщение</button>
      </div>
    </form>
  );
};
const clear = (res: any, dispatch: any) => {
  dispatch(reset('dialogNewMessage'));
}
const MessageForm = reduxForm<DialogsFormType>({
  form: "dialogNewMessage",
  onSubmitSuccess: clear,
})(NewMessge);

export default MessageForm