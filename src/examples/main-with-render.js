const code = `
// main.js
import add from './add';
+ import render from './render';

const total = add(5, 10);

- console.log(total);
+ render('h1', total);
`;

export default code.trim();
