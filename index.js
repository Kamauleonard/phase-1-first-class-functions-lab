// Solution 1
const returnFirstTwoDrivers =  function(drivers) {
    return drivers.slice(0, 2);
};


const allDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = returnFirstTwoDrivers(allDrivers);

console.log(firstTwoDrivers);

// Solution 2
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// Solution 3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Solution 4
const createFareMultiplier = multiplier => {
    return function (fare) {
        return fare * multiplier;
    };
};


const fareQuadrupler = createFareMultiplier(4);

// Solution 5
const fareDoubler = fare => fare * 2;

// Solution 6
const fareTripler = fare => fare * 3;
 // Solution 7
function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}


const firstTwoDriver = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
