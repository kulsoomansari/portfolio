function addList(){
    var x = document.getElementById('myDiv')
    var p = document.createElement('p')
    var text = document.createTextNode('third para')
    x.appendChild(text)
    x.appendChild(p)
}
//OBJECT
//QUESTION 1
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    for(var key in student){
        console.log(key + ' ' + student[key]); //only key
        // console.log(student[key]) //only value
    }
//question 2
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];
    for(var key in library){
        console.log(key + ' ' + library[key].author)
    }
    function Employ(name,salary,absent){
        this.name=name;
        this.salary = salary;
        this.absent = absent;
    //     this.salaryCalculation = function(){
    //         if(this.absent <= 5){
    //             console.log(this.salary*0.8)
    //         }else{
    //             console.log(this.salary)
    //         }
    //     }
    // }
    Employ.prototype.bonus = 0 //kahin hoga kahin nhi
    Employ.prototype.salaryCalculation = function(){
        if(this.absent <= 5){
            console.log(this.salary = this.salary*0.8)
        }
    }
}
   var Employe1 = new Employ('kulsoom', 8000, 2)
   Employe1.salaryCalculation()
   Employe1.bonus = 2000;
 console.log(Employe1)
  // employe2 = new employ('abc', 1000, 0)
    // console.log(employe2)
    