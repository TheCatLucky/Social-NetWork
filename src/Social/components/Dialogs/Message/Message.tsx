import style from "./../Dialogs.module.css";
import { FC } from "react";
type PropsType = {
  id: number;
  message: string;
};
const Message: FC<PropsType> = (props) => {
  return <div className={style.messageItem}>{props.message}</div>;
};

export default Message;
