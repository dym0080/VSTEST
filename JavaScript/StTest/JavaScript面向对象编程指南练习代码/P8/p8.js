

//8.1.2.3
var MYAPP={};
MYAPP.namespace=function (name) {
    var parts=name.split('.');
    var current=MYAPP;
    for(var i in parts){
        if(!current[parts[i]]){
            current[parts[i]]={};
        }
        current=current[parts[i]];

    }
}
MYAPP.namespace('dom.style');
MYAPP.namespace('event');

console.log(MYAPP);