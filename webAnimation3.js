var element=document.getElementById('box');
element.animate([
    {transform:'scale(0.5)',background:'white'},
    {transform:'scale(1)',background:'red'},
    {transform:'scale(0.5)',background:'white'},
    // {transform:'translate(400px,0)',background:'red'},
    // {transform:'translate(400px,400px)',background:'blue'},
    // {transform:'translate(0,400px)',background:'green'},
    // {transform:'translate(0,0)'},
    // {transform:'translate(600px,0)'}
],{
    duration:4000,
    iterations:Infinity
})