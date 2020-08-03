function agecalc() {
    var dob = new Date(prompt("Enter your date of bith", "Jan 1, 1970"))
    var dobmili = dob.getTime();
    var today = new Date();
    var todaymili = today.getTime()
    var diff = todaymili - dobmili;
    var accuage = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12))
    document.write(accuage);
}

agecalc();
var h = 15;
function add(a, b, c) {
    alert(h);
    var z = a + b + c
    return z;
}

var g = add(5, 8, 11);
alert(g);


// Parameters
function first(b, a) {
    return b + a
}


// arguments 
console.log(first(2, 3)) // 5


var a = "ghous";

function foo() {
    a = "Ahmed"
}

console.log(a);


function calc(num1, opr, num2) {
    if (opr === "+") {
        return num1 + num2
    }
    else if (opr === "-") {
        return num1 - num2
    }
    else if (opr === "*") {
        return num1 * num2
    } else {
        return "Incorrect Operator!"
    }
}
var result = calc(5, "-", 5);
var result1 = calc(4, "*", 6);
var result2 = calc(4, "$", 9)
console.log(result)
console.log(result1)
console.log(result2)



function foo() {

}

console.log(foo()) // undefined

var name = "Ghous"

switch (name) {
    case "Ghous":
        alert("Hello Ghous")
        break;
    case "Basit":
        alert("Hello Basit")
        break;
    default:
        alert("hello")
}



