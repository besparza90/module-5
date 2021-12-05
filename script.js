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
    $("#time1 .description").val(localStorage.getItem("time1"));
    $("#time2 .description").val(localStorage.getItem("time2"));
    $("#time3 .description").val(localStorage.getItem("time3"));
    $("#time4 .description").val(localStorage.getItem("time4"));
    $("#time5 .description").val(localStorage.getItem("time5"));
}) 