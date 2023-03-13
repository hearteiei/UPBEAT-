package Parser.Grammar;
import Model.Regions;

import java.util.Map;

public class ActionCommand implements Expression {
    private String action;
    public ActionCommand(String action){
        this.action = action;
    }
    @Override
    public int eval(Regions actor,Map<String,Integer> binding) {
        switch (action){
            case "Done":return 11;
            case "Relocate":return 12;
        }
        return 0;
    }

    @Override
    public void prettyPrint(StringBuilder s) {
        s.append(action);
        s.append("\n");
    }
    /** Direction → left | right | up | down | upleft | upright | downleft | downright  */
}