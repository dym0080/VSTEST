//事件处理函数封装对象(考虑各个版本浏览器的兼容性)
var eventUitity = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            //DOM2级非IE添加监听事件
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            //DOM2级IE添加监听事件
            element.attachEvent("on" + type, handler)
        } else {
            //DOM0级添加监听事件
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            //DOM2级非IE移除监听事件
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            //DOM2级IE移除监听事件
            element.detachEvent("on" + type, handler)
        } else {
            //DOM0级移除监听事件
            element["on" + type] = handler;
        }
    },
    //获取event对象
    getEvent: function (event) {
        //return event || window.event;
        return event ? event : window.event;
    },
    //获取event对象类型
    getEventType: function (event) {
        event.type;
    },
    //获取event对象节点
    getElement: function (event) {
        return event.target || event.srcElement;
    },
    preventDefalut: function (event) {
        if (event.preventDefalut) {
            //非IE阻止事件默认行为
            event.preventDefalut();
        } else {
            //IE阻止事件默认行为
            event.returnValue = false;
        }
    },
    stopProgagation: function (event) {
        if (event.stopProgagation) {
            //非IE阻止事件冒泡
            event.stopProgagation();
        } else {
            //IE阻止事件冒泡
            event.cancelBubble = true;
        }
    }
}