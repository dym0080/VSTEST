var data = ["iPhone6", "iPhone5S", "iPhone6S","iPad Air" ,"华硕笔记本一台","Surface book","小米4手机","华为荣耀6手机","200元购物券","谢谢参与"];
var play = document.getElementById('play');
var stop = document.getElementById('stop');
var title = document.getElementById('title');
var time = null;
var falg = 0;

window.onload = function () {
    eventUitity.addHandler(play, "click", playFun);
    eventUitity.addHandler(stop, "click", StopFun);

    window.onkeyup = function (event) {
        event = event || window.event;
        if (event.keyCode == "13") {
            if (falg == 0) {
                playFun();
                falg = 1;
            } else {
                StopFun();
                falg = 0;
            }
        }
    }
}
function playFun() {
    clearInterval(time);
    time = setInterval(function () {
        var random = Math.floor(Math.random() * data.length);
        title.innerHTML = data[random];
    }, 50);
    play.style.background = "#999";
}
function StopFun() {
    clearInterval(time);
    play.style.background = "#036";
}

