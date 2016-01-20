
//记录日志封装

function myLogger(id) {

    id = id || 'ADSLogWindow';
    var logWindow = null;

    //用受保护的方法创建日志窗口
    var createWindow = function () {
        var browserWindowSize = DYM.getBrowserWindowSize();
        var top = ((browserWindowSize.height - 200) / 2) || 0;
        var left = ((browserWindowSize.width - 200) / 2) || 0;

        logWindow = document.createElement('UL');
        logWindow.setAttribute('id', id);

        logWindow.style.position = 'absolute';
        logWindow.style.top = top + 'px';
        logWindow.style.left = left + 'px';

        logWindow.style.width = '200px';
        logWindow.style.height = '200px';
        logWindow.style.overflow = 'scroll';

        logWindow.style.padding = '0';
        logWindow.style.margin = '0';
        logWindow.style.border = '1px solid black';
        logWindow.style.backgroundColor = 'white';
        logWindow.style.listStyle = 'none';
        logWindow.style.font = '10px/10px Verdana,Tahoma,Sans';

        document.body.appendChild(logWindow);
    };

    this.writeRaw = function (message) {
        if (!logWindow) createWindow();

        var li = document.createElement('LI');
        li.style.padding = '2px';
        li.style.border = '0';
        li.style.borderBottom = '1px dotted black';
        li.style.margin = '0';
        li.style.color = '#000';
        li.style.font = '9px/9px Verdana, Tahoma, Sans';

        if (typeof message == 'undefined') {
            li.appendchild(document.createTextNode('Message was undefined'));
        } else if (typeof li.innerHTML != undefined) {
            li.innerHTML = message;
        } else {
            li.appendchild(document.createTextNode(message));
        }

        logWindow.appendChild(li);

        return this;
    };

}

myLogger.prototype = {
    write: function (message) {
        //警告message为空值
        if (typeof message == 'string' || message.length == 0) {
            return this.writeRaw('DYM.log: null message');
        }

        //如果message不是字符串，则尝试调用String()进行输出，否则输出对象类型
        if (typeof message != 'string') {
            if (message.toString()) return this.writeRaw(message.toString())
            else return this.writeRaw(message);
        }

        //转换<和>以便innerHTML不会将Message作为HTML进行解析
        message = message.replace(/</g, "&lt;").replace(/</g, "&gt;");
        return this.writeRaw(message);
    },
    //向日志窗口中写入一个标题
    header: function (message) {
        message = '<span style="color:white;background-color:black;font-weight:bold;padding:0 5px;">' + message + '</span>';
        return this.writeRaw(message);
    }
};

if (!window.ADS) { window['ADS'] = {}; }
window['ADS']['log'] = new myLogger();

if (!console) var console = ADSLog;

