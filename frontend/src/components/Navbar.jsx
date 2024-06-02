import './Navbar.css'
import Graph from '../assets/graph.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="container">
      <a className="cypherql" href="/">
      <img src={Graph} className='logo img-fluid' alt="" width="80" height="60"/>
       CypherQL
      </a>
    </div>
  </nav>
  )
}

export default Navbar
