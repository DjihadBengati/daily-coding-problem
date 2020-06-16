function theRightOne(values) {
    var sortedList = values.sort().filter(function (value) {
        return value >= 0;
    });
    var biggest = sortedList[sortedList.length - 1];
    for (var value = biggest; value >= 0; value--) {
        if (sortedList.indexOf(value) < 0) {
            return value;
        }
    }
    return biggest + 1;
}
console.log(theRightOne([3, 4, -1, 1]));
console.log(theRightOne([1, 2, 0]));
