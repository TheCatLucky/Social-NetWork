import { Field, reduxForm, reset } from 'redux-form';
import style from './../MyPosts.module.css';
import { required, maxLengthCreator } from './../../../Utils/Validators/Validators';
import { Textarea } from './../../../Common/FormsControlls/FormsControls';

const maxLength10 = maxLengthCreator(10);
const NewPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={"newPost"} component={Textarea}
        validate={[required, maxLength10]}
        cols={50} rows={3}
        placeholder={'Введите текст поста'} className={style.messageArea}
      />
      <div>
        <button>Отправить пост</button>
      </div>
    </form>
  )
}

const clear = (res, dispatch) => {
  dispatch(reset('newPost'));
}
const NewPostForm = reduxForm({
  form: 'newPost',
  onSubmitSuccess: clear
})(NewPost)

export default NewPostForm