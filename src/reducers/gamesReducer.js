import { FETCH_GAMES } from '../types/gamesTypes'

const initState = {
  popular: [],
  newest: [],
  upcoming: [],
  searched: []
}

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        popular: action.payload.popular,
        newest: action.payload.newest,
        upcoming: action.payload.upcoming
      }
    default:
      return {
        ...state
      }
  }
}

export default gamesReducer
