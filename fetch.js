console.log('fetch API')
async function getapi(){
    const api= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(api,"API")
    const Json =await api.json()
    console.log(Json,"JSON")
}

// .then(function(res){
//     console.log(res,"res")
// })
// getapi()



async function postapi(){
    const api=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title: 'bootcamp',
            body: 'javascript',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })


console.log(api,"API")
const Json =await api.json()
console.log(Json,"JSON")
}
postapi()