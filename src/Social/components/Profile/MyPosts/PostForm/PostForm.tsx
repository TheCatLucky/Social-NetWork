import { Field, InjectedFormProps, reduxForm, reset } from "redux-form";
import style from "./../MyPosts.module.css";
import { required, maxLengthCreator } from "../../../Utils/Validators/Validators";
import { Textarea } from "../../../Common/FormsControlls/FormsControls";
import { FC } from "react";

export type NewPostType = {
	newPost: string;
};
const maxLength = maxLengthCreator(50);
const NewPost: FC<InjectedFormProps<NewPostType>> = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field
				name={"newPost"}
				component={Textarea}
				validate={[required, maxLength]}
				cols={50}
				rows={3}
				placeholder={"Введите текст поста"}
				className={style.messageArea}
			/>
			<div>
				<button>Отправить пост</button>
			</div>
		</form>
	);
};

const clear = (res: any, dispatch: any) => {
	dispatch(reset("newPost"));
};
const NewPostForm = reduxForm<NewPostType>({
	form: "newPost",
	onSubmitSuccess: clear,
})(NewPost);

export default NewPostForm;
