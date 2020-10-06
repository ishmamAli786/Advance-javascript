/// map create an new array by calling the excisting array
//// it calls the provided function ones for each element in an array



///syntx

/////array.map(currentvalue,ind,arr),thisValue)


const oldArray=['ishmam','ali','khan'];



const newArray=oldArray.map((cvalue,ind,arr)=>{
    return ind + ':' + cvalue + ' mahota' + arr;
})
console.log(newArray)
console.log(oldArray)