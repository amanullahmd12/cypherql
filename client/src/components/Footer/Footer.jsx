
import Logo from '../../assets/cypherql.png';
import Graph from '../../assets/graph.svg'

import './Footer.css';


function Footer() {
  return (
    <section className='footer ' id='footer'>
    <div className="p-5 text-white mt-5">
         <div className="container mb-5">
          <div className="mt-5">
        <h1 className="main">Try it Now ?</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5">
      <button className='get-started-button m-2 fw-bold'>
       <a href="/">Get Started</a> 
      </button>
      <button className='try-button m-2 fw-bold'>
       <a href="/" >Learn More</a> 
      </button>
      </div>
        </div>
        <hr />
    <div className='container'>
        <div className="d-flex justify-content-center align-items-center">
    <a className="navbar-brand   cypherql" href="#">
      <img src={Graph} className='logo img-fluid' alt="" width="100" height="80"/>
       CypherQL
      </a>
      </div>
            <h6 className='message text-center'>Liberate developers from the burdensome shackles of time -consuming, intricate query translations.</h6>
            </div>
        <div className='container'>
          <p className='text-center'>© 2024 <a href="/" className='fw-bold'> CypherQL.</a> All rights reserved.</p>
        </div>
   

</div>
</section>
  )
}

export default Footer;
