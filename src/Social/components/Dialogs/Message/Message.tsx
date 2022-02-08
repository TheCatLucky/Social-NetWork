import style from "./../Dialogs.module.css";
import { FC } from "react";
type PropsType = {
	id: number;
	message: string;
};
const Message: FC<PropsType> = ({ message }) => {
	return <div className={style.messageItem}>{message}</div>;
};

export default Message;
