
//4.1.7

function Hero(name) {
    this.name=name;
    this.occupation='Ninja';
    this.whoAreYou=function () {
        return "I'm"+this.name+"and "+this.whoAreYou();
    }
}

var h2=new Hero("jdzm");
h2.constructor;

var h3=new h2.constructor('dym');
h3.name;

//4.2.3
function myfunc(a,b,c) {
    return true;
}
myfunc.length;

//4.4
function F() {
    function C() {
        return this;
    }
    return C();
}
var o=new F();
//console.log(o);

function C() {
    this.a=1;
    return false;
}
console.log(typeof new C());

var c=[1,2,[1,2]];
c.sort();
c.join('--');
console.log(c);
//t4在String()构造函数不存在的情况下自定义一个MyString()的构造器函数。记住，
// 由于String()不存在，因此您在写构造器函数时不能使用任何属于内建String对象的方法和属性
function MyString(pstr){
    this.str=pstr.toString();
    this.length=this.str.length;

    for(var i=0;i<this.length;i++){
        this[i]=this.str[i];
    }

    this.toString=function (){
        return this.str;
    };

    this.valueOf=function (){
        return this.toString();
    };
    this.charAt=function(index){
        index=parseInt(index,10);
        index=isNaN(index)?0:index;
        return this[index];
    };
    this.concat=function(concatStr){
        return this.str+concatStr;
    };
    this.slice=function(startIndex,endIndex){
        while(startIndex<0){
            startIndex=startIndex+this.length;
        }
        while(endIndex<0){
            endIndex=endIndex+this.length;
        }
        if(endIndex<=startIndex){
            return "";
        }
        var resultStr="";
        for(var i=startIndex;i<endIndex;i++){
            resultStr+=this[i];
        }
        return resultStr;
    };
    this.split=function(s){
        var resultArr=[];
        var tempStr="";
        for(var i=0;i<this.length;i++){
            if(this[i]===s){
                resultArr.push(tempStr);
                tempStr="";
            }else{
                tempStr+=this[i];
            }
        }
        resultArr.push(tempStr);
        return resultArr;
    };
    this.reverse=function(){
        var tempArr=[];
        var i;
        for(i=0;i<this.length;i++){
            tempArr[i]=this[i];
        }
        tempArr.reverse();
        this.str=tempArr.join("");
        for(i=0;i<this.length;i++){
            this[i]=tempArr[i];
        }
    };
}
