import React, { useContext } from 'react'
import { AppContext } from '../STATE'
import Social from './Social'
function SocialMedia () {
  const { createSocial } = useContext(AppContext)
  return <>
    <Social data={ createSocial() } social="fa-twitter"></Social>
    <Social data={ createSocial() } social="fa-facebook"></Social>
  </>
}
export default SocialMedia