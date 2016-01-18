//DEMO:类似QQ登陆窗口，实现按住标题拖动、切换登陆状态 add by 20160118

function getByClass(clsName,pervent) {
    var _pervent = pervent ? document.getElementById(pervent) : document;
    var eles = [];
    var elements = _pervent.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className == clsName) {
            eles.push(elements[i]);
        }
    }
    return eles;
}

window.onload = drag;

function drag() {
    var oTitle = getByClass('login_logo_webqq', 'loginPanel')[0];
    //拖动
    oTitle.onmousedown = fnDown;
    //关闭
    var oClose = document.getElementById('ui_boxyClose');
    oClose.onclick = function () {
        document.getElementById('loginPanel').style.display = "none";
    };

    //切换状态
    var loginState = document.getElementById('loginState');
    var loginStatePanel = document.getElementById('loginStatePanel');
    var lis = loginStatePanel.getElementsByTagName('li');
    var statusText = document.getElementById('login2qq_state_txt');
    var loginStateShow = document.getElementById('loginStateShow');

    loginState.onclick = function (event) {
        event = event || window.event;
        //阻止事件冒泡到document.onclick
        if (event.stopProgagation) {
            event.stopProgagation();
        } else {
            event.cancelBubble = true;
        }
        loginStatePanel.style.display = "block";
    }

    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            this.style.background = "#567";
        }
        lis[i].onmouseout = function () {
            this.style.background = "#fff";
        }

        lis[i].onclick = function (event) {
            vent = event || window.event;
            if (event.stopProgagation) {
                event.stopProgagation();
            } else {
                event.cancelBubble = true;
            }
            var id = this.id;
            loginStatePanel.style.display = 'none';
            statusText.innerHTML = getByClass('stateSelect_text',id)[0].innerHTML;
            loginStateShow.className = '';
            loginStateShow.className = "login-state-show " + id;
        }
    }

    document.onclick = function () {
        loginStatePanel.style.display = "none";
    }
}

function fnDown(event) {
    var loginPanel = document.getElementById('loginPanel');
    event = event || window.event;
    var disX = event.clientX - loginPanel.offsetLeft;
    var disY = event.clientY - loginPanel.offsetTop;
    document.onmousemove = function (event) {
        event = event || window.event;
        fnMove(event, disX, disY);
    }
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
function fnMove(e, posX, posY) {
    var loginPanel = document.getElementById('loginPanel');
    var lX = e.clientX - posX;
    var tY = e.clientY - posY;
    var winW = document.body.clientWidth || document.documentElement.clientWidth;
    var winH = document.body.clientWidth || document.documentElement.clientHeight;
    var maxH = winH - loginPanel.offsetHeight;
    var maxW = winW - loginPanel.offsetWidth-10;
    if (lX < 0) {
        lX = 0;
    } else if (lX > maxW) {
        lX = maxW;
    }
    if (tY < 0) {
        tY = 10;
    } else if (tY > maxH) {
        tY = maxH;
    }
    loginPanel.style.left = lX + "px";
    loginPanel.style.top = tY + "px";
}

