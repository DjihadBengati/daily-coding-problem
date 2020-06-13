var values = [10, 15, 3, 7];
var k = 17;
function doIt(values, k) {
    console.log('k = ' + k);
    console.log('values = [' + values + ']');
    return values.length == 0 ? false : doCkecks(k, values[0], values.slice(1, values.length));
}
function doCkecks(k, value, values) {
    for (var index = 0; index < values.length; index++) {
        if ((values[index] + value) === k) {
            console.log(value + ' + ' + values[index] + ' = ' + (values[index] + value));
            return true;
        }
    }
    return doIt(values, k);
}
console.log(doIt(values, k));
