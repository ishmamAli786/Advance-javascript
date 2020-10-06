////es5 addition of three variable
/// spread operator it replace apply method
//// it replace concate operator
/// it is used for passing array as a function parameter




// function sum(a,b,c){
//     console.log(a+b+c)
// }
// // sum(1,2,3)
// var arrVal=[1,5,8];
// // sum.apply(null,arrVal)
// sum(...arrVal)



///replace concate method
// let arr1=[1,2,3];
// let arr2=[,4,5,6];
// arr3=arr1+arr2
// console.log(arr3)




// let arr4 = [1, 2, 3];
// let arr5 = [4, 5, 7];
// let arr7 = [4, 9, 8];
// // arr6= arr4.concat(arr5)
// arr4=[...arr4,...arr5,...arr7]
// console.log(arr4)





/// replace copy method
let arrc1=[1,2,3];
// let arrc2=arrc1;
// console.log(arrc2)
// arrc2.push(4,5)
let arrc2=[...arrc1,4,5]
console.log(arrc2)
console.log(arrc1)