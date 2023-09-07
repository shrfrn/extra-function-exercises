console.log(calculateCircumference(3))
console.log(calculateCircumference(-3))

console.log(calculateArea(3))
console.log(calculateArea(0))

function calculateCircumference(radius) {
    if(radius > 0){
        return 2 * 3.14 * radius 
    }
}
function calculateArea(radius) {
    if(radius > 0){
        return 3.14 * radius ** 2
    }
}