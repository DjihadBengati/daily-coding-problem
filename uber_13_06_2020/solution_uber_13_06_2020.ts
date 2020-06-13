function solutionUber13062020(values: Array<number>): Array<number> {
    console.log('Input: [' + values + ']');
    let result = [];
    values.forEach(element => {
        result.push(
            values.filter(item => item !== element).reduce(function (a, b) { return a * b; })
        );
    });
    return result;
}

console.log('Output: [' + solutionUber13062020([1, 2, 3, 4, 5]) + ']');
console.log('Output: [' + solutionUber13062020([3, 2, 1]) + ']');