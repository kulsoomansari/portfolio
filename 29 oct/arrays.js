var names = ['habiba','areeba','kulsoom','maryam']
console.log(names.length);
names.push('shehla'); //add in the last
console.log(names);
names.pop(); //removes from last
console.log(names);
names.shift('mismah') //removes from start
console.log(names)
names.unshift('sana');
console.log(names)
var animals = ['cow','goat','donkey','monkey','lion','tiger']
console.log(animals);
animals.splice(2, 4, 'crow')
console.log(animals);
 // for loop
 for (var i=0; i<10; i++){
     console.log(i, 'kulsoom')
 }
 var firstName = ['kulsoom','fatima','shamama','rabya'];
var lastName = ['ansari','mumtaz','tariq','sulatn'];
var fullName = [];
if(firstName.length === lastName.length){
    for(var i = 0; i<firstName.length; i++){
   fullName[i] = firstName[i] + ' ' + lastName[i];
    }
    console.log(fullName);
}
else{
    console.log('no match');
}