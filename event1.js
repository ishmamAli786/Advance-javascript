function show(){
var name=document.getElementById('name');
console.log(name.value);
name.value="";
}
var test=document.getElementById('test');
test.innerHTML='<span>Pakistan Zindabad</span>';
function change(){
    var name=document.getElementById('car');
    name.src="b.jpg";
}
function ch(){
var cars=document.getElementById('cars');
cars.src="f.jpeg";
}
function che(){
    var cars=document.getElementById('cars');
    cars.src="g.jpg";
    }


function on(){
    var bulb=document.getElementById('bulb');
    bulb.src='on.jpg'
}
function off(){
    var bulb=document.getElementById('bulb');
    bulb.src='off.jpg'
}
function ons(){
    var bulb=document.getElementById('bulbs');
    bulb.src='on.jpg'
}
function offs(){
    var bulb=document.getElementById('bulbs');
    bulb.src='off.jpg'
}
function addClass(){
    var para=document.getElementById('para');
    para.className+=" bold blue";
}
function getElement(){
    var element=document.getElementsByTagName('p');
    console.log(element);
    
}
getElement();