import axios from 'axios'
import { popularGamesUrl } from '../api'
import { FETCH_GAMES } from '../types/gamesTypes'

// Action Creator
export const loadGames = () => async dispatch => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesUrl())

  dispatch({
    type: FETCH_GAMES,
    payload: {
      popular: popularData
    }
  })
}
