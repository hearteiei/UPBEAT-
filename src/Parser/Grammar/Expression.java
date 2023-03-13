package Parser.Grammar;

import Model.Regions;
import java.util.Map;

public interface Expression {

    public int eval(Regions actor, Map<String,Integer> binding);
    public void prettyPrint(StringBuilder s);

    /** Expression → Expression + Term | Expression - Term | Term */
}