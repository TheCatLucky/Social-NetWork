import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../../redux/profileReducer";
import style from "./ProfileStatus.module.css";

type PropsType = {
  status: string;
};
const ProfileStatusWithHooks: FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState<string>(props.status);
  const dispatch = useDispatch();
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deActivateEditMode = () => {
    setEditMode(false);
    dispatch(updateStatus(status));
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <>
      {!editMode && (
        <div>
          <b>Статус : </b>
          <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus
            className={style.input}
            onBlur={deActivateEditMode}
            onChange={onStatusChange}
            value={status}
          ></input>
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
