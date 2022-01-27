import { usersAPI } from "../API/Api";
import { updObjInArray } from "../components/Utils/Helper/ObjectHelper";
import { PhotosType, UserType } from "../types/types";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";
type AcceptFollowType = {
  type: typeof FOLLOW;
  userId: number;
};
type AcceptUnfollowType = {
  type: typeof UNFOLLOW;
  userId: number;
};
type SetUsersType = {
  type: typeof SET_USERS;
  usersData: Array<UserType>;
};
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};
type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
type ToggleFollowingProgressType = {
  type: typeof TOGGLE_FOLLOWING_PROGRESS;
  followingProgress: boolean;
  userId: number;
};
type InitialState = typeof initialState;
const initialState = {
  usersData: [] as Array<UserType>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingProgress: [] as Array<number>,
};
const usersReducer = (state: InitialState = initialState, action: any): InitialState => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: updObjInArray(state.usersData, action.userId, "id", { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        usersData: updObjInArray(state.usersData, action.userId, "id", { followed: false }),
      };
    case SET_USERS: {
      return {
        ...state,
        usersData: [...action.usersData],
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount / 100,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_FOLLOWING_PROGRESS: {
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

const acceptFollow = (userId: number): AcceptFollowType => ({
  type: FOLLOW,
  userId,
});
const acceptUnfollow = (userId: number): AcceptUnfollowType => ({
  type: UNFOLLOW,
  userId,
});

const setUsers = (usersData: Array<UserType>): SetUsersType => ({
  type: SET_USERS,
  usersData,
});
const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
const toggleFollowingProgress = (followingProgress: boolean, userId: number): ToggleFollowingProgressType => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  followingProgress,
  userId,
});
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};
const followUnfollowFlow = (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingProgress(true, userId));
  apiMethod(userId).then((data: any) => {
    if (data.resultCode === 0) {
      dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export const follow = (userId: number) => (dispatch: any) => {
  let apiMethod = usersAPI.followUser;
  let actionCreator = acceptFollow;
  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};
export const unfollow = (userId: number) => (dispatch: any) => {
  let apiMethod = usersAPI.unfollowUser;
  let actionCreator = acceptUnfollow;
  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export default usersReducer;