function solutionUber13062020(values) {
    console.log('Input: [' + values + ']');
    var result = [];
    values.forEach(function (element) {
        result.push(values.filter(function (item) { return item !== element; }).reduce(function (a, b) { return a * b; }));
    });
    return result;
}
console.log('Output: [' + solutionUber13062020([1, 2, 3, 4, 5]) + ']');
console.log('Output: [' + solutionUber13062020([3, 2, 1]) + ']');
