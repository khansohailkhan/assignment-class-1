function reverseString(inputString: string): 
string 
    {
       /* 1. reverseString function takes a string parameter inputString. 
          2. uses the split('') method to convert the string into an array of characters, 
          3. reverse() to reverse the order of the array, 
          4. join('') to convert the array back to a string*/

    const reversedString: string = inputString.split('').reverse().join('');
    return reversedString;
     }
  
  const originalString: string = 'Hello, World!';
  const reversedResult: string = reverseString(originalString);
  console.log(`------------------------------------------------`);
  console.log(`Original String: ${originalString}`);
  console.log(`Reversed String: ${reversedResult}`);
  console.log(`------------------------------------------------`);
 