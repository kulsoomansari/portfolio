// DOM ASSIGNMENT
// QUESTION 1
// function invisible(){
//     var x =document.getElementsByClassName("blue")
//    x[0].className = 'invisible'
// }
// // QUESTION 2
// function changeCity(){
//     var a = document.getElementById("city2")
//     a.innerHTML = 'sydney'
// }
// // QUESTION 4
// window.addEventListener('contextmenu', function (e) { 
//     // do something here... 
//     e.preventDefault(); 
//   }, false);
function check(){
var d = document.getElementById("humpty");
var pCounter = 0;
for(var i = 0; i < d.childNodes.length; i++){
if(d.childNodes[i].nodeType === 1 ){
pCounter++;
}
if (pCounter === 2){
d.childNodes[i].innerHTML = "All his men.";
break;
}
}
}
// Dom excersize
//         question 1
function todoList(){
    var li = document.createElement('li');
    var textLi = li.createTextNode('attend class')
    li.appendChild(textLi)
    var input = document.getElementById('myInput')
    li.appendChild(li)
} 
