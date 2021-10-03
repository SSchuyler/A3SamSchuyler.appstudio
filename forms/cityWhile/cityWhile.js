
let addCity = true
let cities = []

while (addCity) {
  if (cities == '') {
    newCity = prompt("Enter a city: ")
    cities.push(newCity)
    addCity = confirm('To add another city, hit OK, if not hit Cancel.')
  } 
  else {
    newCity = prompt("Enter another city: ")
    cities.push(newCity)
    addCity = confirm('To add another city, hit OK, if not hit Cancel.')
  }
}

let i = 0
while (i < cities.length) {
  console.log(cities[i].toLowerCase())
  i++;
  }
