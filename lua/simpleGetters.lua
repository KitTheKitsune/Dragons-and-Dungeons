function PHBraces()
	local set = {"dragonborn","dwarf","elf","gnome","halfelf","halfling","halforc","human","tiefling"}
	return #set,set
end

function CoreRaces()
	local set = {"aasimar","bugbear","firbolg","goblin","hobgoblin","kenku","kobold","lizardfolk","orc",
	"tabaxi","triton","yuantipureblood","gith"}
	return #set,set
end

function SuppRaces()
	local set = {"orcofexandria","leonin","satyr","aarakocra","genasi","goliath","feraltiefling","tortle",
	"changeling","kalashtar","orcofeberron","shifter","warforged","centaur","loxodon","minotaur",
	"simichybrid","vedalken","verdan","locathah","grung","dhampir","hexblood","reborn"}
	return #set,set
end

function AdvRaces()
	local set = {}
	return #set, set
end

function Alignments()
	local set = {"chaoticgood","chaoticneutral","chaoticevil","neutralgood","neutralneutral","neutralevil",
	"lawfulgood","lawfulneutral","lawfulevil"}
	return #set,set
end

function PHBBg()
	local set = {"acolyte","charlatan","criminal","entertainer","folkhero","gladiator","guildartisan","hermit",
	"knight","noble","outlander","pirate","sage","sailor","soldier","urchin"}
	return #set,set
end

function CoreBg()
	local set = {}
	return #set,set
end

function SuppBg()
	local set = {"luxonbornacolyte","athlete","azoriusfunctionary","boroslegionnaire","celebrityadventurersscion",
	"citywatch","clancrafter","cloisteredscholar","courtier","myriadoperative","dimiroperative","factionagent",
	"failedmerchant","fartraveler","gambler","golgariagent","grinner","gruulanarch","housecannithagent",
	"housedeneithagent","houseghallandaagent","househorascoagent","housekundarakagent","houselyrandaragent",
	"housemedaniagent","houseorienagent","housephiarlanagent","housesivisagent","housetharashkagent",
	"housethuranniagent","housevadalisagent","inheritor","izzetengineer","knightoftheorder","mercenaryveteran",
	"orzhovrepresentative","plaintiff","rakdoscultist","rivalintern","cobaltscholar","revelrypirate",
	"selesnyainitiate","simicscientist","augentrust","urbanbountyhunter","uthgardttribemember",
	"volstruckeragent","waterdhavennoble"}
	return #set,set
end

function AdvBg()
	local set = {"baldursgateacolyte","anthropologist","baldursgatecharlatan","baldursgatecriminal",
	"baldursgateentertainer","faceless","baldursgatefolkhero","baldursgateguildartisan","hauntedone","fisher",
	"baldursgatehermit","marine","baldursgatenoble","baldursgateoutlander","baldursgatesage",
	"baldursgatesailor","shipwright","smuggler","baldursgatesoldier","baldursgateurchin"}
	return #set,set
end


function SimpleStat()
	local set = {3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18}
	return #set,set
end

function PHBclasses()
	local set = {"barbarian","bard","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","warlock",
	"wizard"}
	return #set, set
end

function CoreClasses()
	local set = {"artificer"}
	return #set, set
end

function SuppClasses()
	local set = {}
	return #set, set
end

function AdvClasses()
	local set = {"bloodhunter"}
	return #set, set
end

function PHBsubClasses()
	local set = {"berserkerbarbarian","beartotembarbarian","eagletotembarbarian","wolftotembarbarian",
	"lorebard","valorbard","knowledgecleric","lifecleric","lightcleric","naturecleric","tempestcleric",
	"trickerycleric","warcleric","landdruid","moondruid","battlemasterfighter","championfighter",
	"eldrichknightfighter","fourelementsmonk","openhandmonk","shadowmonk","ancientspaladin","devotionpaladin",
	"vengencepaladin","beastmasterranger","hunterranger","arcanetricksterrogue","assassinrogue","thiefrogue",
	"draconicbloodlinesorcerer","wildmagicsorcerer","archfeywarlock","fiendwarlock","greatoldonewarlock",
	"abjurationwizard","conjurationwizard","divinationwizard","enchantmentwizard","evocationwizard",
	"illusionwizard","necromancywizard","transmutationwizard"}
	return #set, set
end

function CoreSubClasses()
	local set = {"alchemistartificer","artilleristartificer","battlesmithartificer","ancestralguardianbarbarian",
	"stormheraldbarbarian","zealotbarbarian","glamourbard","swordsbard","whispersbard","deathcleric",
	"forgecleric","gravecleric","dreamsdruid","shepherddruid","arcanearcherfighter","cavalierfighter",
	"samuraifighter","drunkenmastermonk","kenseimonk","extendedsunsoulmonk","conquestpaladin",
	"oathbreakerpaladin","redemptionpaladin","gloomstalkerranger","horizonwalkerranger","monsterslayerranger",
	"inquisitverogue","extendedmastermindrogue","scoutrogue","extendedswashbucklerrogue","divinesouldsorcerer",
	"shadowsorcerysorcery","extendedstormsorcerysorcerer","celestialwarlock","hexbladewarlock","warmagicwizard"}
	return #set, set
end

function SuppSubClasses()
	local set = {"battleragerbarbarian","elktotembarbarian","tigertotembarbarian","spiritsbard","arcanacleric",
	"ordercleric","sporesdruid","echoknightfighter","purpledragonknightfighter","longdeathmonk","sunsoulmonk",
	"ascendantdragonmonk","crownpaladin","drakewardenranger","mastermindrogue","swashbucklerrogue",
	"stormsorcerysorcerer","undyingwarlock","undeadwarlock","bladesingwizard","chronurgywizard",
	"graviturgywizard"}
	return #set, set
end

function AdvSubClasses()
	local set = {"gunslingerfighter","cobaltsoulmonk","openseapaladin","ghostslayerbloodhunter",
	"lycanbloodhunter","mutantbloodhunter","profanesoulbloodhunter"}
	return #set, set
end

function PHBspells()
	local set = {"acidarrow","acidsplash","aid","alarm","alterself","animalfriendship","animalmessenger",
	"animalshapes","animatedead","animateobjects","antilifeshell","antimagicfield","antipathysympathy",
	"arcaneeye","arcanegate","arcanehand","arcanelock","arcanistsmagicaura","armorofagathys","armsofhadar",
	"astralprojection","augury","auraoflife","auraofpurity","auraofvitality","awaken","bane","banishingsmite",
	"banishment","barkskin","beaconofhope","beastsense","bestowcurse","bigbyshand","blacktentacles",
	"bladebarrier","bladeward","bless","blight","blindingsmite","blindnessdeafness","blink","blur",
	"brandingsmite","burninghands","calllightning","calmemotions","chainlightning","charmperson","chilltouch",
	"chromaticorb","circleofdeath","circleofpower","clairvoyance","clone","cloudofdaggers","cloudkill",
	"colorspray","command","commune","communewithnature","compelledduel","comprehendlanguages","compulsion",
	"coneofcold","confusion","conjureanimals","conjurebarrage","conjurecelestial","conjureelemental",
	"conjurefey","conjureminorelemental","conjurevolley","conjurewoodlandbeast","contactotherplane","contagion",
	"contingency","continualflame","controlwater","controlweather","cordonofarrows","counterspell",
	"createfoodandwater","createordestroywater","createundead","creation","crownofmadness","crusadersmantle",
	"curewounds","dancinglights","darkness","darkvision","daylight","deathward","delayedblastfireball",
	"demiplane","destructivewave","detectevilandgood","detectmagic","detectpoisonanddisease","detectthoughts",
	"dimensiondoor","disguiseself","disintegrate","dispelevilandgood","dispelmagic","dissonantwhispers",
	"divination","divinefavor","divineword","dominatebeast","dominatemonster","dominateperson",
	"drawmijsinstantsummons","dream","druidcraft","earthquake","eldritchblast","elementalweapon",
	"enhanceability","enlargereduce","ensnaringstrike","entangle","enthrall","etherealness",
	"evardsblacktentacles","expiditiousretreat","eyebite","fabricate","faeriefire","faithfulhound","falselife",
	"fear","featherfall","feeblemind","feigndeath","findfamiliar","findsteed","findthepath","findtraps",
	"fingerofdeath","firebolt","fireshield","firestorm","fireball","flameblade","flamestrike","flamingsphere",
	"fleshtostone","floatingdisk","fly","fogcloud","forbiddance","forcecage","foresight","freedomofmovement",
	"freezingsphere","friends","gaseousform","gate","geas","gentlerepose","giantinsect","glibness",
	"globeofinvulnerability","glyphofwarding","goodberry","graspingvine","grease","greaterinvisibility",
	"greaterrestoration","guardianoffaith","guardsandwards","guidance","guidingbolt","gustofwind","hailofthorns",
	"hallow","hallucinatoryterrain","harm","haste","heal","healingword","heatmetal","hellishrebuke",
	"heroesfeast","heroism","hex","hideouslaghter","holdmonster","holdperson","holyaura","hungerofhadar",
	"huntersmark","hypnoticpattern","icestorm","identify","illusoryscript","imprisonment","incendiarycloud",
	"inflictwounds","insectplague","instantsummons","invisibility","jump","knock","legendlore",
	"leomundssecretchest","leomundstinyhut","lesserrestoration","levitate","light","lightningarrow",
	"lightningbolt","locateanimalsorplants","locatecreature","locateobject","longstrider","magearmor",
	"magehand","magiccircle","magicjar","magicmissile","magicmouth","magicweapon","magnificentmansion",
	"majorimage","masscurewounds","massheal","masshealingword","masssuggestion","maze","meldintostone",
	"melfsacidarrow","mending","message","meteorswarm","mindblank","minorillusion","miragearcane","mirrorimage",
	"mislead","mistystep","modifymemory","moonbeam","mordenkainensfaithfulhound","mordenkainensprivatesanctum",
	"mordenkainenssword","mordenkainensmagnificentmansion","moveearth","nodetection","nystulsmagicaura",
	"otilukesresilientsphere","otilukesfreezingsphere","ottosirresistibledance","passwithouttrace","passwall",
	"phantasmalforce","phantasmalkiller","phantomsteed","planarally","planarbinding","planeshift","plantgrowth",
	"poisonspray","polymorph","powerwordheal","powerwordkill","powerwordstun","prayerofhealing",
	"prestidigitation","prismaticspray","prismaticwall","privatesanctum","produceflame","programmedillusion",
	"projectimage","protectionfromenergy","protectionfromevilandgood","protectionfrompoison",
	"purifyfoodanddrink","raisedead","rarystelepathicbond","rayofenfeeblement","rayoffrost","rayofsickness",
	"regenerate","reincarnate","removecurse","resilientsphere","resistance","resurrection","reversegravity",
	"revivify","ropetrick","sacredflame","sanctuary","scorchingray","scrying","searingsmite","secretchest",
	"seeinvisibility","seeming","sending","sequester","shapechange","shatter","shield","shieldoffaith",
	"shillelah","shockinggrasp","silence","silentimage","simulacrum","sleep","sleetstorm","slow",
	"sparethedying","speakwithanimals","speakwithdead","speakwithplants","spiderclimb","spikegrowth",
	"spiritguardians","spiritualweapon","staggeringsmite","stinkingcloud","stoneshape","stoneskin",
	"stormofvengeance","suggestion","sunbeam","sunburst","swiftquiver","symbol","tashashideouslaughter",
	"telekinesis","telepathicband","telepathy","teleport","teleportationcircle","tensersfloatingdisk",
	"thaumaturgy","thornwhip","thunderoussmite","thunderwave","timestop","tinyhut","tongues",
	"transportviaplants","treestride","truepolymorph","trueresurrection","trueseeing","truestrike","tsunami",
	"unseenservant","vampirictouch","viciousmockery","walloffire","wallofforce","wallofice","wallofstone",
	"wallofthorns","wardingbond","waterbreathing","waterwalk","web","weird","windwalk","windwall","wish",
	"witchbolt","wordofrecall","wrathfulsmite","zoneoftruth"}
	return #set, set
end

function CoreSpells()
	local set = {}
	return #set, set
end

function SuppSpells()
	local set = {}
	return #set, set
end

function AdvSpells()
	local set = {}
	return #set, set
end
