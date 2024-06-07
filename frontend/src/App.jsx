import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Stremline from './components/Stremline/Stremline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Banner/>
    <About/>
    <Body/>
    <Stremline/>
    <Footer/>
    </>
  )
}

export default App
