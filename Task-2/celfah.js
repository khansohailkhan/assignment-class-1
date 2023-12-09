function convertCelsiusToFahrenheit(celsius) {
    // The conversion formula: Fahrenheit = (Celsius * 9/5) + 32
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
const celsiusTemperature = 25;
const fahrenheitResult = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(`------------------------------------------------`);
console.log(`Temperature Value in Celius: ${celsiusTemperature}.`);
console.log(`Temperature Value in Fahrenheit: ${fahrenheitResult}.`);
export {};
