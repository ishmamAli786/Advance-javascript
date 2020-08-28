// const move=()=>{
//     var mybar=document.getElementById('mybar');
//     var widt=1;
//     var id= setInterval(frame,10);
//     function frame(){
//         if(width=>100){
//             clearInterval(id);
//         }else{
//             width++;
//             mybar.style.width=width+"%";
//         }
//     }}
function moves(){
    var mybar=document.getElementById('mybar');
    let width=1;
    var ids= setInterval(frame,10);
    function frame(){
        if(width=>100){
            clearInterval(ids);
        }else{
            width++;
            mybar.style.width=width+"%";
        }
    }
}
