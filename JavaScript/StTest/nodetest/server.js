

var http = require("http");
//服务器模块

var url=require("url");

function start(route,handle) {
	console.log(route);
	//将路由依赖注入到start函数
  function onRequest(request, response) {
  	//console.log(request.url);
  	var pathname=url.parse(request.url).pathname;
    console.log("Request for "+pathname+" resceived");

 	  //route(handle,pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    var content =route(handle,pathname);
    //response.write("Hello World dym");
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

// var http = require("http");

// http.createServer(function(request, response) {
//   console.log("Request received.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);
// console.log("Server has started.");


