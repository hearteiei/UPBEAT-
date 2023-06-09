package Parser.Grammar;

import Model.Regions;

import java.util.Map;

public class AssignmentStatement implements Statement {
    private Identifier identifier;
    private Expression expr;

    public AssignmentStatement(Identifier identifier,Expression expr){
        this.identifier = identifier;
        this.expr = expr;
    }
    @Override
    public void eval(Regions actor, Map<String, Integer> binding) {
        int expr_val = expr.eval(actor,binding);
        identifier.set(binding,expr_val);
    }

    @Override
    public void prettyPrint(StringBuilder s) {
        identifier.prettyPrint(s);
        s.append("=");
        expr.prettyPrint(s);
        s.append("\n");
    }
    /** AssignmentStatement → <identifier> = Expression */
}