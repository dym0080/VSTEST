
//判断是否是数组最佳代码
var isArray = function(obj) { 
return Object.prototype.toString.call(obj) === '[object Array]'; 
}
/****************************************************************************/
//判断是否是一个函数
function isFunction(obj) {
   return Object.prototype.toString.call(obj)=== '[object Function]';
}
/****************************************************************************/
    /**
    * 获取指定函数的函数名称（用于兼容IE）
    * @param {Function} fun 任意函数
    */
	function getFunctionName(fun) {
	    if (fun.name !== undefined)
	        return fun.name;
	    var ret = fun.toString();
	    ret = ret.substr('function '.length);
	    ret = ret.substr(0, ret.indexOf('('));
	    return ret;
	}
    
    //测试
    function fn1(){}
    var fn2=function(){};
    var fn3=function AAA(){};
	console.log(getFunctionName(fn1));//输出fn1
	console.log(getFunctionName(fn2));//输出空
	console.log(getFunctionName(fn3));//输出AAA
/****************************************************************************/	
	/**
	 * 查询指定窗口的视口尺寸，如果不指定窗口，查询当前窗口尺寸
	 **/
	function getViewportSize(w) {
		w = w || window;

		// IE9及标准浏览器中可使用此标准方法
		if ('innerHeight' in w) {
			return {
				width: w.innerWidth,
				height: w.innerHeight
			};
		}

		var d = w.document;
		// IE 8及以下浏览器在标准模式下
		if (document.compatMode === 'CSS1Compat') {
			return {
				width: d.documentElement.clientWidth,
				height: d.documentElement.clientHeight
			};
		}

		// IE8及以下浏览器在怪癖模式下
		return {
			width: d.body.clientWidth,
			height: d.body.clientHeight
		};
	}
    
        //test
	console.log(getViewportSize());//Object {width: 1280, height: 214}	
/****************************************************************************/
/**
 * 获取指定window中滚动条的偏移量，如未指定则获取当前window
 * 滚动条偏移量
 *
 * @param {window} w 需要获取滚动条偏移量的窗口
 * @return {Object} obj.x为水平滚动条偏移量,obj.y为竖直滚动条偏移量
 */
function getScrollOffset(w) {
    w =  w || window;
    // 如果是标准浏览器
    if (w.pageXOffset != null) {
        return {
            x: w.pageXOffset,
            y: w.pageYOffset
        };
    }

    // IE 8及以下浏览器在标准模式下，根据兼容性不同访问不同元素
    var d = w.document;
    if (d.compatMode === 'CSS1Compat') {
        return {
            x: d.documentElement.scrollLeft,
            y: d.documentElement.scrollTop
        }
    }
    // IE8及以下浏览器在怪癖模式下
    return {
        x: d.body.scrollLeft,
        y: d.body.scrollTop
    };
}
/****************************************************************************/
