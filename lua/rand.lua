function RandomCharacter()
	--get all races
	_,x = PHBraces()
	_,x1 = CoreRaces()
	_,x2 = SuppRaces()
	--_,x3 = AdvRaces()
	x = concat(x,x1)
	x = concat(x,x2)
	--x = concat(x,x3)
	
	--get all classes
	_,y = PHBsubClasses()
	_,y1 = CoreSubClasses()
	_,y2 = SuppSubClasses()
	_,y3 = AdvSubClasses()
	y = concat(y,y1)
	y = concat(y,y2)
	y = concat(y,y3)
	
	_,z = Alignments()
	
	--get all backgrounds
	_,a = PHBBg()
	_,a1 = CoreBg()
	_,a2 = SuppBg()
	_,a3 = AdvBg()
	a = concat(a,a1)
	a = concat(a,a2)
	a = concat(a,a3)
	
	_,b = SimpleStat()
	
	print(x[roof(math.random() * #x)].." "..
	y[roof(math.random() * #y)].."\n"..
	z[roof(math.random() * #z)].." "..
	a[roof(math.random() * #a)].."\n"..
	"STR: "..b[roof(math.random() * #b)].."\n"..
	"DEX: "..b[roof(math.random() * #b)].."\n"..
	"CON: "..b[roof(math.random() * #b)].."\n"..
	"INT: "..b[roof(math.random() * #b)].."\n"..
	"WIS: "..b[roof(math.random() * #b)].."\n"..
	"CHR: "..b[roof(math.random() * #b)].."\n")
end
