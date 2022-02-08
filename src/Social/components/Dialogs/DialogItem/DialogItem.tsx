import { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";
type PropsType = {
	id: number;
	name: string;
};
const DialogItem: FC<PropsType> = ({ id, name }) => {
	let path = "/dialogs/" + id;
	return (
		<div className={style.item}>
			<NavLink to={path} className={({ isActive }) => (isActive ? `${style.active}` : "")}>
				{name}
			</NavLink>
		</div>
	);
};

export default DialogItem;
