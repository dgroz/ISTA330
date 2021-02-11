/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    countList = []
    for (i=0; i < input.length; i++)    {
        curCount = 0
        for (curIndex=0; curIndex < input.length; curIndex++) {
            if (curIndex !== i) {
                if ((input[curIndex] % 2 === 0) 
                && (input[curIndex] > input[i])) {
                    curCount++
                }
            }
        }
        countList.push(curCount)
    }
    return countList
};