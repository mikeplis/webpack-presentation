const code = `

// round.js
window.round = function round(n) {
    return Math.round(n * 100) / 100;
}

// add.js
window.add = function add(a, b) {
    return window.round(a + b);
}

// multiply.js
window.multiply = function multiply(a, b) {
    return window.round(a * b);
}

// main.js
const n1 = window.add(2.345, 6.789);
const n2 = window.multiply(2.345, 6.789);
console.log(n1); // 9.13
console.log(n2); // 15.92
`;

export default code.trim();
