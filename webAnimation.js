var element=document.getElementById('box');
element.animate([
    {transform:'translate(0,0)'},
    {transform:'translate(600px,0)'},
    {transform:'translate(0,0)'},
    // {transform:'translate(600px,0)'}
],{
    duration:1500,
    iterations:Infinity
})