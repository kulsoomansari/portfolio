// //old method of assigning one array into another
// // var arr = [2,3,4,5]
// // var arr2 = arr;
// // arr2[0] = 4; //4 3 4 5
// // console.log(arr)
// //spread operator (1st use)
// var arr = [2,3,4,5]
// var arr1 = [6,7,8,9]
// var arr2 = [...arr]
// arr2[0] = 4
// console.log(arr2)
// console.log(arr)
// var arr3 = arr.concat(arr1)
// console.log(arr3)
// //spread in obj
// var obj = {name:'kulsoom'};
// var newObj = {...obj}
// newObj.class = "web development"
// console.log(obj)
// console.log(newObj)
// //2nd use
// function sum(x,y,z){
//     return x+y+z
// }
// let arr5 = [3,4,5]
// var a= sum(...arr5)
// console.log(a)
//rest operator
// let foo = (a,...b) =>{
//     console.log(a)
//     console.log(b)
// }
// foo(1,2,3,4,5,6)
// subtract by rest operator


let sub = (a,...b) =>{
    var res = b.reduce((accumulator, currentValue) => {
        return accumulator - currentValue
    })
    var res1 = a-res
    console.log(res1)
}
sub(20,30,40,50)





