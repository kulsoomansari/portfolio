// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [7, 6]
//     };
//     function calcAnnual() {
//         var bestPrice = plan1.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < plan1.discountMonths.length; i++) {
//         if (plan1.discountMonths[i] === thisMo) {
//         bestPrice = plan1.price * .8;
//         break;
//         }
//         }
//         return bestPrice * 12;
//         }
//         var annualPrice = calcAnnual();
//         console.log(annualPrice)
     //arrow function
     //filter method
     //map method
     //local global scope
     //variables  
    //  var a = 10
    //  for(var i =0; i<a; i++){
    //      console.log(a)
    //  } 
    // console.log(i + "kulsoom")
    // function test(){
    //     var foo = 33;
    //     if(foo){
    //         let foo = (foo + 55);
    //     }
    // }
    // test();
    // console.log(foo);
    // const sum = () =>{
    //       var c = 2 +2
    //       console.log(c)
    // }
    // sum()
    // const mult = () =>{
    //     var a = 2 *3
    //     return a
    // }
    // var b = mult()
    // console.log(b)
    let a = 5
    const sq_mult = () =>{
    let b = 10 / a;
      return b;
    }
    var c = sq_mult()
    console.log(c)
    // var arr = [2,4,6,7]
    // const newArr = arr.map(
    //     (item) =>{
    //         return item * item
    //     }
    // )
    // console.log(newArr)
    // var arr = [25,40,10,36]
    // const newArr = arr.map((item) =>{
    //         return Math.sqrt(item)
    //     }
    // )
    // console.log(newArr)
    // var str = ['aimon','kulsoom']
    // const newArr = str.map((item, index) =>{
    //     return index + " " + item
    // }
    // )
    // console.log(newArr)
    var arr = [25,40,10,36]
    const newArr = arr.filter((item) =>{
            return item >10
        }
    )
    console.log(newArr)
    
