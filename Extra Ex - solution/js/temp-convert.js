console.log(convertToFahrenheit(0))
console.log(convertToFahrenheit(10))

console.log(convertTemprature(10, 'F'))
console.log(convertTemprature(10, 'C'))

function convertToFahrenheit(celsiusTemp) {
    return celsiusTemp / 5 * 9 + 32
}

function convertTemprature(temp, convertTo) {
    if(convertTo === 'F') {
        return temp / 5 * 9 + 32
    } else {
        return (temp - 32) * 5 / 9
    }
}