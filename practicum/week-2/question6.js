/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    input.sort()
    if (input.length === 1)   {
        return input[0]
    }
    else if ( input.length === 0)   {
        return 0
    }
    else if (input.length % 2 === 0) {
        firstIndex = (input.length/2) -1
        secondIndex = input.length/2
        return (input[firstIndex] + input[secondIndex])/2
    } else {
        middleIndex = (input.length/2) -.5
        return input[middleIndex]
    }
};
