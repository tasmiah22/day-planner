// var container = $('.container');
// var time = $('#currentTime');
// var today = $('#currentDay');

// show todays date and time at the top of page //


var time = (moment().format('HH,mm,ss'));
var date = (moment().format('dddd MMMM Do'));

$("#currentDay").html(date + time);

$(document).ready(function(){
      $(".saveBtn").on("click", function () {
        var enterText = $(this).siblings(".description").val();
        var entryTime = $(this).parent().attr("id");
       localStorage.setItem(entryTime, enterText);
       console.log("Saved");
      });


function timeTracker(){
    var timeNow = moment().hour();

 
// colour code for past present & future events //

$(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (timeBlock < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (timeBlock === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

    // get items from local storage //

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
  

  //call//

timeTracker();
});