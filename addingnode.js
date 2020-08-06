var p=document.createElement('h1');
var  text=document.createTextNode("Ishmam Ali Khan");
p.appendChild(text);
console.log(p);
var main=document.getElementById('main');
main.appendChild(p);
function addMessage(){
    var input=document.getElementById('val');
    var p=document.createElement('p');
    var text=document.createTextNode(input.value);
    p.appendChild(text)
    var messages=document.getElementById('messages');
    messages.appendChild(p);
    val.value="";
}