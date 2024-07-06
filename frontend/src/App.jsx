import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import { ScrollProvider } from './components/Util/ScrollProvider'

function App() {

  return (
    <>
      <ScrollProvider>
        <div className='flex flex-col overflow-x-hidden'>
          <Header></Header>
          <Hero></Hero>
          <About></About>
        </div>
      </ScrollProvider>
    </>
  )
}

export default App