import React from 'react'
function createIncome () {
  let linedata = [], areadata = []
  for (let x = 0; x < 8; x++) {
    const value = Math.floor(Math.random() * 30000) + 10000
    linedata.push({ x: x + 1, y: value })
    areadata.push({ x: x + 1, y: value + 7000 })
  }
  return { linedata, areadata }
}
function createRates () {
  let percentage = Math.floor(Math.random() * 98) + 10
  return [{ x: "total", y: percentage }, { x: "remainder", y: 100 - percentage }]
}
function createSocial () {
  let rates = [], engage = 1, impress = 1, follow = 1
  for (let x = 0; x < 5; x++) {
    const value = Math.floor(Math.random() * 7) + 1
    rates.push({ x: x + 1, y: value })
    engage *= value
    impress += value
    follow = engage + impress
  }
  return { rates, engage, impress, follow }
}
function createInteractions () {
  let interactions = []
  for (let x = 0; x < 10; x++) {
    interactions.push({ x: x + 1, y: Math.floor(Math.random() * 10) + 1 })
  }
  return interactions
}
export const AppContext = React.createContext()
export const AppContextProvider = ({ children }) => <AppContext.Provider value={{ createIncome, createRates, createSocial, createInteractions }}>
  { children }
</AppContext.Provider>