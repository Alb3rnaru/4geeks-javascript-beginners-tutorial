let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if (guests <= 50){
        cost = 4;
    } else if ( guests <=100 && guests > 50){
        cost = 10;
    } else if ( guests <=200 && guests > 100){
        cost = 15;
    } else if ( guests > 200){
        cost = 20;
    }
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost $'+price+',000 dollars');
