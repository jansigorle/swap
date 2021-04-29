
function swap(a,b){
    document.write("<br>before swap,a ="+a+" b ="+b);
a = a+b;
 b =a-b;
 a= a-b;
 document.write("<br>after swap,a="+a+" b ="+b);
}
var a =10,b=20;
swap(a,b);
