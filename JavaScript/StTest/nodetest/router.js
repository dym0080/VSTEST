//路由模块

//V1.0
// function route(pathname) {
// 	console.log("About to route a request to "+pathname);
// }
// exports.route=route;

//V1.1 加入handle
function route(handle,pathname) {
	console.log("About to route a request to "+pathname);

	if(typeof handle[pathname]==='function'){
		return handle[pathname]();
	}else{
		console.log("No request handler found for " + pathname);
		return "404 not found"
	}
}
exports.route=route;