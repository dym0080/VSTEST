



(function () {


    if (!window.DYM) { window['DYM'] = {} };

    function isCompatible(other) { };
    window['DYM']['isCompatible'] = isCompatible;

    function $() { };
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