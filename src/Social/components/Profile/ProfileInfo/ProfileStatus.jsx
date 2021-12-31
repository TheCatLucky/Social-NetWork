import React, { useState } from 'react';
import style from './ProfileStatus.module.css';
const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false)
  
    return (
      <>
        {!editMode &&
          <div>
            <span onDoubleClick={() => setEditMode(true)}>{props.status}</span>
          </div>}
        {editMode &&
          <div>
            <input onBlur={() => setEditMode(false)} autoFocus className={style.input} value={props.status}></input>
          </div>}
      </>
    )
  }


export default ProfileStatus