
//5.1.4
function Gadget(name,color) {
    this.name=name;
    this.color=color;
    this.someMethod=function () {
        return 1;
    }
}
Gadget.prototype.price=100;
Gadget.prototype.rating=3;

var newtoy=new Gadget('webcam','black');

for(var prop in newtoy){
    if(newtoy.hasOwnProperty(prop)){
        console.log(newtoy[prop]);
    }

}

//5.1.5

//5.4
var shape={
    type:"ss",
    getType:function () {
        return 1;
    }
}

function Triangle(a,b,c) {
    this.a=a;
    this.b=b;
    this.c=c;
    //this.prototype=shape;
}
Triangle.prototype=shape;
// shape.prototype.getPerimeter=function () {
//     return a;
// }

var t=new Triangle(1,2,3);
t.constructor;
shape.isPrototypeOf(t);