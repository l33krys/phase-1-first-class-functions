function receivesAFunction(fn) {
    return fn();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return () => console.log(`hello`);
}

const returnFirstTwoDrivers = function(arr) {
    let newArr = arr.splice(0,2);
    console.log(newArr);
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
    
const returnLastTwoDrivers = function(arr) {
    let newArr = arr.splice(-2);
    console.log(newArr);
}

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

function selectingDrivers(arr1, arr2) {
    return returnFirstTwoDrivers(arr1);
    return returnLastTwoDrivers(arr2);
}

function createFareMultiplier(multi) {
    // rewrite as arrow function
    // return fare => console.log(fare * multi);
    return function(fare) {
        console.log(fare * multi);
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arg1, func) {
    return func(arg1);
}

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);