import { connect } from 'react-redux';
import { updateNewMessageText, sendMessage } from "../../redux/dialogsReducer"
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}



const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageText,
  sendMessage
})(Dialogs);

export default DialogsContainer;