package com.example.converter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.util.Scanner;


import com.example.converter.cypher.ParserFunction;

@SpringBootApplication
@RestController
public class SparqlToCypherConverterApplication {
	private static String inputQuery;
	public static void main(String[] args) throws IOException{

		SpringApplication.run(SparqlToCypherConverterApplication.class, args);
		Scanner scanner = new Scanner(System.in);
		// Input the SPARQL query
		System.out.println("Enter your SPARQL query (press Enter twice to finish):");
		StringBuilder sparqlQueryBuilder = new StringBuilder();
		String line;
		while (!(line = scanner.nextLine()).isEmpty()) {
			sparqlQueryBuilder.append(line).append("\n");
		}
		scanner.close();
		inputQuery=sparqlQueryBuilder.toString();

		//System.out.println(inputQuery);

		ParserFunction pf=new ParserFunction();
		String cypherQuery=pf.parseSparqlQuery(inputQuery);
		//Output Cypher Query
		System.out.println("Cypher Query:");
		System.out.println(cypherQuery);
	}

	@PostMapping("/convert")
	public String convertSparqlToCypher(@RequestBody String sparqlQuery) {
		ParserFunction pf = new ParserFunction();
		String cypherQuery = pf.parseSparqlQuery(sparqlQuery);
		return cypherQuery;
	}

}
