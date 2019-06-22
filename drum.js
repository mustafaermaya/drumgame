
document.querySelector("body").addEventListener("keydown", function (event) {
    if (event.keyCode == "65") {
        tiz.currentTime = 0;
        tiz.play();
        addclass();
        timeout();
    }

    else if (event.keyCode == "83") {
        drum.currentTime = 0;
        drum.play();
        addclass();
        timeout();

    }
    else if (event.keyCode == "68") {
        woodblock.currentTime = 0;
        woodblock.play();
        addclass();
        timeout();
    }
    if (event.keyCode == "70") {
        alkis.currentTime = 0;
        alkis.play();
        addclass();
        timeout();
    }
    else if (event.keyCode == "71") {
        drum2.currentTime = 0;
        drum2.play();
        addclass();
        timeout();
    }
    else if (event.keyCode == "72") {
        stickhit.currentTime = 0;
        stickhit.play();
        addclass();
        timeout();
    }
    else if (event.keyCode == "74") {
        tiz2.currentTime = 0;
        tiz2.play();
        addclass();
        timeout();
    }
    else if (event.keyCode == "75") {
        zil.currentTime = 0;
        zil.play();
        addclass();
        timeout();
    }
    else if (event.keyCode == "76") {
        ritim1.currentTime = 0;
        ritim1.play();
        addclass();
        timeout();
    }
    else if (event.keyCode == "186") {
        ritim2.currentTime = 0;
        ritim2.play();
        addclass();
        timeout();
    }

});

var tiz = new Audio("audios/tiz.wav");
var drum = new Audio("audios/drum.wav");
var woodblock = new Audio('audios/woodblock.mp3');
var alkis = new Audio('audios/alkis.wav');
var drum2 = new Audio("audios/drum2.wav");
var stickhit = new Audio("audios/stickhit.wav");
var tiz2 = new Audio('audios/tiz2.wav');
var zil = new Audio("audios/zil.wav");
var ritim1 = new Audio("audios/ritim1.wav");
var ritim2 = new Audio("audios/ritim2.wav");

function addclass() {
    var element1 = document.querySelectorAll(".key");
    for (let index = 0; index < element1.length; index++) {
        const element = element1[index].classList.add("playing");
    }
}

function removeclass() {
    var element2 = document.querySelectorAll(".key");
    for (let index = 0; index < element2.length; index++) {
        const element = element2[index].classList.remove("playing");
    }
}
function timeout() {
    setTimeout(() => {
        removeclass();
    }, 100);
}


