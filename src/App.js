import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from './actions/gamesAction'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames())
  })

  return (
    <div className='App'>
      <h1>Hi, React!</h1>
    </div>
  )
}

export default App