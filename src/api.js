// Base URL
const baseUrl = `https://api.rawg.io/api/games?key=f6be025439e4402fa456b90e2735dea4`

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1

  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}

const getCurrentDay = () => {
  const day = new Date().getDay()

  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

// Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// Games
const popularGames = `&dates=${lastYear},${currentDate}&platforms=18,1,7&ordering=-rating&page_size=10`
const upcomingGames = `&dates=${currentDate},${nextYear}&platforms=18,1,7&ordering=-added&page_size=10`
const newGames = `&dates=${lastYear},${currentDate}&platforms=18,1,7&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${baseUrl}${popularGames}`

export const upcomingGamesUrl = () => `${baseUrl}${upcomingGames}`

export const newGamesUrl = () => `${baseUrl}${newGames}`
