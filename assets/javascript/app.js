$(document).ready(function(){

var questionanswers = [{
    options: ["Takuya", "Kari", "Tai", "Matt"],
    answer: 0
},{
    options: ["Myotismon","Daemon","Blackwargreymon","The Digimon Emperor"],
    answer: 0
},{
    options: ["Armodillomon","Patamon","Hawkmon","Veemon"],
    answer: 3
},{
    options: ["Kari","Joe","TK","Davis"],
    answer: 3
},{
    options: ["Devimon","Shellmon","Kuwagamon","Etemon"],
    answer: 2
},{
    options: ["TK","Sora","Tai","Matt"],
    answer: 2
},{
    options: ["Patamon","Palmon","Agumon","Gatomon"],
    answer: 3
}]

$(".qq").hide()
$(".donebt").hide()
$(".con").hide()
$(".resetbt").hide()

$(".stbt").on('click', function(){
    $(this).hide();
    $(".qq").show()
    $(".donebt").show()
});

$(".donebt").on('click', function(){
    $(this).hide();
    $(".qq").hide();
    $(".con").show();
    $(".resetbt").show();
});

$('.resetbt').click(function() {
    location.reload();
});



})