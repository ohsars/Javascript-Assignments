"use strict"

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
        return `${this.Name.first} ${this.Name.middle} ${this.Name.last} stays at ${this.location.streetNumber} ${this.location.street}, ${this.location.nearestBusStop}, ${this.location.lga}, ${this.location.city}, ${this.location.state}, ${this.location.zipCode} ${this.location.country} ${this.location.Continent}`
    }
}

console.log(Person.getAddress())
// console.log(Person.Name)
// console.log(Person.favouriteColour)