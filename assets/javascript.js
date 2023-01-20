var container = $('.container');
var time = $(09,'HH');
var today = $('#today');
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

// show todays day at the top of page //

today.text(moment().format('dddd MMMM Do'));



