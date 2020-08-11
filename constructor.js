// function Student(name,roll){
//     this.name=name;
//     this.roll=roll;
// }
// Student.prototype.getName=function(){
//     return this.name;
// }
// var student1=new Student('ishmam',485);
// var student2=new Student('ali',486);
// var student3=new Student('khan',487);
// console.log(student1.getName())
// console.log(student2.getName())



// // without constructor function
// // var student1={
// //     name:"ishmam",
// //     rollNo:8564,
// // }
var student1={
    name:"ali",
    rollNo:8565,
    school:"saylani",
}
// for(var prop in student1){
//     //console.log(prop,student1[prop])
  
// }
console.log(student1.hasOwnProperty("name"));