package Parser.Grammar;

import Model.Regions;

import java.util.LinkedList;
import java.util.Map;

public class BlockStatment implements Statement {
    private LinkedList<Statement> statements;
    public BlockStatment(){
        this.statements = new LinkedList<>();
    }

    public void addToBlock(Statement statement){
        this.statements.add(statement);
    }
    @Override
    public void eval(Regions actor, Map<String, Integer> binding) {
        for(Statement statement:statements){
            statement.eval(actor,binding);
        }
    }

    @Override
    public void prettyPrint(StringBuilder s) {
        s.append("{");
        s.append("\n");
        for(Statement statement:statements){
            statement.prettyPrint(s);
        }
        s.append("}");

    }
    /** BlockStatement → { Statement* } */
}