package com.example.converter.service;

import org.neo4j.driver.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Neo4jService {

    private final Driver driver;

    public Neo4jService(@Value("${spring.neo4j.uri}") String uri,
                        @Value("${spring.neo4j.authentication.username}") String username,
                        @Value("${spring.neo4j.authentication.password}") String password) {
        this.driver = GraphDatabase.driver(uri, AuthTokens.basic(username, password));
    }

    public List<org.neo4j.driver.Record> executeCypherQuery(String cypherQuery) {
        try (Session session = driver.session()) {
            Result result = session.run(cypherQuery);
            return result.list();
        }
    }

    public void close() {
        driver.close();
    }
}
