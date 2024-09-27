const waitTime = 10000
const callback = () => {
    console.log("I print second")
}
console.log("I print first")

setTimeout(callback,waitTime)

console.log("I print second")
console.log("I print third")