

//背景：学习“[JavaScript.DOM高级程序设计]桑贝斯”这本书，根据内容一步一步开始构建自己的库，这也是本书作者所说的核心价值所在。

if(document.all&&!document.getElementById){
    document.getElementById=function(id){
        return document.all[id];
    }
}

//生成重复的字符串
if(!String.repeat){
    String.prototype.repeat=function(i){
        return new Array(i+1).join(this);
    }
}

//清楚开头和结尾的空字符串
if(!String.trim){
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g,'');
    }
}


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

        //查找作为参数提供的所有元素
        for (var i = 0; i <arguments.length; i++) {
            var element = arguments[i];

            //如果该参数是一个字符串那假设它是一个id
            if(typeof element =="string"){
                element = document.getElementById(element);
            }

            //如果只提供一个参数则立刻返回这个元素
            if (arguments.length == 1) {
                return element;
            }

            //否则，将它添加到数组中
            elements.push(element);
        }

        //返回包含多个被请求元素的数组
        return elements;
    };
    window['DYM']['$'] = $;

    function addEvent(node, type, listener) {
        //使用前面的方法检查兼容性以保证平稳退化
        if (!isCompatible()) {return false;}

        if (!(node = $(node))) { return false; }

        if (node.addEventListener) {
            //W3C方法-- 这里不理解
            node.addEventListener(type, listener, false);
            return true;
        } else if (node.attachEvent) {
            //MSIE的方法 --这里不理解
            node['e' + type + listener] = listener;
            node[type + listener] = function () {
                node['e' + type + listener](window.event);
            }
            node.attachEvent('on' + type, node[type + listener]);
            return true;
        }

        //若两种方法都不具备则返回False
        return false;
    };
    window['DYM']['addEvent'] = addEvent;

    function removeEvent(node, type, listener) {
        if (!(node = $(node))) { return false; }

        if (node.removeEventListener) {
            //W3C方法-- 这里不理解
            node.removeEventListener(type, listener, false);
            return true;
        } else if (node.detachEvent) {
            //MSIE的方法 --这里不理解
            node.detachEvent('on' + type, node[type + listener]);
            node[type + listener] = null;
            return true;
        }

        //若两种方法都不具备则返回False
        return false;
    };
    window['DYM']['removeEvent'] = removeEvent;

    function getElementsByClassName(className, tag, parent) {
        parent = parent || document;
        if(!(parent=$(parent)){return false;}

        //查找所有匹配的标签
        var allTags=(tag=="*"&&parent.all)?parent.all:parent.getElementsByTagName(tag);
        var matchingElements=new Array();

        //创建一个正则表达式。来判断className是否正确
        className = className.replace(/\-/g, "\\-");
        var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");

        var element;
        //检查每个元素
        for(var i=0; i<allTags.length; i++){
            element = allTags[i];
            if(regex.test(element.className)){
                matchingElements.push(element);
            }
        }
    
        // 返回任何匹配的元素
        return matchingElements;
    };
    window['DYM']['getElementsByClassName'] = getElementsByClassName;

    function toggleDisplay(node, value) {
        if(!(node=$(node))){return false;}

        if(node.style.display!='none'){
            node.style.display='none';
        }else{
            node.style.display=value||'';
        }
        return true;
    };
    window['DYM']['toggleDisplay'] = toggleDisplay;

    function insertAfter(node, referenceNode) {
        if(!(node=$(node))){return false;}
        if(!(referenceNode=$(referenceNode))){return false;}
        return referenceNode.parentNode.insertBefore(node,referenceNode.nextSibling);
    };
    window['DYM']['insertAfter'] = insertAfter;

    function removeChildren(parent) {
        if(!(parent=$(parent))){return false;}

        //当存在子节点时删除该子节点
        while(parent.firstChild){
            parent.firstChild.parentNode.removeChild(parent.firstChild);//--是否为removeChildren？
        }

        //再返回父元素，以便实现方法连缀
        return parent;
    };
    window['DYM']['removeChildren'] = removeChildren;

    function prependChild(parent, newChild) {
        if(!(parent=$(parent))){return false;}
        if(!(newChild=$(newChild))){return false;}

        if(parent.firstChild){
            //如果存在一个子节点，则在这个子节点之前插入
            parent.insertBefore(newChild,parent.firstChild);
        }else{
            //如果没有子节点直接插入
            parent.appendChild(newChild);
        }

        //再返回父元素，以便实现方法连缀
        return parent;

    };
    window['DYM']['prependChild'] = prependChild;

    function bindFunction(obj,func){
        return function(){
            func.apply(obj,arguments);
        };
    };
    window['DYM']['bindFunction'] = bindFunction;

    function myLogger(id){
        id=id||'DYMLogWindow';
        var logWindow=null;
        var createWindow=function(){

        };

        this.writeRaw=function(message){};

    }
    myLogger.prototype={
        write:function(message){},
        header:function(message){}
    };
    if(!window.DYM){window['DYM']={};}
    window['DYM']['log'] = new myLogger();

    //获取浏览器窗口大小
    function getBrowserWindowSize(){
        var de=document.documentElement;
        return{
            'width':(window.innerWidth||(de&&de.clientWidth)||document.body.clientWidth),
            'height':(window.innerHeight||de&&de.clientHeight||document.body.clientHeight)
        }
    };
    window['DYM']['getBrowserWindowSize'] =getBrowserWindowSize;

    /********************************
    * Chapter 3
    *********************************/
    window['ADS']['node'] = {
        ELEMENT_NODE                : 1,
        ATTRIBUTE_NODE              : 2,
        TEXT_NODE                   : 3,
        CDATA_SECTION_NODE          : 4,
        ENTITY_REFERENCE_NODE       : 5,
        ENTITY_NODE                 : 6,
        PROCESSING_INSTRUCTION_NODE : 7,
        COMMENT_NODE                : 8,
        DOCUMENT_NODE               : 9,
        DOCUMENT_TYPE_NODE          : 10,
        DOCUMENT_FRAGMENT_NODE      : 11,
        NOTATION_NODE               : 12
    };

    //获取指定节点中的所有Element节点
    function walkElementsLinear(func,node){
        var root=node||window.document;
        var nodes=root.getElementsByTagName('*');
        for (var i = 0; i < nodes.length; i++) {
            func.call(nodes[i]);
        }
    }
    window['DYM']['walkElementsLinear'] =walkElementsLinear;

    //通过指定节点node，并通过节点的深度，递归获取DOM树
    function walkTheDOMRecursive(func,node,depth,returnedFromParent){
        var root=node||window.document;
        //var returnedFromParent=func.call(root,depth++,returnedFromParent);
        //var node=root.firstChild;
        returnedFromParent=func.call(root,depth++,returnedFromParent);
        node=root.firstChild;
        while(node){
            walkTheDOMRecursive(func,node,depth,returnedFromParent);
            node=node.nextSibling;
        }
    }
    window['DYM']['walkTheDOMRecursive'] =walkTheDOMRecursive;

    //查找每个节点的属性--copy
    function walkTheDOMWithAttributes(node,func,depth,returnedFromParent) {
        var root = node || window.document;
        returnedFromParent = func(root,depth++,returnedFromParent);
        if (root.attributes) {
            for(var i=0; i < root.attributes.length; i++) {
                walkTheDOMWithAttributes(root.attributes[i],func,depth-1,returnedFromParent);
            }
        }
        if(root.nodeType != ADS.node.ATTRIBUTE_NODE) {
            node = root.firstChild;
            while(node) {
                walkTheDOMWithAttributes(node,func,depth,returnedFromParent);
                node = node.nextSibling;
            }
        }
    };
    window['DYM']['walkTheDOMWithAttributes'] = walkTheDOMWithAttributes;

    //处理嵌入的样式属性--copy
    function camelize(s) {
        return s.replace(/-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase();
        });
    }
    window['DYM']['camelize'] = camelize;


    /********************************
    * Chapter 4
    *********************************/
    //阻止冒泡
    function stopPropagation(event){
        event=event||window.event;
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
    window['DYM']['stopPropagation'] = stopPropagation;

    //阻止默认行为
    function preventDefault(event){
        event=event||window.event;
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    }
    window['DYM']['preventDefault'] = preventDefault;

    //获取事件对象
    function getEventObject(W3CEvent){
        return W3CEvent||window.event;
    }
    window['DYM']['getEventObject'] = getEventObject;

    //访问事件的目标元素
    function getTarget(event){
        event=event||getEventObject(event);

        //前者是W3C中定义的属性，后者是IE中定义的属性
        var target=event.target||event.srcElement;

        //如果像Safai中一样是一个文本节点，重新将目标对象指定为父元素
        if(target.nodeType==DYM.node.TEXT_NODE){
            target=target.parentNode;
        }

        return target;
    }
    window['DYM']['getTarget'] = getTarget;

    //获取单击了哪个鼠标键
    function getMouseButton(event) {
        event = event || getEventObject(event);
        var buttons = {
            'left': false,
            'middle': false,
            'right': false
        };
        if (event.toString && event.toString().indexOf('MosuseEvent') != -1) {
            //W3C DOM
            switch (event.button) {
                case 0:
                    buttons.left = true;
                    break;
                case 1:
                    buttons.middle = true;
                    break;
                case 2:
                    buttons.right = true;
                    break;
                default: break;
            }
        } else if (event.button) {
            //IE
            switch (event.button) {
                case 1:
                    buttons.left = true;
                    break;
                case 2:
                    buttons.right = true;
                    break;
                case 3:
                    buttons.left = true;
                    buttons.right = true;
                    break;
                case 4:
                    buttons.middle = true;
                    break;
                case 5:
                    buttons.left = true;
                    buttons.middle = true;
                    break;
                case 6:
                    buttons.right = true;
                    buttons.middle = true;
                    break;
                case 7:
                    buttons.left = true;
                    buttons.right = true;
                    buttons.middle = true;
                    break;
                default:break;
            }
                    
        } else {
            return false;
        }
        return buttons;
    }
    window['DYM']['getMouseButton'] = getMouseButton;

    //获取鼠标位置
    function getPointerPositionInDocument(event){
        event=event||getEventObject(event);
        //兼容顺序分别为Safari、W3C、IE
        //var x=event.pageX||event.clientX+document.body.scrollLeft||event.clientX+document.documentElement.scrollLeft;
        var x=event.pageX||(event.clientX+(document.body.scrollLeft||document.documentElement.scrollLeft));
        var y=event.pageY||(event.clientY+(document.body.scrollTop||document.documentElement.scrollTop));
        return{'x':x,'y':y};
    }
    window['DYM']['getPointerPositionInDocument'] = getPointerPositionInDocument;

    //获取键盘的按键代码及相关的ASCll值
    function getKeyPressed(event){
        event=event||getEventObject(event);
        var code=event.keyCode;
        var value=String.fromCharCode(code);
        return{'code':code,'value':value};
    }
    window['DYM']['getKeyPressed'] = getKeyPressed;

   /********************************
   * Chapter 5
    *********************************/

    //根据ID设置样式--copy
    function setStyleById(element, styles) {
        if(!(element = $(element))) return false;
        for (property in styles) {
            if(!styles.hasOwnProperty(property)) continue;
    
            if(element.style.setProperty) {
                element.style.setProperty(
                uncamelize(property,'-'),styles[property],null);
            } else {
                element.style[camelize(property)] = styles[property];
            }
        }
        return true;
    }
    window['DYM']['setStyle'] = setStyleById;
    window['DYM']['setStyleById'] = setStyleById;

    //根据ClassName设置样式--copy
    function setStylesByClassName(parent, tag, className, styles) {
        if(!(parent = $(parent))) return false;
        var elements = getElementsByClassName(className, tag, parent);
        for (var e = 0 ; e < elements.length ; e++) {
            setStyleById(elements[e], styles);
        }
        return true;
    }
    window['DYM']['setStylesByClassName'] = setStylesByClassName;

    //根据TagName设置样式--copy
    function setStylesByTagName(tagname, styles, parent) {
        parent = $(parent) || document;
        var elements = parent.getElementsByTagName(tagname);
        for (var e = 0 ; e < elements.length ; e++) {
            setStyleById(elements[e], styles);
        }
    }
    window['DYM']['setStylesByTagName'] = setStylesByTagName;

    //获取包含元素类名的数组--copy
    function getClassNames(element) {
        if(!(element = $(element))) return false;
        return element.className.replace(/\s+/,' ').split(' ');
    };
    window['DYM']['getClassNames'] = getClassNames;

    //检查元素中是否存在某个类--copy
    function hasClassName(element, className) {
        if(!(element = $(element))) return false;
        var classes = getClassNames(element);
        for (var i = 0; i < classes.length; i++) {
            if (classes[i] === className) { return true; }
        }
        return false;
    };
    window['DYM']['hasClassName'] = hasClassName;

    //为元素添加类--copy
    function addClassName(element, className) {
        if(!(element = $(element))) return false;
        element.className += (element.className ? ' ' : '') + className;
        return true;
    };
    window['DYM']['addClassName'] = addClassName;

    //从元素中删除类--copy
    function removeClassName(element, className) {
        if(!(element = $(element))) return false;
        var classes = getClassNames(element);
        var length = classes.length
        for (var i = length-1; i >= 0; i--) {
            if (classes[i] === className) { delete(classes[i]); }
        }
        element.className = classes.join(' ');
        return (length == classes.length ? false : true);
    };
    window['DYM']['removeClassName'] = removeClassName;

    //添加新样式表--copy
    function addStyleSheet(url,media) {
        media = media || 'screen';
        var link = document.createElement('LINK');
        link.setAttribute('rel','stylesheet');
        link.setAttribute('type','text/css');
        link.setAttribute('href',url);
        link.setAttribute('media',media);
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    window['DYM']['addStyleSheet'] = addStyleSheet;

    //移除样式表--copy
    function removeStyleSheet(url,media) {
        var styles = getStyleSheets(url,media);
        for(var i = 0 ; i < styles.length ; i++) {
            var node = styles[i].ownerNode || styles[i].owningElement;
            styles[i].disabled = true;
            node.parentNode.removeChild(node);
        }
    }
    window['DYM']['removeStyleSheet'] = removeStyleSheet;

    //通过URL取得包含所有样式表的数组--copy
    function getStyleSheets(url,media) {
        var sheets = [];
        for(var i = 0 ; i < document.styleSheets.length ; i++) {
            if (url &&  document.styleSheets[i].href.indexOf(url) == -1) { continue; }
            if(media) {
                // Normaizle the media strings
                media = media.replace(/,\s*/,',');
                var sheetMedia;
                
                if(document.styleSheets[i].media.mediaText) {
                    // DOM mehtod
                    sheetMedia = document.styleSheets[i].media.mediaText.replace(/,\s*/,',');
                    // Safari adds an extra comma and space
                    sheetMedia = sheetMedia.replace(/,\s*$/,'');
                } else {
                    // MSIE
                    sheetMedia = document.styleSheets[i].media.replace(/,\s*/,',');
                }
                // Skip it if the media don't match
                if (media != sheetMedia) { continue; }
            }
            sheets.push(document.styleSheets[i]);
        }
        return sheets;
    }
    window['DYM']['getStyleSheets'] = getStyleSheets;

    //编辑一条样式规则--copy
    function editCSSRule(selector,styles,url,media) {
        var styleSheets = (typeof url == 'array' ? url : getStyleSheets(url,media));

        for ( i = 0; i < styleSheets.length; i++ ) {

            // Retrieve the list of rules
            // The DOM2 Style method is styleSheets[i].cssRules
            // The MSIE method is styleSheets[i].rules
            var rules = styleSheets[i].cssRules || styleSheets[i].rules;
            if (!rules) { continue; }
               
            // Convert to uppercase as MSIIE defaults to UPPERCASE tags.
            // this could cause conflicts if you're using case sensetive ids
            selector = selector.toUpperCase();
        
            for(var j = 0; j < rules.length; j++) {
                // Check if it matches
                if(rules[j].selectorText.toUpperCase() == selector) {
                    for (property in styles) {
                        if(!styles.hasOwnProperty(property)) { continue; }
                        // Set the new style property
                        rules[j].style[camelize(property)] = styles[property];
                    }
                }
            }
        }
    }
    window['DYM']['editCSSRule'] = editCSSRule;

    //添加一条CSS规则--copy
    function addCSSRule(selector, styles, index, url, media) {
        var declaration = '';

        // Build the declaration string from the style object
        for (property in styles) {
            if(!styles.hasOwnProperty(property)) { continue; }
            declaration += property + ':' + styles[property] + '; ';
        }

        var styleSheets = (typeof url == 'array' ? url : getStyleSheets(url,media));
        var newIndex;
        for(var i = 0 ; i < styleSheets.length ; i++) {
            // Add the rule        
            if(styleSheets[i].insertRule) {
                // The DOM2 Style method
                // index = length is the end of the list
                newIndex = (index >= 0 ? index : styleSheets[i].cssRules.length);
                styleSheets[i].insertRule(selector + ' { ' + declaration + ' } ', 
                    newIndex);
            } else if(styleSheets[i].addRule) {
                // The Microsoft method
                // index = -1 is the end of the list 
                newIndex = (index >= 0 ? index : -1);
                styleSheets[i].addRule(selector, declaration, newIndex);
            }
        }
    }
    window['DYM']['addCSSRule'] = addCSSRule;

    //取得一个元素的计算样式--copy
    function getStyle(element,property) {
        if(!(element = $(element)) || !property) return false;
        // Check for the value in the element's style property
        var value = element.style[camelize(property)];
        if (!value) {
            // Retrieve the computed style value
            if (document.defaultView && document.defaultView.getComputedStyle) {
                // The DOM method
                var css = document.defaultView.getComputedStyle(element, null);
                value = css ? css.getPropertyValue(property) : null;
            } else if (element.currentStyle) {
                // The MSIE method
                value = element.currentStyle[camelize(property)];
            }
        }
        // Return an empty string rather than auto so that you don't
        // have to check for auto values 
        return value == 'auto' ? '' : value;
    }
    window['DYM']['getStyle'] = getStyle;
    window['DYM']['getStyleById'] = getStyle;

})();