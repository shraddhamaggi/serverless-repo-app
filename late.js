// start coding your function here!
//Create a function running_late(date) in JavaScript that returns It is late! if the time is at or after 10:00 PM, and It is still early! if it is not.

function running_late(date) {
    hours = date.getHours()
    if (hours >= 22) {
        return "It is late!"
    } else {
        return "It is still early!"
    }
}
let date = new Date("August 19, 1975 13:15:30")
console.log(running_late(date))
exports.running_late = running_late
