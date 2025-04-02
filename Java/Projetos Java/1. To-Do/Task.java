public class Task {
    int id;
    String name;
    String description;
    String startingDate;
    String endingDate;
    int priority;
    boolean finished;

    public Task(String name, String description, String startingDate, String endingDate, int priority) {
        this.id = this.getMaxId();
        this.name = name;
        this.description = description;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.priority = priority;
        this.finished = false;
    }

    public int getMaxId(){
        return 1;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setStartingDate(String startingDate){
        this.startingDate = startingDate;
    }

    public void setEndingDate(String endingDate){
        this.endingDate = endingDate;
    }

    public void setPriority(int priority){
        this.priority = priority;
    }

    public void setFinished(boolean finished){
        this.finished = finished;
    }

    public String getName(){
        return this.name;
    }

    public String getDescription(){
        return this.description;
    }

    public String getStartingDate(){
        return this.startingDate;
    }

    public String getEndingDate(){
        return this.endingDate;
    }

    public int getPriority(){
        return this.priority;
    }

    public boolean getFinished(){
        return this.finished;
    }

    public String toString(){
        return "#" + this.name + " - " + this.description;
    }

}
