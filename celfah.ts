function convertCelsiusToFahrenheit(celsius: number): 
number
 {
  // The conversion formula: Fahrenheit = (Celsius * 9/5) + 32
  const fahrenheit: number = (celsius * 9/5) + 32;
  return fahrenheit;
}

const celsiusTemperature: number = 25;
const fahrenheitResult: number = convertCelsiusToFahrenheit(celsiusTemperature);
console.log(`------------------------------------------------`);

console.log(`Temperature Value in Celius: ${celsiusTemperature}.`);
console.log(`Temperature Value in Fahrenheit: ${fahrenheitResult}.`);
