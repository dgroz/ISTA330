/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    arr = n.toString().split('')
    return max(arr) - min(arr)
};


var min = function(arr)       {
    curLowest = null
    for (i=0; i<arr.length; i++)    {
        if (curLowest === null) {
            curLowest = arr[i]
        }
        else if (arr[i] < curLowest) {
            curLowest = arr[i]
        }
    }
    return curLowest
}


var max = function(arr)       {
    curHighest = null
    for (i=0; i<arr.length; i++)    {
        if (curHighest === null) {
            curHighest = arr[i]
        } else if (arr[i] > curHighest) {
            curHighest = arr[i]
        }
    }
    return curHighest
}
