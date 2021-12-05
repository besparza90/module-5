//This function generates the current date. It is generated in the header with .html into the "currentDay" id.
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
//Ready() is used to store other functions. .on is used as an event handler for the save button. The functions sets variables and stores elements from user input.
$(function () { 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

//Allows input to be saved.
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time13 .description").val(localStorage.getItem("time13"));
    $("#time14 .description").val(localStorage.getItem("time14"));
    $("#time15 .description").val(localStorage.getItem("time15"));
    $("#time16 .description").val(localStorage.getItem("time16"));
    $("#time17 .description").val(localStorage.getItem("time17"));
    
    colorHour();
})
//The function retreives the current hour and creates a loop where each block goes through a parse function. The block is colored based on the relation between the value and the current time. This is done by adding CSS classes.
function colorHour() {
    var currentTime = moment().hour();
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("time")[1]);
        if (blockTime < currentTime) {
            $(this).addClass("past");
        } else if (blockTime === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");

        }
    })
}