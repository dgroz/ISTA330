/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       curArr = input
       totalSum = 0
       while (curArr.length > 0)  {
              firstMaxNum = max(curArr)
              curArr.splice(curArr.indexOf(firstMaxNum), 1)
              secondMaxNum = max(curArr)
              curArr.splice(curArr.indexOf(secondMaxNum), 1)
              curPair = [firstMaxNum, secondMaxNum]
              totalSum += min(curPair)
       }
       return totalSum
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

