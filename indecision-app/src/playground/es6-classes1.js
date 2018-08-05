class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I'm ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let des = super.getDescription();
        if(this.hasMajor()){
            return des +` Thier Specialization is in ${this.major}`
        }
        
    }
}

class Traveller extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGreeting(){
        let greet = super.getGreeting();
        if(this.hasLocation()){
            return greet + ` I'm visiting from ${this.location}`;
        }
    }
}

const me = new Traveller("Banu Prashanth", 26, "India");

console.log(me.getGreeting());
console.log(me.hasLocation())
console.log(me.getDescription());

const other = new Traveller();
console.log(other.getGreeting());
console.log(other.hasLocation());
console.log(other.getDescription());
