(function() {

	/*//www.baidu.com?a=11&b=90
	function fnParseUrl(url) {
		var obj = {};
		if (url.indexOf('?') != -1) {
			var res1 = url.split('?')[1];
			if (res1.indexOf('&') != -1) {
				var res2 = res1.split('&');
				for (var i = 0; i < res2.length; i++) {
					var tmep = res2[i].split('=');
					obj.key = tmep[0];
					obj.value = tmep[1];
				}
			}
		}
		console.log(obj);
		return obj;
	}

	fnParseUrl('www.baidu.com?a=11&b=90');*/
//     Object:
// {
//     "index": 1,
//     "name": "111",
//     "link": "http://1111"
// }

	var EventUtility = {
		addEvent: function(element, type, handle) {
			if (element.addEventListener) {
				element.addEventListener(type, handle, false);
			} else if (element.attachEvent) {
				element.attachEvent('on' + type, handle);
			} else {
				element['on' + type] = handle;
			}
		},
		removeEvent:function(element,type,handle){
			if(element.removeEventListener){
				element.removeEventListener(type,handle,false);
			}else if (element.detachEvent) {
				element.detachEvent('on' + type, handle);
			} else {
				element['on' + type] = '';
			}
		},
		getEvent:function(event){
			return event||widow.event;
		},
		getEventType:function(event){
			return event.type;
		},
		getTarget:function(event){
			return event.target||event.srcElement;
		}
	};


})();