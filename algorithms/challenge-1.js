function countTruthy(arr) {
    const filterNumber = arr.filter((item) => item > 0)
    console.log(filterNumber.length);

}

countTruthy([6, 3, 0, 30, 7]);
countTruthy(["", 3, 0, 30, 7]);
countTruthy(["", 0, 0, undefined, 7]);

module.exports = countTruthy

