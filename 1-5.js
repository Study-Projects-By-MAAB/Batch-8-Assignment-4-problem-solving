// ------------------------------ Problem 1 -------------------------------------

function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'Provide a valid number'
    }
    const cube = number ** 3
    return cube
}

// console.log(cubeNumber(3));
// console.log(cubeNumber(4));

// ------------------------------ Problem 2 -------------------------------------

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please Provide a valid string.'
    }
    const result = string1.includes(string2)
    return result

}

// console.log(matchFinder('John Doe', 'ohn'));
// console.log(matchFinder('JavaScript', 'Code'));
// console.log(matchFinder('Peter Parker', 'Pen'));
// console.log(matchFinder('Peter Parker', 'pet'));

// ------------------------------ Problem 3 -------------------------------------
// const array = [4, 4]
console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));

function sortMaker(arr) {
    let positive = []
    for (const number of arr) {
        if (number > 0) {
            positive.push(number)
        }
        else {
            return 'Invalid input'
        }
    }
    if (positive[0] === positive[1]) {
        return 'equal number';
    }
    else {
        if (positive[0] > positive[1]) {
            return [positive[0], positive[1]]
        }
        else {
            return [positive[1], positive[0]]
        }
    }
}

// ------------------------------ Problem 4 -------------------------------------

