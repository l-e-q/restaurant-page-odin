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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAbout: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', '', ['main'], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\r\n\r\n    const backHeadingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', '', ['back-heading-text'], 'Restaurant');\r\n    main.appendChild(backHeadingText);\r\n\r\n    const headingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', '', ['heading-text'], 'Aweasome');\r\n    main.appendChild(headingText);\r\n\r\n    const homeHeadingHr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('hr', '', ['wide-hr'], '');\r\n    main.appendChild(homeHeadingHr);\r\n\r\n    const aboutRestaurant = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', 'about-restaurant', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam obcaecati, cum aperiam ut error aspernatur nemo ipsum veritatis vitae, eum culpa? Vel numquam nostrum facilis corrupti fugit ipsam vitae.');\r\n    main.appendChild(aboutRestaurant);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/about.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderFooter: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const footer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('footer', 'footer', [], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(footer);\r\n\r\n    const footerText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', 'footer-text', [], `Copyright © ${new Date().getFullYear()} l-e-q`);\r\n    footer.appendChild(footerText);\r\n\r\n    const footerImgLink = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('a', 'footer-img-link', [], '');\r\n    footerImgLink.target = '_blank';\r\n    footerImgLink.href = 'https://github.com/l-e-q';\r\n    footer.appendChild(footerImgLink);\r\n\r\n    const footerImg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('img', 'footer-img', [], '');\r\n    footerImg.src = '../src/github-mark.png';\r\n    footerImgLink.appendChild(footerImg);\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeader: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const header = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('header', 'header', [], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(header);\r\n\r\n    const nav = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('nav', 'menu', [], '');\r\n    header.appendChild(nav);\r\n\r\n    const menuList = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('ul', 'menu-list', [], '')\r\n    nav.appendChild(menuList);\r\n\r\n    ['Home', 'Menu', 'About'].forEach(menuListItemText => {\r\n        const menuListItem = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', '', ['menu-list-item'], '');\r\n        menuList.appendChild(menuListItem);\r\n\r\n        const menuListItemButton = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', '', ['menu-list-item-button'], menuListItemText);\r\n        menuListItem.appendChild(menuListItemButton);\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHome: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', '', ['main'], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\r\n\r\n    const backHeadingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', '', ['back-heading-text'], 'Restaurant');\r\n    main.appendChild(backHeadingText);\r\n\r\n    const headingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', '', ['heading-text'], 'Aweasome');\r\n    main.appendChild(headingText);\r\n\r\n    const homeHeadingHr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('hr', '', ['wide-hr'], '');\r\n    main.appendChild(homeHeadingHr);\r\n\r\n    const description = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', 'description', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam obcaecati, cum aperiam ut error aspernatur nemo ipsum veritatis vitae, eum culpa? Vel numquam nostrum facilis corrupti fugit ipsam vitae.');\r\n    main.appendChild(description);\r\n\r\n    const homeButton = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', 'home-button', [], 'Menu');\r\n    main.appendChild(homeButton);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector('div#content');\r\n\r\nfunction createHtmlElement(tag, id, arrayClasses, content) {\r\n    const element = document.createElement(tag);\r\n    if (id) element.id = id;\r\n    if (arrayClasses) {\r\n        arrayClasses.forEach((Class) => {\r\n            element.classList.add(Class)\r\n        });\r\n        \r\n    }\r\n    if (content) element.innerText = content;\r\n    return element; \r\n}\r\n\r\nfunction home() {\r\n    content.innerHTML = '';\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_2__.renderHome)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();\r\n}\r\n\r\nfunction menu() {\r\n    content.innerHTML = '';\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_4__.renderMenu)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();\r\n}\r\n\r\nfunction about() {\r\n    content.innerHTML = '';\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\r\n    (0,_about__WEBPACK_IMPORTED_MODULE_5__.renderAbout)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();\r\n}\r\n\r\n// home();\r\nmenu();\r\n// about();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', '', ['main'], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\r\n\r\n    const backHeadingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', '', ['back-heading-text'], 'Restaurant');\r\n    main.appendChild(backHeadingText);\r\n\r\n    const headingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', '', ['heading-text'], 'Menu');\r\n    main.appendChild(headingText);\r\n\r\n    const homeHeadingHr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('hr', '', ['wide-hr'], '');\r\n    main.appendChild(homeHeadingHr);\r\n\r\n    const restaurantMenuList = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('ul', 'restaurant-menu-list', [], '');\r\n    main.appendChild(restaurantMenuList);\r\n\r\n    const dishes = [{\r\n        name: 'Cake',\r\n        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis vel\r\n                        distinctio, ullam quod dolor ratione temporibus neque vitae iste beatae nobis veniam hic ab, mollitia quas fugit\r\n                        placeat pariatur.`,\r\n        price: 20\r\n    },\r\n    {\r\n        name: 'Fish',\r\n        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis vel\r\n                    distinctio, ullam quod dolor ratione temporibus neque vitae iste beatae nobis veniam hic ab, mollitia quas fugit\r\n                    placeat pariatur.`,\r\n        price: 20\r\n    },\r\n    {\r\n        name: 'Egg',\r\n        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis vel\r\n                    distinctio, ullam quod dolor ratione temporibus neque vitae iste beatae nobis veniam hic ab, mollitia quas fugit\r\n                    placeat pariatur.`,\r\n        price: 20\r\n    }]\r\n\r\n    dishes.forEach(dish => {\r\n        const dishListItem = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', '', ['dish'], '');\r\n        restaurantMenuList.appendChild(dishListItem);\r\n\r\n        const dishName = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h3', '', ['dish-name'], `${dish.name}`);\r\n        dishListItem.appendChild(dishName);\r\n\r\n        const dishDescription = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', '', ['dish-description'], `${dish.description}`);\r\n        dishListItem.appendChild(dishDescription);\r\n\r\n        const dishPrice = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h4', '', ['dish-price'], `${dish.price}$`);\r\n        dishListItem.appendChild(dishPrice);\r\n\r\n        if (dishes.indexOf(dish) !== dishes.length - 1) {const menuHr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('hr', '', ['thin-hr'], '');\r\n            restaurantMenuList.appendChild(menuHr);\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/menu.js?");

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