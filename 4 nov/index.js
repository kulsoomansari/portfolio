var arr = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
var newArr = Math.floor(Math.random()*8);
console.log(arr[newArr])
// var num = Math.random();
// console.log(num);
// var now = new Date();
// var birthDate = new Date('Sep 14, 1998');
// var diff = now.getTime() - birthDate.getTime();
// diff = diff/(1000 *60*60*24)
// console.log(diff);

// var now = new Date();
// var tomorrowDate = new Date('Nov 5, 2020 09:00:00');
// var diff = tomorrowDate.getTime() - now.getTime();
// diff = Math.floor(diff/(1000 *60*60));
// console.log(diff);

// var now = new Date();
// now.setHours(12);
// console.log(now)

var date = new Date();
function formatDate(date){
   var form = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate(); 
    console.log("form", form)
}
formatDate(date);

var now = new Date();
function formatTime(now){
   var format = now.getHours() + '-' + now.getMinutes() + '-' + now.getSeconds(); 
    console.log("format", format)
}
formatTuime(now);


