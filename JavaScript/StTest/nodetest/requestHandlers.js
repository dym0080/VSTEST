function start() {
  console.log("Request handler 'start' was called.");

  function sleeep(seconds) {
  	var startTime=new Date().getTime();
  	while(new Date().getTime()<startTime+seconds);
  }

  sleeep(1000);


  return "Hello start";
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Hello upload";
}

exports.start = start;
exports.upload = upload;