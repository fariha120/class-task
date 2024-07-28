//  question no 1

function reverseArray(arr) {
    return arr.reverse();
  }
  
  const smallArray = [1, 2, 3, 4, 5];
  const reversedSmallArray = reverseArray([...smallArray]); 
  
  console.log('Reversed Small Array:', reversedSmallArray); 
  
  const largeArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const reversedLargeArray = reverseArray([...largeArray]);
  
  console.log('Reversed Large Array:', reversedLargeArray);
  
// question no 2 

function filterNegativeNumbers(arr) {
    
    return arr.filter(num => num >= 0);
  }
  
  const numbers = [1, -2, 3, -4, 5, -6];
  const positiveNumbers = filterNegativeNumbers(numbers);
  
  console.log(positiveNumbers); 

//    question no 3

function countVowels(str) {

    str = str.toLowerCase();
    
   
    const vowels = 'aeiou';
    
 
    const vowelCount = str.split('').filter(char => vowels.includes(char)).length;
    
    return vowelCount;
  }
  const exampleString = "Hello, World!";
  const numberOfVowels = countVowels(exampleString);
  
  console.log('Number of vowels:', numberOfVowels); 

  //    question no 4

  
function isPalindrome(str) {
   
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  
  
    const reversedStr = normalizedStr.split('').reverse().join('');
    
   
    return normalizedStr === reversedStr;
  }
  
  
  const testString1 = "A man, a plan, a canal, Panama";
  const testString2 = "Hello, World!";
  
  console.log(`"${testString1}" is a palindrome:`, isPalindrome(testString1)); // Output: true
  console.log(`"${testString2}" is a palindrome:`, isPalindrome(testString2)); // Output: false

  
// question no 5


function isInRange(num1, num2) {
   
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
  }
  
 
  const number1 = 45;
  const number2 = 85;
  
  console.log(`Either ${number1} or ${number2} is in the range 50 - 99:`, isInRange(number1, number2)); // Output: true
  
  const number3 = 30;
  const number4 = 40;
  
  console.log(`Either ${number3} or ${number4} is in the range 50 - 99:`, isInRange(number3, number4)); // Output: false
  
  // question no 6
// Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.

function minMappedValue(arr, mapFunc) {
    const mappedValues = arr.map(mapFunc);
    return Math.min(...mappedValues);
}


function square(num) {
    return num * num;
}


let arr4 = [1, 2, 3, 4, 5];
console.log(minMappedValue(arr4, square)); 

// question no 7
//  Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.


function fourCopiesOfLastThree(str) {
    if (str.length >= 3) {
        const lastThree = str.slice(-3);
        return lastThree.repeat(4);
    } else {
        return "String length must be 3 and above.";
    }
}


let str5 = "JavaScript";
console.log(fourCopiesOfLastThree(str5)); 

//question no 8
//  Write a JavaScript program to find the types of a given angle.  Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle. Obtuse angle: An angle between 90 and 180 degrees. Straight angle: A 180 degree angle.

function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle. Angle should be between 0 and 180 degrees.";
    }
}
// Example usage:
console.log(angleType(45));  
console.log(angleType(90));   
console.log(angleType(120)); 
console.log(angleType(180));  
console.log(angleType(200));

//question no 9.
//  Write a JavaScript program to find the smallest round number not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros. So,
//  590 is rounder than 592, but 590 is less round than 600.


function smallestRoundNumber(value) {
    while (value % 10 !== 0) {
        value++;
    }
    return value;
}


console.log(smallestRoundNumber(590)); 
console.log(smallestRoundNumber(592));

//question no 10
// Write a JavaScript program to find the index of an array item in a for loop

function findIndex(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1; 
}


let arr6 = [10, 20, 30, 40, 50];
console.log(findIndex(arr6, 30));
console.log(findIndex(arr6, 100));
  