import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Body/>
    <About/>
    <Footer/>
    </>
  )
}

export default App
