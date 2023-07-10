const data = [ 
  {Name: "Samuel", Age : 50, Church : "The Redeemed Christian Church of God"},
  {Name: "Samuel", Age : 12, Church : "The Redeemed Christian Church of God"},
  {Name: "Samuel", Age : 19, Church : "The Redeemed Christian Church of God"},
  {Name: "fisayo", Age : 20, Church : "The Redeemed Christian Church of God"},
  {Name: "Ada", Age : 23, Church : "The Redeemed Christian Church of God"},
  {Name: "Boluwatife", Age : 13, Church : "The Redeemed Christian Church of God"}
]

data.map((details) => (
  // console.log(data.Name  `ftgx
  console.log(details.Age)
  // alert(`${details.name}`)
))


async function getName(name) {
  return name;
}

async function getLotsOfNames () {
  const names = promise.all([
    getName('Marvelous'),
    getName('Victory'),
    getName('Spritye'),
    getName('Brad'),
    getName('Brentford'),
  ])

  console.log(names)
}

getLotsOfNames()

console.log('a promise', getName())

getName().then(function(names) {
  console.log('the actual name', names)
})