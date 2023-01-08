import React from 'react'
import Hero from '../component/Hero'
import { HomepageLogged } from './HomepageLogged'



export const Homepage = () => {
  return (
    <div className='relative'>
      {localStorage.getItem('token') ? <HomepageLogged /> : <Hero />}
    </div>
  )
}
