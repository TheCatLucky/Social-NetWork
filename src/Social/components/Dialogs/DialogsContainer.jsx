import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import { withAuthRedirect } from './../../Hoc/WithAuthRedirect';
import Dialogs from './Dialogs';

const AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}


const DialogsContainer = compose(
  connect(mapStateToProps, {
    updateNewMessageText,
    sendMessage
  }),
  withAuthRedirect
)(Dialogs)

export default DialogsContainer;