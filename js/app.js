var color = $(".selected").css("background-color"); 
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var mouseDown = false;


//When clicking on Control list items
$(".controls").on("click", "li", function(){

    //Deselect sibling elements
    $(this).siblings().removeClass("selected");
    //Select clicked element
    $(this).addClass("selected");
    
    //Cache current color here
    color = $(this).css("background-color");
    });

//When new color is pressed
$("#revealColorSelect").click(function() {
    //Show color select or hide color select
    changeColor();
    $("#colorSelect").toggle();
});

    //update the new color span 
function changeColor () {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//When color sliders change
$("input[type=range]").on("input", changeColor);

//When add color is pressed
$("#addNewColor").click(function() {
      //Append color to the controls ul
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    //Select the new color
    $newColor.click();

});

//On mouse events on teh canvas
$canvas.mousedown(function(e) {
    lastEvent = e;
    mouseDown = true;
}).mousemove(function(e) {
        //draw lines 
    if (mouseDown) { 
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function() {
    mouseDown = false;
});


//Add Appbase to:
    //1. Set Data
    //2. Add multiple users 






















