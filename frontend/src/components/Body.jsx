import { useState } from 'react';
import './Body.css';

const Body = () => {
  const [cypherQuery, setCypherQuery] = useState('');
  const [sparqlQuery, setSparqlQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConvert = () => {
    // Set loading state to true
    setLoading(true);

    // Send a POST request to the API endpoint with the Cypher query
    fetch('http://localhost:8080/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain' // Set content type to plain text
      },
      body: cypherQuery // Send the Cypher query as plain text
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); // Parse response body as text
    })
    .then(data => {
      // Handle successful response
      setSparqlQuery(data); // Set the converted SPARQL query in state
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    })
    .finally(() => {
      // Set loading state to false regardless of success or failure
      setLoading(false);
    });
  };

  return (
    <section id=''>
      <div className="">
        <div className="container query mt-5">
          <div className="row" >
            <div className="col-md-6">
              <h2 className='mt-3 mb-4'>SparQL Query</h2>
            <textarea
            type="text"
            className="form-control text-field"
            placeholder="Enter your SPARQL Query here"
            aria-label="Enter your SPARQL Query here"
            aria-describedby="button-addon2"
            value={cypherQuery}
            onChange={(e) => setCypherQuery(e.target.value)}
          />
           <button
            className="btn convert-button mt-4 fw-bold"
            type="button"
            id="button-addon2"
            onClick={handleConvert}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Converting...' : 'Convert'}
          </button>
          {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
            </div>
            <div className="col-md-6">
            {sparqlQuery && (
        <div className="">
          <h2 className='mt-3 mb-4'>Converted Cypher Query</h2>
          <div className='converted-query'>
          <code>
          <p>{sparqlQuery}</p>
          </code>
          </div>
        </div>
      )}
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Body;
