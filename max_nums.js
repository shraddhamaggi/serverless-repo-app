// start coding your function here!

function find_max(arr) {
    let max = Math.max.apply(null, arr)
    return max
}
let arr = [22, 13, 4]
console.log("Maximum value: " + find_max(arr))
exports.find_max = find_max