package Model;

import java.util.LinkedList;
import java.util.List;


public class Map {
    private Cell[][] field;
    private static Map instance;
    //private LinkedHashMap<String,int[]> allOrganism_Position;   //key is Organism value is its position
    public void Field(int row, int col){
        field = new Cell[col][row];
        for(int i = 0; i < col; i ++){
            for(int j = 0; j < row; j++){
                field[i][j] = new Cell();
            }
        }
    }
}