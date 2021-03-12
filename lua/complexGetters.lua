--[[
Kendrick Smith
@returns the number of races
@arg 2 for all Core Races 3 for All Races else just the original PHB races
--]]
function Races(book)
	local x = PHBraces()
	local y = CoreRaces()
	local z = SuppRaces()
	if book == 2 then
		return x + y
	elseif book >= 3 then
		return x + y + z
	else
		return x
	end
end

 --[[
 --]]
function Backgrounds(book)
	local x = PHBBg()
	local y = CoreBg()
	local z = SuppBg()
	local a = AdvBg()
	if book == 2 then
		return x + y
	elseif book == 3 then
		return x + y + z
	elseif book >= 4 then
		return x + y + z + a
	else
		return x
	end
end

function Stats(bool)
	if bool then
		return PointBuy()^6
	else
		return SimpleStat()^6
	end
end

--temporary as it doesn't only provide those that satisfy 27 point total
function PointBuy()
	local set = {8,9,10,11,12,13,14,15}
	return #set, set
end


--temporary as Classes are very complicated
function Classes(num)
	return SimpleClasses(num)
end

function SimpleClasses(book)
	local x = PHBclasses()
	local y = CoreClasses()
	local z = SuppClasses()
	local a = AdvClasses()
	if book == 2 then
		return x + y
	elseif book == 3 then
		return x + y + z
	elseif book >= 4 then
		return x + y + z + a
	else
		return x
	end
end

function SubClasses(book)
	local x = PHBsubClasses()
	local y = CoreSubClasses()
	local z = SuppSubClasses()
	local a = AdvSubClasses()
	if book == 2 then
		return x + y
	elseif book == 3 then
		return x + y + z
	elseif book >= 4 then
		return x + y + z + a
	else
		return x
	end
end

--[[
Gives the number of total spells that exist. As a rough estimate.
--]]
function Spells(book)
	local x = PHBspells()
	local y = CoreSpells()
	local z = SuppSpells()
	local a = AdvSpells()
	if book == 2 then
		return x + y
	elseif book == 3 then
		return x + y + z
	elseif book >= 4 then
		return x + y + z + a
	else
		return x
	end
end
