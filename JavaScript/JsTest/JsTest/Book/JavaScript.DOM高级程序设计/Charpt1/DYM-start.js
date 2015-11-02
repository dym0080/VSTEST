



(function () {


    if (!window.DYM) { window['DYM'] = {} };

    function isCompatible(other) {
        //使用能力检测来检查必要条件
        if(other===false
            ||!Array.prototype.push
            ||!Object.hasOwnProperty
            ||!document.createElement
            ||!document.getElementsByTagName
            ){
                return false;
            }
            return true;
    };
    window['DYM']['isCompatible'] = isCompatible;

    function $() {
        var elements = new Array();

        for (var i = 0; i <arguments.length; i++) {
            var element = arguments[i];

            if(typeof element =="string"){
                element = document.getElementById(element);
            }

            if (arguments.length == 1) {
                return element;
            }

            elements.push(element);
        }
        return elements;
    };
    window['DYM']['$'] = $;

    function addEvent(node, type, listener) { };
    window['DYM']['addEvent'] = addEvent;

    function removeEvent(node, type, listener) { };
    window['DYM']['removeEvent'] = removeEvent;

    function getElementsByClassName(className, tag, parent) { };
    window['DYM']['getElementsByClassName'] = getElementsByClassName;

    function toggleDisplay(node, value) { };
    window['DYM']['toggleDisplay'] = toggleDisplay;

    function insertAfter(node, referenceNode) { };
    window['DYM']['insertAfter'] = insertAfter;

    function removeChildren(parent) { };
    window['DYM']['removeChildren'] = removeChildren;

    function prependChild(parent, newChild) { };
    window['DYM']['prependChild'] = prependChild;
})();