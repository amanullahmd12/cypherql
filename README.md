# CypherQL

CypherQL is a transformative web application designed to streamline the process of converting SPARQL queries into Cypher queries. This project leverages Java Spring Boot for building the API and React.js for the user interface. The application also includes a dedicated folder for storing all query-related files.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Introduction
CypherQL is designed to simplify the conversion of SPARQL queries, commonly used in RDF data stores, into Cypher queries, which are used in graph databases like Neo4j. This application provides an intuitive web interface for users to input their SPARQL queries and receive the corresponding Cypher queries, enhancing interoperability between different types of databases.

## Features
- **SPARQL to Cypher Conversion**: Easily convert SPARQL queries to Cypher queries.
- **User-friendly Interface**: Built with React.js for a responsive and intuitive user experience.
- **API-driven**: Backend developed with Java Spring Boot for robust performance and scalability.
- **Query Management**: Dedicated folder for managing and organizing query files.

## Technologies Used
- **Backend**: Java Spring Boot
- **Frontend**: React.js
- **Other Tools**: Maven, npm, etc.

## Installation
### Prerequisites
- Java 11 or higher
- Node.js and npm
- Maven

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/amanullahmd12/cypherql.git
    cd api
    ```
2. Build the project using Maven:
    ```sh
    mvn clean install
    ```
3. Run the Spring Boot application:
    ```sh
    mvn spring-boot:run
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the React development server:
    ```sh
    npm run dev
    ```

## Usage
1. Open your web browser and navigate to `http://localhost:5173`.
2. Enter your SPARQL query into the provided input field.
3. Click the "Convert" button to get the corresponding Cypher query.


## Contributing
Contributions are welcome! Please fork this repository and submit pull requests for any features, improvements, or bug fixes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.
