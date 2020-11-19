// var obj ={
//     meals: [
//         {name: 'potato'},
//         {name: 'beef curry'},
//         {name: 'egg noodle'}
//     ]
//     snacks:
// }
// function faceBook(){
//     window.location.href = "https://www.facebook.com/"
//     console.log( window.location.href)
// }
// function faceBook2(){
//     window.location.assign("https://www.facebook.com/")
//     console.log( window.location.assign)
// }
// var monkeyWindow = window.open();
// var windowContent = "<h1>Capuchin monkey</h1>";
// monkeyWindow.document.write(windowContent);
// function checkForm(){
//     var lastName = document.getElementById('last')
//     var x = lastName.value
//     if(x === ""){
//         console.log("please fill out this form")
//         alert("please fill out this form")
//         return false
//     }
//     var radioButtons = document.getElementsByName('gender')
//     for(var i=0; i<radioButtons.length; i++){
//         if(radioButtons[i].checked){
//             return true
//         }
//         else{
//             alert("please select one")
//             return false
//         }
//     }
//     var checkBox = document.getElementById('city')
//     var c = checkBox.
// }
var arr =['mango',' apple',' banana']
arr.forEach(function(item, index){
    console.log(`${index} - ${item}`)
})