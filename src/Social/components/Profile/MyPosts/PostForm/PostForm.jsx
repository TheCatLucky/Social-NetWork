import { Field, reduxForm, reset } from 'redux-form';
import style from './../MyPosts.module.css';
const NewPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={"newPost"} component={"textarea"}
        cols={30} rows={3}
        placeholder={'Введите текст поста'} className={style.message__zone}
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