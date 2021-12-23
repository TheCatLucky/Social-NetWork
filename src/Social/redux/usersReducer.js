import { nanoid } from 'nanoid';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const genId = () => { //кастомная генерация id
  let id = nanoid();
  return id;
}
let initialState = {
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
  currentPage : 1,
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
        currentPage : action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount / 100
      }
    }
    default:
      return state;
  }
}

export const followAC = (userId) => (
  {
    type: FOLLOW,
    userId
  }
)
export const unfollowAC = (userId) => (
  {
    type: UNFOLLOW,
    userId
  }
)
export const setUsersAC = (usersData) => (
  {
    type: SET_USERS,
    usersData
  }
)
export const setCurrentPageAC = (currentPage) => (
  {
    type: SET_CURRENT_PAGE,
    currentPage
  }
)
export const setTotalUsersCountAC = (totalUsersCount) => (
  {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
  }
)

export default usersReducer;