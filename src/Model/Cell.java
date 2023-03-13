package Model;

public class Cell {
    private Regions thisUnits;
    public Cell(){
        thisUnits = null;
    }

    public Regions getThisUnits() {
        return thisUnits;
    }

    public void addUnit(Regions unit){
        thisUnits = unit;
    }
    public void removeUnit(){
        thisUnits = null;
    }

    public boolean isEmpty(){
        return thisUnits == null;
    }
}
