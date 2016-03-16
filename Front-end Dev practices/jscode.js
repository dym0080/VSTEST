/*************************************************************************************************************************/
        //20160316
	/**
	 * 10--100之间的10个数字，存入一个数组，并排序
	 */
	function fnArr() {
		var newArr = [];
		for (var i = 0; i < 10; i++) {
			var num = Math.floor(Math.random() * 91 + 10);
			newArr.push(num);
		}
		newArr.sort();
		return newArr;
	}
	// 返回一个介于min和max之间的随机数
	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
	// 返回一个介于min和max之间的整型随机数
	// Using Math.round() will give you a non-uniform distribution!
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
/*************************************************************************************************************************/
/**
 * 完成一个函数,接受数组作为参数,数组元素为整数或者数组,数组元素包含整数或数组,函数返回扁平化后的数组
 * 如：[1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6]
 */

//方法一 我的答案
var newArr = [];
var arr = [1, [2, [ [3, 4], 5], 6]];
console.log(fnCoventArray(arr));

function fnCoventArray(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (Object.prototype.toString.call(arr[i]) === '[object Array]') {
			fnCoventArray(arr[i]);
		} else {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

//方法二 別人的答案
    var data =  [1, [2, [ [3, 4], 5], 6]];

    function flat(data, result) {
        var i, d, len;
        for (i = 0, len = data.length; i < len; ++i) {
            d = data[i];
            if (typeof d === 'number') {
                result.push(d);
            } else {
                flat(d, result);
            }
        }
    }

    var result = [];
    flat(data, result);

    console.log(result);
/*************************************************************************************************************************/
	/**
	 * 有一个大数组,var a = ['1', '2', '3', ...];a的长度是100,内容填充随机整数的字符串.
	 * 请先构造此数组a,然后设计一个算法将其内容去重 
	 * by myself
	 * /
        function fnArray() {
		var arr = [];
		for (var i = 0; i < 100; i++) {
			var random = Math.floor(Math.random() * 100 + 1);
			arr.push(random);
		}
		return arr;
	}

	function fnRemoveRepeat(arr) {
		if (arr && Array.isArray(arr)) {
			var obj = {};
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] in obj) {
					arr.splice(i, 1);
				} else {
					obj[arr[i]] = true;
				}
			}
		}
		return arr;
	}
/*************************************************************************************************************************/	
