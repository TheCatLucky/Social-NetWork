import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/Reducers/DialogsReducer";
import { getDialogsState } from "../../redux/Selectors/Selectors";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import MessageForm from "./MessageForm/MessageForm";

type DialogsFormType = {
	dialogNewMessage: string;
};
const Dialogs: FC = () => {
	const { dialogsData, messagesData } = useSelector(getDialogsState);
	const dispatch = useDispatch();

	let dialogResult = dialogsData.map((id) => {
		return <DialogItem key={id.id} id={id.id} name={id.name} />;
	});
	let messagesResult = messagesData.map((id) => {
		return <Message key={id.id} id={id.id} message={id.message} />;
	});

	let onSendMessageClick = (messageData: DialogsFormType) => {
		dispatch(actions.sendMessage(messageData.dialogNewMessage));
	};

	return (
		<div className={style.page}>
			<div className={style.dialogs}>
				Имена
				{dialogResult}
			</div>
			<div className={style.messages}>
				Сообщения
				{messagesResult}
				<MessageForm onSubmit={onSendMessageClick} />
			</div>
		</div>
	);
};

export default Dialogs;
