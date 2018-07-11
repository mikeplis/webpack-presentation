const code = `
// add.js
window.add = function add(a, b) {
    return a + b;
}

// main.js
const total = window.add(5, 10);
console.log(total);
`;

export default code.trim();
