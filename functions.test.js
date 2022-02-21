let x = require('./functions')

test(`Should return the integer 2`, () => {
    expect(x.returnTwo()).toEqual(2)
})

test(`Should give the name back in the greeting string`, () => {
    expect(x.greeting('Juan')).toBe('Hello, Juan')
    expect(x.greeting('Juanita')).toBe(`Hello, Juanita`)
})

test(`should return the two values added together`, () => {
    expect(x.add(1,3)).toEqual(4)
    expect(x.add(5,9)).toEqual(14)
})

// REAL CHALLENGE AHEAD I'M SURE:

describe(`Math Functions`, () => {
    test(`Adding 5 and 5`, () => {
        expect(x.add(5,5)).toEqual(10)
        expect(x.add(10,5)).toEqual(15)
    })

    test(`Subtracting 5 FROM 10`, () => {
        expect(x.subtract(10,5)).toEqual(5)
        expect(x.subtract(15,5)).toEqual(10)
    })

    test(`Dividing 12 BY 3`, () => {
        expect(x.divide(12,3)).toEqual(4)
        expect(x.divide(18,3,3)).toEqual(6)
    })

    test(`Multiplying 3 BY 3`, () => {
        expect(x.multiply(3,3)).toEqual(9)
        expect(x.multiply(4,3)).toEqual(12)
    })
})