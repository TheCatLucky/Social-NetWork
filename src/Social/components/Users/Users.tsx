import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import { UserType } from '../../types/types';
import Paginatior from './Paginatior';
import User from "./User";

type PropsType = {
  users: Array<UserType>
};
const Users: FC<PropsType> = (props) => {
  const totalUsersCount = useSelector((state: AppStateType) => state.usersPage.totalUsersCount);
  const pageSize = useSelector((state: AppStateType) => state.usersPage.pageSize);
  const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage);
  return (
    <>
      <Paginatior
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        portionSize={10}
      />
      {props.users.map((u) => (
        <User user={u} key={u.id} />
      ))}
    </>
  );
}
export default Users;