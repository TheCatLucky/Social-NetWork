import { compose } from 'redux';
import { withAuthRedirect } from '../../Hoc/WithAuthRedirect';
import Dialogs from './Dialogs';

const DialogsContainer = compose<React.ComponentType>(withAuthRedirect)(Dialogs);

export default DialogsContainer;