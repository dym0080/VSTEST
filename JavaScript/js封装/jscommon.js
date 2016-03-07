
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
	
