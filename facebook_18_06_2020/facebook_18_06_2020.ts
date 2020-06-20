/**
 * Check if the value is decodable.
 * If teh value is null, undefined or begins with 0.
 * @param value 
 */
function decodable(value: string): boolean {
    let decodable = value === null || value[0] === '0';
    if (decodable) {
        console.log(value + ' is not allowed');
        return false;
    }

    return true;
}

/**
 * 1. If the last digit is non-zero, recur for remaining (n-1)
 * digits and add the result to total count.
 * 2. If the last two digits form a valid character (or smaller than 27),
 * recur for remaining (n-2) digits and add the result to total count.
 * @param value The value to check.
 * @param length The value's kength.
 */
function decode(value: string, length: number): number {

    if(length === value.length && !decodable(value)) {
        return 0;
    }

    if (length === 0 || length === 1) {
        return 1;
    }

    let result = 0;

    if (parseInt(value[length - 1]) > 0) {
        result = decode(value, length - 1);
    }

    if (value[length - 2] === '1' ||
        (value[length - 2] === '2' && parseInt(value[length - 1]) < 7)) {
        result = result + decode(value, length - 2);
    }

    return result;
}

console.log(decode('111', 3));
console.log(decode('12', 2));
console.log(decode('001', 3));