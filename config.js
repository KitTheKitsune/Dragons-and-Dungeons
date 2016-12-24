var options = {
    weapons: {
        Club:{
            type: "melee",
            name: "Club",
            cost: "1sp",
            damage: "1d4 bludgeoning",
            weight: "2lb",
            properties: "Light"
        },
        Dagger:{
            type: "finesse",
            name: "Dagger",
            cost: "2gp",
            damage: "1d4 piercing",
            weight: "1lb",
            properties: "Finesse, Light, Thrown(range 20/60)"
        },
        Greatclub:{
            type: "melee",
            name: "Greatclub",
            cost: "2sp",
            damage: "1d8 bludgeoning",
            weight: "10lb",
            properties: "Two-handed"
        },
        Handaxe:{
            type: "melee",
            name: "Handaxe",
            cost: "5gp",
            damage: "1d6 slashing",
            weight: "2lb",
            properties: "Light, Thrown(range 20/60)"
        },
        Javelin:{
            type: "finesse",
            name: "Javelin",
            cost: "5sp",
            damage: "1d6 piercing",
            weight: "2lb",
            properties: "Thrown(range 30/120)"
        },
        "Light Hammer":{
            type: "melee",
            name: "Light Hammer",
            cost: "2gp",
            damage: "1d4 bludgeoning",
            weight: "2lb",
            properties: "Light, Thrown(range 20/60)"
        },
        Mace:{
            type: "melee",
            name: "Mace",
            cost: "5gp",
            damage: "1d6 bludgeoning",
            weight: "4lb",
            properties: "--"
        },
        Quarterstaff:{
            type: "melee",
            name: "Quarterstaff",
            cost: "2sp",
            damage: "1d6 bludgeoning",
            weight: "4lb",
            properties: "Versatile(1d8)"
        },
        Sickle:{
            type: "melee",
            name: "Sickle",
            cost: "1gp",
            damage: "1d4 slashing",
            weight: "2lb",
            properties: "Light"
        },
        Spear:{
            type: "melee",
            name: "Spear",
            cost: "1gp",
            damage: "1d6 piercing",
            weight: "3lb",
            properties: "Thrown(range 20/60), Versatile(1d8)"
        },
        Unarmed:{
            type: "melee",
            name: "Unarmed",
            cost: "--",
            damage: "1 bludgeoning",
            weight: "--",
            properties: "--"
        },
        "Light Crossbow":{
            type: "finesse",
            name: "Light Crossbow",
            cost: "25gp",
            damage: "1d8 piercing",
            weight: "5lb",
            properties: "Ammunition(range 80/320), Loading, Two-handed"
        },
        Dart:{
            type: "finesse",
            name: "Dart",
            cost: "5cp",
            damage: "1d4 piercing",
            weight: "1/4lb",
            properties: "Finesse, Thrown(range 20/60)"
        },
        Shortbow:{
            type: "finesse",
            name: "Shortbow",
            cost: "25gp",
            damage: "1d6 piercing",
            weight: "2lb",
            properties: "Ammunition(range 80/320), Two-handed"
        },
        Sling:{
            type: "finesse",
            name: "Sling",
            cost: "1sp",
            damage: "1d4 bludgeoning",
            weight: "--",
            properties: "Ammunition(range 30/120)"
        },
        Battleaxe:{
            type: "melee",
            name: "Battleaxe",
            cost: "10gp",
            damage: "1d8 slashing",
            weight: "4lb",
            properties: "Versatile(1d10)"
        },
        Flail:{
            type: "melee",
            name: "Flail",
            cost: "10gp",
            damage: "1d8 bludgeoning",
            weight: "2lb",
            properties: "--"
        },
        Glaive:{
            type: "melee",
            name: "Glaive",
            cost: "20gp",
            damage: "1d10 slashing",
            weight: "6lb",
            properties: "Heavy, Reach, Two-handed"
        },
        Greataxe:{
            type: "melee",
            name: "Greataxe",
            cost: "30gp",
            damage: "1d12 slashing",
            weight: "7lb",
            properties: "Heavy, Two-handed"
        },
        Greatsword:{
            type: "melee",
            name: "Greatsword",
            cost: "50gp",
            damage: "2d6 slashing",
            weight: "6lb",
            properties: "Heavy, Two-handed"
        },
        Halberd:{
            type: "melee",
            name: "Halberd",
            cost: "20gp",
            damage: "1d10 slashing",
            weight: "6lb",
            properties: "Heavy, Reach, Two-handed"
        },
        Lance:{
            type: "melee",
            name: "Lance",
            cost: "10gp",
            damage: "1d12 piercing",
            weight: "6lb",
            properties: "Reach, Special"
        },
        Longsword:{
            type: "melee",
            name: "Longsword",
            cost: "15gp",
            damage: "1d8 slashing",
            weight: "3lb",
            properties: "Versatile(1d10)"
        },
        Maul:{
            type: "melee",
            name: "Maul",
            cost: "10gp",
            damage: "2d6 bludgeoning",
            weight: "10lb",
            properties: "Heavy, Two-handed"
        },
        Morningstar:{
            type: "melee",
            name: "Morningstar",
            cost: "15gp",
            damage: "1d8 piercing",
            weight: "4lb",
            properties: "--"
        },
        Pike:{
            type: "melee",
            name: "Pike",
            cost: "5gp",
            damage: "1d10 piercing",
            weight: "18lb",
            properties: "Heavy, Reach, Two-handed"
        },
        Rapier:{
            type: "finesse",
            name: "Rapier",
            cost: "25gp",
            damage: "1d8 piercing",
            weight: "2lb",
            properties: "Finesse"
        },
        Scimitar:{
            type: "finesse",
            name: "Scimitar",
            cost: "25gp",
            damage: "1d6 slashing",
            weight: "3lb",
            properties: "Finesse, Light"
        },
        Shortsword:{
            type: "finesse",
            name: "Shortsword",
            cost: "10gp",
            damage: "1d6 piercing",
            weight: "2lb",
            properties: "Finesse, Light"
        },
        Trident:{
            type: "finesse",
            name: "Trident",
            cost: "5gp",
            damage: "1d6 piercing",
            weight: "4lb",
            properties: "Thrown(range 20/60), Versatile(1d8)"
        },
        "War Pick":{
            type: "melee",
            name: "War Pick",
            cost: "5gp",
            damage: "1d8 piercing",
            weight: "2lb",
            properties: "--"
        },
        Warhammer:{
            type: "melee",
            name: "Warhammer",
            cost: "15gp",
            damage: "1d8 bludgeoning",
            weight: "2lb",
            properties: "Versatile(1d10)"
        },
        Whip:{
            type: "finesse",
            name: "Whip",
            cost: "2gp",
            damage: "1d4 slashing",
            weight: "3lb",
            properties: "Finesse, Reach"
        },
        Blowgun:{
            type: "finesse",
            name: "Blowgun",
            cost: "10gp",
            damage: "1 piercing",
            weight: "1lb",
            properties: "Ammunition(range 25/100), Loading"
        },
        "Hand Crossbow":{
            type: "finesse",
            name: "Hand Crossbow",
            cost: "75gp",
            damage: "1d6 piercing",
            weight: "3lb",
            properties: "Ammunition(range 30/120), Light, Loading"
        },
        "Heavy Crossbow":{
            type: "finesse",
            name: "Heavy Crossbow",
            cost: "50gp",
            damage: "1d10 piercing",
            weight: "18lb",
            properties: "Ammunition(range 100/400), Heavy, Loading, Two-handed"
        },
        Longbow:{
            type: "finesse",
            name: "Longbow",
            cost: "50gp",
            damage: "1d8 piercing",
            weight: "2lb",
            properties: "Ammunition(range 150/600, Heavy, Two-handed)"
        },
        Net:{
            type: "finesse",
            name: "Net",
            cost: "1gp",
            damage: "--",
            weight: "3lb",
            properties: "Special, Thrown(range 5/15)"
        },
        Balisong:{
            type: "finesse",
            name: "Balisong",
            cost: "1gp",
            damage: "1d4 piercing",
            weight: "1/2lb",
            properties: "Finesse, Light"
        },
        Banderilla:{
            type: "finesse",
            name: "Banderilla",
            cost: "4sp",
            damage: "1d4 piercing",
            weight: "1/2lb",
            properties: "Finesse, Light"
        },
        Bayonet:{
            type: "melee",
            name: "Bayonet",
            cost: "5gp",
            damage: "1d4 piercing",
            weight: "1lb",
            properties: "Light, Special"
        },
        Bonesaw:{
            type: "finesse",
            name: "Bonesaw",
            cost: "15gp",
            damage: "1d8 slashing",
            weight: "8lb",
            properties: "Finesse"
        },
        Brandistock:{
            type: "melee",
            name: "Brandistock",
            cost: "10gp",
            damage: "1d8 piercing",
            weight: "4lb",
            properties: "Special, Two-handed"
        },
        "Brass Knuckle":{
            type: "melee",
            name: "Brass Knuckle",
            cost: "5sp",
            damage: "1d4 bludgeoning",
            weight: "1lb",
            properties: "Light, Hidden"
        },
        "Broad Claw":{
            type: "finesse",
            name: "Broad Claw",
            cost: "25gp",
            damage: "1d4 slashing",
            weight: "3lb",
            properties: "Finesse, Light"
        },
        "Broken Sword":{
            type: "finesse",
            name: "Broken Sword",
            cost: "5sp",
            damage: "1d4 piercing",
            weight: "1lb",
            properties: "Finesse, Light"
        },
        Caestus:{
            type: "melee",
            name: "Caestus",
            cost: "5sp",
            damage: "1d4 bludgeoning",
            weight: "1/2lb",
            properties: "Light, Special, Hidden"
        },
        "Chain Knives":{
            type: "finesse",
            name: "Chain Knives",
            cost: "35gp",
            damage: "1d6 per blade",
            weight: "19lb",
            properties: "Finesse, Reach"
        },
        "Doctors Cane":{
            type: "melee",
            name: "Doctor's Cane",
            cost: "1gp",
            damage: "1d4 bludgeoning",
            weight: "1.5lb",
            properties: "Light, Versatile(1d6)"
        },
        "Double Spear":{
            type: "finesse",
            name: "Double Spear",
            cost: "5gp",
            damage: "1d6 piercing",
            weight: "4lb",
            properties: "Thrown(range 20/60), Versatile(1d8)"
        },
        Falx:{
            type: "melee",
            name: "Falx",
            cost: "8gp",
            damage: "1d6 Slashing",
            weight: "3lb",
            properties: "Versatile(1d8)"
        },
        Fauchard:{
            type: "melee",
            name: "Fauchard",
            cost: "10gp",
            damage: "1d6 slashing",
            weight: "7lb",
            properties: "Heavy, Reach, Two-handed"
        },
        "Frying Pan":{
            type: "melee",
            name: "Frying Pan",
            cost: "1sp",
            damage: "1d6 bludgeoning",
            weight: "5lb",
            properties: "Versatile(1d8), Special: Damage is doubled when wielder has proficiency with cooking"
        },
        Gavel:{
            type: "melee",
            name: "Gavel",
            cost: "5sp",
            damage: "1d4 bludgeoning",
            weight: "1/2lb",
            properties: "Undersized"
        },
        Godentag:{
            type: "melee",
            name: "Godentag",
            cost: "10gp",
            damage: "1d8 bludgeoning or piercing",
            weight: "12lb",
            properties: "Heavy, Two-handed"
        },
        Greatspear:{
            type: "finesse",
            name: "Greatspear",
            cost: "75gp",
            damage: "1d8 piercing",
            weight: "8lb",
            properties: "Oversized(1d10), Thrown(range 20/60), Two-handed"
        },
        "Iron Claw":{
            type: "finesse",
            name: "Iron Claw",
            cost: "5gp",
            damage: "1d3 piercing",
            weight: "2lb",
            properties: "Finesse, Hidden, Undersized"
        },
        Karambit:{
            type: "finesse",
            name: "Karambit",
            cost: "4gp",
            damage: "1d4 slashing",
            weight: "1lb",
            properties: "Finesse, Light"
        },
        Katar:{
            type: "finesse",
            name: "Katar",
            cost: "5gp",
            damage: "1d6 piercing",
            weight: "1lb",
            properties: "Finesse, Light"
        },
        Knife:{
            type: "finesse",
            name: "Knife",
            cost: "2sp",
            damage: "1d3 slashing",
            weight: "1/4lb",
            properties: "Finesse, Undersized, Hidden"
        },
        "Knuckle Axe":{
            type: "finesse",
            name: "Knuckle Axe",
            cost: "5gp",
            damage: "1d4 slashing",
            weight: "2lb",
            properties: "Finesse, Light"
        },
        "Ko*":{
            type: "finesse",
            name: "Ko*",
            cost: "1gp(kreen), 5gp(other)",
            damage: "1d4 piercing or bludgeoning",
            weight: "1lb",
            properties: "Finesse, Light, Special, Undersized"
        },
        Kukri:{
            type: "finesse",
            name: "Kukri",
            cost: "6gp",
            damage: "1d6 slashing",
            weight: "2lb",
            properties: "Light, Thrown(range 20/60)"
        },
        "Leather Gauntlets":{
            type: "finesse",
            name: "Leather Gauntlets",
            cost: "10gp",
            damage: "1d2 bludgeoning",
            weight: "1/4lb",
            properties: "Two-handed, Finesse, Special"
        },
        "Monks Glaive":{
            type: "melee",
            name: "Monk's Glaive",
            cost: "5gp",
            damage: "1d6 slashing",
            weight: "4lb",
            properties: "Versatile (1d8 piercing)"
        },
        Naginata:{
            type: "finesse",
            name: "Naginata",
            cost: "50gp",
            damage: "1d8 slashing",
            weight: "8lb",
            properties: "Heavy, Finesse, Versatile(1d10)"
        },
        Needle:{
            type: "finesse",
            name: "Needle",
            cost: "2sp",
            damage: "1d4 piercing",
            weight: "1/4lb",
            properties: "Finesse, Undersized, Ranged(20/60)"
        },
        Otsuchi:{
            type: "melee",
            name: "Otsuchi",
            cost: "15gp",
            damage: "1d8 bludgeoning",
            weight: "40lb",
            properties: "Heavy, Two-handed"
        },
        "Pocket Knife":{
            type: "melee",
            name: "Pocket Knife",
            cost: "10gp",
            damage: "1d4 piercing",
            weight: "1lb",
            properties: "Light"
        },
        Sap:{
            type: "finesse",
            name: "Sap",
            cost: "1gp",
            damage: "1d4 bludgeoning",
            weight: "2lb",
            properties: "Finesse, Light, Hidden, Undersized"
        },
        Scythe:{
            type: "melee",
            name: "Scythe",
            cost: "5gp",
            damage: "2d6 slashing",
            weight: "5lb",
            properties: "Heavy, Two-handed"
        },
        Spade:{
            type: "melee",
            name: "Spade",
            cost: "2gp",
            damage: "1d4 bludgeoning",
            weight: "4lb",
            properties: "Versatile"
        },
        "Steel Gauntlets":{
            type: "melee",
            name: "Steel Gauntlets",
            cost: "5gp",
            damage: "1d3 bludgeoning",
            weight: "2lb",
            properties: "Special"
        },
        "Stiletto Knife":{
            type: "finesse",
            name: "Stiletto Knife",
            cost: "4sp",
            damage: "1d4 piercing",
            weight: "1lb",
            properties: "Finesse, Hidden, Light, Thrown(range 20/60), Undersized"
        },
        "Torch Mace":{
            type: "melee",
            name: "Torch Mace",
            cost: "6gp",
            damage: "1d4 bludgeoning",
            weight: "2lb",
            properties: "Special"
        },
        "Torch Staff":{
            type: "melee",
            name: "Torch Staff",
            cost: "12gp",
            damage: "2d4 bludgeoning",
            weight: "7lb",
            properties: "Heavy, Special, Two-handed"
        },
        "Townshends Cudgel":{
            type: "melee",
            name: "Townshends' Cudgel",
            cost: "38gp",
            damage: "1d6 bludgeoning",
            weight: "4lb",
            properties: "Versatile(1d8)"
        },
        "War Ribbon":{
            type: "finesse",
            name: "War Ribbon",
            cost: "1sp",
            damage: "1d3 slashing",
            weight: "1/4lb",
            properties: "Finesse, Hidden, Reach, Special"
        },
        Boomerang:{
            type: "finesse",
            name: "Boomerang",
            cost: "1gp",
            damage: "1d4 bludgeoning",
            weight: "1lb",
            properties: "Light, Returning, Thrown(range 30/120)"
        },
        "Fairy Bow":{
            type: "finesse",
            name: "Fairy Bow",
            cost: "10gp",
            damage: "1d4 piercing",
            weight: "1lb",
            properties: "Ammunition(range 20/60), Loading, Two-handed, Undersized"
        },
        "Plague Lancet":{
            type: "finesse",
            name: "Plague Lancet",
            cost: "1sp",
            damage: "1d4 piercing",
            weight: "1/4lb",
            properties: "Finesse, Thrown(20/60)"
        },
        Seedshooter:{
            type: "finesse",
            name: "Seedshooter",
            cost: "10gp",
            damage: "1d6 piercing",
            weight: "2lb",
            properties: "Light, Ammuntion(range 30/120), Loading"
        },
        Slingstaff:{
            type: "finesse",
            name: "Slingstaff",
            cost: "2sp",
            damage: "1d6 bludgeoning",
            weight: "2lb",
            properties: "Ammunition(range 30/120), Two-handed"
        },
        "Throwing Shield":{
            type: "finesse",
            name: "Throwing Shield",
            cost: "20gp",
            damage: "1d8 slashing or bludgeoning",
            weight: "5lb",
            properties: "Light, Thrown(range 30/90)"
        },
        "Throwing Star":{
            type: "finesse",
            name: "Throwing Star",
            cost: "5cp",
            damage: "1d4 slashing",
            weight: "1/8lb",
            properties: "Finesse, Thrown(range 30/90)"
        },
        Anchor:{
            type: "melee",
            name: "Anchor",
            cost: "65gp",
            damage: "2d6 bludgeoning or piercing",
            weight: "50lb",
            properties: "Oversized, Two-handed, special"
        },
        "Arming Sword":{
            type: "finesse",
            name: "Arming Sword",
            cost: "20gp",
            damage: "1d6 piercing",
            weight: "3lb",
            properties: "Light, Finesse, Versatile(1d8)"
        },
        "Back Sword":{
            type: "melee",
            name: "Back Sword",
            cost: "5gp",
            damage: "1d6 piercing",
            weight: "3lb",
            properties: "--"
        },
        "Bastard Sword":{
            type: "melee",
            name: "Bastard Sword",
            cost: "25gp",
            damage: "1d10 slashing",
            weight: "6lb",
            properties: "Heavy, Versatile(1d12)"
        },
        "Bec de Corbin":{
            type: "melee",
            name: "Bec de Corbin",
            cost: "20gp",
            damage: "2d4 piercing",
            weight: "6lb",
            properties: "Heavy, Reach, Two-handed"
        },
        "Bladed Gauntlet":{
            type: "melee",
            name: "Bladed Gauntlet",
            cost: "25gp",
            damage: "1d6 piercing",
            weight: "4lb",
            properties: "Heavy"
        },
        "Boar Spear":{
            type: "melee",
            name: "Boar Spear",
            cost: "10gp",
            damage: "2d6 piercing",
            weight: "5lb",
            properties: "Heavy, Two-handed"
        },
        Broadsword:{
            type: "melee",
            name: "Broadsword",
            cost: "20gp",
            damage: "2d4 piercing",
            weight: "3lb",
            properties: "--"
        },
        "Buster Sword":{
            type: "melee",
            name: "Buster Sword",
            cost: "50gp",
            damage: "3d6 slashing",
            weight: "25lb",
            properties: "Oversized, Two-handed"
        },
        "Bladed Chain":{
            type: "finesse",
            name: "Bladed Chain",
            cost: "8gp",
            damage: "1d6 slashing",
            weight: "10lb",
            properties: "Finesse, Heavy, Reach, Special, Two-handed"
        },
        "Spiked Chain":{
            type: "melee",
            name: "Spiked Chain",
            cost: "8gp",
            damage: "2d6 bludgeoning",
            weight: "10lb",
            properties: "Heavy, Reach, Special, Two-handed"
        },
        "Weighted Chain":{
            type: "melee",
            name: "Weighted Chain",
            cost: "8gp",
            damage: "2d6 bludgeoning",
            weight: "10lb",
            properties: "Heavy, Reach, Special, Two-handed"
        },
        Chaindagger:{
            type: "finesse",
            name: "Chaindagger",
            cost: "35gp",
            damage: "1d6 slashing",
            weight: "5lb",
            properties: "Disarming, Finesse, Reach, Two-handed"
        },
        Claymore:{
            type: "melee",
            name: "Claymore",
            cost: "42gp",
            damage: "2d8 slashing + 4 piercing",
            weight: "8lb",
            properties: "Heavy, Two-handed"
        },
        "Crescent Cleaver":{
            type: "melee",
            name: "Crescent Cleaver",
            cost: "25gp",
            damage: "1d8 slashing or bludgeoning",
            weight: "5lb",
            properties: "Special"
        },
        Cutlass:{
            type: "melee",
            name: "Cutlass",
            cost: "10gp",
            damage: "1d8 slashing",
            weight: "2lb",
            properties: "--"
        },
        "Double Axe":{
            type: "melee",
            name: "Double Axe",
            cost: "30gp",
            damage: "1d8 slashing",
            weight: "10lb",
            properties: "Heavy, Two-handed, Double Weapon"
        },
        "Double Flail":{
            type: "melee",
            name: "Double Flail",
            cost: "20gp",
            damage: "1d8 bludgeoning",
            weight: "4lb",
            properties: "Two-handed"
        },
        Twinblade:{
            type: "melee",
            name: "Twinblade",
            cost: "20gp",
            damage: "1d6 slashing",
            weight: "5lb",
            properties: "Two-handed, Double Weapon"
        },
        "Dueling Shield":{
            type: "melee",
            name: "Dueling Shield",
            cost: "15gp",
            damage: "1d8 bludgeoning",
            weight: "10lb",
            properties: "Heavy, Special, Two-handed"
        },
        "Dwarven Urgrosh":{
            type: "melee",
            name: "Dwarven Urgrosh",
            cost: "50gp",
            damage: "1d10 slashing",
            weight: "9lb",
            properties: "Heavy, Two-handed"
        },
        "Elven Lightblade":{
            type: "finesse",
            name: "Elven Lightblade",
            cost: "50gp",
            damage: "1d6 piercing",
            weight: "1lb",
            properties: "Finesse, Light, Special"
        },
        "Elven Thinblade":{
            type: "finesse",
            name: "Elven Thinblade",
            cost: "100gp",
            damage: "1d8 piercing",
            weight: "1lb",
            properties: "Finesse, Special"
        },
        Epee:{
            type: "finesse",
            name: "Epee",
            cost: "50gp",
            damage: "1d2 piercing",
            weight: "1lb",
            properties: "Special, Finesse"
        },
        Estoc:{
            type: "melee",
            name: "Estoc",
            cost: "25gp",
            damage: "1d8 piercing",
            weight: "3lb",
            properties: "Versatile(1d10), Special"
        },
        Falchion:{
            type: "melee",
            name: "Falchion",
            cost: "10gp",
            damage: "2d4 slashing",
            weight: "3lb",
            properties: "--"
        },
        "Flanged Mace":{
            type: "melee",
            name: "Flanged Mace",
            cost: "25gp",
            damage: "1d8 Bludgeoning",
            weight: "4lb",
            properties: "Versatile(1d10)"
        },
        Flindbar:{
            type: "melee",
            name: "Flindbar",
            cost: "15gp",
            damage: "2d4 bludgeoning",
            weight: "2lb",
            properties: "Entangle"
        },
        "Giant Axe":{
            type: "melee",
            name: "Giant Axe",
            cost: "60gp",
            damage: "2d8",
            weight: "14lb",
            properties: "Oversized, Two-handed"
        },
        "Giant Club":{
            type: "melee",
            name: "Giant Club",
            cost: "30gp",
            damage: "2d10 bludgeoning",
            weight: "18lb",
            properties: "Oversized, Two-handed"
        },
        "Great Flail":{
            type: "melee",
            name: "Great Flail",
            cost: "500gp",
            damage: "2d8 bludgeoning",
            weight: "8lb",
            properties: "Two-handed, Heavy, Reach, Loading"
        },
        "Great Maul":{
            type: "melee",
            name: "Great Maul",
            cost: "150gp",
            damage: "3d6 bludgeoning",
            weight: "14lb",
            properties: "Oversized, Two-handed"
        },
        "Great Scythe":{
            type: "melee",
            name: "Great Scythe",
            cost: "25gp",
            damage: "1d10 slashing",
            weight: "6lb",
            properties: "Heavy, Reach, Two-handed"
        },
        Guandao:{
            type: "melee",
            name: "Guandao",
            cost: "40gp",
            damage: "2d8 slashing",
            weight: "35lb",
            properties: "Reach, Oversized, Two-handed"
        },
        Guisarme:{
            type: "melee",
            name: "Guisarme",
            cost: "15gp",
            damage: "2d4 slashing",
            weight: "6lb",
            properties: "Heavy, Reach, Two-handed"
        },
        Gythka:{
            type: "melee",
            name: "Gythka",
            cost: "4gp(kreen) 20gp(other)",
            damage: "1d8 slashing",
            weight: "9lb",
            properties: "Heavy, Two-handed"
        },
        "Heavy Flail":{
            type: "melee",
            name: "Heavy Flail",
            cost: "20gp",
            damage: "1d12 bludgeoning",
            weight: "7lb",
            properties: "Heavy, Two-handed"
        },
        "Heavy Mace":{
            type: "melee",
            name: "Heavy Mace",
            cost: "8gp",
            damage: "1d6 bludgeoning",
            weight: "8lb",
            properties: "Heavy, Versatile(2d4)"
        },
        "Heavy Pickaxe":{
            type: "melee",
            name: "Heavy Pickaxe",
            cost: "8gp",
            damage: "1d10 piercing",
            weight: "4lb",
            properties: "Heavy, Two-handed"
        },
        "Hidden Blade":{
            type: "finesse",
            name: "Hidden Blade",
            cost: "100gp",
            damage: "1d4 piercing",
            weight: "1/2lb",
            properties: "Hidden, Light, Finesse, Special"
        },
        Katana:{
            type: "melee",
            name: "Katana",
            cost: "15gp",
            damage: "1d8 slashing",
            weight: "3lb",
            properties: "Versatile(1d10)"
        },
        "Light Katana":{
            type: "finesse",
            name: "Light Katana",
            cost: "50gp",
            damage: "1d6 slashing",
            weight: "3lb",
            properties: "Finesse, Light, Versatile(1d8)"
        },
        Kopis:{
            type: "melee",
            name: "Kopis",
            cost: "25gp",
            damage: "1d8 slashing",
            weight: "3lb",
            properties: "--"
        },
        Kusarigama:{
            type: "melee",
            name: "Kusarigama",
            cost: "25gp",
            damage: "1d4 slashing",
            weight: "5lb",
            properties: "Two-handed, Special"
        },
        Lajav:{
            type: "melee",
            name: "Lajav",
            cost: "25gp(kreen) 50gp(other)",
            damage: "1d8 bludgeoning",
            weight: "5lb",
            properties: "Finesse, Heavy, Two-handed, Special"
        },
        "Long Cane":{
            type: "melee",
            name: "Long Cane",
            cost: "5gp",
            damage: "1d8 piercing",
            weight: "4lb",
            properties: "Reach, Two-handed"
        },
        "Long Nordic Axe":{
            type: "melee",
            name: "Long Nordic Axe",
            cost: "250gp",
            damage: "2d8 slashing",
            weight: "8lb",
            properties: "Two-handed, Reach"
        },
        Longblade:{
            type: "melee",
            name: "Longblade",
            cost: "20gp",
            damage: "1d10 slashing",
            weight: "6lb",
            properties: "Heavy, Reach, Two-handed"
        },
        Longspear:{
            type: "melee",
            name: "Longspear",
            cost: "3gp",
            damage: "1d6 piercing",
            weight: "4lb",
            properties: "Heavy, Reach, Versatile(1d8)"
        },
        Longstaff:{
            type: "melee",
            name: "Longstaff",
            cost: "5sp",
            damage: "1d8 bludgeoning",
            weight: "7lb",
            properties: "Heavy, Reach, Special, Two-handed"
        },
        Mancatcher:{
            type: "melee",
            name: "Mancatcher",
            cost: "25gp",
            damage: "1d4 bludgeoning",
            weight: "2lb",
            properties: "Two-handed, Reach, Special"
        },
        "Marksmans Hatchet":{
            type: "finesse",
            name: "Marksmans Hatchet",
            cost: "5gp",
            damage: "1d3 + 2 Slashing",
            weight: "10lb",
            properties: "Light, Finesse"
        },
        "Masters Whip":{
            type: "finesse",
            name: "Master's Whip",
            cost: "20gp",
            damage: "1d8 slashing",
            weight: "3lb",
            properties: "Light, Finesse, Reach, Disarming"
        },
        "Meteor Hammer":{
            type: "melee",
            name: "Meteor Hammer",
            cost: "30gp",
            damage: "1d6 bludgeoning",
            weight: "5lb",
            properties: "Two-handed, Special"
        },
        "Parrying Dagger":{
            type: "finesse",
            name: "Parrying Dagger",
            cost: "5gp",
            damage: "1d4 piercing",
            weight: "1lb",
            properties: "Finesse, Light, Special"
        },
        Pata:{
            type: "finesse",
            name: "Pata",
            cost: "100gp",
            damage: "1d6 piercing",
            weight: "2lb",
            properties: "Light, Finesse, Special"
        },
        Pollaxe:{
            type: "melee",
            name: "Pollaxe",
            cost: "20gp",
            damage: "2d4 bludgeoning",
            weight: "6lb",
            properties: "Heavy, Reach, Two-handed"
        },
        "Reapers Scythe":{
            type: "melee",
            name: "Reapers Scythe",
            cost: "5gp",
            damage: "1d10 slashing",
            weight: "14lb",
            properties: "Versatile(2d10)"
        },
        Saber:{
            type: "finesse",
            name: "Saber",
            cost: "35gp",
            damage: "1d8 slashing",
            weight: "3lb",
            properties: "Finesse"
        },
        Shotel:{
            type: "finesse",
            name: "Shotel",
            cost: "80gp",
            damage: "1d8 slashing or piercing",
            weight: "3lb",
            properties: "Finesse, Special"
        },
        "Spiked Greatclub":{
            type: "melee",
            name: "Spiked Greatclub",
            cost: "8sp",
            damage: "1d10 bludgeoning or piercing",
            weight: "10lb",
            properties: "Heavy, Two-handed"
        },
        Swordbreaker:{
            type: "melee",
            name: "Swordbreaker",
            cost: "15gp",
            damage: "1d4 piercing",
            weight: "2lb",
            properties: "Light, Special"
        },
        Talwar:{
            type: "finesse",
            name: "Talwar",
            cost: "30gp",
            damage: "1d8 slashing",
            weight: "3lb",
            properties: "Finesse"
        },
        Umuri:{
            type: "finesse",
            name: "Umuri",
            cost: "100gp",
            damage: "4d10",
            weight: "15lb",
            properties: "Heavy, Versatile, Finesse, Reach, Special"
        },
        Xiphos:{
            type: "finesse",
            name: "Xiphos",
            cost: "85gp",
            damage: "1d6 slashing or piercing",
            weight: "1.5lb",
            properties: "Light, Versatile, Finesse"
        },
        Zanbato:{
            type: "melee",
            name: "Zanbato",
            cost: "100gp",
            damage: "2d8 slashing",
            weight: "9lb",
            properties: "Two-handed, Reach, Heavy, Special"
        },
        Zerka:{
            type: "finesse",
            name: "Zerka",
            cost: "1gp(kreen) 8gp(others)",
            damage: "1d8 piercing",
            weight: "3lb",
            properties: "Thrown(range 40/160), Special"
        },
        "Bladed Longbow":{
            type: "finesse",
            name: "Bladed Longbow",
            cost: "100gp",
            damage: "1d8 slashing or piercing",
            weight: "3.5lb",
            properties: "Ammunition(range 150/600), Heavy, Two-handed, Special"
        },
        Boulder:{
            type: "finesse",
            name: "Boulder",
            cost: "--",
            damage: "1d12 bludgeoning",
            weight: "100lb",
            properties: "Heavy, Thrown(range 30/80), Two-handed, Special"
        },
        "Repeating Crossbow":{
            type: "finesse",
            name: "Repeating Crossbow",
            cost: "250gp",
            damage: "2d4 piercing",
            weight: "18lb",
            properties: "Ammunition(range 80/320), Heavy, Reload(10 Shots), Two-Handed"
        },
        Greatbow:{
            type: "finesse",
            name: "Greatbow",
            cost: "50gp",
            damage: "1d10 piercing",
            weight: "10lb",
            properties: "Heavy, Ammunition(range 200/800), Two-handed"
        },
        Chainsword:{
            type: "melee",
            name: "Chainsword",
            cost: "1pp",
            damage: "4d6 slashing",
            weight: "4lb",
            properties: "Ammunition, Reload(30 Strikes)"
        },
        "Heavy Chainsword":{
            type: "melee",
            name: "Heavy Chainsword",
            cost: "2pp",
            damage: "6d6",
            weight: "8lb",
            properties: "Ammunition, Reload(20 Strikes), Heavy"
        },
        Vibroknife:{
            type: "melee",
            cost: "1pp",
            damage: "2d4",
            weight: "1lb",
            properties: "Ammunition, Reload(50 Strikes), Light, Finesse"
        }
    },
    equipment:{
        "Padded Armor":{
            type: "Light Armor",
            cost: "5gp",
            armor_class: "11",
            strength: "--",
            stealth: "disadvantage",
            weight: "8lb"
        },
        "Leather Armor":{
            type: "Light Armor",
            cost: "10gp",
            armor_class: "11",
            strength: "--",
            stealth: "--",
            weight: "10lb"
        },
        "Studded Leather Armor":{
            type: "Light Armor",
            cost: "45gp",
            armor_class: "12",
            strength: "--",
            stealth: "--",
            weight: "13lb"
        },
        "Hide Armor":{
            type: "Medium Armor",
            cost: "10gp",
            armor_class: "12",
            strength: "--",
            stealth: "--",
            weight: "12lb"
        },
        "Chain Shirt":{
            type: "Medium Armor",
            cost: "50gp",
            armor_class: "13",
            strength: "--",
            stealth: "--",
            weight: "20lb"
        },
        "Scale Mail":{
            type: "Medium Armor",
            cost: "50gp",
            armor_class: "14",
            strength: "--",
            stealth: "disadvantage",
            weight: "45lb"
        },
        Breastplate:{
            type: "Medium Armor",
            cost: "400gp",
            armor_class: "14",
            strength: "--",
            stealth: "--",
            weight: "20lb"
        },
        "Half Plate":{
            type: "Medium Armor",
            cost: "750gp",
            armor_class: "15",
            strength: "--",
            stealth: "disadvantage",
            weight: "40lb"
        },
        "Ring Mail":{
            type: "Heavy Armor",
            cost: "30gp",
            armor_class: "14",
            strength: "--",
            stealth: "disadvantage",
            weight: "40lb"
        },
        "Chain Mail":{
            type: "Heavy Armor",
            cost: "75gp",
            armor_class: "16",
            strength: "13",
            stealth: "disadvantage",
            weight: "55lb"
        },
        "Splint Armor":{
            type: "Heavy Armor",
            cost: "200gp",
            armor_class: "17",
            strength: "15",
            stealth: "disadvantage",
            weight: "60lb"
        },
        "Plate Armor":{
            type: "Heavy Armor",
            armor_class: "18",
            display: "strength-15, stealth-disadvantage, weight-65lb, cost-1500gp"
        },
        Shield:{
            type: "Shield",
            name: "Shield",
            armor_class: "+2",
            display: "weight-6lb, cost-10gp"
        },
        "Leather Lamellar Armor":{
            type: "Light Armor",
            armor_class: "12",
            display: "stealth-disadvantage, weight-13lb, cost-15gp"
        },
        "Battle Robe":{
            type: "Light Armor",
            armor_class: "11+Dex",
            display: "weight-10lb, cost-25gp"
        },
        "Assassin Robes":{
            type: "Light Armor",
            armor_class: "12+Dex",
            display: "stealth-disadvantage, weight-12lb, cost-40gp"
        },
        "Wing Guards":{
            type: "Shield",
            armor_class: "+1",
            display: "strength-13, weight-4lb, cost-1000gp"
        },
        "Blade Armor":{
            type: "Light Armor",
            armor_class: "13+Dex",
            display: "weight-17lb, cost-100gp"
        },
        "Pirate Garb":{
            type: "Light Armor",
            armor_class: "12+Dex",
            display: "weight-10lb, cost-45gp"
        },
        "Valkyrian Armor":{
            type: "Light Armor",
            armor_class: "13+Dex",
            display: "strength-14, stealth-disadvantage, weight-5lb, cost-100gp"
        },
        "Improvised Armor":{
            type: "Medium Armor",
            armor_class: "11+Dex(max 2)",
            display: "stealth-disadvantage, weight-10lb, cost-0gp"
        },
        "Wood Armor":{
            type: "Medium Armor",
            armor_class: "13+Dex(max 2)",
            display: "stealth-disadvantage, weight-20lb, cost-15gp"
        },
        "Wolf Jaw":{
            type: "Medium Armor",
            armor_class: "+1",
            display: "weight-3lb, cost-30gp"
        },
        "Samurai Armor":{
            type: "Medium Armor",
            armor_class: "15+Dex(max 2)",
            display: "strength-10, stealth-disadvantage, weight-55lb, cost-50gp"
        },
        "Coat Of Plates":{
            type: "Medium Armor",
            armor_class: "12+Dex(max 2)",
            display: "weight-15lb, cost-50gp"
        },
        "Brigandine Armor":{
            type: "Medium Armor",
            armor_class: "14+Dex(max 2)",
            display: "weight-30lb, cost-100gp"
        },
        "Plated Leather Armor":{
            type: "Medium Armor",
            armor_class: "13+Dex(max 2)",
            display: "weight-20lb, cost-150gp"
        },
        Gauntlet:{
            type: "Medium Armor",
            armor_class: "+1",
            display: "weight-2lb, cost-5gp"
        },
        "Leather Shoulder Guard":{
            type: "Medium Armor",
            armor_class: "+1",
            display: "weight-1lb, cost-10gp"
        },
        "Leather Belt":{
            type: "Shield",
            armor_class: "+1",
            display: "weight-2lb, cost-15gp"
        },
        "Plate Shoulder Guard":{
            type: "Shield",
            armor_class: "+2",
            display: "weight-18lb, cost-45gp"
        },
        "Bear Pelt":{
            type: "Shield",
            armor_class: "+1",
            display: "stealth-disadvantage, weight-5lb, cost-50gp"
        },
        "Kozane Armor":{
            type: "Medium Armor",
            armor_class: "15+Dex(max 2)",
            display: "strength-14, stealth-disadvantage, weight-25lb, cost-55gp"
        },
        "Basilica Armor":{
            type: "Medium Armor",
            armor_class: "16+Dex(max 2)",
            display: "weight-45lb, cost-1450gp"
        },
        "Lorica Segmentata":{
            type: "Heavy Armor",
            armor_class: "15",
            display: "strength-11, stealth-disadvantage, weight-30lb, cost-45gp"
        },
        "Crested Helmet":{
            type: "Heavy Armor",
            armor_class: "+1",
            display: "strength-13, weight-5lb, cost-15gp"
        },
        "Heavy Nordic Armor":{
            type: "Heavy Armor",
            armor_class: "17",
            display: "strength-15, stealth-disadvantage, weight-50lb, cost-1250gp"
        },
        "Fortress Armor":{
            type: "Heavy Armor",
            armor_class: "20",
            display: "strength-17, stealth-disadvantage, weight-100lb, cost-2500gp"
        },
        "Gromril Armor":{
            type: "Heavy Armor",
            armor_class: "18",
            display: "strength-16, stealth-disadvantage, weight-65lb, cost-2000gp"
        },
        Buckler:{
            type: "Shield",
            armor_class: "+1",
            display: "weight-2lb, cost-5gp"
        },
        Parma:{
            type: "Shield",
            armor_class: "+1",
            display: "strength-13, weight-4lb, cost-10gp"
        },
        "Tower Shield":{
            type: "Shield",
            armor_class: "+3",
            display: "strength-17, stealth-disadvantage, weight-18lb, cost-20gp"
        },
        "Spring Loaded Shield":{
            type: "Shield",
            armor_class: "+2",
            display:"weight-8lb, cost-25gp"
        },
        "Dreadnaught Shield":{
            type: "Shield",
            armor_class: "+4",
            display:"strength-14, weight-20lb, cost-2300gp"
        },
        "Fencing Cloak":{
            type: "Shield",
            armor_class: "+1",
            display: "weight-1lb, cost-10gp"
        },
        "Kevlar Vest":{
            type: "Medium Armor",
            armor_class: "15",
            display: "strength-11, weight-16lb, cost-100gp"
        },
        Abacus:{
            cost: "2gp",
            weight: "2lb",
            properties: "--"
        },
        Acid_Vial:{
            cost: "25gp",
            weight: "1lb",
            properties: "As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case,makearangedattackagainstacreatureorobject, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage."
        },
        Alchemists_Fire_Flask:{
            cost: "50gp",
            weight: "1lb",
            properties: "--As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames."
        },
        Arrows:{
            cost: "1gp",
            weight: "1lb",
            properties: "20"
        },
        Blowgun_Needles:{
            cost: "1gp",
            weight: "1lb",
            properties: "50"
        },
        Crossbow_Bolts:{
            cost: "1gp",
            weight: "1.5lb",
            properties: "20"
        },
        Sling_Bullets:{
            cost: "4cp",
            weight: "1.5lb",
            properties: "100"
        },
        Antitoxin_Vial:{
            cost: "50gp",
            weight: "--",
            properties: "A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs."
        },
        Arcane_Focus_Crystal:{
            cost: "10gp",
            weight: "1lb",
            properties: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10."
        },
        Arcane_Focus_Orb:{
            cost: "20gp",
            weight: "3lb",
            properties: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10."
        },
        Arcane_Focus_Rod:{
            cost: "10gp",
            weight: "2lb",
            properties: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10."
        },
        Arcane_Focus_Staff:{
            cost: "5gp",
            weight: "4lb",
            properties: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10."
        },
        Arcane_Focus_Wand:{
            cost: "10gp",
            weight: "1lb",
            properties: "An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus, as described in chapter 10."
        },
        Backpack:{
            cost: "2gp",
            weight: "5lb",
            properties: "--"
        },
        Ball_Bearings:{
            cost: "1gp",
            weight: "2lb",
            properties: "As an action, you can spill these tiny metal balls from their pouch to cover a level area 10 feet square. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn’t need to make the saving throw."
        },
        Barrel:{
            cost: "2gp",
            weight: "70lb",
            properties: "--"
        },
        Basket:{
            cost: "4sp",
            weight: "2lb",
            properties: "--"
        },
        Bedroll:{
            cost: "1gp",
            weight: "7lb",
            properties: "--"
        },
        Bell:{
            cost: "1gp",
            weight: "--",
            properties: "--"
        },
        Blanket:{
            cost: "5sp",
            weight: "3lb",
            properties: "--"
        },
        Block_And_Tackle:{
            cost: "1gp",
            weight: "5lb",
            properties: "A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift."
        },
        Book:{
            cost: "25gp",
            weight: "5lb",
            properties: "A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook (described later in this section)."
        },
        Glass_Bottle:{
            cost: "2gp",
            weight: "2lb",
            properties: "--"
        },
        Bucket:{
            cost: "5cp",
            weight: "2lb",
            properties: "--"
        },
        Caltrops:{
            cost: "1gp",
            weight: "2lb",
            properties: "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn’t need to make the saving throw."
        },
        Candle:{
            cost: "1cp",
            weight: "--",
            properties: "For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet."
        },
        Crossbow_Bolt_Case:{
            cost: "1gp",
            weight: "1lb",
            properties: "This wooden case can hold up to twenty crossbow bolts."
        },
        Scroll_Case:{
            cost: "1gp",
            weight: "1lb",
            properties: "This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment."
        },
        Chain:{
            cost: "5gp",
            weight: "10lb",
            properties: "A chain has 10 hit points. It can be burst with a successful DC 20 Strength check. 10 ft"
        },
        Chalk:{
            cost: "1cp",
            weight: "--",
            properties: "1 piece"
        },
        Chest:{
            cost: "5gp",
            weight: "25lb",
            properties: "--"
        },
        Climbers_Kit:{
            cost: "25gp",
            weight: "12lb",
            properties: "A climber’s kit includes special pitons, boot tips, gloves, and a harness. You can use the climber’s kit as an action to anchor yourself; when you do, you can’t fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor."
        },
        Common_Clothes:{
            cost: "5sp",
            weight: "3lb",
            properties: "--"
        },
        Costume_Clothes:{
            cost: "5gp",
            weight: "4lb",
            properties: "--"
        },
        Fine_Clothes:{
            cost: "15gp",
            weight: "6lb",
            properties: "--"
        },
        Travelers_Clothes:{
            cost: "2gp",
            weight: "4lb",
            properties: "--"
        },
        Component_Pouch:{
            cost: "25gp",
            weight: "2lb",
            properties: "A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description)."
        },
        Crowbar:{
            cost: "2gp",
            weight: "5lb",
            properties: "Using a crowbar grants advantage to Strength checks where the crowbar’s leverage can be applied."
        },
        Druidic_Focus_Sprig_Of_Mistletoe:{
            cost: "1gp",
            weight: "--",
            properties: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus, as described in chapter 10."
        },
        Druidic_Focus_Totem:{
            cost: "1gp",
            weight: "--",
            properties: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus, as described in chapter 10."
        },
        Druidic_Focus_Wooden_Staff:{
            cost: "5gp",
            weight: "4lb",
            properties: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus, as described in chapter 10."
        },
        Druidic_Focus_Yew_Wand:{
            cost: "10gp",
            weight: "1lb",
            properties: "A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus, as described in chapter 10."
        },
        Fishing_Tackle:{
            cost: "1gp",
            weight: "4lb",
            properties: "This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting."
        },
        Flask:{
            cost: "2cp",
            weight: "1lb",
            properties: "--"
        },
        Tankard:{
            cost: "2cp",
            weight: "1lb",
            properties: "--"
        },
        Grappling_Hook:{
            cost: "2gp",
            weight: "4lb",
            properties: "--"
        },
        Hammer:{
            cost: "1gp",
            weight: "3lb",
            properties: "--"
        },
        Sledge_Hammer:{
            cost: "2gp",
            weight: "10lb",
            properties: "--"
        },
        Healers_Kit:{
            cost: "2gp",
            weight: "5lb",
            properties: "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check."
        },
        Holy_Symbol_Amulet:{
            cost: "5gp",
            weight: "1lb",
            properties: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus, as described in chapter 10. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
        },
        Holy_Symbol_Emblem:{
            cost: "5gp",
            weight: "--",
            properties: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus, as described in chapter 10. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
        },
        Holy_Symbol_Reliquary:{
            cost: "5gp",
            weight: "2lb",
            properties: "A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus, as described in chapter 10. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield."
        },
        Holy_Water_Flask:{
            cost: "25gp",
            weight: "1lb",
            properties: "As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage. A cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot."
        },
        Burglars_Pack:{
            cost: "16gp",
            weight: "xxlb",
            properties: "Includes a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
        },
        Diplomats_Pack:{
            cost: "39gp",
            weight: "xxlb",
            properties: "Includes a chest, 2 cases for maps and scrolls, a set o f fine clothes, a bottle o f ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap."
        },
        Dungeoneers_Pack:{
            cost: "12gp",
            weight: "xxlb",
            properties: "Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
        },
        Entertainers_Pack:{
            cost: "40gp",
            weight: "xxlb",
            properties: "Includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit."
        },
        Explorers_Pack:{
            cost: "10gp",
            weight: "xxlb",
            properties: "Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
        },
        Priests_Pack:{
            cost: "19gp",
            weight: "xxlb",
            properties: "Includes a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin."
        },
        Scholars_Pack:{
            cost: "40gp",
            weight: "xxlb",
            properties: "Includes a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife."
        },
        Hourglass:{
            cost: "25gp",
            weight: "1lb",
            properties: "--"
        },
        Hunting_Trap:{
            cost: "5gp",
            weight: "25lb",
            properties: "W hen you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature."
        },
        Ink:{
            cost: "10gp",
            weight: "--",
            properties: "1oz"
        },
        Ink_Pen:{
            cost: "2cp",
            weight: "--",
            properties: "--"
        },
        Jug:{
            cost: "2cp",
            weight: "4lb",
            properties: "--"
        },
        Pitcher:{
            cost: "2cp",
            weight: "4lb",
            properties: "--"
        },
        Ladder:{
            cost: "1sp",
            weight: "25lb",
            properties: "10ft"
        },
        Lamp:{
            cost: "5sp",
            weight: "1lb",
            properties: "A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
        },
        Lantern_Bullseye:{
            cost: "10gp",
            weight: "2lb",
            properties: "A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil."
        },
        Hooded_Lantern:{
            cost: "5gp",
            weight: "2lb",
            properties: "A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius."
        },
        Lock:{
            cost: "10gp",
            weight: "1lb",
            properties: "A key is provided with the lock. Without the key, a creature proficient with thieves’ tools can pick this lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices."
        },
        Magnifying_Glass:{
            cost: "100gp",
            weight: "--",
            properties: "This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed."
        },
        Manacles:{
            cost: "2gp",
            weight: "6lb",
            properties: "These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves’ tools can pick the manacles’ lock with a successful DC 15 Dexterity check. Manacles have 15 hit points."
        },
        Mess_Kit:{
            cost: "2sp",
            weight: "1lb",
            properties: "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl."
        },
        Steel_Mirror:{
            cost: "5gp",
            weight: "1/2lb",
            properties: "--"
        },
        Oil_Flask:{
            cost: "1sp",
            weight: "1lb",
            properties: "Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn."
        },
        Paper:{
            cost: "2sp",
            weight: "--",
            properties: "1 sheet"
        },
        Parchment:{
            cost: "1sp",
            weight: "--",
            properties: "1 sheet"
        },
        Perfume_Vial:{
            cost: "5gp",
            weight: "--",
            properties: "--"
        },
        Miners_Pick:{
            cost: "2gp",
            weight: "10lb",
            properties: "--"
        },
        Piton:{
            cost: "5cp",
            weight: "1/4lb",
            properties: "--"
        },
        Basic_Poison_Vial:{
            cost: "100gp",
            weight: "--",
            properties: "You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying."
        },
        Pole:{
            cost: "5cp",
            weight: "7lb",
            properties: "10ft"
        },
        Iron_Pot:{
            cost: "2gp",
            weight: "10lb",
            properties: "--"
        },
        Healing_Potion:{
            cost: "50gp",
            weight: "1/2lb",
            properties: "A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action."
        },
        Pouch:{
            cost: "5sp",
            weight: "1lb",
            properties: "A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch (described earlierinthissection)."
        },
        Quiver:{
            cost: "1gp",
            weight: "1lb",
            properties: "A quiver can hold up to 20 arrows."
        },
        Portable_Ram:{
            cost: "4gp",
            weight: "35lb",
            properties: "You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check."
        },
        Days_Rations:{
            cost: "5sp",
            weight: "2lb",
            properties: "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."
        },
        Robes:{
            cost: "1gp",
            weight: "4lb",
            properties: "--"
        },
        Hempen_Rope:{
            cost: "1gp",
            weight: "10lb",
            properties: "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check. 50ft"
        },
        Silk_Rope:{
            cost: "10gp",
            weight: "5lb",
            properties: "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check. 50ft"
        },
        Sack:{
            cost: "1cp",
            weight: "1/2lb",
            properties: "--"
        },
        Merchants_Scale:{
            cost: "5gp",
            weight: "3lb",
            properties: "A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth."
        },
        Sealing_Wax:{
            cost: "5sp",
            weight: "--",
            properties: "--"
        },
        Shovel:{
            cost: "2gp",
            weight: "5lb",
            properties: "--"
        },
        Signal_Whistle:{
            cost: "5cp",
            weight: "--",
            properties: "--"
        },
        Signet_Ring:{
            cost: "5gp",
            weight: "--",
            properties: "--"
        },
        Soap:{
            cost: "2cp",
            weight: "--",
            properties: "--"
        },
        Spellbook:{
            cost: "50gp",
            weight: "3lb",
            properties: "Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells."
        },
        Iron_Spikes:{
            cost: "1gp",
            weight: "5lb",
            properties: "10"
        },
        Spyglass:{
            cost: "1000gp",
            weight: "1lb",
            properties: "Objects viewed through a spyglass are magnified to twice their size."
        },
        Tent:{
            cost: "2gp",
            weight: "20lb",
            properties: "A simple and portable canvas shelter, a tent sleeps two."
        },
        Tinderbox:{
            cost: "5sp",
            weight: "1lb",
            properties: "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action. Lighting any other fire takes 1 minute."
        },
        Torch:{
            cost: "1cp",
            weight: "1lb",
            properties: "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."
        },
        Vial:{
            cost: "1gp",
            weight: "--",
            properties: "--"
        },
        Waterskin:{
            cost: "2sp",
            weight: "5lb(full)",
            properties: "--"
        },
        Whetstone:{
            cost: "1cp",
            weight: "1lb",
            properties: "--"
        },
        Alchemists_Supplies:{
            cost: "50gp",
            weight: "8lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Brewers_Supplies:{
            cost: "20gp",
            weight: "9lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Calligraphers_Supplies:{
            cost: "10gp",
            weight: "5lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Carpenters_Tools:{
            cost: "8gp",
            weight: "6lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Cartographers_Tools:{
            cost: "15gp",
            weight: "6lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Cobblers_Tools:{
            cost: "5gp",
            weight: "5lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Cooks_Utensils:{
            cost: "1gp",
            weight: "8lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Glassblowers_Tools:{
            cost: "30gp",
            weight: "5lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Jewelers_Tools:{
            cost: "25gp",
            weight: "2lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Leatherworkers_Tools:{
            cost: "5gp",
            weight: "5lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Masons_Tools:{
            cost: "10gp",
            weight: "8lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Painters_Supplies:{
            cost: "10gp",
            weight: "5lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Potters_Tools:{
            cost: "10gp",
            weight: "3lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Smiths_Tools:{
            cost: "20gp",
            weight: "8lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Tinkers_Tools:{
            cost: "50gp",
            weight: "10lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Weavers_Tools:{
            cost: "1gp",
            weight: "5lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Woodcarvers_Tools:{
            cost: "1gp",
            weight: "5lb",
            properties: "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency."
        },
        Disguise_Kit:{
            cost: "25gp",
            weight: "3lb",
            properties: "This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise."
        },
        Forgery_Kit:{
            cost: "15gp",
            weight: "5lb",
            properties: "This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document."
        },
        Dice_Set:{
            cost: "1sp",
            weight: "--",
            properties: "This item encompasses a wide rangebof game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency."
        },
        Dragonchess_Set:{
            cost: "1gp",
            weight: "1/2lb",
            properties: "This item encompasses a wide rangebof game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency."
        },
        Playing_Card_Set:{
            cost: "5sp",
            weight: "--",
            properties: "This item encompasses a wide rangebof game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency."
        },
        Three_Dragon_Ante_Set:{
            cost: "1gp",
            weight: "--",
            properties: "This item encompasses a wide rangebof game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency."
        },
        Herbalism_Kit:{
            cost: "5gp",
            weight: "3lb",
            properties: "This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions ofhealing."
        },
        Bagpipes:{
            cost: "30gp",
            weight: "6lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Drum:{
            cost: "6gp",
            weight: "3lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Dulcimer:{
            cost: "25gp",
            weight: "10lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Flute:{
            cost: "2gp",
            weight: "1lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Lute:{
            cost: "35gp",
            weight: "2lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Lyre:{
            cost: "30gp",
            weight: "2lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Horn:{
            cost: "3gp",
            weight: "2lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Pan_Flute:{
            cost: "12gp",
            weight: "2lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Shawm:{
            cost: "2gp",
            weight: "1lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Viol:{
            cost: "30gp",
            weight: "1lb",
            properties: "Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus, as described in chapter 10. Each type of musical instrument requires a separate proficiency."
        },
        Navigators_Tools:{
            cost: "25gp",
            weight: "2lb",
            properties: "This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea."
        },
        Poisoners_Kit:{
            cost: "50gp",
            weight: "2lb",
            properties: "A poisoner’s kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons."
        },
        Thieves_Tools:{
            cost: "25gp",
            weight: "1lb",
            properties: "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks."
        },
        Nothing:{
            
        }
            },
    feats:{
        Alert:{
            effects: "Always on the lookout for danger, you gain the following benefits: • You gain a +5 bonus to initiative. • You can’t be surprised while you are conscious. • Other creatures don’t gain advantage on attack rolls against you as a result of being hidden from you."
        },
        Athlete:{
            effects: "You have undergone extensive physical training to gain the following benefits: • Increase your Strength or Dexterity score by 1, to a maximum of 20. • When you are prone, standing up uses only 5 feet of your movement. • Climbingdoesn’thalveyourspeed. • You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."  
        },
        Actor:{
            effects: "Skilled at mimicry and dramatics, you gain the following benefits: • Increase your Charisma score by 1, to a maximum of 20. • You have advantage on Charisma (Deception) and Charisma (Performance) checks when trying to pass yourself off as a different person. • You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom (Insight) check contested by your Charisma (Deception) check allows a listener to determine that the effect is faked."
        },
        Charger:{
            effects: "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack’s damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
        },
        Crossbow_Expert:{
            effects: "Thanks to extensive practice with the crossbow, you gain the following benefits: • You ignore the loading quality of crossbows with which you are proficient. • Being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls. • When you use the Attack action and attack with a one- handed weapon, you can use a bonus action to attack with a loaded hand crossbow you are holding."
        },
        Defensive_Duelist:{
            effects: "Prerequisite: Dexterity 13 or higher When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
        },
        Dual_Wielder:{
            effects: "You master fighting with two weapons, gaining the following benefits: • You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand. • You can use two-weapon fighting even when the one- handed melee weapons you are wielding aren’t light. • You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one."
        },
        Dungeon_Delver:{
            effects: "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits: • You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors. • You have advantage on saving throws made to avoid or resist traps. • You have resistance to the damage dealt by traps. • You can search for traps while traveling at a normal pace, instead of only at a slow pace."
        },
        Durable:{
            effects: "Hardy and resilient, you gain the following benefits: • Increase your Constitution score by 1, to a maximum of 20. • When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
        },
        Elemental_Adept:{
            effects: "Prerequisite: The ability to cast at least one spell When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times. Each time you do so, you must choose a different damage type."
        },
        Grappler:{
            effects: "Prerequisite: Strength 13 or higher You’ve developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits: • You have advantage on attack rolls against a creature you are grappling. • You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends. • Creatures that are one size larger than you don’t auto- matically succeed on checks to escape your grapple."
        },
        Great_Weapon_Master:{
            effects: "You’ve learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits: • On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action. • Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a - 5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."
        },
        Healer:{
            effects: "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits: • When you use a healer’s kit to stabilize a dying crea- ture, that creature also regains 1 hit point. • As an action, you can spend one use of a healer’s kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature’s max- imum number of Hit Dice. The creature can’t regain hit points from this feat again until it finishes a short or long rest."
        },
        Heavily_Armored:{
            effects: "Prerequisite: Proficiency with medium armor You have trained to master the use of heavy armor, gaining the following benefits: • Increase your Strength score by 1, to a maximum of 20. • You gain proficiency with heavy armor."
        },
        Heavy_Armor_Master:{
            effects: "Prerequisite: Proficiency with heavy armor You can use your armor to deflect strikes that would kill others. You gain the following benefits: • Increase your Strength score by 1, to a maximum of 20. • While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from non magical weapons is reduced by 3."
        },
        Inspiring_Leader:{
            effects: "Prerequisite: Charisma 13 or higher You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can’t gain temporary hit points from this feat again until it has finished a short or long rest."
        },
        Keen_Mind:{
            effects: "You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits. • Increase your Intelligence score by 1, to a maximum of 20. • You always know which way is north. • You always know the number of hours left before the next sunrise or sunset. • You can accurately recall anything you have seen or heard within the past month."
        },
        Lightly_Armored:{
            effects: "You have trained to master the use of light armor, gaining the following benefits: • Increase your Strength or Dexterity score by 1, to a maximum of 20. • You gain proficiency with light armor."
        },
        Linguist:{
            effects: "You have studied languages and codes, gaining the following benefits: • Increase your Intelligence score by 1, to a maximum of 20. • You learn three languages of your choice. • You can ably create written ciphers. Others can’t decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
        },
        Lucky:{
            effects: "You have inexplicable luck that seems to kick in at just the right moment. You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker’s roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled. You regain your expended luck points when you finish a long rest."
        },
        Mage_Slayer:{
            effects: "You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits: • When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature. • When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration. • You have advantage on saving throws against spells cast by creatures within 5 feet of you."
        },
        Magic_Initiate:{
            effects: "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class’s spell list. In addition, choose one 1st-level spell from that same list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again. Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid: or Intelligence for wizard."
        },
        Martial_Adept:{
            effects: "You have martial training that allows you to perform special combat maneuvers. You gain the following benefits: • You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your tar- get to make a saving throw to resist the maneuver’s effects, the saving throw DC equals 8 + your profi- ciency bonus + your Strength or Dexterity modifier (your choice). • If you already have superiority dice, you gain one more; otherwise, you have one superiority die, which is a d6. This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
        },
        Medium_Armor_Master:{
            effects: "Prerequisite: Proficiency with medium armor You have practiced moving in medium armor to gain the following benefits: • Wearing medium armor doesn’t impose disadvantage on your Dexterity (Stealth) checks. • When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher."
        },
        Mobile:{
            effects: "You are exceptionally speedy and agile. You gain the following benefits: • Your speed increases by 10 feet. • When you use the Dash action, difficult terrain doesn’t cost you extra movement on that turn. • When you make a melee attack against a creature, you don’t provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not."
        },
        Moderately_Armored:{
            effects: "Prerequisite: Proficiency with light armor You have trained to master the use of medium armor and shields, gaining the following benefits: • Increase your Strength or Dexterity score by 1, to a maximum of 20. • You gain proficiency with medium armor and shields."
        },
        Mounted_Combatant:{
            effects: "You are a dangerous foe to face while mounted. While you are mounted and aren’t incapacitated, you gain the following benefits: • You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount. • You can force an attack targeted at your mount to target you instead. • If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half dam- age, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
        },
        Observant:{
            effects: "Quick to notice details of your environment, you gain the following benefits: • Increase your Intelligence or Wisdom score by 1, to a maximum of 20. • If you can see a creature’s mouth while it is speaking a language you understand, you can interpret what it’s saying by reading its lips. • You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores."
        },
        Polearm_Master:{
            effects: "You can keep your enemies at bay with reach weapons. You gain the following benefits: • When you take the Attack action and attack with only a glaive, halberd, or quarterstaff, you can use a bonus action to make a melee attack with the opposite end of the weapon. The weapon’s damage die for this attack is a d4, and the attack deals bludgeoning damage. • While you are wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach."
        },
        Resilient:{
            effects: "Choose one ability score. You gain the following benefits: • Increase the chosen ability score by 1, to a maximum of 20. • You gain proficiency in saving throws using the chosen ability."
        },
        Ritual_Caster:{
            effects: "Prerequisite: Intelligence or Wisdom 13 or higher You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them. When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: bard, cleric, druid, sorcerer, warlock, or wizard. You must choose your spells from that class’s spell list, and the spells you choose must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard. If you com e across a spell in written form, such as a magical spell scroll or a wizard’s spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell’s level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it."
        },
        Savage_Attacker:{
            effects: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon’s damage dice and use either total."
        },
        Sentinel:{
            effects: "You have mastered techniques to take advantage of every drop in any enemy’s guard, gaining the following benefits: • When you hit a creature with an opportunity attack, the creature’s speed becomes 0 for the rest of the turn.  Creatures within 5 feet of you provoke opportunity attacks from you even if they take the Disengage action before leaving your reach. • When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn’t have this feat), you can use your reaction to make a melee weapon attack against the attacking creature."
        },
        Sharpshooter:{
            effects: "You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits: • Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls. • Your ranged weapon attacks ignore half cover and three-quarters cover. • Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack’s damage."
        },
        Shield_Master:{
            effects: "You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a shield: • If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield. • If you aren’t incapacitated, you can add your shield’s AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you. • If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half dam- age, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
        },
        Skilled:{
            effects: "You gain proficiency in any combination of three skills or tools of your choice."
        },
        Skulker:{
            effects: "Prerequisite: Dexterity 13 or higher You are expert at slinking through shadows. You gain the following benefits: • You can try to hide when you are lightly obscured from the creature from which you are hiding. • When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position. • Dim light doesn’t impose disadvantage on your Wisdom (Perception) checks relying on sight."
        },
        Spell_Sniper:{
            effects: "Prerequisite: The ability to cast at least one spell You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits: • When you cast a spell that requires you to make an attack roll, the spell’s range is doubled. • Your ranged spell attacks ignore half cover and three-quarters cover. • You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
        },
        Tavern_Brawler:{
            effects: "Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits: • Increase your Strength or Constitution score by 1, to a maximum of 20. • You are proficient with improvised weapons and unarmed strikes. • Your unarmed strike uses a d4 for damage. • When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."
        },
        Tough:{
            effects: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
        },
        War_Caster:{
            effects: "Prerequisite: The ability to cast at least one spell You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits: • You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage. • You can perform the somatic components of spells even when you have weapons or a shield in one or both hands. • When a hostile creature’s movement provokes an opportunity attack from you, you can use your reac- tion to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature."
        },
        Weapon_Master:{
            effects: "You have practiced extensively with a variety of weapons, gaining the following benefits: • Increase your Strength or Dexterity score by 1, to a maximum of 20. • You gain proficiency with four weapons of your choice."
        },
        Darkvision:{
            effects: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
        },
        Dwarven_Resilience:{
            effects: ""
        },
        Dwarven_Toughness:{
            effects: ""
        },
        Keen_Senses:{
            effects: ""
        },
        Fey_Ancestry:{
            effects: ""
        },
        Trance:{
            effects: ""
        },
        Cantrip:{
            effects: ""
        },
        Extra_Language:{
            effects: ""
        },
        Fleet_Of_Foot:{
            effects: ""
        },
        Mask_Of_The_Wild:{
            effects: ""
        },
        Superior_Darkvision:{
            effects: ""
        },
        Sunlight_Sensitivity:{
            effects: ""
        },
        Drow_Magic:{
            effects: ""
        },
        Lucky:{
            effects: ""
        },
        Brave:{
            effects: ""
        },
        Halfling_Nimbleness:{
            effects: ""
        },
        Naturally_Stealthy:{
            effects: ""
        },
        Stout_Resilience:{
            effects: ""
        },
        Draconic_Ancestry:{
            effects: ""
        },
        Breath_Weapon:{
            effects: ""
        },
        Damage_Resistance:{
            effects: ""
        },
        Gnome_Cunning:{
            effects: ""
        },
        Natural_Illusionist:{
            effects: ""
        },
        Speak_With_Small_Beasts:{
            effects: ""
        },
        Artificers_Lore:{
            effects: ""
        },
        Tinker:{
            effects: ""
        },
        Skill_Versatility:{
            effects: ""
        },
        Menacing:{
            effects: ""
        },
        Relentless_Endurance:{
            effects: ""
        },
        Savage_Attacks:{
            effects: ""
        },
        Hellish_Resistance:{
            effects: ""
        },
        Infernal_Legacy:{
            effects: ""
        },
        Expertise:{
            effects: ""
        },
        Sneak_Attack:{
            effects: ""
        },
        Thieves_Cant:{
            effects: ""
        },
        Cunning_Action:{
            effects: ""
        },
        Rougish_Archetype:{
            effects: ""
        },
        Uncanny_Dodge:{
            effects: ""
        },
        Evasion:{
            effects: ""
        },
        Reliable_Talent:{
            effects: ""
        },
        Blindsense:{
            effects: ""
        },
        Slippery_Mind:{
            effects: ""
        },
        Elusive:{
            effects: ""
        },
        Stroke_Of_Luck:{
            effects: ""
        },
        Fast_Hands:{
            effects: ""
        },
        Second_Story_Work:{
            effects: ""
        },
        Supreme_Sneak:{
            effects: ""
        },
        Use_Magic_Device:{
            effects: ""
        },
        Thiefs_Reflexes:{
            effects: ""
        },
        Bonus_Proficiencies:{
            effects: ""
        },
        Assassinate:{
            effects: ""
        },
        Infiltration_Expertise:{
            effects: ""
        },
        Impostor:{
            effects: ""
        },
        Death_Strike:{
            effects: ""
        },
        Spellcasting:{
            effects: ""
        },
        Mage_Hand_Legerdemain:{
            effects: ""
        },
        Magical_Ambush:{
            effects: ""
        },
        Versatile_Trickster:{
            effects: ""
        },
        Spell_Thief:{
            effects: ""
        },
        Rage:{
            effects: ""
        },
        Unarmored_Defense:{
            effects: ""
        },
        Reckless_Attack:{
            effects: ""
        },
        Danger_Sense:{
            effects: ""
        },
        Primal_Path:{
            effects: ""
        },
        Extra_Attack:{
            effects: ""
        },
        Fast_Movement:{
            effects: ""
        },
        Feral_Instinct:{
            effects: ""
        },
        Brutal_Critical:{
            effects: ""
        },
        Relentless_Rage:{
            effects: ""
        },
        Persistent_Rage:{
            effects: ""
        },
        Indomitable_Might:{
            effects: ""
        },
        Primal_Champion:{
            effects: ""
        },
        Frenzy:{
            effects: ""
        },
        Mindless_Rage:{
            effects: ""
        },
        Intimidating_Presence:{
            effects: ""
        },
        Retaliation:{
            effects: ""
        },
        Spirit_Seeker:{
            effects: ""
        },
        Totem_Spirit:{
            effects: ""
        },
        Aspect_Of_The_Beast:{
            effects: ""
        },
        Spirit_Walker:{
            effects: ""
        },
        Totemic_Attunement:{
            effects: ""
        },
        Spellcasting:{
            effects: ""
        },
        Bardic_Inspiration:{
            effects: ""
        },
        Jack_Of_All_Trades:{
            effects: ""
        },
        Song_Of_Rest:{
            effects: ""
        },
        Bard_College:{
            effects: ""
        },
        Ability_Score_Improvement:{
            effects: ""
        },
        Font_Of_Inspiration:{
            effects: ""
        },
        Countercharm:{
            effects: ""
        },
        Magical_Secrets:{
            effects: ""
        },
        Superior_Inspiration:{
            effects: ""
        },
        Bonus_Proficiencies:{
            effects: ""
        },
        Cutting_Words:{
            effects: ""
        },
        Additional_Magical_Secrets:{
            effects: ""
        },
        Peerless_Skill:{
            effects: ""
        },
        Combat_Inspiration:{
            effects: ""
        },
        Battle_Magic:{
            effects: ""
        },
        Divine_Domain:{
            effects: ""
        },
        Channel_Divinity:{
            effects: ""
        },
        Destroy_Undead:{
            effects: ""
        },
        Divine_Intervention:{
            effects: ""
        },
        Blessings_Of_Knowledge:{
            effects: ""
        },
        Potent_Spellcasting:{
            effects: ""
        },
        Visions_Of_The_Past:{
            effects: ""
        },
        Bonus_Proficiency:{
            effects: ""
        },
        Disciple_Of_Life:{
            effects: ""
        },
        Blessed_Healer:{
            effects: ""
        },
        Divine_Strke:{
            effects: ""
        },
        Supreme_Healing:{
            effects: ""
        },
        Bonus_Cantrip:{
            effects: ""
        },
        Warding_Flare:{
            effects: ""
        },
        Improved_Flare:{
            effects: ""
        },
        Corona_Of_Light:{
            effects: ""
        },
        Acolyte_Of_Nature:{
            effects: ""
        },
        Dampen_Elements:{
            effects: ""
        },
        Divine_Strike:{
            effects: ""
        },
        Master_Of_Nature:{
            effects: ""
        },
        Wrath_Of_The_Storm:{
            effects: ""
        },
        Thunderbolt_Strike:{
            effects: ""
        },
        Divine_Strike:{
            effects: ""
        },
        Stormborn:{
            effects: ""
        },
        Blessing_Of_The_Trickster:{
            effects: ""
        },
        Improved_Duplicity:{
            effects: ""
        },
        War_Priest:{
            effects: ""
        },
        Avatar_Of_Battle:{
            effects: ""
        },
        Wild_Shape:{
            effects: ""
        },
        Druid_Circle:{
            effects: ""
        },
        Timeless_Body:{
            effects: ""
        },
        Beast_Spells:{
            effects: ""
        },
        Archdruid:{
            effects: ""
        },
        Bonus_Cantrip:{
            effects: ""
        },
        Natural_Recovery:{
            effects: ""
        },
        Lands_Stride:{
            effects: ""
        },
        Natures_Ward:{
            effects: ""
        },
        Natures_Sanctuary:{
            effects: ""
        },
        Combat_Wild_Shape:{
            effects: ""
        },
        Primal_Strike:{
            effects: ""
        },
        Elemental_Wild_Shape:{
            effects: ""
        },
        Thousand_Forms:{
            effects: ""
        },
        Fighting_Style:{
            effects: ""
        },
        Second_Wind:{
            effects: ""
        },
        Action_Surge:{
            effects: ""
        },
        Martial_Archetype:{
            effects: ""
        },
        Extra_Attack_Fighter:{
            effects: ""
        },
        Indomitable:{
            effects: ""
        },
        Improved_Critical:{
            effects: ""
        },
        Remarkable_Athlete:{
            effects: ""
        },
        Additional_Fighting_Style:{
            effects: ""
        },
        Superior_Critical:{
            effects: ""
        },
        Survivor:{
            effects: ""
        },
        Superiority:{
            effects: ""
        },
        Student_Of_War:{
            effects: ""
        },
        Know_Your_Enemy:{
            effects: ""
        },
        Improved_Combat_Superiority:{
            effects: ""
        },
        Relentless:{
            effects: ""
        },
        Weapon_Bond:{
            effects: ""
        },
        War_Magic:{
            effects: ""
        },
        Eldritch_Strike:{
            effects: ""
        },
        Arcane_Charge:{
            effects: ""
        },
        Improved_War_Magic:{
            effects: ""
        },
        Martial_Arts:{
            effects: ""
        },
        Ki:{
            effects: ""
        },
        Unarmored_Movement:{
            effects: ""
        },
        Monastic_Tradition:{
            effects: ""
        },
        Deflect_Missiles:{
            effects: ""
        },
        Slow_Fall:{
            effects: ""
        },
        Stunning_Strike:{
            effects: ""
        },
        Ki_Empowered_Strikes:{
            effects: ""
        },
        Stillness_Of_Mind:{
            effects: ""
        },
        Purity_Of_Body:{
            effects: ""
        },
        Tongue_Of_The_Sun_And_Moon:{
            effects: ""
        },
        Diamond_Soul:{
            effects: ""
        },
        Empty_Body:{
            effects: ""
        },
        Perfect_Self:{
            effects: ""
        },
        Open_Hand_Technique:{
            effects: ""
        },
        Wholeness_Of_Body:{
            effects: ""
        },
        Tranquility:{
            effects: ""
        },
        Quivering_Palm:{
            effects: ""
        },
        Shadow_Arts:{
            effects: ""
        },
        Shadow_Step:{
            effects: ""
        },
        Cloak_Of_Shadows:{
            effects: ""
        },
        Opportunist:{
            effects: ""
        },
        Disciple_Of_The_Elements:{
            effects: ""
        },
        Elemental_Disciplines:{
            effects: ""
        },
        Divine_Sense:{
            effects: ""
        },
        Lay_On_Hands:{
            effects: ""
        },
        Divine_Smite:{
            effects: ""
        },
        Divine_Health:{
            effects: ""
        },
        Sacred_Oath:{
            effects: ""
        },
        Aura_Of_Protection:{
            effects: ""
        },
        Aura_Of_Courage:{
            effects: ""
        },
        Improved_Divine_Smite:{
            effects: ""
        },
        Cleansing_Touch:{
            effects: ""
        },
        Aura_Of_Devotion:{
            effects: ""
        },
        Purity_Of_Spirit:{
            effects: ""
        },
        Holy_Nimbus:{
            effects: ""
        },
        Aura_Of_Warding:{
            effects: ""
        },
        Undying_Sentinel:{
            effects: ""
        },
        Elder_Champion:{
            effects: ""
        },
        Relentless_Avenger:{
            effects: ""
        },
        Soul_Of_Vengeance:{
            effects: ""
        },
        Avenging_Angel:{
            effects: ""
        },
    },
    proficiencies:{
        weapon_Proficiency:{
            effects: ""
        },
        "Armor Proficiency":{
            
        },
        "Light Armor Proficiency":{
            
        },
        "Medium Armor Proficiency":{
            
        },
        "Heavy Armor Proficiency":{
            
        },
        "Shield Proficiency":{
            
        },
        Common_Speak:{
            effects: "Fully understands common tongue"
        },
        Tool_Proficiency:{
            effects: ""
        },
        Stonecutting:{
            effects: ""
        },
        Dwarvish_Speak:{
            effects: "Fully understands dwarven tongue"
        },
        Drow_Weapon_Training:{
            effects: ""
        },
        Elvish_Speak:{
            effects: "Fully understands elven tongue"
        },
        Elf_Weapon_Training:{
            effects: ""
        },
        Dwarven_Armor_Training:{
            effects: ""
        },
        Dwarven_Combat_Training:{
            effects: ""
        },
        Halfling_Speak:{
            effects: "Fully understands halfling tongue"
        },
        Draconic_Speak:{
            effects: "Fully understands dragon tongue"
        },
        Gnomish_Speak:{
            effects: "Fully understands gnome tongue"
        },
        Orc_Speak:{
            effects: "Fully understands orc tongue"
        },
        Infernal_Speak:{
            effects: "Fully understands infernal tongue"
        },
        Giant_Speak:{
            effects: "Fully understands giant tongue"
        },
        Goblin_Speak:{
            effects: "Fully understands goblin tongue"
        },
        Celestial_Speak:{
            effects: "Fully understands celestial tongue"
        },
        Deep_Speak:{
            effects: "Fully understands deep speech"
        },
        Primordial_Speak:{
            effects: "Fully understands primordial tongue"
        },
        Sylvan_Speak:{
            effects: "Fully understands sylvan tongue"
        },
        Undercommon_Speak:{
            effects: "Fully understands undercommon tongue"
        }
        
    },
    races:{
        Human:{
            strength: "+1",
            dexterity: "+1",
            constitution: "+1",
            intelligence: "+1",
            wisdom: "+1",
            charisma: "+1",
            base_speed: "30",
            languages: ""
        },
        Dawrf:{
            constitution: "+2",
            base_speed: "25",
            darkvision: "",
            dwarven_resilience: "",
            dwarven_combat_training: "",
            tool_proficiency: "",
            stonecutting: "",
            languages: ""
        },
        Elf:{
            dexterity: "+2",
            base_speed: "30",
            darkvision: "",
            keen_senses: "",
            fey_ancestry: "",
            trance: "",
            languages: "",
        },
        Halfling:{
            dexterity: "+2",
            base_speed: "25",
            lucky: "",
            brave: "",
            halfing_nimbleness: "",
            languages: ""
        },
        Stout_Halfling:{
            constitution: "+1",
            base_speed: "25",
            lucky: "",
            brave: "",
            halfing_nimbleness: "",
            languages: "",
            stout_resilience: ""
        },
        Lightfoot_Halfling:{
            charisma: "+1",
            base_speed: "25",
            lucky: "",
            brave: "",
            halfing_nimbleness: "",
            languages: "",
            naturally_stealthy: ""
        },
        Wood_Elf:{
            dexterity: "+2",
            wisdom: "+1",
            base_speed: "30",
            darkvision: "",
            keen_senses: "",
            fey_ancestry: "",
            trance: "",
            languages: "",
            elf_weapon_training: "",
            fleet_of_foot: "",
            mask_of_the_wild: ""
        },
        Dark_Elf_Drow:{
            charisma: "+1",
            dexterity: "+2",
            base_speed: "30",
            darkvision: "",
            keen_senses: "",
            fey_ancestry: "",
            trance: "",
            languages: "",
            superior_darkvision: "",
            sunlight_sensitivity: "",
            drow_magic: "",
            drow_weapon_training: ""
        },
        High_Elf:{
            dexterity: "+2",
            intelligence: "+1",
            base_speed: "30",
            darkvision: "",
            keen_senses: "",
            fey_ancestry: "",
            trance: "",
            languages: "",
            elf_weapon_training: "",
            cantrip: "",
            extra_language: "",
        },
        Blood_Elf:{
            dexterity: "+2",
            base_speed: "30",
            darkvision: "",
            keen_senses: "",
            fey_ancestry: "",
            trance: "",
            languages: "",
        },
        Mountain_Dwarf:{
            strength: "+2",
            constitution: "+2",
            base_speed: "25",
            darkvision: "",
            dwarven_resilience: "",
            dwarven_combat_training: "",
            tool_proficiency: "",
            stonecutting: "",
            languages: "",
            dwarven_armor_training: ""
        },
        Hill_Dwarf:{
            wisdom: "+1",
            constitution: "+2",
            base_speed: "25",
            darkvision: "",
            dwarven_resilience: "",
            dwarven_combat_training: "",
            tool_proficiency: "",
            stonecutting: "",
            languages: "",
            Dwarven_Toughness: ""
        },
        Ashborn:{
            base_speed: "30"
        },
        Aurorian:{
            base_speed: "40"
        },
        Dragonborn:{
            strength: "+2",
            charisma: "+1",
            base_speed: "30",
            draconic_ancestry: "",
            breath_weapon: "",
            damage_resistance: "",
            languages: ""
        },
        Half_Elf:{
            charisma: "+2",
            speed: "30",
            additional_ability_score: "",
            darkvision: "",
            fey_ancestry: "",
            skill_versatility: "",
            languages: ""

        },
        Half_Orc:{
            strength: "+2",
            constitution: "+1",
            base_speed: "30",
            darkvision: "",
            menacing: "",
            relentless_endurance: "",
            savage_attacks: "",
            languages: ""
        },
        Orc:{
            base_speed: "30"
        },
        Gnome:{
            dexterity: "+1",
            intelligence: "+2",
            base_speed: "25",
            darkvision: "",
            gnome_cunning: "",
            languages: "",
        },
        Forest_Gnome:{
            dexterity: "+1",
            intelligence: "+2",
            base_speed: "25",
            darkvision: "",
            gnome_cunning: "",
            languages: "",
            natural_illusionist: "",
            speak_with_small_beasts: "",
        },
        Rock_Gnome:{
            constitution: "+1",
            intelligence: "+2",
            base_speed: "25",
            feats: "darkvision, gnome_cunning, tinker, artificers_lore",
            languages: "Gnomish",          
        },
        Tiefling:{
            intelligence: "+1",
            charisma: "+2",
            base_speed: "30",
            feats: "darkvision, hellish_resistance, infernal_legacy",
            languages: "Infernal"
        },
        Aarakocra:{
            base_speed: "25",
            base_flight: "50",
            talons: "",
            languages: "Common, Aarakocra, Auran"
        },
        Deep_Gnome:{
            base_speed: "25",
            superior_darkvision: "",
            gnome_cunning: "",
            stone_camoflage: "",
            languages: "common, gnomish, undercommon"
        },
        Genasi:{
            constitution: "+2",
            base_speed: "30",
            languages: "common, primordial"
        },
        Air_Genasi:{
            constitution: "+2",
            dexterity: "+1",
            unending_breath: "",
            mingle_with_the_wind: "",
            base_speed: "30",
            languages: "common, primordial"
        },
        Earth_Genasi:{
            constitution: "+2",
            strength: "+1",
            earthwalk: "",
            merge_with_stone: "",
            base_speed: "30",
            languages: "common, primordial"
        },
        Fire_Genasi:{
            constitution: "+2",
            intelligence: "+1",
            darkvision: "",
            fire_resistance: "",
            base_speed: "30",
            languages: "common, primordial"
        },
        Water_Genasi:{
            constitution: "+2",
            base_speed: "30",
            languages: "common, primordial"
        },
        Goliath:{
            base_speed: "30",
            natural_athlete: "",
            stones_endurance: "",
            powerful_build: "",
            mountain_born: "",
            languages: "common, giant"
        },
        Aasimar:{
            base_speed: "30"
        }
    },
    classes:{
        barbarian:{},
        bard:{},
        cleric:{},
        druid:{},
        fighter:{},
        monk:{},
        paladin:{},
        ranger:{},
        rogue:{},
        sorcerer:{},
        warlock:{},
        wizard:{}
    },
    alignments:{
        Lawful_Good:{},
        Lawful_Neutral:{},
        Lawful_Evil:{},
        Neutral_Good:{},
        True_Neutral:{},
        Neutral_Evil:{},
        Chaotic_Good:{},
        Chaotic_Neutral:{},
        Chaotic_Evil:{}
    },
    personality:{
        "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.":{},
        "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.":{},
        "I see omens in every event and action. The gods try to speak to us, we just need to listen.":{},
        "Nothing can shake my optimistic attitude.":{},
        "I quote sacred texts and proverbs in almost every situation.":{},
        "I am tolerant of other faiths and respect the worship of other gods.":{},
        "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.":{},
        "I've spent so long in the temple that I have little practical experience dealing with people in the outside world.":{},
        "I fall in and out of love easily, and am always pursuing someone.":{},
        "I have a joke for every occation, especially occasions where humor is inappropriate.":{},
        "Flattery is my preffered trick for getting what I want.":{},
        "I'm a born gambler who can't resist taking a risk for a potential payoff.":{},
        "I lie about almost everything, even when there's no good reason to.":{},
        "Sarcasm and insults are my weapon of choice.":{},
        "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.":{},
        "I pocket anything I see that might have some value.":{},
        "I always have a plan for what to do when things go wrong.":{},
        "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.":{},
        "The first thing I do in a new place is note the locations of everything valuable-- or where such things could be hidden.":{},
        "I would rather make a new ally than a new enemy.":{},
        "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.":{},
        "I don't pay attention to the risks in a situation. Never tell me the odds.":{},
        "The best way to get me to do something is to tell me I can't do it.":{},
        "I blow up at the slightest insult.":{},
        "I know a story relevant to almost every situation.":{},
        "Whenever I come to a new place, I collect local rumors and spread gossip.":{},
        "I'm a hopeless romantic, always searching for that 'special someone.'":{},
        "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.":{},
        "I love a good insult, even one directed at me.":{},
        "I get bitter if I'm not the center of attention.":{},
        "I'll settle for nothing less than perfection.":{},
        "I change my mood and my mind as quickly as I change key in a song.":{},
        "I judge people by their actions, not their words.":{},
        "If someone is in trouble, I'm always ready to lend help.":{},
        "When I set my mind to something. I follow through no matter what gets in my way.":{},
        "I have a strong sense of fair play and always try to find the most equitable solution to arguments.":{},
        "I'm confident in my own abilities and do what I can to instill confidence in others.":{},
        "Thinking is for other people. I prefer action.":{},
        "I misuse long words in an attempt to sound smarter.":{},
        "I get bored easily. When am I going to get on with my destiny?":{},
        "I believe that anything worth doing is worth doing right. I can't help it-- I'm a perfectionist.":{},
        "I'm a snob who looks down on those who can't appreciate fine art.":{},
        "I always want to know how things work and what makes people tick.":{},
        "I'm full of witty aphorisma and have a proverb for every occasion.":{},
        "I'm rude to people who lack my commitment to hard work and fair play.":{},
        "I like to talk at length about my profession.":{},
        "I don't part with my money easily and will haggle tirelessly to get the best deal possible.":{},
        "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.":{},
        "I've been isolted for so long that I rarely speak, preferring gestures and the occasional grunt.":{},
        "I am utterly serene, even in the face of disaster.":{},
        "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.":{},
        "I feel tremendous empathy for all who suffer.":{},
        "I'm oblivious to etiquette and social expectations.":{},
        "I cannect everything that happens to me to a grand cosmic plan.":{},
        "I often get lost in my own thoughts and contemplation, becomeing oblivious to my surroundings.":{},
        "I am working on a grand philosophical theory and love sharing my ideas.":{},
        "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.":{},
        "The common folk love me for my kindness and generosity.":{},
        "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.":{},
        "I take great pains to always look my best and follow the latest fashions.":{},
        "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.":{},
        "Despite my noble birth, I do not place myself above other folk. We all have the same blood.":{},
        "My favor, once lost, is lost forever.":{},
        "If you do me an injury, I will crush you, ruin your name, and salt your fields.":{},
        "I'm driven by a wanderlust that led me away from home.":{},
        "I watch over my friends as if they were a litter of newborn pups.":{},
        "I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.":{},
        "I have a lesson for every situation, drawn from observing nature.":{},
        "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.":{},
        "I'm always picking things up, absently fiddling with them, and sometimes accidentaly breaking them.":{},
        "I feel far more comfortable around animals than people.":{},
        "I was, in fact, raised by wolves.":{},
        "I use polysilablic words that convey the impression of great erudition.":{},
        "I've read every book in the world's greatest libraries-- or I like to boast that I have.":{},
        "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.":{},
        "There's nothing I like more than a good mystery.":{},
        "I'm willing to listen to every side of an argument before I make my own judgment.":{},
        "I..speak...slowly...when talking...to idiots...which...almost...everyone...is...compared...to me.":{},
        "I am horribly, horribly awkward in social situations.":{},
        "I'm convinced that people are always trying to steal my secrets.":{},
        "My friends know they can rely on me, no matter what.":{},
        "I work hard so that I can play hard when the work is done.":{},
        "I enjoy sailing into new ports and making new friends over a flagon of ale.":{},
        "I stretch the truth for the sake of a good story.":{},
        "To me, a tavern brawl is a nice way to get to know a new city.":{},
        "I never pass up a friendly wager.":{},
        "My language is as foul as an otyugh nest.":{},
        "I like a job well done, especially if I can convince someone else to do it.":{},
        "I'm always polite and respectful.":{},
        "I'm haunted by memories of war. I can't get the images of violence out of my mind.":{},
        "I've lost too many friends, and I'm slow to make new ones.":{},
        "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.":{},
        "I can stare down a hellhound without flinching.":{},
        "I enjoy being strong and like breaking things.":{},
        "I have a crude sense of humor.":{},
        "I face problems head-on. A simple, direct solution is the best path to success.":{},
        "I hide scraps of food and trinkets away in my pockets.":{},
        "I ask a lot of questions.":{},
        "I like to squeeze into small places where no one else can get me.":{},
        "I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.":{},
        "I eat like a pig and have bad manners.":{},
        "I think anyone who's nice to me is hiding evil intent.":{},
        "I don't like to bathe.":{},
        "I bluntly say what other people are hinting at or hiding.":{},
    },
    ideal:{
        "Tradition":{},
        "Charity":{},
        "Change":{},
        "Power":{},
        "Faith":{},
        "Aspiration":{},
        "Independence":{},
        "Fairness":{},
        "Creativity":{},
        "Friendship":{},
        "Honor":{},
        "Freedom":{},
        "Greed":{},
        "People":{},
        "Redemption":{},
        "Beauty":{},
        "Honesty":{},
        "Respect":{},
        "Might":{},
        "Sincerity":{},
        "Destiny":{},
        "Community":{},
        "Generosity":{},
        "Greater Good":{},
        "Logic":{},
        "Free Thinking":{},
        "Live and Let Live":{},
        "Self-Knowledge":{},
        "Responsiblity":{},
        "Family":{},
        "Noble Obligation":{},
        "Nature":{},
        "Glory":{},
        "Knowledge":{},
        "No Limits":{},
        "Self-improvement":{},
        "Mastery":{},
        "Nation":{},
        "Retribution":{},
    },
    bond:{
        "I would die to recover an ancient relic of my faith that was lost long ago.":{},
        "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.":{},
        "I owe my life to the priest who took me in when my parents died.":{},
        "Everything I do is for the common people.":{},
        "I will do anything to protect the temple where I served.":{},
        "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.":{},
        "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.":{},
        "I owe everything to my mentor-- a horrible person who's probably rotting in jail somewhere.":{},
        "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.":{},
        "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.":{},
        "A powerful person killed someone I love. Someday soon, I'll have my revenge.":{},
        "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.":{},
        "I'm trying to pay off an old debt I owe to a generous benefactor.":{},
        "My ill-gotten gains go to support my family":{},
        "Something important was taken from me, and I aim to steal it back.":{},
        "I will become the greatest thief that ever lived.":{},
        "I'm guilty of a terrible crime. I hope I can redeem myself for it.":{},
        "Someone I loved died because of one mistake I made. That will never happen again.":{},
        "My instrument is my most treasured possession, and it reminds me of someone I love.":{},
        "Someone stole my precious instrument, and someday I'll get it back.":{},
        "I want to be famous, whatever it takes.":{},
        "I idolize a hero of the old tales and measure my deeds against that person's.":{},
        "I will do anything to prove myself superior to my hated rival.":{
            //Dinkleberg.......
        },
        "I would do anything for the other members of my old troupe.":{},
        "I have a family, but I have no idea where they are. One day, I hope to see them again.":{},
        "I worked the land, I love the land, and I will protect the land.":{},
        "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.":{},
        "My tools are symbols of my past life, and I carry them so that I will never forget my roots.":{},
        "I protect those who cannot protect themselves":{},
        "I wish my childhood sweetheart had come with me to pursue my destiny.":{},
        "The workshop where I learned my trade is the most important place in the world to me.":{},
        "I created a great work for someone, and then found them unworthy to recieve it. I'm still looking for someone worthy.":{},
        "I owe my guild a great debt for forging me into the person I am today.":{},
        "I pursue wealth to secure someone's love.":{},
        "One day I will return to my guild and prove that I am the greatest artisan of them all.":{},
        "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.":{},
        "Nothing is more important than theo ther members of my hermitage, order, or association.":{},
        "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.":{},
        "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.":{},
        "I entered seclusion because I loved someone I could not have.":{},
        "Should my discovery come to light, it could bring ruin to the world.":{},
        "My isolation gave me great insight into a great evil that only I can destroy.":{},
        "I will face any challenge to win the approval of my family.":{},
        "My house's alliance with another noble family must be sustained at all costs.":{},
        "Nothing is more important than the other members of my family.":{},
        "I am in love with the heir of a family that my family despises.":{},
        "My loyalty to my sovereign in unwavering.":{},
        "The common folk must see me as a hero of the people.":{},
        "My family, clan, or tribe is the most important thing in my life, even when they are far from me.":{},
        "An injury to the unspoiled wilderness of my home is an injury to me.":{},
        "I will bring terrible wrath down on the evildoers who destroyed my homeland.":{},
        "I am the last of my tribe, and it is up to me to ensure their names enter legend.":{},
        "I suffer awful visions of a coming disaster and will do anything to prevent it.":{},
        "It is my duty to provide children to sustain my tribe.":{},
        "It is my duty to protect my students.":{},
        "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.":{},
        "I work to preserve a library, university, scriptorium, or monastery.":{},
        "My life's work is a series of tomes related to a specific field of lore.":{},
        "I've been searching my whole life for the answer to a certain question.":{},
        "I sold my soul for knowledge. I hope to do great deeds and win it back.":{},
        "I'm loyal to my captain first, everything else second.":{},
        "The ship is most important-- crewmates and captains come and go.":{},
        "I'll always remember my first ship.":{},
        "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.":{},
        "I was cheated out of my fair share of the profits, and I want to get my due.":{},
        "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.":{},
        "I would still lay down my life for the people I served with.":{},
        "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.":{},
        "My honor is my life.":{},
        "I'll never forget the crushing defeat my compny suffered or the enemies who delt it.":{},
        "Those who fight beside me are those worth dying for.":{},
        "I fight for those who connot fight for themselves.":{},
        "My town or city is my home, and I'll fight to defend it.":{},
        "I sponsor an orphanage to keep others from enduring what I was forced to endure.":{},
        "I owe my survival to another urchin who taught me to live on the streets.":{},
        "I owe a debt I can never repay to the person who took pity on me.":{},
        "I escaped my life of poverty by robbing an important person, and I'm wanted for it.":{},
        "No one else should have to endure the hardships I've been through.":{},
    },
    flaw:{
        "I judge others harshly, and myself even more severely.":{},
        "I put too much trust in those who wield power within my temple's hierarchy.":{},
        "My piety sometimes leads me to blindly trust those that profess faith in my god.":{},
        "I am inflexible in my thinking.":{},
        "I am suspicious of strangers and expect the worst of them.":{},
        "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.":{},
        "I can't resist a pretty face.":{},
        "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.":{},
        "I'm convinced that no one could ever fool me the way I fool others.":{},
        "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.":{},
        "I can't resist swindling people who are more powerful than me.":{},
        "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.":{},
        "When I see something valuable, I can't think about anything but how to steal it.":{},
        "When faced with a choice between money and my friends, I usually choose the money.":{},
        "If there's a plan, I'll forget it. If I don't, I'll ignore it.":{},
        "I have a 'tell' that reveals when I'm lying.":{},
        "I turn tail and run when things look bad.":{},
        "An innocent person is in prison for a crime that I committed. I'm okay with that.":{},
        "I'll do anything to win fame and renown":{},
        "I'm a sucker for a pretty face.":{},
        "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.":{},
        "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.":{},
        "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.":{},
        "Despite my best efforts, I am unreliable to my friends.":{},
        "The tyrant who rules the land will stop at nothing to see me killed.":{},
        "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.":{},
        "The people who knew me when I was young know my shameful secret, so I can never go home again.":{},
        "I have a weakness for the vices of the city, especially hard drink.":{},
        "Secretly, I believe that things would be better if I were a tyrant lording over the land.":{},
        "I have trouble trusting in my allies.":{},
        "I'll do anything to get my hands on something rare or priceless.":{},
        "I'm quick to assume that someone is trying to cheat me.":{},
        "No one must ever learn that I once stole money from guild coffers.":{},
        "I'm never satisfied with what I have-- I always want more.":{},
        "I would kill to acquire a noble title.":{},
        "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surounded by rivals.":{},
        "Now that I've returned to the world, I enjoy its delights a little too much.":{},
        "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.":{},
        "I am dogmatic in my thoughts and philosophy.":{},
        "I let my need to win arguments overshadow friendships and harmony.":{},
        "I'd risk too much to uncover a lost bit of knowledge.":{},
        "I like keeping secrets and won't share them with anyone.":{},
        "I secretly believe that everyone is beneath me.":{},
        "I hide a truly scandalous secret that could ruin my family forever.":{},
        "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger":{},
        "I have an insatiable desire for carnal pleasures.":{},
        "In fact, the world does revolve around me.":{},
        "By my words and actions, I often bring shame to my family.":{},
        "I am too enamored of ale, wine, and other intoxicants.":{},
        "There's no room for caution in a life lived to the fullest.":{},
        "I remember every insult I've recieved and nurse a silent resentment toward anyone who's ever wronged me.":{},
        "I am slow to trust members of other races, tribes, and societies.":{},
        "Violence is my answer to almost any challenge.":{},
        "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.":{},
        "I am easily distracted by the promise of information.":{},
        "Most people scream and run when they see a demon. I stop and take notes on its anatomy.":{},
        "Unlocking an ancient mystery is worth the price of a civilization.":{},
        "I overlook obvious solutions in favor of complicated ones.":{},
        "I speak without really thinking through my words, invariably insulting others.":{},
        "I can't keep a secret to save my life, or anyone else's.":{},
        "I follow orders, even if I think they're wrong.":{},
        "I'll say anything to avoid having to do extra work.":{},
        "Once someone questions my courage, I never back down no matter how dangerous the situation.":{},
        "Once I start drinking, it's hard for me to stop.":{},
        "I can't help but pocket loose coins and other trinkets I come across.":{},
        "My pride will probably lead to my destruction.":{},
        "The monsterous enemy we faced in battle still leaves me quivering with fear.":{},
        "I have little respect for anyone who is not a proven warrior.":{},
        "I made a terrible mistake in battle that cost many lives-- and I would do anything to keep that mistake secret.":{},
        "My hatred of my enemies is blind and unreasoning.":{},
        "I obey the law, even if the law causes misery.":{},
        "I'd rather eat my armor than admit when I'm wrong.":{},
        "If I'm outnumbered, I will run away from a fight.":{},
        "Gold seems like a lot of money to me, and I'll do just about anything for more of it.":{},
        "I will never fully trust anyone other than myself.":{},
        "I'd rather kill someone in their sleep than fight fair.":{},
        "It's not stealing if I need it more than someone else.":{},
        "People who can't take care of themselves get what they deserve.":{},
    }
}

for (var weapon in options.weapons){
    
}