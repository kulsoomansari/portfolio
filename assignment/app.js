//     function beforeChild(){
//     var d = document.getElementById("div1")
//     var c = document.createElement("p")
//     var t = document.createTextNode("hello world")
//     c.appendChild(t)
//     paragraph2 = d.lastChild;
//     d.insertBefore(c, paragraph2);
// }
// var a =[ ];
// for(var i=0; i<2; i++){
//     var b = prompt("enter sentence")
//       a.push(b)
//       console.log(a)
// }
// console.log(a)
//question 5 array
// var x = prompt('enter a senetnce')
// var y = x.split(" ");
// console.log(y)
// const titleCase = () =>{
//   for(let i=0; i<y.length; i++){
//     y[i] = y[i][0].toUpperCase() + y[i].slice(1).toLowerCase()
    
//    }
//    return y.join(" ")
// }
// var z = titleCase()
// console.log(z)
//question 6
// var x = [2,4,6,8,10];
// const double = () =>{
//     for(let i =0; i<x.length; i++){
//         x[i] = x[i]*2
//     }
//     return x
// }
// var t = double()
// console.log(t)
// var q = [2,4,6,8,10]
// const double1 = () =>{
//     q.forEach(item => 
//         console.log(item*2))
// }
// double1()
// const todo = () =>{
    
// }
function Plan(name, price, space, transfer, pages) {
    this.doc = name;
    this.grumpy = price;
    this.sleepy = space;
    this.bashful = transfer;
    this.sneezy = pages;
}
var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
console.log(plan1)
var x = "doc" in plan1
console.log(x)