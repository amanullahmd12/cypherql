package com.example.converter.cypher;
import org.neo4j.cypherdsl.core.*;

import java.util.*;
public class RebuildProject {
    protected static ArrayList<Expression> rebuildExtendProject(HashMap<String, String[]> extendProject) {
        ArrayList<Expression> newProject = new ArrayList<>();
        if (!extendProject.isEmpty()) {
            Expression expression = null;
            for (Map.Entry<String, String[]> entry : extendProject.entrySet()) {
                String k = entry.getKey();
                String[] v = entry.getValue();
                switch (v[0]){
                    case "MAX":
                        expression = Cypher.max((Expression) ParserFunction.varMap.getVarMapDSL().get(v[1]));
                        break;
                    case "MIN":
                        expression = Cypher.min((Expression) ParserFunction.varMap.getVarMapDSL().get(v[1]));
                        break;
                    case "SUM":
                        expression = Cypher.sum((Expression) ParserFunction.varMap.getVarMapDSL().get(v[1]));
                        break;
                    case "AVG":
                        expression = Cypher.avg((Expression) ParserFunction.varMap.getVarMapDSL().get(v[1]));
                        break;
                    case "COUNT":
                        Object object = ParserFunction.varMap.getVarMapDSL().get(v[1]);
                        if (object instanceof Expression)
                            expression = Cypher.count((Expression) object);
                        else if (object instanceof Node)
                            expression = Cypher.count((Node) object);
                        break;
                    default:
                        throw new IllegalStateException(String.format("Not support Aggregator %s. ",v[1]));
                }
                if (VariableMap.isVariety(k))
                    expression = expression.as(k.substring(1));
                ParserFunction.varMap.getVarMapDSL().put(k, expression);
            }
        }
        newProject.remove(null);
        return newProject;
    }

    protected static ArrayList<Expression> rebuildExpressionProject(List<String> ProjectVariable, HashMap<String, String[]> extendProject) {
        Iterator<String> it = ProjectVariable.iterator();
        ArrayList<Expression> newProject = new ArrayList<>();
        while (it.hasNext()) {
            String key = it.next();
            if (ProjectVariable.contains(key)) {
                Expression object = (Expression) ParserFunction.varMap.getVarMapDSL().get(key);
                newProject.add(object);
            }
        }
        newProject.remove(null);
        newProject.addAll(rebuildExtendProject(extendProject));
        return newProject;
    }

    protected static ArrayList<Named> rebuildNamedProject(List<String> ProjectVariable) {
        Iterator<String> it = ProjectVariable.iterator();
        ArrayList<Named> newProject = new ArrayList<>();
        while (it.hasNext()) {
            String key = it.next();
            System.out.println(key);
            Named object = (Named) ParserFunction.varMap.getVarMapDSL().get(key);
            Node node = Cypher.anyNode(object.getSymbolicName().get().getValue());
            newProject.add(node);
        }
        return newProject;
    }
}
