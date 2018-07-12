const code = `
// render.js
import './main.css';

const render = function render(type, text) {
    const element = document.createElement(type);
    element.innerText = text;
    document.body.appendChild(element);
};

export default render;
`;

export default code.trim();
