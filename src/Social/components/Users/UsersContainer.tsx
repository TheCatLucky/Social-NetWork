import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import { getUsers } from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";
import Users from "./Users";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  portionSize: number;
  currentPage: number;
  userId: number;
  isFetching: boolean;
  onPageChanged: (pageNumber: number) => void;
};

const UsersContainer: FC<PropsType> = (props) => {
  const users = useSelector((state: AppStateType) => state.usersPage.usersData);
  const isFetching = useSelector((state: AppStateType) => state.usersPage.isFetching);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(props.currentPage, props.pageSize));
  }, [props]);

  const onPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, props.pageSize));
  };

  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        users={users}
        onPageChanged={onPageChanged}
      />
    </>
  );
};

export default UsersContainer;