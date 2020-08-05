var count =0;
var interval;
function timer(){
    count++;
    console.log(count);
}
interval=setInterval(timer,1000);
setTimeout(function(){
    clearInterval(interval)
},5000)
// function time(){
//     console.log('running....');
// }
// setTimeout(time,3000);