import React, { useContext } from 'react'
import { AppContext } from '../STATE'
import Interactions from './Interactions'
function AllInteractions () {
  const { createInteractions } = useContext(AppContext)
  return (<>
    <Interactions data={ createInteractions() } color="cyan" name="Registration"></Interactions>
    <Interactions data={ createInteractions() } color="purple" name="Activity"></Interactions>
    <Interactions data={ createInteractions() } color="green" name="Completed Task"></Interactions>
  </>)
}
export default AllInteractions