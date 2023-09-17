// https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_ARRAYSIMPLEES6/

//  Problem Description
// Write a method which returns an array without the listed values

// References
// Arrays

// (MDN) JavaScript: Array

// Nesting For Loops in JavaScript

// Time complexity in JavaScript (Optional)

// ArraInput -
// arr: The given array

// without: A list of elements which are to be removed from arr.

// Output -
// Return the array after removing the listed values.

// Sample input 1 -
// arr: [1, 2, 2, 3, 1, 2]

// without: [2, 3]

// Sample output 1 -
// [1, 1]


function removeListedValues(arr, without) {
    let newArr = arr.filter((item) => {
        if (without.includes(item)) {
            return false;
        }
        else {
            return true;
        }
    });
    return newArr;
}