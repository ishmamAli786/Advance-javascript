var list=document.getElementById('list'); 
firebase.database().ref('todo').on('child_added',function(data){
    console.log(data.val())
})
function addTodo(){
    var todo_item=document.getElementById('todo-item');
    var database=firebase.database().ref('todo')
    var key=database.push().key;
    var todo={
        value: todo_item.value,
        key: key
    }
    database.child(key).set(todo)
   // create li tag
    var li=document.createElement('li') 
    var textNode=document.createTextNode(todo_item.value)
    li.appendChild(textNode)
    list.appendChild(li)
    //create delete button
    var delBtn=document.createElement('button')
    var delText=document.createTextNode('DELETE')
    //create edit butto 
    var editBtn=document.createElement('button')
    var editText=document.createTextNode('EDIT')
    editBtn.setAttribute('class','btn')
    editBtn.setAttribute('onclick','editItem(this)')
    delBtn.setAttribute('class','btn')
    delBtn.setAttribute('onclick','deleteItem(this)')
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    list.appendChild(li)
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    list.appendChild(li)

    todo_item.value="";

}
function deleteItem(e){
    e.parentNode.remove()
}
function delets(){
    list.innerHTML="";
}
function  editItem(e){
    var a=prompt("ENTER UPDATE VALUE")
    e.parentNode.firstChild.nodeValue=a

}