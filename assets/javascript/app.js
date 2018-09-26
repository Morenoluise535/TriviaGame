$(document).ready(function(){

var correct= 0
var wrong= 0
var unanswred = 0
var number = 10


$(".qq").hide()
$(".ww1").hide()
$(".donebt").hide()
$(".con").hide()
$(".resetbt").hide()
$(".timeremaining").hide()

function reset(){
    correct = 0;
    wrong = 0;
    unanswred = 0;
    $(".incorrect").html("<h2 class='incorrect'>" + "Wrong: " + wrong + "</h2>");
    $(".correct").html("<h2 class='correct'>" + "Correct: " + correct + "</h2>");
    $('.unanswerd').html("<h2 class='unanswerd'>" + "Unanswerd: " + unanswred + "</h2>");
    $(".qq").hide();
    $(".donebt").hide();
    $(".con").hide();
    $(".resetbt").hide();
    $(".stbt").show();
    $(".timeremaining").hide();
}

function numdown(){
    number--;
    $(".timeremaining").html("Time Remaining: " + number)
}

var one 
var two
var three
var four
var five
var six
var seven
var eight
var nine
var ten

function numrefresh(){
    number = 10;
    $(".timeremaining").html("Time Remaining: " + number);
    clearTimeout(one)
    clearTimeout(two)
    clearTimeout(three)
    clearTimeout(four)
    clearTimeout(five)
    clearTimeout(six)
    clearTimeout(seven)
    clearTimeout(eight)
    clearTimeout(nine)
    clearTimeout(ten)
}




function countdown() {
    numrefresh()
    number
    $(".timeremaining").html("Time Remaining: " + number);
    one = setTimeout(numdown, 1000);
    two = setTimeout(numdown, 2000);
    three = setTimeout(numdown, 3000);
    four = setTimeout(numdown, 4000);
    five = setTimeout(numdown, 5000);
    six = setTimeout(numdown, 6000);
    seven = setTimeout(numdown, 7000);
    eight = setTimeout(numdown, 8000);
    nine = setTimeout(numdown, 9000);
    ten = setTimeout(numdown, 10000);
}

// function stop() {
//     clearTimeout(firstqt);
//     clearTimeout(secondqt);
//     clearTimeout(thirdqt);
//     clearTimeout(fourthqt);
//     clearTimeout(fifthqt);
//     clearTimeout(sixthqt);
//     clearTimeout(seventhqt);
// }



function firstqt() {
    $(".q1").hide();
    $(".ca1").show();
    $(".timeremaining").hide();
    unanswred++;
    $('.unanswerd').html("<h2 class='unanswerd'>" + "Unanswerd: " + unanswred + "</h2>")

}

function secondqt() {
    $(".q2").hide();
    $(".ca2").show();
    $(".timeremaining").hide();
    unanswred++;
    $('.unanswerd').html("<h2 class='unanswerd'>" + "Unanswerd: " + unanswred + "</h2>")

}

function thirdqt() {
    $(".q3").hide();
    $(".ca3").show();
    $(".timeremaining").hide();
    unanswred++;
    $('.unanswerd').html("<h2 class='unanswerd'>" + "Unanswerd: " + unanswred + "</h2>")

}

function fourthqt() {
    $(".q4").hide();
    $(".ca4").show();
    $(".timeremaining").hide();
    unanswred++;
    $('.unanswerd').html("<h2 class='unanswerd'>" + "Unanswerd: " + unanswred + "</h2>")

}

function fifthqt() {
    $(".q5").hide();
    $(".ca5").show();
    $(".timeremaining").hide();
    unanswred++;
    $('.unanswerd').html("<h2 class='unanswerd'>" + "Unanswerd: " + unanswred + "</h2>")

}

function sixthqt() {
    $(".q6").hide();
    $(".ca6").show();
    $(".timeremaining").hide();
    unanswred++;
    $('.unanswerd').html("<h2 class='unanswerd'>" + "Unanswerd: " + unanswred + "</h2>")

}

function seventhqt() {
    $(".q7").hide();
    $(".ca7").show();
    $(".timeremaining").hide();
    unanswred++;
    $('.unanswerd').html("<h2 class='unanswerd'>" + "Unanswerd: " + unanswred + "</h2>")

}

var stfq;
$(".stbt").on('click', function(){
    $(this).hide();
    $(".q1").show();
    $(".timeremaining").show();
    stfq = setTimeout(firstqt, 1000 * 10);
    countdown()
});


$(".qq1").on('click', function(){
    $(".q1").hide();
    $(".ca1").show();
    $(".timeremaining").hide();
    clearTimeout(stfq);
})

var stsq;
$(".nx1").on('click', function(){
    $(".ca1").hide();
    $(".q2").show();
    $(".timeremaining").show();
    stsq = setTimeout(secondqt, 1000 * 10);
    countdown()
})

$(".qq2").on('click', function(){
    $(".q2").hide();
    $(".ca2").show();
    $(".timeremaining").hide();
    clearTimeout(stsq)
})

var sttq
$(".nx2").on('click', function(){
    $(".ca2").hide();
    $(".q3").show()
    $(".timeremaining").show();
    sttq = setTimeout(thirdqt, 1000 * 10);
    countdown()
})

$(".qq3").on('click', function(){
    $(".q3").hide();
    $(".ca3").show();
    $(".timeremaining").hide();
    clearTimeout(sttq)
})

var stfq
$(".nx3").on('click', function(){
    $(".ca3").hide();
    $(".q4").show()
    $(".timeremaining").show();
    stfq = setTimeout(fourthqt, 1000 * 10);
    countdown();
})

$(".qq4").on('click', function(){
    $(".q4").hide();
    $(".ca4").show();
    $(".timeremaining").hide();
    clearTimeout(stfq)
})

var stfvq
$(".nx4").on('click', function(){
    $(".ca4").hide();
    $(".q5").show();
    $(".timeremaining").show();
    stfvq = setTimeout(fifthqt, 1000 * 10);
    countdown()
})

$(".qq5").on('click', function(){
    $(".q5").hide();
    $(".ca5").show();
    $(".timeremaining").hide();
    clearTimeout(stfvq)
})

var settimesix
$(".nx5").on('click', function(){
    $(".ca5").hide();
    $(".q6").show()
    $(".timeremaining").show();
    settimesix = setTimeout(sixthqt, 1000 * 10)
    countdown();
})

$(".qq6").on('click', function(){
    $(".q6").hide();
    $(".ca6").show();
    $(".timeremaining").hide();
    clearTimeout(settimesix);
})

var settimesev
$(".nx6").on('click', function(){
    $(".ca6").hide();
    $(".q7").show();
    $(".timeremaining").show();
    settimesev = setTimeout(seventhqt, 1000 * 10);
    countdown()
})

$(".qq7").on('click',function(){
    $(".q7").hide();
    $(".ca7").show()
    $(".timeremaining").hide();
    clearTimeout(settimesev)
})

$(".nx7").on('click', function(){
    $(".ca7").hide();
    $(".con").show();
    $(".resetbt").show()
})

$('.resetbt').click(function() {
    reset();
});

$('.coranswer').on('click',function() {
    correct++;
    $(".correct").html("<h2 class='correct'>" + "Correct: " + correct + "</h2>");
    $(".cor-wrong").html("<h1 class='cor-wrong'>" + "Correct" + "</h1>")
});

$('.wronganswer').on('click',function() {
    wrong++;
    $(".incorrect").html("<h2 class='incorrect'>" + "Wrong: " + wrong + "</h2>");
    $(".cor-wrong").html("<h1 class='cor-wrong'>" + "Wrong" + "</h1>");


    
});


})