// 1) WAP to sum all the elements of an array input array = [3,6,9,10, 15, 9]  
//   Expected output = 52

  const array = [3,6,9,10, 15, 9];
  let sum = 0;
  for(i=0; i<array.length; i++){
      sum += array[i];
  }
  console.log(sum);


  /*2) WAP to add only positive numbers input = [-1, 5, -7, 15, 0, 8, -19] 
   Expected  output = 28*/

   let input = [-1, 5, -7, 15, 0, 8, -19] ;
   let res = 0;
        for(i=0 ; i<=input.length-1 ; i++){
            if(Boolean(input[i]>=1)){
               res +=input[i];
            }
        }; console.log(res); 

 /*3) Using assignment operator (+=) Print the below table 
 
        2 X 1 = 2
        2 X 2 = 4.
        2 X 10 = 20*/
     res =``;
     for(i=1; i<=10; i++){
         res += `${2*i},`;
     }
      console.log(res);

//   4) WAP to capitalise first letter of a string input = 'javascript'
//   Expected output = "Javascript'




let str = 'javascript';
let str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);

str = 'javascript';
str[0].toUpperCase() + str.substring(1);
console.log(str);

// or

 str = `javascript`;
let result = "";
for(i = 0; i <= str.length; i++){
    if (i == 0){
        result += str.charAt(i).toUpperCase();
    }
        else{
            result += str.charAt(i);

        }
    };

console.log(result)

// 5) WAP to capitalise the third word of a sentence input = "Rama went to forest"
//  Expected output = "Rama went TO forest".

// str = 'Rama went to forest';
// result = "";
// for (i = 10; i >= str.length; i++){
//     if (i == )
// }
str ="Rama went to forest";
const xy =str.slice(0,9) + str.charAt(10).concat (str.charAt(11)).toUpperCase()+ str.slice(12);
console.log(xy);

// or

str ="Rama went to forest";
let str3 =str.replace("to","TO");
console.log(str3);


/*6)WAP to print even and odd numbers in separate arrays input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 Expected output = [2,4,6,8], [1,3,5,7,9]  */

 const numbers = [1,2,3,4,5,6,7,8,9];

 function seperateArray(array) {
 
 const odd = array.filter(num => num % 2 === 1);
 
 const even = array.filter(num => num % 2 === 0);
 
 return { odd: odd, even: even }
 }
 console.log(seperateArray(numbers));

/*7) WAP to find the sum of the elements of an array input = [2, '45HiThere!', '10', 5, '67$']; 

Expected output = 129*/

let xyz = [2, '45HiThere!', '10', 5, '67$'];

