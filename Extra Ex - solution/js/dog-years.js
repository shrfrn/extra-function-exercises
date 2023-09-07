console.log(calculateDogAge(2))
console.log(calculateDogAge(.5))

console.log(calculateAnimalAge(5, 3))
console.log(calculateAnimalAge(5, 2))
console.log(calculateAnimalAge(2, 2))

function calculateDogAge(humanYears) {
    if(humanYears >= 1) {
        return (humanYears + 1) * 7
    } else {
        return humanYears * 14
    }
}

function calculateAnimalAge(humanYears, ratio) {
    if(humanYears >= 1) {
        return (humanYears + 1) * ratio 
    } else {
        return humanYears * ratio * 2
    }
}