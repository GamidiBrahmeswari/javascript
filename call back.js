
// 1. Create a function greet that takes a name and a callback function. The greet function should call the callback function, passing the name to it. Define a callback function that simply logs "Hello, [name]" to the console.


// function greet(nam){
//     nam("likhitha")
// }
// function demo(nam){
//     console.log('hello'+","+nam)
// }
// greet(demo)
// //hello,likhitha



// 2.  Write a function that takes an array of numbers and uses the map function to create a new array where each number is doubled.


// let arr=[1,2,4,6,9,]
// let d=arr.map(double)
// function double(arr){
//     return arr*2
// }
// console.log(d)

// ///////////////////////or///////////////////////////////

// let x=arr.map((a)=>a*2)
// console.log(x)
// // [ 2, 4, 8, 12, 18, 10 ]


// // Write a function that takes an array of strings and uses the map function to create a new array where each string is converted to uppercase.


// let arr1=["likhitha","chaithra"]

// let y = arr1.map((str) => str.toUpperCase());
// console.log(y);

// // [ 'LIKHITHA', 'CHAITHRA' ]


// //////////////or//////////////////////

//     let z=arr1.map(str)
//     function str(upper){
//         return upper.toUpperCase()
//     }
//     console.log(z)

//     // Create a function applyToEach that takes an array and a callback function. The applyToEach function should use the map function to apply the callback to each element of the array and return the new array.
// arr2= [2,4,7,9,5]
// let x=arr2.map(applyTOeach)

//     function applyTOeach(arr2){
// // console.log("hello",+arr2)
//         return arr2+5
//     }
// console.log(x)
