import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FilterType, getUsers } from "../../redux/Reducers/UsersReducer";
import { getUsersState } from "../../redux/Selectors/Selectors";
import Preloader from "../Common/Preloader/Preloader";
import Paginatior from "./Paginatior";
import User from "./User";
import style from "./Users.module.css";
import { UsersSearchForm } from "./UsersSearchForm";

const Users: FC = React.memo(() => {
  const { totalUsersCount, pageSize, currentPage, usersData, isFetching, filter } = useSelector(getUsersState);
  const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize, filter));
	}, [currentPage]);

  useEffect(() => {
		navigate(`/users?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`);
  }, [filter, currentPage]);
	const onFilterChanged = (filter: FilterType) => {
		dispatch(getUsers(1, pageSize, filter));
	};
	return (
		<div className={style.content}>
			{isFetching ? <Preloader /> : null}
			<UsersSearchForm onFilterChanged={onFilterChanged} />
			<Paginatior
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				currentPage={currentPage}
				portionSize={10}
			/>
			{usersData.map((u) => (
				<User user={u} key={u.id} />
			))}
		</div>
	);
});
export default Users;
