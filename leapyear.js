
function isLeapYear(year) {
    return (year % 4 === 0);
}

let leapYears = [];
for (let year = 2000; year <= 2020; year++) {
    if (isLeapYear(year)) {
        leapYears.push(year);
    }
}
if (leapYears.length === 0) {
    console.log("No leap years found.");
} else {
    console.log("Leap years found: " + leapYears);
}