export const code = `
// the webpack bootstrap
(function (modules) {
    // The module cache
    var installedModules = {};
    // The require function
    function __webpack_require__(moduleId) {
        // Check if module is in cache
        // Create a new module (and put it into the cache)
        // Execute the module function
        // Flag the module as loaded
        // Return the exports of the module
    }


    // expose the modules object (__webpack_modules__)
    // expose the module cache
    // Load entry module and return exports
    return __webpack_require__(0);
})
/************************************************************************/
([
    // index.js - our application logic
    /* 0 */
    function (module, exports, __webpack_require__) {
        var multiply = __webpack_require__(1);
        var sum = __webpack_require__(2);
        var totalMultiply = multiply(5, 3);
        var totalSum = sum(5, 3);
        console.log('Product of 5 and 3 = ' + totalMultiply);
        console.log('Sum of 5 and 3 = ' + totalSum);
    },
    // multiply.js
    /* 1 */
    function (module, exports, __webpack_require__) {
        var sum = __webpack_require__(2);
        var multiply = function (a, b) {
            var total = 0;
            for (var i = 0; i < b; i++) {
                total = sum(a, total);
            }
            return total;
        };
        module.exports = multiply;
    },
    // sum.js
    /* 2 */
    function (module, exports) {
        var sum = function (a, b) {
            return a + b;
        };
        module.exports = sum;
    }
]);
`;

export default code.trim();
