package Parser.Grammar;

import Model.Regions;

import java.util.Map;

public class AttackCommand implements Statement{
    private Direction direction;
    public AttackCommand(Direction direction) {
        this.direction = direction;
    }

    @Override
    public void eval(Regions actor, Map<String, Integer> binding) {
        int direction_value = direction.eval(actor,binding);
        direction_value/=10; //direction only not include distance
        switch (direction_value){
            case 1: actor.shoot(0,1);break; //up
            case 2: actor.shoot(1,1);break; //upright
            case 3: actor.shoot(1,0);break; //right
            case 4: actor.shoot(1,-1);break; //downright
            case 5: actor.shoot(0,-1);break; //down
            case 6: actor.shoot(-1,-1);break; //downleft
            case 7: actor.shoot(-1,0);break; //left
            case 8: actor.shoot(-1,1);break; //upleft

        }
    }

    @Override
    public void prettyPrint(StringBuilder s) {
        s.append("attack ");
        direction.prettyPrint(s);
    }
    /** AttackCommand → shoot Direction */
}
