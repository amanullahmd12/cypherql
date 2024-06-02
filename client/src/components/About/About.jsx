import React from 'react'

function About() {
  return (
    <section className='' id='about'>
          <div className="container mt-5">
          <h1 className="main">SparQL <i className="fa-solid fa-arrow-right"></i> Cypher</h1>
          <h6 className='message text-center'>Free yourself from tedious query conversions that hinder your progress. Let CypherQL handle SPARQL to Cypher transformations, so you and your team can focus on innovation and creation.</h6>
          <div className="about mt-5">
            <div className="row">
              <div className="col-md-6 mt-2">
                <div className="box">
            <h1 className=''>SparkQL</h1>
            <p>SPARQL (SPARQL Protocol and RDF Query Language) is a powerful query language and protocol used for retrieving and manipulating data stored in RDF (Resource Description Framework) format. Designed for querying linked data, SPARQL enables complex queries across diverse datasets, making it a crucial tool for semantic web and knowledge graph applications. With SPARQL, you can extract meaningful insights from interconnected data, paving the way for advanced data analysis and intelligent applications.</p>
          </div>
          </div>
          <div className="col-md-6 mt-2">
          <div className="box">
            <h1 className=''>Cypher</h1>
            <p>Cypher is a powerful, declarative query language created for querying and updating graph databases. Designed with simplicity and expressiveness in mind, Cypher allows users to easily describe patterns in graphs to retrieve and manipulate data. It is the primary query language for Neo4j, the leading graph database, and is instrumental in enabling users to exploit the full potential of graph-based data structures, facilitating complex queries and insightful data analysis with ease and efficiency.</p>
          </div>
          </div>
          <div className="col">
          <div className="box mt-2">
            <h1 className=''>CypherQL</h1>
            <p> CypherQL is a transformative web application designed to streamline the process of converting SPARQL queries into Cypher queries. Developed to bridge the gap between RDF (Resource Description Framework) data stored in triple stores and graph databases, CypherQL offers a seamless solution for users navigating between these two query languages.
              At its core, CypherQL simplifies the conversion process, empowering users to effortlessly transition their SPARQL queries into Cypher syntax. This automation eliminates the need for manual translation, saving users valuable time and reducing the potential for errors. By abstracting the complexities of query transformation, CypherQL enables developers and data professionals to focus on their core tasks—building robust graph database applications and extracting insights from interconnected data.
              <br /> <br />
              CypherQL's intuitive interface provides a user-friendly experience, allowing users to input SPARQL queries and instantly receive the corresponding Cypher equivalents. With support for various SPARQL features and Cypher syntax, including node and relationship patterns, property filters, and aggregation functions, CypherQL caters to diverse query requirements.

Whether exploring semantic web datasets, conducting graph-based analysis, or integrating RDF data into graph databases, CypherQL empowers users with a powerful and efficient tool for query conversion. By facilitating seamless interactions between SPARQL and Cypher, CypherQL accelerates graph database development and enhances the capabilities of graph-based applications across industries. <a href="">Try it now!</a></p>
          </div>
          </div>
          </div>
          </div>
        </div>

    </section>
  )
}

export default About