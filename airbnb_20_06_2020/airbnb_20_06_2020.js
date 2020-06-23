/**
 * Returns the largest sum of non-adjacent numbers
 * @param values array of numbers
 */
function getMaxSum(values) {
    var maxSumWithPreviousValue = values[0];
    var maxSumWithoutPreviousValue = 0;
    var new_maxSumWithoutPreviousValue;
    for (var index = 1; index < values.length; index++) {
        new_maxSumWithoutPreviousValue = maxSumWithPreviousValue > maxSumWithoutPreviousValue ? maxSumWithPreviousValue : maxSumWithoutPreviousValue;
        maxSumWithPreviousValue = maxSumWithoutPreviousValue + values[index];
        maxSumWithoutPreviousValue = new_maxSumWithoutPreviousValue;
    }
    return maxSumWithPreviousValue > maxSumWithoutPreviousValue ? maxSumWithPreviousValue : maxSumWithoutPreviousValue;
}
console.log(getMaxSum([2, 4, 6, 2, 5]));
console.log(getMaxSum([5, 1, 1, 5]));
