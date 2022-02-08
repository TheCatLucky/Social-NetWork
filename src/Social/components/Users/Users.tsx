import React, { FC } from "react";
import { useSelector } from "react-redux";
import { FilterType } from "../../redux/Reducers/UsersReducer";
import { getUsersState } from "../../redux/Selectors/Selectors";
import { UserType } from "../../types/types";
import Paginatior from "./Paginatior";
import User from "./User";
import { UsersSearchForm } from "./UsersSearchForm";

type PropsType = {
	users: Array<UserType>;
	onFilterChanged: (filter:FilterType) => void
};
const Users: FC<PropsType> = React.memo(({ onFilterChanged, users }) => {
  const { totalUsersCount, pageSize, currentPage } = useSelector(getUsersState);
	return (
		<>
			<UsersSearchForm onFilterChanged={onFilterChanged} />
			<Paginatior
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				currentPage={currentPage}
				portionSize={10}
			/>
			{users.map((u) => (
				<User user={u} key={u.id} />
			))}
		</>
	);
});
export default Users;
