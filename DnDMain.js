//DnDMain.js
//The main calling function of the DnD program
//by _Kendrick_Smith


//create a div for main menu
//when loading character, or making new character, hide that div and display page

$(document).ready(function(){

    dropGen("races", "#newCharRace")
    dropGen("classes","#newCharClass")

    $("#newCharButton").click(function(){
        hideMenu();
        displayPage();
        var player = $("#newPlayerName").val()
        var character = $("#newCharName").val()
        var clas = $("#newCharClass").val()
        var race = $("#newCharRace").val()
    });

    $("#loadCharButton").click(function(){
        hideMenu();
        displayPage();
        loadCharacter($("#loadCharName").val());
    })

});
