import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
import Game from '../components/Game'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  // Get data from the store
  const { popular, newest, upcoming } = useSelector(state => state.games)
  // const { upcoming } = useSelector(state => state.games)

  return (
    <>
      <GameList>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map(game => (
            <Game
              key={game.id}
              name={game.name}
              id={game.id}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popular.map(game => (
            <Game
              key={game.id}
              name={game.name}
              id={game.id}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>

        <h2>Newest Games</h2>
        <Games>
          {newest.map(game => (
            <Game
              key={game.id}
              name={game.name}
              id={game.id}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>
      </GameList>
    </>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 3rem;
  h2 {
    padding: 3rem 0rem;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`

export default Home
