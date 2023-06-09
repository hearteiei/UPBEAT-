package Parser.Grammar;

import Model.Regions;

import java.util.Map;

public class IfStatement implements Statement{
    private Expression condition;
    private Statement if_true;
    private Statement if_false;

    public IfStatement(Expression condition, Statement if_true, Statement if_false) {
        this.condition = condition;
        this.if_true = if_true;
        this.if_false = if_false;
    }

    @Override
    public void eval(Regions actor, Map<String, Integer> binding) {
        int condition_value = condition.eval(actor,binding);
        if(condition_value>0){ //true
            if_true.eval(actor,binding);
        }
        else{
            if_false.eval(actor,binding);
        }
    }

    @Override
    public void prettyPrint(StringBuilder s) {
        s.append("if (");
        condition.prettyPrint(s);
        s.append(") then ");
        if_true.prettyPrint(s);
        s.append(" else ");
        if_false.prettyPrint(s);

    }
    /** IfStatement → if ( Expression ) then Statement else Statement  */
}