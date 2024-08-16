// Exchange rates
const USD_TO_JPY_RATE = 144.00; // Example rate: 1 USD = 144 JPY
const EUR_TO_USD_RATE = 1.12;   // Example rate: 1 EUR = 1.12 USD
const JPY_TO_GBP_RATE = 0.0065; // Example rate: 1 JPY = 0.0065 GBP

// Convert from US Dollars to Japanese Yen
function fromDollarToYen(dollars) {
    return dollars * USD_TO_JPY_RATE;
}

// Convert from Euros to US Dollars
function fromEuroToDollar(euros) {
    return euros * EUR_TO_USD_RATE;
}

// Convert from Japanese Yen to British Pounds
function fromYenToPound(yen) {
    return yen * JPY_TO_GBP_RATE;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };