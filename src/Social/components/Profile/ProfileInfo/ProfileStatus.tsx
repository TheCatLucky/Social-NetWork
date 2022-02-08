import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../../redux/Reducers/ProfileReducer";
import style from "./ProfileStatus.module.css";

type PropsType = {
	status: string;
};
const ProfileStatusWithHooks: FC<PropsType> = ({ status }) => {
	const [editMode, setEditMode] = useState(false);
	const [currentStatus, setCurrentStatus] = useState<string>(status);
	const dispatch = useDispatch();
	useEffect(() => {
		setCurrentStatus(status);
	}, [status]);

	const activateEditMode = () => {
		setEditMode(true);
	};
	const deActivateEditMode = () => {
		setEditMode(false);
		dispatch(updateStatus(status));
	};

	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentStatus(e.currentTarget.value);
	};
	return (
		<>
			{!editMode && (
				<div>
					<b>Статус : </b>
					<span onDoubleClick={activateEditMode}>{status || "No status"}</span>
				</div>
			)}
			{editMode && (
				<div>
					<input
						autoFocus
						className={style.input}
						onBlur={deActivateEditMode}
						onChange={onStatusChange}
						value={currentStatus}
					></input>
				</div>
			)}
		</>
	);
};

export default ProfileStatusWithHooks;
