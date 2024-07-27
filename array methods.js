
// Task 1: Using concat()
// Objective: Merge two arrays into one.


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6]; // [1, 2, 3, 4, 5, 6]

// let k=array1.concat(array2)
// console.log(k)

///////////////////////////////////////////////////////////////////

// Task 2: Using flat()
// Objective: Flatten a nested array up to a specific depth.
// const nestedArray = [1, [2, [3, [4]]]]; // [1, 2, 3, [4]]

// let k=nestedArray.flat(2)
// console.log(k)

//////////////////////////////////////////////////////////////////////

// Task 3: Using splice()
// Objective: Remove elements from an array and optionally insert new elements.

// const array = [1, 2, 3, 4, 5]; // [1, 2, 'a', 'b', 5]
// // console.log(removedElements); // [3, 4]

// removedElements=array.splice(2,2,'a','b')
// console.log(array)
// console.log(removedElements)

//////////////////////////////////////////////////////////////////////////////


// Task 4: Using slice()
// Objective: Extract a portion of an array into a new array.

const array = [1, 2, 3, 4, 5]; // [2, 3, 4]

let k=array.slice(-3,-1)
console.log(k)







//////////////////////////////////////////////////////////////////////////////

// Task 5: Using toSpliced()
// Objective: Create a new array with some elements replaced, without modifying the original array.


// const array = [1, 2, 3, 4, 5];// [1, 'a', 'b', 4, 5]
// // console.log(array); // [1, 2, 3, 4, 5]

// let k=array.toSpliced(1,2,"a","b")
// console.log(k)
// console.log(array)

//////////////////////////////////////////////////////////////////////////////

// Task 6: Using copyWithin()
// Objective: Copy part of an array to another location in the same array.

// const array = [1, 2, 3, 4, 5];
// array.copyWithin(0, 3, 5); // [4, 5, 3, 4, 5]

// Task 7: Using indexOf()
// Objective: Find the first occurrence of a value in an array.

// const array = [1, 2, 3, 2, 1];
// // const index = array.indexOf(2); // 1
// const index=array.indexOf(3)//2
// console.log(index)

///////////////////////////////////////////////////////////////////////////////

// Task 8: Using lastIndexOf()
// Objective: Find the last occurrence of a value in an array.


// const array = [1, 2, 3, 2, 1];
// const lastIndex = array.lastIndexOf(1);

// console.log(lastIndex); // 4

//////////////////////////////////////////////////////////////////////////////

// Task 9: Using includes()
// Objective: Check if an array contains a certain value.
// const array = [1, 2, 3, 4, 5];
// const hasValue = array.includes(3); // true
// const boolean=array.includes(9);
// console.log(boolean)//false

////////////////////////////////////////////////////////////////////////////////

// Task 10: Combining Methods
// Objective: Use multiple array methods in a single task.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = array1.concat(array2).flat();
// console.log(mergedArray)


// const splicedArray = mergedArray.toSpliced(2, 1, 'a');
// console.log(splicedArray)

// const finalArray = splicedArray.slice(1, 5);
// console.log(finalArray)
// console.log(finalArray.includes('a')); // true

// console.log(finalArray.indexOf(5)); // 3
