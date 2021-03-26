import AbilityScore.java;

enum RACE {
  HUMAN,
  ELF
};

class Race {
  private RACE race;
  private ArrayList<AbilityScore> abilityscores;
  
  public Race(){
    this.race = RACE.HUMAN;
    this.abilityscores = new ArrayList<AbilityScore>(6);
    for(int i = 0; i<6; i++){
      this.abilityscores.add(new AbiltyScore(1));
    } //END LOOP
  } //END CONSTRUCTOR
  
  public Race(RACE race){
    this.race = race;
  } //END CONSTRUCTOR 
  
  public getRace(){
    return this.race;
  } 
};
