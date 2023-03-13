package Parser.Grammar;

import Model.Regions;

import java.util.Map;

public interface Statement {
    public void eval(Regions actor, Map<String,Integer> binding);
    public void prettyPrint(StringBuilder s);
    /** Statement → Command | BlockStatement | IfStatement | WhileStatement */
}
