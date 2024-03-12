console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
        console.log("a non-negative count.");
        return;
    }

    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age = 0, username = "guest") {
    let abovesixteen = `You can drive, ${username}!`;
    let belowsixteen = `Sorry, ${username} but you need to wait until youre 16`;
    if (age >= 16) {
        console.log(abovesixteen);
    } else {
        console.log(belowsixteen);
    }

    function checkAge(){
        let userName = prompt("What is your name?");
        let age = prompt("What is your age?");
        let abovesixteen = `You can drive, ${userName}!`;
        let belowsixteen = `Sorry, ${username} but you need to wait until youre 16`;
        if (age >= 16) {
            console.log(abovesixteen);
        } else {
            console.log(belowsixteen);
        }
    }
}
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x,y){
    if (x > 0 && y > 0){
        console.log(`${x}, ${y} is in Quadrant 1`);
    } else if (x < 0 && y > 0){
        console.log(`${x}, ${y} is in Quadrant 2`);
    } else if (x < 0 && y < 0){
        console.log(`${x}, ${y} is in Quadrant 3`);
    } else if (x > 0 && y < 0){
        console.log(`${x}, ${y} is in Quadrant 4`);
    } else if (x != 0 && y == 0){
        console.log(`${x}, ${y} is on the x axais`);
    } else if (y != 0 && x == 0){
        console.log(`${x}, ${y} is on the y axais`); 
    } else {
        console.log(`${x}, ${y} is on the origin`);
    }
}
whichQuadrant(1, 1); //quadrant 1
whichQuadrant(-1, 2); //quadrant 2
whichQuadrant(-1, -1); //quadrant 3
whichQuadrant(1, -2); //quadrant 4
whichQuadrant(1, 0); //x axis
whichQuadrant(0, 1); //y axis


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(side1, side2, side3) {
    let isValid = false;
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        isValid = true;
    }
    if (isValid) {
        if (side1 == side2 && side2 == side3) {
            console.log(
                `Sides ${side1}, ${side2}, ${side3} form an equilateral triangle`
            );
        } else if (side1 == side2 || side2 == side3 || side1 == side3) {
            console.log(
                `Sides ${side1}, ${side2}, ${side3} form an isosceles triangle`
            );
        } else {
            console.log(
                `Sides ${side1}, ${side2}, ${side3} form a scalene triangle`
            );
        }
    }
    if (isValid == false) {
        console.log("Sorry, invalid Triangle")
    }
}

typeOfTriangle(2, 2, 2); //equilateral
typeOfTriangle(1, 2, 2); //isosceles
typeOfTriangle(2, 3, 4); //scalene
typeOfTriangle(1, 1, 2); //invalid
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
