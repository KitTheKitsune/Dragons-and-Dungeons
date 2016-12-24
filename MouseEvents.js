$(document).ready(function(){
    display("parent","popup","stuff1");
    display("parentTwo","popupTwo","stuff2");
    display("parentThree", "popupThree", "stuff3");
    display("parentFour", "popupFour", "stuff4");
    mouseMove("parent", "popup");
    mouseMove("parentTwo", "popupTwo");
    mouseMove("parentThree", "popupThree");
    mouseMove("parentFour", "popupFour");
});
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
        $('#'+p+'').css({'top': y}); 
        $('#'+p+'').css({'left': x}); 
    });
}
                  
var Things = {
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
};