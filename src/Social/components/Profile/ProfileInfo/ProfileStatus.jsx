import React, { useEffect, useState } from 'react';
import style from './ProfileStatus.module.css';
const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])
  
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
    <>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
      </div>}
      {editMode &&
        <div>
          <input autoFocus className={style.input}
            onBlur={deActivateEditMode}
            onChange={onStatusChange}
            value={status}
          ></input>
        </div>}
    </>
  )
}

export default ProfileStatusWithHooks