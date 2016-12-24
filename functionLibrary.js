//functionLibrary.js
//Library of usable functions
//by _Kendrick_Smith


//saves data in local storage
function localSave(){
    var data = {
        characterName: $(charName).val(),
        playerName: $(playerName).val(),
        level: $(level).val(),
        }
    localStorage.setItem(data.characterName, data)
};


//load data from local storage
function loadCharacter(CharName){
    localStorage.getItem(CharName)
}

//displays the hidden character sheet
function displayPage(){
    $("#mainBodyParent").show();
}

//hides the character sheet
function hidePage(){
    $("#mainBodyParent").hide();
}

//displays the main menu
function displayMenu(){
    $("#mainMenuParent").show();
}

function hideMenu(){
    $("#mainMenuParent").hide();
}

//displays a loading screen whenever the program is doing lengthy loading
function displayLoading(){
    $("#loadingScreenParent").show();
};

function hideLoading(){
    $("#loadingScreenParent").hide();
};

function displayPage2(){
    $("#mainBodyParentTwo").show();
};

function hidePage2(){
    $("#mainBodyParentTwo").hide();
};

function displaySpells(){
    $("#mainSpellbookParent").show();
}

function hideSpells(){
    $("#mainSpellbookParent").hide();
}

//generates dropdown menu in the location "selector" containing "data" from list "options"
function dropGen(data, selector){
    var select = $("<select>").addClass("dropdown");
    var option = $("<option>");
    select.append(option);
    for (var d in options[data]){
       option=$("<option>").attr("value", d).text(d);
        select.append(option);
    }
    $(selector).each(function(){
        $(this).append(select.clone());
    });
};

//generates and displays popup data next to mouse while over "selector" displaying "data1.data2" in list "options"
function displayPopup(selector, data1, data2){
    $(selector).append(select.clone());
    $(selector+" select").on("change", function(){
        var stuff = $(this).val();
        var choice = options[data1]
        $("#popup").text(choice[data2].display);
    });
    $(selector+"").hover(function(){
        
            //remember to set display:block in css file
        $("#popup").show();
    }, function(){
        $("#popup").hide();
    });
};

//Moves "selection" to mouse while over "selector"
function mouseMove(selector,selection){
    $(selector+"").mousemove(function(e){
        var y = e.pageY;
        var x = e.pageX;                    
        $(selection+'').css({'top': y++}); 
        $(selection+'').css({'left': x+5}); 
    });
};

//Calculates ability modifier of "ability" based on ability score
//takes from ID ex. #strengthScore places into ID ex. #strengthModifier
function abilityModifier(ability){
    $("#"+ability+"Score").on("change", function(){
        var abilityScore = $(this).val();
        abilityScore = parseInt(abilityScore, 10);
        var output = 0;
        if(abilityScore === 1){
            output = -5;
        }else if(abilityScore === 2||abilityScore === 3){
            output = -4;
        }else if(abilityScore === 4||abilityScore === 5){
            output = -3;
        }else if(abilityScore === 6||abilityScore === 7){
            output = -2;
        }else if(abilityScore === 8||abilityScore === 9){
            output = -1;
        }else if(abilityScore === 10||abilityScore === 11){
            output = 0;
        }else if(abilityScore === 12||abilityScore === 13){
            output = 1;
        }else if(abilityScore === 14||abilityScore === 15){
            output = 2;
        }else if(abilityScore === 16||abilityScore === 17){
            output = 3;
        }else if(abilityScore === 18||abilityScore === 19){
            output = 4;
        }else if(abilityScore === 20||abilityScore === 21){
            output = 5;
        }else if(abilityScore === 22||abilityScore === 23){
            output = 6;
        }else if(abilityScore === 24||abilityScore === 25){
            output = 7;
        }else if(abilityScore === 26||abilityScore === 27){
            output = 8;
        }else if(abilityScore === 28||abilityScore === 29){
            output = 9;
        }else if(abilityScore === 30){
            output = 10;
        }else{
           alert("Ability Score Error");
        }
        $("#"+ability+"Modifier").text(output);
    })
};

//Calculates upon clicking checkbox 
function savingCheckboxClick(ability){
    $("#"+ability+"CB").on("click", function(){
        savingThrowsCalc(ability);
    })
};

//Calculates Armor Class upon clicking checkbox
function armorCheckboxClick(slot){
    $("#armorEquipBox"+slot).on("click", function(){
        
        
        checkbox = $("#armorEquipBox"+slot);
        if(checkbox.is(":checked")){
            var item = $("#armorSlot"+slot).val();
            equipArmor(item);
        }else{
            var item = $("#armorSlot"+slot).val();
            unequipArmor(item);
        }
    })
};

//Calculates armor class
function equipArmor(item){
    var defence = $("#ArmorClass").text();
    armor = parseInt(defence, 10);
    var armor;
    var dex;
    var AC;
    if(options.armor[item].hasOwnProperty("type")){
        var armorType = options.armor[item].type;
        if (armorType === "Light Armor"){
            armor = options.armor[item].armorClass;
            armor = parseInt(armor, 10);
            dex = $("#dexterityModifier").text();
            dex = parseInt(dex, 10);
            AC = armor + dex;
        }else if (armorType === "Medium Armor"){
            armor = options.armor[item].armorClass;
            armor = parseInt(armor, 10);
            dex = $("#dexterityModifier").text();
            dex = parseInt(dex, 10);
            if (dex > 2){
                dex = 2;
            }
            AC = armor + dex;
        }else if (armorType === "Heavy Armor"){
            AC = options.armor[item].armor_class;
        }else if (armorType === "Shield"){
            armor = options.armor[item].armor_class;
            armor = parseInt(armor, 10);
            AC = armor + defence;
        }
};
    
//Calculates armor class
function unequipArmor(item){
    var defence = $("#ArmorClass").text();
    armor = parseInt(defence, 10);
    var armor;
    var dex;
    var AC;
    if(options.armor[item].hasOwnProperty("type")){
        var armorType = options.equipment[item].type;
        if (armorType === "Light Armor"){
            armor = options.armor[item].armorClass;
            armor = parseInt(armor, 10);
            dex = $("#dexterityModifier").text();
            dex = parseInt(dex, 10);
            AC = defence - (dex + armor);
        }else if (armorType === "Medium Armor"){
            armor = options.armor[item].armorClass;
            armor = parseInt(armor, 10);
            dex = $("#dexterityModifier").text();
            dex = parseInt(dex, 10);
            if (dex > 2){
                dex = 2;
            }
            AC = defence - (armor + dex);
        }else if (armorType === "Heavy Armor"){
            armor = options.armor[item].armorClass;
            armor = parseInt(armor, 10);
            AC = defence - armor;
        }else if (armorType === "Shield"){
            armor = options.equipment[item].armor_class;
            armor = parseInt(armor, 10);
            AC = defence - armor;
        }
        $("#ArmorClass").text(AC);
};
    
//updates AC without equipping and unequipping
function updateArmor(){
    
};

//Calculates skill score when checkbox is clicked
function skillCheckboxClick(label){
    $("#"+label+"CB").on("click", function(){
        var ability;
        if(label === "acrobatics"||label === "sleightOfHand"||label === "stealth"){
            ability = "dexterity"
        }else if(label === "animalHandling"||label === "insight"||label === "medicine"||label === "perception"||label === "survival"){
            ability = "wisdom"
        }else if(label === "arcana"||label === "history"||label === "investigation"||label === "nature"||label === "religion"){
            ability = "intelligence"
        }else if(label === "athletics"){
            ability = "strength"
        }else if(label === "deception"||label === "intimidation"||label === "performance"||label === "persuasion"){
            ability = "charisma"
        }else{
            ability = "constitution"
        }
        skillsCalc(ability, label)
    })
};

//Calculates Saving Throws based on #proficiencyBonus and #[ability]Modifier
//Outputs into #[ability]Save
function savingThrowsCalc(ability){
    var prof = $("#proficiencyBonus").text();
    prof = parseInt(prof, 10);
    AM = $("#"+ability+"Modifier").text();
    AM = parseInt(AM, 10);
    checkbox = $("#"+ability+"CB");
        if(checkbox.is(":checked")){
            output = AM + prof;
        }else{
            output = AM;
        }
        $("#"+ability+"Save").text(output);
};

//calculates Skill score beased on #proficiencyBonus and #[ability]Modifier
//Outputs into #[skill]
function skillsCalc(ability,skill){
    var prof = $("#proficiencyBonus").text();
    prof = parseInt(prof, 10);
    AM = $("#"+ability+"Modifier").text();
    AM = parseInt(AM, 10);
    checkbox = $("#"+skill+"CB");
        if(checkbox.is(":checked")){
            output = AM + prof;
        }else{
            output = AM;
        }
        $("#"+skill).text(output);
};

//recalculates all aspects of the page
function update(){
    
};

//sets all stats to base level
function initStats(){
    
};

//calculates the proficiency score based on "#level"
function proficiencyCalc(){
    var level = $(this).val();
    level = parseInt(level, 10);
    var prof;
    if (level === 1|| level === 2|| level === 3|| level === 4){
        prof = 2;
    }else if (level === 5|| level === 6|| level === 7|| level === 8){
        prof = 3;
    }else if(level === 9|| level === 10|| level === 11|| level === 12){
        prof = 4;
    }else if(level === 13|| level === 14|| level === 15|| level === 16){
        prof = 5;
    }else if(level === 17|| level === 18|| level === 19|| level === 20){
        prof = 6;
    }else{
        alert("Level Error");
        prof = 0;
    }
    $("#proficiencyBonus_input").text(prof);
};

//calculates level based on "#experience"
function levelCalc(){
        var experience = $(this).val();
        experience = parseInt(experience, 10);
        var level;
        if(experience >= 355000){
            level = 20
        }else if(experience >= 305000){
            level = 19
        }else if(experience >= 265000){
            level = 18
        }else if(experience >= 225000){
            level = 17
        }else if(experience >= 195000){
            level = 16
        }else if(experience >= 165000){
            level = 15
        }else if(experience >= 140000){
            level = 14
        }else if(experience >= 120000){
            level = 13
        }else if(experience >= 100000){
            level = 12
        }else if(experience >= 85000){
            level = 11
        }else if(experience >= 64000){
            level = 10
        }else if(experience >= 48000){
            level = 9
        }else if(experience >= 34000){
            level = 8
        }else if(experience >= 23000){
            level = 7
        }else if(experience >= 14000){
            level = 6
        }else if(experience >= 6500){
            level = 5
        }else if(experience >= 2700){
            level = 4
        }else if(experience >= 900){
            level = 3
        }else if(experience >= 300){
            level = 2
        }else if(experience >= 0){
            level = 1
        }else{
            alert("Level Error");
        }
};
    
//adds experience to total
function addExp(){
    $("#experienceUp").on("click", function(){
        //add the imputted number to the total experience
    })
};
    
//subtract experience from total
function subtractExp(){
    $("#experienceDown").on("click", function(){
        //subtract the imputted number from the total experience
    })
};
    
//Test for having proficiency
function isProficient(){
    //check if object is equipped: armor, weapons, etc.
    
    //add proficiency score to the stat
    //attack on weapons, spells
    //this is built-in with the buttons near saving throws and stats
    //has only in-game consequences with armor
};

//calculates and displays weapon damage
function attackCalc(){
    for(var x = 1; x <= 15; x++){
            
            var select = $("#attack" + x.toString() + " select");
            var weapon = select.val();
            if(weapon === String){
                
            }else{
                weapon = options.weapons.Unarmed
            }
            var div = select.parent().next();
            var weaponType = weapon.type;
            var bonus;
            if (weaponType === "melee"){
                bonus = $("#strengthModifier").text();
            }else if(weaponType === "finesse"){
                bonus = $("#dexterityModifier").text();
            }else{
                weapon = options.weapons.Unarmed;
            }
            div.text(bonus);
            div.next().text(weapon.damage, weapon.damageType);
            
        }
}
    
//calculates passive wisdom score
function passiveWisdomCalc(){
    $("#wisdomAS").on("change", function(){
        var abilityScore = $("#perception_output").text();
        abilityScore = parseInt(abilityScore, 10);
        var passiveWisdom = abilityScore + 10;
        $("#passiveWisdom_input").text(passiveWisdom);
    })
}

//calculates initiative
function initiativeCalc(){
    $("#dexterityAS").on("change", function(){
        var abilityScore = $("#dexterityAM").text();
        abilityScore = parseInt(abilityScore, 10);
        var initiative = abilityScore;
        $("#initiative_input").text(initiative);
    })
}
//calculates speed based on race 
function speedCalc(){
    $("#race_input select").on("change", function(){
        var race = $(this).val();
        $("#speed_input").text(options.races[race].base_speed);
    });
};