// // check how isNaN works in different scenario
// // 1. When the value is a number:
// isNaN(123); // false
// isNaN(0); // false
// isNaN(-1.23); // false

// // 2. When the value is NaN:
// isNaN(NaN); // true
// isNaN(Number.NaN); // true
// isNaN(0 / 0); // true

// // . When the value is a string:

// isNaN("123"); // false (can be converted to a number)
// isNaN("Hello"); // true (cannot be converted to a number)
// isNaN(""); // false (empty string is coerced to 0)

// // 2.types of coercion
// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. 
// This includes conversion from Number to String, String to Number, Boolean to Number, etc.
//  when different types of operators are applied to the values.

// //  types
// Number to String Conversion
// String to Number Conversion
// Boolean to Number
// The Equality Operator

function generateOTP(length) {
    let otp = '';
    const digits = '0123456789';
  
    for (let i = 0; i < length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
  
    return otp;
  }
  
  const otp = generateOTP(6); // Change the number to the desired OTP length
  console.log(`Your OTP is: ${otp}`);
  
// function OTP() {

//    let otp=[Math.floor(Math.random()*10000)]
//     console.log(otp)
   
//   }
//   OTP()

//   // isNaN(123): returns false because 123 is a number.
//   // isNaN(-1.23): returns false because -1.23 is a number.
//   // isNaN(NaN): returns true because the value is NaN.
//   // 2. Non-numeric
//   // isNaN("123"): returns false because the string "123" can be converted to a number.
//   // isNaN("Hello"): returns true because the string "Hello" cannot be converted to a number.
//   // isNaN(""): returns false because an empty string is coerced to 0, which is a number.
//   // isNaN(true): returns false because true is coerced to 1, which is a number.
//   // isNaN(false): returns false because false is coerced to 0, which is a number.
//   // isNaN(undefined): returns true because undefined cannot be converted to a number.
//   // isNaN(null): returns false because null is coerced to 0, which is a number.
//   // 3. Objects
//   // isNaN({}): returns true because an object cannot be converted to a number.
//   // isNaN([]): returns false because an empty array is coerced to 0, which is a number.
//   // isNaN([1, 2, 3]): returns true because an array with more than one element cannot be converted to a single number.
//   // 4. Using Number.isNaN
//   // Number.isNaN is a more reliable method introduced in ECMAScript 2015 (ES6) because it does not perform type coercion.
  
//   // Number.isNaN(123): returns false.
//   // Number.isNaN("123"): returns false.
//   // Number.isNaN(NaN): returns true.
//   // Number.isNaN("Hello"): returns false.
//   // Number.isNaN(undefined): returns false.
//   // Number.isNaN(null): returns false.

// // function add(num){
// //     sum=0
// //     while(num!=0){
// //         rem=num%10;
// //         sum=sum+rem;
// //         num=Math.floor(num/10);
// //     }
// //     if(sum<10){
// //         return sum;
// //     }
// //     return add(sum);    
// // }
// // console.log(add(999999))




// // let k=Math.pow("HELLO",3)
// // console.log(k)
