local CoreBooks = {"PlayersHandbook","MonsterManual","DungeonMastersGuide","VolosGuideToMonsters",
"XanatharsGuideToEverything","MordenkainensTomeOfFoes","TashasCauldronOfEverything"}

local SecondaryBooks = {"ExplorersGuideToWildemount","ElementalEvilPlayersCompanion","MythicOdysseysOfTheros",
"SwordCoastAdventurersGuide","TheTortlePackage","EberronRisingFromTheLastWar","GuildmastersGuideToRavnica",
"AcquisitionsIncorporated","LocathahRising","OneGrungAbove","UnearthedArcana","VanRichtensGuideToRavenloft"}

local AdventureBooks = {"HoardOfTheDragonQueen","TheRiseOfTiamat","PrincesOfTheApocalypse","OutOfTheAbyss",
"CurseOfStrahd","StormOfKingsThunder","TalesFromTheYawningPortal","TombOfAnnihilation","WaterdeepDragonHeist",
"WaterdeepDungeonOfTheMadMage","GhostsOfSaltmarsh","BaldursGateDescentIntoAvernus","TyrannyOfDragons"}




function LevelOne()
	local x = Alignments()
	local y = Races(4)
	local z = Backgrounds(4)
	local a = Stats(false)
	local b = Classes(4)
	local c = Spells(4)
	return x * y * z * a * b * c^4
end

function LevelThree()
	local x = LevelOne()
	local y = SubClasses(4)
	return x * y
end
