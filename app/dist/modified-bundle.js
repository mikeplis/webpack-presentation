(function(modules) {
    // The require function
    function __webpack_require__(moduleId) {
        // Check if module is in cache
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        // Create a new module (and put it into the cache)
        var module = (installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        });

        // Execute the module function
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag the module as loaded
        module.l = true;

        // Return the exports of the module
        return module.exports;
    }

    // Load entry module and return exports
    return __webpack_require__((__webpack_require__.s = './main.js'));
})({
    './add.js': function(module, __webpack_exports__, __webpack_require__) {
        eval(
            '__webpack_require__.r(__webpack_exports__);\nconst add = function add(a, b) {\n    return a + b;\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (add);\n\n\n//# sourceURL=webpack:///./add.js?'
        );
    },

    './main.js': function(module, __webpack_exports__, __webpack_require__) {
        eval(
            '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./add.js");\n\n\nconst total = Object(_add__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 10);\nconsole.log(total);\n\n\n//# sourceURL=webpack:///./main.js?'
        );
    }
});
