package com.example.converter.cypher;

import org.apache.jena.graph.Triple;
import org.neo4j.cypherdsl.core.*;

import java.util.ArrayList;
import java.util.Iterator;
public class ParseTriples {
    protected static void putVarToMap(String key, Object value) {
        ParserFunction.varMap.getVarMapDSL().put("?"+key, value);
    }

    protected static void parseNamedTriple(ArrayList<Triple> triples, ArrayList<RelationshipUtils> relationships) {
        Iterator<Triple> it = triples.iterator();
        while (it.hasNext()) {
            Triple triple = it.next();
            org.apache.jena.graph.Node subject = triple.getSubject();
            org.apache.jena.graph.Node predicate = triple.getPredicate();
            org.apache.jena.graph.Node object = triple.getObject();

            org.apache.jena.graph.Node namedSub = subject.getTriple().getSubject();
            org.apache.jena.graph.Node namedPre = subject.getTriple().getPredicate();
            org.apache.jena.graph.Node namedObj = subject.getTriple().getObject();

            String namedSubName = namedSub.isURI()? BuildUtils.getURINodeName(namedSub.getURI()): namedSub.getName();
            String namedObjName = namedObj.isURI()? BuildUtils.getURINodeName(namedObj.getURI()): namedObj.getName();
            String namedPreName = namedPre.isURI()? BuildUtils.getURINodeName(namedPre.getURI()): namedPre.getName();

            RelationshipUtils relationshipUtil = new RelationshipUtils(namedSubName, namedObjName);
            relationshipUtil.setRelationshipName(namedPreName);
            if (namedPre.isURI())
                relationshipUtil.setRelationshipType(namedPre.getURI());
            else
                relationshipUtil.setRelationshipType("");
            switch (BuildUtils.getPredicateType(predicate)){
                case "Type":
                    throw new IllegalStateException(String.format("Not support NamedGraph Type. "));

                case "Property":
                    if (object.isConcrete()) {
                        Relationship r = Cypher.anyNode(namedSubName).relationshipTo(
                                Cypher.anyNode(namedObjName)).named(namedPreName);
                        relationshipUtil.addProperty(predicate.getURI(), Cypher.literalOf(object.getLiteralValue()));
                        putVarToMap(namedPreName, Cypher.type(r));
                    }
                    else
                        putVarToMap(object.getName(), Cypher.anyNode(namedSubName).relationshipTo(
                                Cypher.anyNode(namedObjName)).named(namedPreName).property(predicate.getURI()));
                    break;
                default:
                    throw new IllegalStateException(String.format("Named Triple not support %s. ",BuildUtils.getPredicateType(predicate)));
            }
            relationships.add(relationshipUtil);
        }
    }
}
