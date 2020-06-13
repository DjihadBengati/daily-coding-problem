let values: Array<number> = [10, 15, 3, 7];
let k: number = 17;

function doIt(values: Array<number>, k: number): Boolean {
    console.log('k = ' + k);
    console.log('values = [' + values + ']');
    return values.length == 0 ? false : doCkecks(k, values[0], values.slice(1, values.length));
}

function doCkecks(k: number, value: number, values: Array<number>): Boolean {
    for (let index = 0; index < values.length; index++) {
        if ((values[index] + value) === k) {
            console.log(value + ' + ' + values[index] + ' = ' + (values[index] + value));
            return true;
        }
    }
    return doIt(values, k);
}

console.log(doIt(values, k));