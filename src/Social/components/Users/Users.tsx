import { FC } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../redux/ReduxStore";
import { UserType } from "../../types/types";
import Paginatior from "./Paginatior";
import User from "./User";
import { ErrorMessage } from "formik";
import { UsersSearchForm } from "./UsersSearchForm";
import { FilterType } from "../../redux/UsersReducer";
import React from "react";

type PropsType = {
	users: Array<UserType>;
	onFilterChanged: (filter:FilterType) => void
};
const Users: FC<PropsType> = React.memo((props) => {
	const totalUsersCount = useSelector((state: AppStateType) => state.usersPage.totalUsersCount);
	const pageSize = useSelector((state: AppStateType) => state.usersPage.pageSize);
	const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage);
	return (
		<>
			<UsersSearchForm onFilterChanged={props.onFilterChanged} />
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
});
export default Users;
