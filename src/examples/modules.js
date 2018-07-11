const code = `
// add.js
const add = function add(a, b) {
    return a + b;
}

export default add;

// main.js
import add from './add.js';

const total = add(5, 10);
console.log(total);
`;

export default code.trim();
