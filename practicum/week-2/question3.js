/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    orderedPairs = []
    if (input.length === 0 || input.length === 1)	{
		return 0
	}
	for (i=0; i<input.length-1; i++)	{
        for (offset = 1; offset+i < input.length; offset++) {
            if (input[i] < input[i+offset]
                && !orderedPairs.includes([input[i], input[i+offset]]))	{
                orderedPairs.push([input[i], input[i+offset]])
            }
        }
    }
    return orderedPairs.length
}
