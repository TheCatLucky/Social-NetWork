import { connect } from 'react-redux';
import { addPost, removePost, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, {
  removePost,
  updateNewPostText,
  addPost
})(MyPosts);

export default MyPostsContainer;