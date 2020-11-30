//destructuring of obj
// var obj = {name:'kulsoom', status:'active'}
// let {name,status} = obj
// console.log(name,",",status)
//destructuring of array
//try and catch
// function addalert(){
//     console.log("good morning")
// }
// try{
//     addalert()
// }
// catch(err){
// console.log(err)
// }
//setTimeOut
// const click1 = () =>{
//     setTimeout(display, 3000)
// }
// const display = () =>{
//     alert('hello')
// }
// stopwatch
// const click2 = () =>{
//     setInterval(display, 1000)
// }
// let a = 0;
// const display = () =>{
//     a++
// document.getElementById('aa').innerHTML= a
// }
//clock (setInterval)
const click3 = () =>{
setInterval(display, 1000)
}
const display = () =>{
var date = new Date()
var newDate = date.getDate()
var month = date.getMonth()
var year = date.getFullYear()
var h = date.getHours()
var m = date.getMinutes()
var s = date.getSeconds()
var b =document.getElementById('bb')
b.innerHTML= `${newDate}-${month}-${year} ${h}:${m}:${s}`
}
