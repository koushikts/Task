// // 1. Reverse that given  string


// str="I am a string"
// olp=gnirts a ma I

let str = "I am a string";
let result = ``;
for(let i = str.length-1; i >= 0; i--){
    result += str[i];

}

console.log(result);

// str1=someString
// olp:gnirtsemos

let string = "somestring";
let res = ``;
for(let i = string.length-1; i >= 0; i--){
    res += string[i];

}

console.log(res);


// 3 Capitalize the all  letter of given string 

// str="i am a string"
// olp=I AM A STRING

str = "i am a string";
console.log(str.toUpperCase("i am a string"));


// 4  Calculate the length of the string
// str="i am a string"
// olp:13
// str1=“Parvez Ansari”
// olp:13

str="i am a string"
console.log(str.length);

let str1=`Parvez Ansari`;
console.log(str1.length);

// 5.  converted to lowercase in given string
// str='JAVASCRIPT'
// olp=javascript

str='JAVASCRIPT'
console.log(str.toLowerCase("JAVASCRIPT"));

// 6. It is used to check whether a string contains the specified string or characters  return true & false
// str= "Hello, welcome to Javascript"
// specific=('welcome')
// olp=true

str= "Hello, welcome to Javascript"
console.log(Boolean(str.includes(`welcome`)));


// str= "Javascript is Good Language"
// specific=('welcome')
// olp=false

str= "Javascript is Good Language"
console.log(Boolean(str.includes(`welcome`)));



