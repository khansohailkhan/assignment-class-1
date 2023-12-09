function calculateArea(width, height) {
    // Calculate the area of the rectangle
    const area = width * height;
    // Return the calculated area
    return area;
}
const width = 5;
const height = 10;
const areaResult = calculateArea(width, height);
console.log(`The area of the rectangle with width is : ${width}`);
console.log(`The area of the rectangle with Height is: ${height}`);
console.log(`------------------------------------------------`);
console.log(`The area of the rectangle with width and height is: ${areaResult}`);
console.log(`------------------------------------------------`);
export {};
