module.exports = {
    returnTwo: () => {
        return 2
    },
    greeting: (name) => {
        return `Hello, ${name}`
    },
    add: (num1, num2) => {
        return num1 + num2
    },
    multiply: (num1, num2) => {
        return num1 * num2
    },
    divide: (num1, num2) => {
        if(num1 === 0 || num2 === 0){
            return `cannot divide by zero`
        }else{
            return num1 / num2
        }
    },
    subtract: (num1, num2) => {
        return num1 - num2
    }
}