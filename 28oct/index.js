
// alert(`kulsoom ansari
//  web designing`);
 
// var birthYear = 1998;
// alert('type of birth year is ' + typeof birthYear);

// var age = prompt('enter your age ');
// alert( age*365 + 'days');

// var num = prompt('enter ur num');
// if(num > 0) {
//     alert(`your number = ${num}
//     and it is positive`) 
// }
// else{
//     alert("your number is negative";)
// } 
//     

//     function increment(argument){
//         var a = ++argument;
//         return a;
//     }
//     var total = increment(6);
//     document.write(total);
// document.write("<br>");
//     function decrement(argument){
//         var s = --argument;
//         return s;
//     }
//     var total = decrement(6);
//     document.write(total);
//     document.write("<br>");

//     function square(number){
//         var a = number*number;
//         return a;
//     }
//     var total = square(6);
//     document.write(total);

// var numbers=[5,7,9,7,4]
// var newArray =[]
//  function double(num){
//      for(var i = 0; i<num.length; i++){
//            newArray.push(num[i]*2)
//      }
//  }
//  double(numbers);
//  document.write(newArray);

// var name = "kulsoom";
// var newArr = " ";
// function capital(name){
//     newArr = name.toUpperCase()
// }
// capital(name);
// document.write(newArr)

// var name = "kulsoom ansari";
// var newArr = " ";
// function titleCase(name1){
//     newArr = name1[0].toUpperCase() + name1.slice(1)
// }
// titleCase(name);
// document.write(newArr)

var str = "kulsoom ansari";
var newStr
function titleCase(str1){
    var str2 = str1.split(" ")
    for(i=0; i<str2.length; i++){
        str2[i] = str2[i][0].toUpperCase() + str2[i].slice(1)
    }
str2 = str2.join(" ")
console.log(str2)
}
else { alert(`your number = ${num}
    and it is negative`)}

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
var newstr = titleCase(str)
// console.log(str)
