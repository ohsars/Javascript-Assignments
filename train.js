"use strict"

// Creating an Object
const Person = {
    Name: {
        first: "Favour" ,
        middle: "Osakpolor", 
        last: "Enofe"
    },
    Age : 12,
    favouriteColour : 'Red',
    food : 'Rice',
    location : {
        streetNumber : 5,
        street : "Grace Avenue, Estate 10",
        nearestBusStop : "Off Ring Road",
        lga : "Obafemi Owode Local Government Area",
        city : "Redemption camp, Mowe",
        state : "Ogun State",
        zipCode: 110111,
        country : "Nigeria",
        Continent : "Africa"
    },
    getAddress() {
        return `${this.Name.first} ${this.Name.middle} ${this.Name.last} stays at ${this.location.streetNumber}, ${this.location.street}, ${this.location.nearestBusStop}, ${this.location.lga}, ${this.location.city}, ${this.location.state}, ${this.location.zipCode}, ${this.location.country}, ${this.location.Continent}`
    }
}

// console.log(Person.getAddress())
// console.log(Person.Name)
// console.log(Person.favouriteColour)


// Array Methods
const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17]
// console.log(primeNumbers.length)
// console.log(primeNumbers.join("||"))


const courses = [
    { teacher: "Will Sentence", course: "Javascript: the hard parts"},
    { teacher: "Sarah Terence", course: "Introduction to vue"},
    { teacher: "MarvelUs Osas", course: "Intro to React"},
    { teacher: "Scott Moss", course: "Wahalla wahalla"}
]

// console.log(courses)

courses.push({teacher: "Favour😀", course: "Father is great"})

// console.log(courses, courses.length)
courses.unshift({teacher: "Martin", course: "Mathematics and stats"})
// console.log(courses, courses.length)


let eMail = "martin@gmail.com";

let splicedEmail = eMail.slice(-10)
// console.log(splicedEmail)

let emailCleaning = eMail.replaceAll(/\w|@|./ig, "*")

let result = emailCleaning.concat(splicedEmail)
console.log(result);