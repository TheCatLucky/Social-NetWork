import { nanoid } from "nanoid";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../redux/ReduxStore";
import { actions } from "../../../redux/Reducers/ProfileReducer";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPostForm, { NewPostType } from "./PostForm/PostForm";

function genId() {
	//кастомная генерация id
	let modelId = nanoid();
	return modelId;
}

const MyPosts: FC = () => {
	const postsData = useSelector((state: AppStateType) => state.profilePage.postsData);
	const dispatch = useDispatch();
	let postsResult = postsData.map((post) => {
		return (
			<Post
				key={genId()}
				id={post.id}
				message={post.message}
				name={post.name}
				age={post.age}
			/>
		);
	});

	let addPost = (message: NewPostType) => {
		dispatch(actions.addPost(message.newPost));
	};

	return (
		<div className={style.posts}>
			<h3>My posts</h3>
			<div>
				<div>
					<NewPostForm onSubmit={addPost} />
				</div>
				{postsResult}
			</div>
		</div>
	);
};
const MyPostsMemo = React.memo(MyPosts);
export default MyPostsMemo;
