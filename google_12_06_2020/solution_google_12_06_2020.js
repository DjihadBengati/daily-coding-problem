function solutionGoogle12062020(values, k) {
    return values.length == 0 ? false : doCkecks(k, values[0], values.slice(1, values.length));
}
function doCkecks(k, value, values) {
    for (var index = 0; index < values.length; index++) {
        if ((values[index] + value) === k) {
            return true;
        }
    }
    return solutionGoogle12062020(values, k);
}
console.log('Input: k = ' + 17);
console.log('Input: values = [' + [10, 15, 3, 7] + ']');
console.log(solutionGoogle12062020([10, 15, 3, 7], 17));
