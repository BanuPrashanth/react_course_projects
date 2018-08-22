//Object destructuring

const person = {
   name: 'Banu Prashanth',
    age: 24,
    location: {
        temp: '26C',
        city: 'Bangalore'
    }
};

const {name : firstName = 'Unknown', age} = person;

const {temp:temperature, city='Unknown'} = person.location;

console.log(`I'm ${firstName}, ${age} Years Old.`);
console.log(`Temperature in ${city} is ${temperature}.`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {title, author} = book;
const {name:publisherName='Self-Published'} = book.publisher;

console.log(publisherName); 

//Array destructuring

const address = ['4th Cross', 'MTB Area', 'Jayanagar 5th block']

const [,area,,loc='Karnataka'] = address;

console.log(`I live in ${loc} city & In ${area}`)

