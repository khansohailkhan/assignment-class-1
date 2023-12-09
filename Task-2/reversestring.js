function reverseString(inputString) {
    /* 1. reverseString function takes a string parameter inputString.
       2. uses the split('') method to convert the string into an array of characters,
       3. reverse() to reverse the order of the array,
       4. join('') to convert the array back to a string*/
    const reversedString = inputString.split('').reverse().join('');
    return reversedString;
}
const originalString = 'Hello, World!';
const reversedResult = reverseString(originalString);
console.log(`------------------------------------------------`);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedResult}`);
console.log(`------------------------------------------------`);
export {};
