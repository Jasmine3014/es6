/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//constant \n// const a=10;\n// a=4;\n// console.log(a)\n//cant rewritw const it is used for fixed variable which dont need to change..\n//var\n// var a=3;\n// if(true){\n//     var a=8;\n//     console.log(a)\n// }\n// console.log(a) //bot output 8 ...but it should be 8,3...so this prbolem slove let...let works inside the block..cant rewrite inside the block.\n//promise..asyncronus\nconsole.log('hello');\nsetTimeout(function () {\n  console.log(\"i am in timer\", 2000);\n});\nconsole.log(\"i am third\");\n\n//# sourceURL=webpack://es6/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;