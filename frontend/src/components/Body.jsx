import { useState } from 'react';
import './Body.css';

const Body = () => {
  const [cypherQuery, setCypherQuery] = useState('');
  const [sparqlQuery, setSparqlQuery] = useState('');
  const [executionResult, setExecutionResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [executing, setExecuting] = useState(false);

  const handleConvert = () => {
    setLoading(true);

    fetch('http://localhost:8080/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: cypherQuery
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      setSparqlQuery(data);
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const handleExecute = () => {
    setExecuting(true);

    fetch('http://localhost:8080/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: cypherQuery
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      setExecutionResult(data);
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      setExecuting(false);
    });
  };

  return (
    <section id='mt-5'>
      <div className="mt-5">
        <div className="container query mt-5">
          <h1 className="main">Let's convert SPARQL into Cypher</h1>
          <h6 className='message text-center'>Streamline your workflow with CypherQL, effortlessly converting SPARQL to Cypher so you can focus on innovation and creation.</h6>
          <div className="row mt-5">
            <div className="col-md-6">
              <h2 className='mt-3 mb-4'>SPARQL Query</h2>
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
                disabled={loading}
              >
                {loading ? 'Converting...' : 'Convert'}
              </button>
              
            </div>
            <div className="col-md-6">
              {sparqlQuery && (
                <div>
                  <h2 className='mt-3 mb-4'>Converted Cypher Query</h2>
                  <div className='converted-query'>
                    <code>
                      <p>{sparqlQuery}</p>
                    </code>
                  </div>
                  <button
                className="btn execute-button convert-button mt-4 fw-bold"
                type="button"
                id="button-addon3"
                onClick={handleExecute}
                disabled={executing}
              >
                {executing ? 'Executing...' : 'Execute'}
              </button>
              {loading && (
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              )}
              {executing && (
                <div className="loader-container">
                  <div className="loader"></div>
                </div>
              )}
                </div>
              )}
              {executionResult && (
                <div>
                  <h2 className='mt-3 mb-4'>Execution Result</h2>
                  <div className='execution-result converted-query'>
                    <pre>{executionResult}</pre>
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
