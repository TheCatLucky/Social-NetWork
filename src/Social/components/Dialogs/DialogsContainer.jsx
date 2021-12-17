import { connect } from 'react-redux';
import { sendMessageActionCreatior, onMessageTextActionCreator } from "../../redux/dialogsReducer"
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(onMessageTextActionCreator(text))
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreatior())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;