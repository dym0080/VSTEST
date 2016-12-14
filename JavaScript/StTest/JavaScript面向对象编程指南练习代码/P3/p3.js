

//3.7练习题
//---------1.
function getRGB(a) {

    var data1=parseInt(a.substring(1,2),16) ;
    var data2=parseInt(a.substring(3,2),16) ;
    var data3=parseInt(a.substring(5,2),16) ;
   return "rgb("+data1+","+data2+","+data3+")"
}
var t=getRGB("#00ff00");
//console.log(t);

//----------2.
//console.log(parseInt(lel));//let is not defind
//console.log(parseInt("lel"));//lel
//console.log(parseFloat("lel"));//NaN
//console.log(isFinite(0/10));//ture
//console.log(isFinite(20/0));//false
//console.log(isNaN(parseInt(NaN)));//true


//-----------3.
var a=1;
function f() {
    var a=2;
    function n() {
        //console.log(a);
    }
    n();
}
f();
