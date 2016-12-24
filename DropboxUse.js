$(document).ready(function(){
    dropGen("things", "#dropbox");
    
    //changes displayed text on page based on dropdown input
    $("#dropbox select").on("change", function(){
        var stuff = $(this).val();
        $("#info").text(options.things[stuff].info);
    });
});

//generates a drop down menu
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



var options = {
    things:{
        stuff1:{
            display: "This is what you see for #1",
            info: "This is not what you see for #1" 
        },
        stuff2:{
            display: "This is what you see for #2",
            info: "This is not what you see for #2"
        },
        stuff3:{
            display: "See number 3",
            info: "Not See 3"
        },
        stuff4:{
            display: "Fear number 4",
            info: "hate number four"
        }
    },
    materials:{
        rocks:{
            display: "They're stony",
            info: "Attack: 1"
        },
        paper:{
            display: "It's pulpy",
            info: "Attack: 2"
        }
    }
}