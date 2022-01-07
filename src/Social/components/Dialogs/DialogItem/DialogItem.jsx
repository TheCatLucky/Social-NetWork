import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.item} >
      <NavLink to={path} className={({ isActive }) => isActive ? `${style.active}` : ""}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;