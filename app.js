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

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
