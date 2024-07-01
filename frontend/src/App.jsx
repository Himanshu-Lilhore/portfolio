import { useState } from 'react'
import './App.css'
import Header from './assets/Components/Header/Header'
import Hero from './assets/Components/Hero/Hero'

function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Header></Header>
        <Hero></Hero>
      </div>
    </>
  )
}

export default App