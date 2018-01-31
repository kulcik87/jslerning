// Typy zmiennych JS

let x = 1; //integer
let y = '1'; //string - text
let z = true; //boolean - true/false
let a = null; //null
let obj = {}; //object
let arr = []; //array

arr = [1, 2, 3, 4, 'yoo', null, [1, 2, 3]];

let dog = {
    body: {
        eyes: 'brown',
        legs: 4
    },
    name: 'Aron'
}

function artur(foo) {
    x = x + foo;
    if (x % 2 == 0){
        console.log('liczba parzysta ' + x);
    } else {
        console.log('liczba nieparz ' + x);
        
    }
    //console.log(x);
}
// artur(4);
// artur(17);
// artur(x);
setInterval(() => {
    artur(1);
}, 1000);

// console.log(dog);