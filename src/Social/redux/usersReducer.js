/* import { nanoid } from 'nanoid'; */
import { usersAPI } from './../API/Api';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";
/* const genId = () => { //кастомная генерация id
  let id = nanoid();
  return id;
} */
const initialState = {
  usersData: [
    /* {
      id: genId(),
      followed: true,
      photoUrl : 'https://storage.googleapis.com/yk-cdn/photos/plp/mina-mimbu/rainbow.jpg',
      name: "Петя",
      status: "Я устал",
      location: {
        city: "Москва",
        country: "Россия"
      }
    },
    {
      id: genId(),
      followed: true,
      photoUrl : 'https://storage.googleapis.com/yk-cdn/photos/plp/mina-mimbu/rainbow.jpg',
      name: "Маша",
      status: "Скоро поеду в Крым",
      location: {
        city: "Киев",
        country: "Украина"
      }
    },
    {
      id: genId(),
      followed: true,
      photoUrl : 'https://storage.googleapis.com/yk-cdn/photos/plp/mina-mimbu/rainbow.jpg',
      name: "Катя",
      status: "Снова дождь :cc",
      location: {
        city: "Санкт-Петербург",
        country: "Россия"
      }
    },
    {
      id: genId(),
      followed: true,
      photoUrl : 'https://storage.googleapis.com/yk-cdn/photos/plp/mina-mimbu/rainbow.jpg',
      name: "Ваня",
      status: "Кто я?",
      location: {
        city: "город Литвы",
        country: "Литва"
      }
    },
    {
      id: genId(),
      followed: true,
      photoUrl : 'https://storage.googleapis.com/yk-cdn/photos/plp/mina-mimbu/rainbow.jpg',
      name: "Кира",
      status: "а чем я отличаюсь от Литвы?",
      location: {
        city: "город Латвии",
        country: "Латвия"
      }
    }, */
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: [],
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS: {
      return {
        ...state,
        usersData: [...action.usersData]
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount / 100
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    case TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingProgress: action.followingProgress
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state;
  }
}

const acceptFollow = (userId) => (
  {
    type: FOLLOW,
    userId
  }
)
const acceptUnfollow = (userId) => (
  {
    type: UNFOLLOW,
    userId
  }
)
const setUsers = (usersData) => (
  {
    type: SET_USERS,
    usersData
  }
)
const setCurrentPage = (currentPage) => (
  {
    type: SET_CURRENT_PAGE,
    currentPage
  }
)
const setTotalUsersCount = (totalUsersCount) => (
  {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  }
)
const toggleIsFetching = (isFetching) => (
  {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
)
const toggleFollowingProgress = (followingProgress, userId) => (
  {
    type: TOGGLE_FOLLOWING_PROGRESS,
    followingProgress,
    userId
  }
)
export const getUsers = (currentPage, pageSize) => (dispatch) => {

  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
    dispatch(setTotalUsersCount(data.totalCount));
  })
}
export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.followUser(userId)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(acceptFollow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId));
    })
}
export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.unfollowUser(userId)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(acceptUnfollow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId));
    })
}


export default usersReducer;