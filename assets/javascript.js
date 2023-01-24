var container = $('.container');
var time = moment().format("dddd, MMM Do YYYY", "");
var today = moment().format("HH:mm:ss");
var schedule = JSON.parse(localStorage.getItem('schedule')) || {
    9:'',
    10:'',
    11:'',
    12:'',
    1:'',
    2:'',
    3:'',
    4:'',
    5:'',
};

// show todays date and time at the top of page //

$("#currentday").html(today + time); 

$(document).ready(function () {
$(".saveBtn").on("click", function (){
    var enterText = $(this).siblings(".description").val();
    var entryTime = $(this).parent().attr("id");

    localStorage.setItem(entryTime, enterText);
    console.log("Saved.");

});

function timeTracker(){
    var timeNow = moment().hour();

