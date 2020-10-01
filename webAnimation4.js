var element=document.getElementById('cloud');
element.animate([
    {transform:'translate(0,50px)'},
    {transform:'translate(400px,200px)'},
    {transform:'translate(800px,50px)'},
    {transform:'translate(0,50px)'},
],{duration:4000,iterations:Infinity})
