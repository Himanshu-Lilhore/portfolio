import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

function App() {

  return (
    <>
      <div className='flex flex-col w-screen'>
        <Header></Header>
        <Hero></Hero>
        <About></About>
      </div>
    </>
  )
}

export default App