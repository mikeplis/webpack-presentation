import './main.css';

const render = function render(type, text) {
    const h1 = document.createElement(type);

    h1.innerText = text;

    document.body.appendChild(h1);
};

export default render;
