package Parser.Grammar;
import Model.Regions;

import java.util.Map;

public class RegionCommand implements Expression {
    private String rcommand;
    public RegionCommand(String rcommand){
        this.rcommand
                = rcommand;
    }
    @Override
    public int eval(Regions actor,Map<String,Integer> binding) {
        switch (rcommand){
            case "Invest":actor.invest();
            case "collect":actor.collect();
        }
        return 0;
    }

    @Override
    public void prettyPrint(StringBuilder s) {
        s.append(rcommand);
        s.append("\n");
    }
    /** Direction → left | right | up | down | upleft | upright | downleft | downright  */
}