 var x = "Enter value";
 var y = "Your value is:"
 var a = +prompt(x,y);
var b = a + 10;
document.write("The output is" + " " + b)

 var age = +prompt("Enter your age");
 if(age == 14){
     alert("Your age is equal")
}
 else if(age < 14){
    alert("Your age is less")
}
 else{
    alert("You age is more")
 }


 var age = +prompt("Enter your age");
 var gender = prompt("Enter your Gender")
 if(age > 18 || gender == "male"){
    alert("You are allowed to ride")
}
else{
    alert("You are not allowed")
 }


 var a = "5";
 if(a === 5){
     alert("True")
 }
 else{
     alert("False")
 }



var x = 5;
 var y = 10;
 var a = 30;
 var b = 15;
 if(x+y === a-b){
     alert("Correct")
 }
 else{
     alert("Incorrect")
 }
 var a = 10;
 if(a !== 15){
     document.write("Correct")
 }
 else{
     document.write("Incorrect")
 }



 var percent = +prompt("Enter your percent")
 if(percent >= 80 && percent <= 100){
     alert("A+")
 }
 else if(percent >= 70 && percent <= 80){
     alert("A") }
 else if(percent >= 60 && percent <= 70){     alert("B")
 }
 else if(percent >= 50 && percent <= 60){
     alert("C")
 }
else if(percent >= 40 && percent <= 50){     alert("D")
 }
 else if(percent >= 33 && percent <= 40){
    alert("E")
 }
 else if(percent >= 0 && percent <= 33){
     alert("F")
 }
 else{
     alert("You didnot write correct percentage")
 }








 var name =  "ishmam";
 var name1 = "basit";
 var name2 = "ali"

 console.log(name1)
 console.log(name2)



 var students = ["ishmam","basit","ali",123]


 alert("Wellcome " + students[3] )

 var names = [];


names[0] = "ishmam";
 names[1] = "Basit"
console.log(names)




students.pop() //remove end value


students.push("Bilal","Zunaib") // push value to end



 students.shift()  //remove element from start

 students.unshift("Bilal","Zunaib") //add element at start

var students = ["ishmam","basit","ali","bilal","zunaib"]

 students.splice(1,1)

var copyStudents = students.slice(1,4)

console.log(students)

console.log(copyStudents)







