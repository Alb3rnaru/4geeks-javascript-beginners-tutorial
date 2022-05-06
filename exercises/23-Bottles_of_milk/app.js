// Your code here:
function bottlesOfMilk() {
    for (i = 99; i >= 0; i--) {
    if (i > 1){
        console.log(i + " bottles of milk on the wall, " + i + " bottles of milk.");
        console.log("Take one down and pass it around, " + i + " bottles of milk on the wall.\n");        
    } else if (i === 1) {
        console.log(i + " bottle of milk on the wall, " + i + " bottle of milk.");
        console.log("Take one down and pass it around, no more bottles of milk on the wall.\n");
    } else {
        console.log("No more bottles of milk on the wall, no more bottles of milk.");
        console.log("Go to the store and buy some more, 99 bottles of milk on the wall.\n");
    }
    }
}

bottlesOfMilk();