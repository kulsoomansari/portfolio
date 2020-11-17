// find,filter,includes,reduced method in the array
// var students = ['kulsoom','aiman','faiza']
// var age = [20,30,40]
// var toFind = 'aiman'
// var a = students.find((item, index) =>{
//   return item == toFind  
// }
// )
// console.log(a)
var teachers = ['faiza','ali','inzamam']
var students = ['kulsoom','aiman','fatima']
var include = 'faiza'
var a = teachers.includes(include)
console.log(a)
if(a == true){
    var b = students.map((item)=>{
        return item + " "+ "will have the class"
    })
    console.log(b)
}
//destructuring (spread operator)
[a,b,c,d, ...e] = [30,7,90,70,8,9,7,6,]
console.log(e)
// var a = ["hello! my name is kulsoom"]
// const arr = () =>{
//     let b = 
// }
//ternary js
// var sal = +prompt("enter your salary")
// var bonus = (sal >= 5000) ? 1000 : 500
// console.log("bonus", bonus)



let age = 55
var cnic = (age >= 18) ? 'yes' : 'no'
var allowed = (age>18)? 'yes'
:(age == 18) ? 'let me think'
:(age < 18) ? 'not allowed'
:'invalid'
console.log(allowed)