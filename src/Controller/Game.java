package Controller;

import java.util.Map;
import Model.Regions;
import Model.Player;

public interface Game {
    Map<String, Long> getIdentifiers();
    Map<String, Long> getSpecialIdentifiers();
    void attack(MovePosition MovePosition,int checkmoney);
    boolean collect(int checkmoney);
    void invest(int checkmoney);
    void relocate();
    long nearby(MovePosition MovePosition);
    boolean Move(MovePosition MovePosition);
    long opponent();
    void submitPlan(String constructionPlan);
}