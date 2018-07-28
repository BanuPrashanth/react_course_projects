// const getFirstName = (name) => {
//     return name.split(' ')[0];
// };

// const getFirstName1 = (name) => name.split(' ')[0];

// const square = (x) => x*x;

// console.log(getFirstName('Banu Prashanth'));
// console.log(getFirstName1('Banu Prashanth'));
// console.log(square(10));

const multiplier = {
    numbers: [3,6,9,12],
    multiplyBy: 3,
    multiply: function(){
       return this.numbers.map((n) => this.multiplyBy * n);
    } 
};

console.log(multiplier.multiply())


