$(document).ready(function(){
    dropGen("weapons", ".weapon_name");
    dropGen("equipment", ".itemSlot");
    dropGen("feats", ".featsSlot");
    dropGen("races", "#race_input");
    dropGen("classes", "#class_input");
    dropGen("alignments", "#alignment_input");
    dropGen("proficiencies", ".proficiencySlot");
    dropGen("personality", ".personalitySlot");
    dropGen("ideal", ".idealSlot");
    dropGen("bond", ".bondSlot");
    dropGen("flaw", ".flawSlot");
    abilityScore("strength");
    abilityScore("dexterity");
    abilityScore("constitution");
    abilityScore("intelligence");
    abilityScore("wisdom");
    abilityScore("charisma");
    saveCheckboxClick("strength");
    saveCheckboxClick("dexterity");
    saveCheckboxClick("constitution");
    saveCheckboxClick("intelligence");
    saveCheckboxClick("wisdom");
    saveCheckboxClick("charisma");
    skillCheckboxClick("acrobatics");
    skillCheckboxClick("animalHandling");
    skillCheckboxClick("arcana");
    skillCheckboxClick("athletics");
    skillCheckboxClick("deception");
    skillCheckboxClick("history");
    skillCheckboxClick("insight");
    skillCheckboxClick("intimidation");
    skillCheckboxClick("investigation");
    skillCheckboxClick("medicine");
    skillCheckboxClick("nature");
    skillCheckboxClick("perception");
    skillCheckboxClick("performance");
    skillCheckboxClick("persuasion");
    skillCheckboxClick("religion");
    skillCheckboxClick("sleightOfHand");
    skillCheckboxClick("stealth");
    skillCheckboxClick("survival");
    displayText("dropdown","popup","weapons");
    mouseMove();
    
    
    $("#class_input").change(function() {
        
    });
    
    var data ={

    };
    
    $("#level").on("change", function(){
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
            prof = "";
        }
        $("#proficiencyBonus_input").text(prof);
        
        //Calculate saving throws based on modifiers
        savingThrowsCalc("strength");
        savingThrowsCalc("dexterity");
        savingThrowsCalc("constitution");
        savingThrowsCalc("intelligence");
        savingThrowsCalc("wisdom");
        savingThrowsCalc("charisma");
        
        //Calculate skills based on stats
        skillsCalc("strength", "athletics");
        skillsCalc("dexterity", "acrobatics");
        skillsCalc("dexterity", "sleightOfHand");
        skillsCalc("dexterity", "stealth");
        skillsCalc("intelligence", "arcana");
        skillsCalc("intelligence", "history");
        skillsCalc("intelligence", "investigation");
        skillsCalc("intelligence", "nature");
        skillsCalc("intelligence", "religion");
        skillsCalc("wisdom", "animalHandling");
        skillsCalc("wisdom", "insight");
        skillsCalc("wisdom", "medicine");
        skillsCalc("wisdom", "perception");
        skillsCalc("wisdom", "survival");
        skillsCalc("charisma", "deception");
        skillsCalc("charisma", "intimidation");
        skillsCalc("charisma", "performance");
        skillsCalc("charisma", "persuasion");
        
       
        }
        
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
                bonus = $("#strengthAM").text();
            }else if(weaponType === "finesse"){
                bonus = $("#dexterityAM").text();
            }else{
                weapon = options.weapons.Unarmed;
            }
            div.text(bonus);
            div.next().text(weapon.damage);
            
        }
    
    $("#wisdomAS").on("change", function(){
        var abilityScore = $("#perception_output").text();
        abilityScore = parseInt(abilityScore, 10);
        var passiveWisdom = abilityScore + 10;
        $("#passiveWisdom_input").text(passiveWisdom);
    });
    $("#dexterityAS").on("change", function(){
        var abilityScore = $("#dexterityAM").text();
        abilityScore = parseInt(abilityScore, 10);
        var initiative = abilityScore;
        $("#initiative_input").text(initiative);
    });
    $("div.weapon_name select").on("change", function(){
        var select = $(this);
        var weapon = select.val();
        if(weapon === String){
                
            }else{
                weapon = options.weapons.Unarmed
            }
        var div = select.parent().next();
        var weaponType = weapon.type;
        var bonus;
        if (weaponType === "melee"){
            bonus = $("#strengthAM").text();
        }else if(weaponType === "finesse"){
            bonus = $("#dexterityAM").text();
        }
        div.text(bonus);
        div.next().text(weapon.damage);
    });
    
    //calculates speed based on race
    $("#race_input select").on("change", function(){
        var race = $(this).val();
        $("#speed_input").text(options.races[race].base_speed);
    });
    
    //calculates Armor Class
    $("div.itemSlot select").on("change", function(){
        var select = $(this);
        var item = select.val();
        var defence = $("#AC_input").text();
        defence = parseInt(defence, 10);
        var armor;
        var dex;
        var AC;
        if(options.armor[item].hasOwnProperty("type")){
            var armorType = options.equipment[item].type;
            if (armorType === "Light Armor"){
                armor = options.equipment[item].armor_class;
                armor = parseInt(armor, 10);
                dex = $("#dexterityAM").text();
                dex = parseInt(dex, 10);
                AC = armor + dex;
            }else if (armorType === "Medium Armor"){
                armor = options.equipment[item].armor_class;
                armor = parseInt(armor, 10);
                dex = $("#dexterityAM").text();
                dex = parseInt(dex, 10);
                if (dex > 2){
                    dex = 2;
                }
                AC = armor + dex;
            }else if (armorType === "Heavy Armor"){
                AC = options.equipment[item].armor_class;
            }else if (armorType === "Shield"){
                armor = options.equipment[item].armor_class;
                armor = parseInt(armor, 10);
                AC = armor + defence;
            }
            for(var x = 1; x <= 15; x++){
                var target = "#profSlot" + x.toString() + " select";

                if ($(target).val() == options.equipment[item].name + " " + "Proficiency" ){
                    var prof = $("#proficiencyBonus_input").text();
                    prof = parseInt(prof, 10);
                    AC = parseInt(AC);
                    AC = prof + AC;
                    break;
                }
            }
        }
        $("#AC_input").text(AC);
    }
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

function displayText(P,p,S){
    $("."+P+" select").on("change", function(){
        var stuff = $(this).val();
        var choice = options[S]
        $("#popup").text(choice[stuff].info);
    });
    $("."+P+"").hover(function(){
        $("#popup ").css("display", "block");
    }, function(){
        $("#popup ").css("display", "none");
    });
};

function mouseMove(P,p){
    $("#"+P+"").mousemove(function(e){
        var y = e.pageY;
        var x = e.pageX;                    
        $('#'+p+'').css({'top': y++}); 
        $('#'+p+'').css({'left': x+5}); 
    });
}

function abilityScore(label){
    $("#"+label+"AS").on("change", function(){
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
        }else if(abilityScore === 20){
           output = 5;
       }else{
           alert("Ability Score Error");
       }
        $("#"+label+"AM").text(output);
        savingThrowsCalc(label);
        if (label === "strength"){
            skillsCalc(label, "athletics");
        }else if(label === "dexterity"){
            skillsCalc(label, "acrobatics");
            skillsCalc(label, "sleightOfHand");
            skillsCalc(label, "stealth");
        }else if(label === "constitution"){
            
        }else if(label === "intelligence"){
            skillsCalc(label, "arcana");
            skillsCalc(label, "history");
            skillsCalc(label, "investigation");
            skillsCalc(label, "nature");
            skillsCalc(label, "religion");
        }else if(label === "wisdom"){
            skillsCalc(label, "animalHandling");
            skillsCalc(label, "insight");
            skillsCalc(label, "medicine");
            skillsCalc(label, "perception");
            skillsCalc(label, "survival");
        }else if(label === "charisma"){
            skillsCalc(label, "deception");
            skillsCalc(label, "intimidation");
            skillsCalc(label, "performance");
            skillsCalc(label, "persuasion");
        }else{
            alert("skills error")
        }
        });
    
        for(var x = 1; x <= 15; x++){
            
            var select = $("attack" + x.toString() + " select");
            var weapon = select.val();
            if(weapon === String){
                
            }else{
                weapon = options.weapons.Unarmed
            }
            var div = select.parent().next();
            var weaponType = weapon.type;
            var bonus;
            if (weaponType === "melee"){
                bonus = $("#strengthAM").text();
            }else if(weaponType === "finesse"){
                bonus = $("#dexterityAM").text();
            }
            div.text(bonus);
            div.next().text(weapon.damage);
            
        }
    }
function saveCheckboxClick(label){
    $("#"+label+"CB").on("click", function(){
        savingThrowsCalc(label);
    })
}
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
}
function savingThrowsCalc(label){
    var prof = $("#proficiencyBonus_input").text();
    prof = parseInt(prof, 10);
    AM = $("#"+label+"AM").text();
    AM = parseInt(AM, 10);
    checkbox = $("#"+label+"CB");
        if(checkbox.is(":checked")){
            output = AM + prof;
        }else{
            output = AM;
        }
        $("#"+label + "Save").text(output);
    }
function skillsCalc(label, Skill){
    var prof = $("#proficiencyBonus_input").text();
    prof = parseInt(prof, 10);
    Mod = $("#"+label+"AM").text();
    Mod = parseInt(Mod, 10);
    checkbox = $("#" + Skill + "CB");
    if (checkbox.is(":checked")){
        output = Mod + prof;
    }else{
        output = Mod;
    }
    $("#" + Skill + "_output").text(output);
}