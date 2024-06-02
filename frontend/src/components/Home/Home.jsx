import './Home.css'

function Home() {
  return (
    <section className='home pt-5 pb-5' id='home'>
    <div className="container">
    <h2 className='text-center text-1'>Automate Your Query Conversion</h2>
        <h1 className="main">Convert with Ease, Build with Focus </h1>
        <h2 className='message text-center'>Our tool simplify SPARQL to Cypher conversions, so you can concentrate on <br /> creating powerful graph database applications.</h2>
        <div className="d-flex justify-content-center align-items-center mt-5">
      <button className='get-started-button m-2 fw-bold'>
       <a href="#">Get Started</a> 
      </button>
      <button className='try-button m-2 fw-bold'>
       <a href="#about" >Learn More</a> 
      </button>
      </div>
      </div>
      </section>
  )
}

export default Home