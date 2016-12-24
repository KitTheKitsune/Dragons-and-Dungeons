$(document).ready(function(){
    dropGen("things", "#dropboxOne");
    dropGen("materials", "#dropboxTwo");
    displayText("dropboxOne","parentOne", "popupOne", "things");
    displayText("dropboxTwo","parentTwo", "popupTwo", "materials");
    mouseMove("parentOne", "popupOne");
    mouseMove("parentTwo", "popupTwo");
    
});

//generates drop menus
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

//changes displayed text on page based on dropdown input
function displayText(D,P,p,S){
    $("#"+D+" select").on("change", function(){
        var stuff = $(this).val();
        var choice = options[S]
        $("#"+p).text(choice[stuff].info);
    });
    $("#"+P+"").hover(function(){
        $("#"+p+"").css("display", "block");
    }, function(){
        $("#"+p+"").css("display", "none");
    });
};

function display(P, p, stuff){
    $("#"+P+"").hover(function(){
        var display = Things[stuff].display
        $("#"+p+"").text(display);
        $("#"+p+"").css("display", "block");
    }, function(){
        $("#"+p+"").css("display", "none");
    });
}

function mouseMove(P,p){
    $("#"+P+"").mousemove(function(e){
        var y = e.pageY;
        var x = e.pageX;                    
        $('#'+p+'').css({'top': y++}); 
        $('#'+p+'').css({'left': x+5}); 
    });
}

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