// currencyConversions.test.js

const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Define the expected precision for floating-point comparisons
const EPSILON = 0.01;

test('Convert from USD to JPY', () => {
    expect(fromDollarToYen(100)).toBeCloseTo(14400, EPSILON);
    expect(fromDollarToYen(0)).toBeCloseTo(0, EPSILON);
    expect(fromDollarToYen(-100)).toBeCloseTo(-14400, EPSILON);
});

test('Convert from EUR to USD', () => {
    expect(fromEuroToDollar(100)).toBeCloseTo(112, EPSILON);
    expect(fromEuroToDollar(0)).toBeCloseTo(0, EPSILON);
    expect(fromEuroToDollar(-100)).toBeCloseTo(-112, EPSILON);
});

test('Convert from JPY to GBP', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(6.5, EPSILON);
    expect(fromYenToPound(0)).toBeCloseTo(0, EPSILON);
    expect(fromYenToPound(-1000)).toBeCloseTo(-6.5, EPSILON);
});