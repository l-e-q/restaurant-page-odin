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

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeader: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const header = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('header', 'header', [], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(header);\r\n\r\n    const nav = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('nav', 'menu', [], '');\r\n    header.appendChild(nav);\r\n\r\n    const menuList = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('ul', 'menu-list', [], '')\r\n    nav.appendChild(menuList);\r\n\r\n    ['Home', 'Menu', 'About'].forEach(menuListItem => {\r\n        menuList.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', '', ['menu-list-item'], menuListItem))\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHome: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', '', ['main'], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector('div#content');\r\n\r\nfunction createHtmlElement(tag, id, arrayClasses, content) {\r\n    const element = document.createElement(tag);\r\n    if (id) element.id = id;\r\n    if (arrayClasses) {\r\n        arrayClasses.forEach((Class) => {\r\n            element.classList.add(Class)\r\n        });\r\n        \r\n    }\r\n    if (content) element.innerText = content;\r\n    return element; \r\n}\r\n\r\nfunction home() {\r\n    content.innerHTML = '';\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_2__.renderHome)();\r\n    // renderFooter();\r\n}\r\n\r\nhome();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://restaurant-page-odin/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;