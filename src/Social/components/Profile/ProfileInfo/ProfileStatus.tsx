import React, { ChangeEvent, FC, useEffect, useState } from "react";
import style from "./ProfileStatus.module.css";

type PropsType = {
  status: string;
  updateStatus : (status:string) => void
};
const ProfileStatusWithHooks: FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState<string>(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
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
