// var now = new Date().getDay();
// console.log(now);
// var Arr = ['sun','mon','tues','wed','thu','fri','sat'];
// var result = Arr[now];
// switch (result){
// case 'sun':
// alert('its weekend');
// case 'mon':
// alert('today is mon');
// case 'sat':
// alert('today is sunday')
// default:
// alert('weekday')
// }
// var trafficLight = prompt("enter traffic light");
// switch (trafficLight) {
//     case 'red':
//         alert('stop');
//         break
//     case 'yellow':
//         alert('ready to go');
//         break
//     case 'green':
//        alert('go');
//     default:
//       alert('signal not exist');
// }
// var b = 10;
// do{
//     console.log(b)
//     b++
// }while(b<12)

// var a = +prompt("enter radius of circle");
// function radius(r){
//     var b = a*2*3.14;
//     return b;
// }
// var c = radius(a)
// console.log('radius of circle',  Math.ceil(c));

// var r = +prompt("enter radius of circle");
// function area(a){
//     var b = r*r*3.14;
//     return b;
// }
// var c = area(r)
// console.log('area of circle', Math.ceil(c));

// var a = +prompt('enter your no');
// var b = 5;
// if(a==b){
//     alert('you have won')
// }
// else{
//     a = +prompt('enter your no')
// }
var cityToCheck = prompt("Enter your city");
 cityToCheck = cityToCheck.toLowerCase();
 var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 alert("It's one of the cleanest cities");
 }
 }
