import { nanoid } from 'nanoid';
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
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
        usersData: [...state.usersData, ...action.usersData]
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

export default usersReducer;