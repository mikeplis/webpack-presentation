const code = `

// round.js
export default function round(n) {
    return Math.round(n * 100) / 100;
}

// add.js
import round from './round.js';

export default function add(a, b) {
    return round(a + b);
}

// multiply.js
import round from './round.js';

export default function multiply(a, b) {
    return round(a * b);
}

// main.js
import add from './add.js';
import multiply from './multiply.js';

const n1 = add(2.345, 6.789);
const n2 = multiply(2.345, 6.789);
console.log(n1); // 9.13
console.log(n2); // 15.92
`;

export default code.trim();
