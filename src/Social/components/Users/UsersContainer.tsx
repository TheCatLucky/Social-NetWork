import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/ReduxStore";
import { FilterType, getUsers } from "../../redux/UsersReducer";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";

const UsersContainer: FC = () => {
	const pageSize = useSelector((state: AppStateType) => state.usersPage.pageSize);
	const currentPage = useSelector((state: AppStateType) => state.usersPage.currentPage);
	const users = useSelector((state: AppStateType) => state.usersPage.usersData);
  const isFetching = useSelector((state: AppStateType) => state.usersPage.isFetching);
  const filter = useSelector((state: AppStateType) =>state.usersPage.filter)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize, filter));
	}, [currentPage]);

  const onFilterChanged = (filter: FilterType) => {
		dispatch(getUsers(1, pageSize, filter));
	};
	return (
		<>
			{isFetching ? <Preloader /> : null}
			<Users users={users} onFilterChanged={onFilterChanged} />
		</>
	);
};

export default UsersContainer;
