import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import { getUsers } from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";

const UsersContainer: FC = () => {
	const pageSize = useSelector((state: AppStateType) => state.usersPage.pageSize);
	const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage);
	const users = useSelector((state: AppStateType) => state.usersPage.usersData);
	const isFetching = useSelector((state: AppStateType) => state.usersPage.isFetching);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize));
	}, [currentPage]);

	return (
		<>
			{isFetching ? <Preloader /> : null}
			<Users users={users} />
		</>
	);
};

export default UsersContainer;
