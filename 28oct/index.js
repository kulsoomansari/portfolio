
alert(`kulsoom ansari
 web designing`);
 
var birthYear = 1998;
alert('type of birth year is ' + typeof birthYear);

var age = prompt('enter your age ');
alert( age*365 + 'days');

var num = prompt('enter ur num');
if(num > 0) {
    alert(`your number = ${num}
    and it is positive`) 
}
else(num < 0) 
    alert(`your number = ${num}
    and it is negative`)

   function increment(argument){
       var a = argument++;
       return a;
   }
   var sum = increment(5);
   document.write(sum);
document.write("<br>");
   function decrement(argument1,argument2,argument3){
    var a = argument1-- + argument2 + --argument3;
    return a;
}
var total = decrement(5,6,8);
document.write(total);