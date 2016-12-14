//6.1
function Shape() {
    this.name='shape';
    this.toString=function () {
        return this.name;
    }
}
function TwoDShape() {
    this.name='2D shape';
}

function Triangle(side,height) {
    this.name='Triangle';
    this.side=side;
    this.height=height;
    this.getArea=function () {
        return this.side*this.height/2;
    };
}
TwoDShape.prototype=new Shape();
Triangle.prototype=new TwoDShape();

TwoDShape.prototype.constructor=TwoDShape;
Triangle.prototype.constructor=Triangle;

var my=new Triangle(5,10);
my.getArea();

//
//6.2 只继承于原型。
//6.1存在效率方面的问题，6.2是对6.1的改进
//出于效率的考虑，我们应该尽可能地将一些可重用的属性和方法添加到原型中去。
//如下所示 TwoDShape.prototype=Shape.prototype比TwoDShape.prototype=new Shape()更好一些
//Triangle.prototype=new TwoDShape()比Triangle.prototype=new TwoDShape()更好一些
function Shape() {
}
Shape.prototype.name='shape';
Shape.prototype.toString=function () {
    return this.name;
}

function TwoDShape() {
}
//TwoDShape.prototype=new Shape();
//最佳实践，比TwoDShape.prototype=new Shape()更好一些
TwoDShape.prototype=Shape.prototype;
TwoDShape.prototype.name='2D shape';
TwoDShape.prototype.constructor=TwoDShape;

function Triangle(side,height) {
    this.name='Triangle';
    this.side=side;
    this.height=height;
}
//Triangle.prototype=new TwoDShape();
//最佳实践，比riangle.prototype=new TwoDShape()更好一些
Triangle.prototype=TwoDShape.prototype;
Triangle.prototype.constructor=Triangle;
Triangle.prototype.getArea=function () {
    return this.side*this.height/2;
}

var my=new Triangle(5,10);
my.getArea();

//临时构造器 new F()
//这非常有用，这是由于6.2存在不足：
//例如如下代码
Triangle.prototype.name='Triangle';
//它对该对象name做了修改，于是Shape.prototype.name也随之被改掉了。也就是说
//当我们再用new Shape()新建对象的时候，新对象的name属性也随之变成了Triangle，这不是我们的预期效果
//而new F()就是为了解决这个一问题。
function Shape() {}
Shape.prototype.name='shape';
Shape.prototype.toString=function () {
    return this.name;
}

function TwoDShape() {}
function  F1() {}
F1.prototype=Shape.prototype;
TwoDShape.prototype=new F1();
TwoDShape.prototype.constructor=TwoDShape;
TwoDShape.prototype.name='2D shape';

function Triangle(side,height) {
    this.side=side;
    this.height=height;
}
function  F2() {}
F2.prototype=TwoDShape.prototype;
Triangle.prototype=new F2();
Triangle.prototype.constructor=Triangle;
Triangle.prototype.getArea=function () {
    return this.side*this.height/2;
}

var my=new Triangle(5,10);//测试结果25
my.getArea();//Triangle
var s=new Shape();
s.name//shape.如果按照6.2这里结果也是Triangle，
//临时构造器的解决方案就是摆脱了子对象修改后影响了父对象的同一属性。

//6.3 uber -子对象访问父对象的方法
function Shape() {}
Shape.prototype.name='shape';
Shape.prototype.toString=function () {
    var result=[];
    if(this.constructor.uber){
        result[result.length]=this.constructor.uber.toString();
    }
    result[result.length]=this.name;
    return result.join(', ');
}

function TwoDShape() {}
function  F1() {}
F1.prototype=Shape.prototype;
TwoDShape.prototype=new F1();
TwoDShape.prototype.constructor=TwoDShape;
TwoDShape.uber=Shape.prototype;
TwoDShape.prototype.name='2D shape';

function Triangle(side,height) {
    this.side=side;
    this.height=height;
}
function  F2() {}
F2.prototype=TwoDShape.prototype;
Triangle.prototype=new F2();
Triangle.prototype.constructor=Triangle;
Triangle.uber=TwoDShape.prototype;
Triangle.prototype.name='Triangle';
Triangle.prototype.getArea=function () {
    return this.side*this.height/2;
}

var my=new Triangle(5,10);
my.toString();//

//6.4
function extend(Child,Parent) {
    var F=function (){};
    F.prototype=Parent.prototype;
    Child.prototype=new F();
    Child.prototype.constructor=Child;
    Child.uber=Parent.prototype;
}

extend(TwoDShape,Shape);
extend(Triangle,TwoDShape);