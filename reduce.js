
// 1. Given an array of strings, use the map function to create a new array where each string is converted to uppercase and sort the data
let arr=["apple","ball","cat","dog"]
 
let u = arr.map((str) => str.toUpperCase());
x=u.sort()
console.log(x)



// 2. Given an array of numbers, use the forEach function to add 1 to each number in the array and sort the data in descending

let arr1=[12,6,41,8,23]
emp=[]
y=arr1.forEach(a=>emp.push(a+1))
z=emp.sort((a,b)=>(b-a))
console.log(z)




// 3. Given an array of strings, use the filter function to create a new array that contains only the strings that have more than 3 characters and join the data separated by space using reduce and reduceRight


let arr2=["apple","ball","cat","dog"]

let w=arr2.filter(str=>str.length>3)
let q=w.reduce((a,b)=>a+","+b)
let q1=w.reduceRight((a,b)=>a+","+b)
console.log(q)
console.log(q1)
