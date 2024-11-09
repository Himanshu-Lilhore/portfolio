import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AfterHero from './components/AfterHero/AfterHero'
import { ScrollProvider } from './components/Util/ScrollProvider'
import {RefProvider} from './components/Util/RefContext'

function App() {

  return (
    <>
      <ScrollProvider>
        <RefProvider>
          <div className='flex flex-col overflow-x-hidden'>
            <Header />
            <Hero />
            <AfterHero />
          </div>
        </RefProvider>
      </ScrollProvider>
    </>
  )
}

export default App