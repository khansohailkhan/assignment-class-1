function EvenOrOdd(number: number): string 
{
    if (number % 2 === 0) 
         {
        return 'Even';
         } 
    else 
        {
            return 'Odd';
        }
}
const result: string = EvenOrOdd(5);
console.log(result); // Output
