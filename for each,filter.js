
// 1. Given an array of numbers, use the map function to create a new array where each number is doubled.
const numbers = [1, 2, 3, 4, 5];
// Example Output:   
// [2, 4, 6, 8, 10]

x=numbers.map(a=>a*2)
// console.log(x)


// 2. Given an array of names, use the forEach function to print each name in the console.
const names = ['Alice', 'Bob', 'Charlie', 'David'];
// Example Output:   
// Alice
// Bob
// Charlie
// David

names.forEach(a=>console.log(a))


// 3. Given an array of numbers, use the filter function to create a new array that contains only the even numbers.
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Example Output:   
// [2, 4, 6, 8, 10]

y=numbers1.filter(a=>a%2==0)
console.log(y)

// 4. Given an array of objects representing students with their names and scores, use the map function to create a new array of strings that says "Name has scored Score".  
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 88 }
];
// Example Output:  
// ['Alice has scored 85', 'Bob has scored 92', 'Charlie has scored 88']


o=students.map((name1)=>name1.name+" has scored "+name1.score)
console.log(o)
//////////////////or////////////
o=students.map(score)
function score(name1){
  return name1.name+" has scored "+name1.score
}
console.log(o)




// 5. Given an array of objects representing people with their names and ages, use the filter function to create a new array that contains only the people who are 18 or older. 
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 15 },
  { name: 'David', age: 22 }
];
// Example Output:    
// [
//   { name: 'Bob', age: 20 },
//   { name: 'David', age: 22 }

// ] 

z=people.filter(name=>name.age>=18)
console.log(z)


// 6. Given an array of strings, use the map function to create a new array where each string is converted to uppercase.
const words = ['hello', 'world', 'javascript', 'map'];
// Example Output:
// ['HELLO', 'WORLD', 'JAVASCRIPT', 'MAP']
 
 
let u = words.map((str) => str.toUpperCase());
console.log(u);


// 7. Given an array of numbers, use the forEach function to add 1 to each number in the array.
let numbers2 = [10, 20, 30, 40, 50];
// Output : 
// numbers = [11, 21, 31, 41, 51];

emp=[]
numbers2.forEach(num=>emp.push(num+1))
console.log(emp)

// 8. Given an array of strings, use the filter function to create a new array that contains only the strings that have more than 3 characters.
const words1 = ['hi', 'hello', 'hey', 'world', 'js'];
// Output : 
// ['hello', 'world']



y=words1.filter(a=>a.length>3)
console.log(y)
