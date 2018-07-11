const code = `
// main.js

function round(n) {
    return Math.round(n * 100) / 100;
}

function add(a, b) {
    return round(a + b);
}

function multiply(a, b) {
    return round(a * b);
}

const n1 = add(2.345, 6.789);
const n2 = multiply(2.345, 6.789);
console.log(n1); // 9.13
console.log(n2); // 15.92
`;

export default code.trim();
