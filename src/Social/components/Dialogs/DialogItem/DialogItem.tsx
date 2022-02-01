import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";
import { FC } from "react";
type PropsType = {
	id: number;
	name: string;
};
const DialogItem: FC<PropsType> = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={style.item}>
			<NavLink to={path} className={({ isActive }) => (isActive ? `${style.active}` : "")}>
				{props.name}
			</NavLink>
		</div>
	);
};

export default DialogItem;
