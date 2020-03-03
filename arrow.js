// function doubleIt(num) {
//     return num * 2;
// }
const doubleIt = num => num * 2;
const add = (num1, num2) => num1 + num2;
const double = doubleIt(5);
console.log(double);
const total = add(10, 15);
console.log(total);

const math = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const ans = math(10, 5);
console.log(ans);