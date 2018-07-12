const code = `
// bundle.js (kind of)
var myModules = [
    function() { // add.js
        function add(a, b) {
            return a + b;
        };
        return add;
    },
    function() { // main.js
        var add = myModules[0]();
        var total = add(5, 10);
        console.log(total);
    }
];

var entryPointIndex = 1;
myModules[entryPointIndex]();
`;

export default code.trim();
