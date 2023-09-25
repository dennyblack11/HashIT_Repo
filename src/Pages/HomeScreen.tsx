import React from 'react'
import Hero from './Hero'
import Header from '../Block/Header'
import WaitList from './WaitList'
import Footer from '../Block/Footer'

const HomeScreen = () => {
  return (
    <div>
      <Header/>
        <Hero/>
        <WaitList/>
        <Footer/>
    </div>
  )
}

export default HomeScreen