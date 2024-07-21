// question no 1
// Create a function that reverses an array. Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.


// Function to reverse an array
function reverseArray(arr) {
    let reversedArray = [];
    // Loop through the input array from last to first
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);  // Push each element to the new array
    }
    return reversedArray;
}

const array1 = [1, 2, 3, 4, 5];
console.log("Original array:", array1);
const reversedArray1 = reverseArray(array1);
console.log("Reversed array:", reversedArray1);

// larger array
const array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Original array:", array2);
const reversedArray2 = reverseArray(array2);
console.log("Reversed array:", reversedArray2);




function countVowels(str) {
    str = str.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    
    for (let char of str) {
        
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}


console.log(countVowels("Hello")); 
console.log(countVowels("Testing"));







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
