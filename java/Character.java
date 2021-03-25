class Character {
  private Race race;
  private CharClass charclass;
  private int level;
  private int maxhealth;
  private int currhealth;
  private int armorclass;
  private int runspeed;
  private int flyspeed;
  private int swimspeed;
  private Background background;
  private Alignment alignment;
  private ArrayList<Equipment> equipment;
  private ArrayList<AbilityScore> abilityscores;
  
  Character(){
    this.race = new Race();
    this.charclass = new CharClass();
    this.level = 1;
    this.maxhealth = 1;
    this.armorclass = 1;
    this.runspeed = 30;
    this.flyspeed = 0;
    this.swimspeed = 0;
    this.currhealth = this.maxhealth;
    this.background = new Background();
    this.alignment = new Alignment();
    this.equipment = new ArrayList<Equipment>();
    this.abilityscores = new ArrayList<AbilityScore>(6);
  } //END CONSTRUCTOR 
  
} //END CLASS 
