import { Dispatch } from "redux";
import { ResultCodesEnum } from "../API/Api";
import { usersAPI } from "../API/usersAPI";
import { updObjInArray } from "../components/Utils/Helper/ObjectHelper";
import { UserType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./reduxStore";

const initialState = {
  usersData: [] as Array<UserType>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingProgress: [] as Array<number>,
};
type InitialState = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;

const usersReducer = (state: InitialState = initialState, action: ActionsType): InitialState => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        usersData: updObjInArray(state.usersData, action.userId, "id", { followed: true }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        usersData: updObjInArray(state.usersData, action.userId, "id", { followed: false }),
      };
    case "SET_USERS": {
      return {
        ...state,
        usersData: [...action.usersData],
      };
    }
    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case "SET_TOTAL_USERS_COUNT": {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount / 100,
      };
    }
    case "TOGGLE_IS_FETCHING": {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case "TOGGLE_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingProgress: action.followingProgress
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};
export const actions = {
  acceptFollow: (userId: number) =>
    ({
      type: "FOLLOW",
      userId,
    } as const),
  acceptUnfollow: (userId: number) =>
    ({
      type: "UNFOLLOW",
      userId,
    } as const),
  setUsers: (usersData: Array<UserType>) =>
    ({
      type: "SET_USERS",
      usersData,
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: "SET_CURRENT_PAGE",
      currentPage,
    } as const),
  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: "SET_TOTAL_USERS_COUNT",
      totalUsersCount,
    } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: "TOGGLE_IS_FETCHING",
      isFetching,
    } as const),
  toggleFollowingProgress: (followingProgress: boolean, userId: number) =>
    ({
      type: "TOGGLE_FOLLOWING_PROGRESS",
      followingProgress,
      userId,
    } as const),
};

export const getUsers =
  (currentPage: number, pageSize: number): ThunkType =>
  (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(actions.setUsers(data.items));
      dispatch(actions.toggleIsFetching(false));
      dispatch(actions.setTotalUsersCount(data.totalCount));
    });
  };
const _followUnfollowFlow = (
  dispatch: Dispatch<ActionsType>,
  userId: number,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsType
) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  apiMethod(userId).then((data: any) => {
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
  });
};

export const follow =
  (userId: number): ThunkType =>
  (dispatch) => {
    let apiMethod = usersAPI.followUser;
    let actionCreator = actions.acceptFollow;
    _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };
export const unfollow =
  (userId: number): ThunkType =>
  (dispatch) => {
    let apiMethod = usersAPI.unfollowUser;
    let actionCreator = actions.acceptUnfollow;
    _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };

export default usersReducer;
