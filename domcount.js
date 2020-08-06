var list=document.getElementsByTagName('li');
console.log(list[0])
var p=document.getElementById('p1');
// if(p.hasAttribute("class")){
//     alert('class is available');
// }else{
//     alert('class is not available');
// }
//console.log(p.getAttribute("class"))
p.setAttribute('class',"blue");
var p2=document.getElementById('p2');
console.log(p2.attributes[1].nodeType);