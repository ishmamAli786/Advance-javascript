
function saveData(){
    var name=document.getElementById("name");
    var roll=document.getElementById("roll");
    var student={
        names: name.value,
        rolls: roll.value
    }
    //console.log(student)
   firebase.database().ref('stu').child('student1').push(student)
   
}
// there are two methods for getting data from database
// first is once
// second is all


// once method
// function getFireBaseData(){
//     firebase.database().ref('stu/student1').once('value',function(data){
//         console.log(data.val())
//     })
// }
// getFireBaseData()



// all method
// function getFireBaseData(){
//         firebase.database().ref('stu/student1').on('child_added',function(data){
//             console.log(data.val())
//         })
//     }
//     getFireBaseData()


    // remove method
    // function removeFireBaseData(){
    //     firebase.database().ref('stu/student1').remove()
    // }
    // removeFireBaseData()




   // edit method
    function editFireBaseData(){
        firebase.database().ref('stu/student1/-MEn7uM8XtUBTd9zwsTW').set({
            key: -MEn7uM8XtUBTd9zwsTW,
            names: basit,
            rolls: 123
        })
    }
    editFireBaseData()