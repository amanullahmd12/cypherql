package com.example.converter;

import com.example.converter.cypher.ParserFunction;
import com.example.converter.service.Neo4jService;
import org.neo4j.driver.AuthTokens;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import org.neo4j.driver.Record;
import org.neo4j.driver.Session;
import org.neo4j.driver.Result;
import org.neo4j.driver.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@SpringBootApplication
@RestController
public class SparqlToCypherConverterApplication {

	@Autowired
	private Neo4jService neo4jService;

	public static void main(String[] args) throws IOException {
		SpringApplication.run(SparqlToCypherConverterApplication.class, args);
	}

	@PostMapping("/convert")
	public String convertSparqlToCypher(@RequestBody String sparqlQuery) {
		ParserFunction pf = new ParserFunction();
		return pf.parseSparqlQuery(sparqlQuery);
	}

	@PostMapping("/execute")
	public String executeCypherQuery(@RequestBody String sparqlQuery) {
		ParserFunction pf = new ParserFunction();
		String cypherQuery = pf.parseSparqlQuery(sparqlQuery);

		// Establishing Neo4j connection
		try (Driver driver = GraphDatabase.driver("bolt://localhost:7687", AuthTokens.basic("neo4j", "password"));
			 Session session = driver.session()) {

			// Execute Cypher query
			Result result = session.run(cypherQuery);

			// Collect results
			List<String> columns = result.keys();
			StringBuilder sb = new StringBuilder(String.join("\t", columns)).append("\n");
			while (result.hasNext()) {
				Record record = result.next();
				String row = columns.stream()
						.map(column -> record.get(column).toString())
						.collect(Collectors.joining("\t"));
				sb.append(row).append("\n");
			}
			return sb.toString();
		} catch (Exception e) {
			return "Error executing Cypher query: " + e.getMessage();
		}
	}
}
