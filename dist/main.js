/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background-img.jpg */ \"./src/background-img.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html {\r\n    box-sizing: border-box;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    background-position: center;\r\n    color: white;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n    box-sizing: inherit;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n/* header */\r\n\r\n#header {\r\n    padding: 25px;\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n#menu-list {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n\r\n.menu-list-item-button {\r\n    background: none;\r\n    color: white;\r\n    border: none;\r\n    font-size: 28px;\r\n    font-weight: 300;\r\n    font-family: 'Noto Sans';\r\n    transition: 250ms all;\r\n}\r\n\r\n.menu-list-item-button:hover,\r\n.menu-list-item-button:focus {\r\n    color: bisque;\r\n}\r\n\r\n/* header end */\r\n\r\n/* main */\r\n\r\n.main {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.back-heading-text {\r\n    font-family: 'Playfair Display';\r\n    font-style: italic;\r\n    font-size: 64px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.heading-text {\r\n    margin-top: -39px;\r\n    font-family: 'Noto Sans';\r\n    font-size: 82px;\r\n    font-weight: 900;\r\n    color: black;\r\n}\r\n\r\n#home-hr {\r\n    margin: 36px;\r\n}\r\n\r\n.wide-hr {\r\n    background-color: white;\r\n    width: 300px;\r\n    border: none;\r\n    height: 4px;\r\n}\r\n\r\n#home-description {\r\n    font-family: 'Noto Sans';\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-bottom: 36px;\r\n}\r\n\r\n#home-button {\r\n    border: none;\r\n    font-family: 'Noto Sans';\r\n    font-size: 32px;\r\n    font-weight: 300;\r\n    margin-bottom: 36px;\r\n    padding: 15px 60px;\r\n}\r\n\r\n#main-menu {\r\n    background-color: #8F7052;\r\n    overflow-y: scroll;\r\n}\r\n\r\n#menu-back-heading-text {\r\n    margin-top: 36px;\r\n}\r\n\r\n#menu-heading-text {\r\n    opacity: 0.95;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#menu-wide-hr {\r\n    margin: 36px;\r\n    height: 4px;\r\n    color: white;\r\n}\r\n\r\n#restaurant-menu-list {\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.dish-name {\r\n    font-family: 'Noto Sans';\r\n    font-size: 38px;\r\n    font-weight: 800;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.dish-description {\r\n    font-family: 'Noto Sans';\r\n    font-size: 22px;\r\n    font-weight: 300;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n.dish-price {\r\n    font-family: 'Noto Sans';\r\n    font-size: 32px;\r\n    font-weight: 800;\r\n    text-align: center;\r\n}\r\n\r\n.thin-hr {\r\n    background-color: white;\r\n    width: 280px;\r\n    border: none;\r\n    height: 2px;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n/* main end */\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    padding: 25px;\r\n    border-top: 2px solid white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n    \r\n}\r\n\r\n#footer-text {\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    font-family: 'Noto Sans';\r\n}\r\n\r\n#footer-img {\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n/* footer end */\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-odin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAbout: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'main-about', ['main'], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\r\n\r\n    const backHeadingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', '', ['back-heading-text'], 'Restaurant');\r\n    main.appendChild(backHeadingText);\r\n\r\n    const headingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', '', ['heading-text'], 'Aweasome');\r\n    main.appendChild(headingText);\r\n\r\n    const homeHeadingHr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('hr', '', ['wide-hr'], '');\r\n    main.appendChild(homeHeadingHr);\r\n\r\n    const aboutRestaurant = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', 'about-restaurant', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam obcaecati, cum aperiam ut error aspernatur nemo ipsum veritatis vitae, eum culpa? Vel numquam nostrum facilis corrupti fugit ipsam vitae.');\r\n    main.appendChild(aboutRestaurant);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/about.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderFooter: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _github_mark_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-mark.svg */ \"./src/github-mark.svg\");\n\r\n\r\n\r\n\r\nfunction render() {\r\n    const footer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('footer', 'footer', [], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(footer);\r\n\r\n    const footerText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', 'footer-text', [], `Copyright © ${new Date().getFullYear()} l-e-q`);\r\n    footer.appendChild(footerText);\r\n\r\n    const footerImgLink = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('a', 'footer-img-link', [], '');\r\n    footerImgLink.target = '_blank';\r\n    footerImgLink.href = 'https://github.com/l-e-q';\r\n    footer.appendChild(footerImgLink);\r\n\r\n    const footerImg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('img', 'footer-img', [], '');\r\n    footerImg.src = _github_mark_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    footerImgLink.appendChild(footerImg);\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeader: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const header = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('header', 'header', [], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(header);\r\n\r\n    const nav = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('nav', 'menu', [], '');\r\n    header.appendChild(nav);\r\n\r\n    const menuList = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('ul', 'menu-list', [], '')\r\n    nav.appendChild(menuList);\r\n\r\n    ['Home', 'Menu', 'About'].forEach(menuListItemText => {\r\n        const menuListItem = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', '', ['menu-list-item'], '');\r\n        menuList.appendChild(menuListItem);\r\n\r\n        const menuListItemButton = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', '', ['menu-list-item-button'], menuListItemText);\r\n        menuListItemButton.addEventListener('click', () => {\r\n            (0,_index__WEBPACK_IMPORTED_MODULE_0__.switchRender)(menuListItemText)\r\n        })\r\n        menuListItem.appendChild(menuListItemButton);\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHome: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'main-home', ['main'], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\r\n\r\n    const backHeadingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', '', ['back-heading-text'], 'Restaurant');\r\n    main.appendChild(backHeadingText);\r\n\r\n    const headingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', '', ['heading-text'], 'Aweasome');\r\n    main.appendChild(headingText);\r\n\r\n    const homeHeadingHr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('hr', 'home-hr', ['wide-hr'], '');\r\n    main.appendChild(homeHeadingHr);\r\n\r\n    const description = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', 'home-description', [], 'This just best restaurnt in the whole world, best of the best and you can eat our food.');\r\n    main.appendChild(description);\r\n\r\n    const homeButton = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', 'home-button', [], 'Menu');\r\n    homeButton.addEventListener('click', () => {\r\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.switchRender)('Menu')\r\n    });\r\n    main.appendChild(homeButton);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement),\n/* harmony export */   switchRender: () => (/* binding */ switchRender)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector('div#content');\r\n\r\nfunction createHtmlElement(tag, id, arrayClasses, content) {\r\n    const element = document.createElement(tag);\r\n    if (id) element.id = id;\r\n    if (arrayClasses) {\r\n        arrayClasses.forEach((Class) => {\r\n            element.classList.add(Class)\r\n        });\r\n        \r\n    }\r\n    if (content) element.innerText = content;\r\n    return element; \r\n}\r\n\r\nfunction home() {\r\n    content.innerHTML = '';\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_2__.renderHome)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();\r\n}\r\n\r\nfunction menu() {\r\n    content.innerHTML = '';\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_4__.renderMenu)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();\r\n}\r\n\r\nfunction about() {\r\n    content.innerHTML = '';\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)();\r\n    (0,_about__WEBPACK_IMPORTED_MODULE_5__.renderAbout)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.renderFooter)();\r\n}\r\n\r\nhome();\r\n\r\nfunction switchRender(target) {\r\n    if (target === 'Home') {\r\n        home();\r\n    } else if (target === 'Menu') {\r\n        menu();\r\n    } else if (target === 'About') {\r\n        about();\r\n    } else {\r\n        alert('invalid target')\r\n    }\r\n}\r\n\r\nabout();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction render() {\r\n    const main = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'main-menu', ['main'], '');\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\r\n\r\n    const backHeadingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', 'menu-back-heading-text', ['back-heading-text'], 'Restaurant');\r\n    main.appendChild(backHeadingText);\r\n\r\n    const headingText = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h1', 'menu-heading-text', ['heading-text'], 'Menu');\r\n    main.appendChild(headingText);\r\n\r\n    const div = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', 'a', [], '');\r\n    main.appendChild(div);\r\n\r\n    const menuHeadingHr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('hr', 'menu-wide-hr', ['wide-hr'], '');\r\n    div.appendChild(menuHeadingHr);\r\n\r\n    const restaurantMenuList = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('ul', 'restaurant-menu-list', [], '');\r\n    main.appendChild(restaurantMenuList);\r\n\r\n    const dishes = [{\r\n        name: 'Cake',\r\n        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis vel\r\n                    distinctio, ullam quod dolor ratione temporibus neque vitae iste beatae nobis veniam hic ab, mollitia quas fugit\r\n                    placeat pariatur.`,\r\n        price: 20\r\n    },\r\n    {\r\n        name: 'Fish',\r\n        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis vel\r\n                    distinctio, ullam quod dolor ratione temporibus neque vitae iste beatae nobis veniam hic ab, mollitia quas fugit\r\n                    placeat pariatur.`,\r\n        price: 20\r\n    },\r\n    {\r\n        name: 'Egg',\r\n        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis vel\r\n                    distinctio, ullam quod dolor ratione temporibus neque vitae iste beatae nobis veniam hic ab, mollitia quas fugit\r\n                    placeat pariatur.`,\r\n        price: 20\r\n    }]\r\n\r\n    dishes.forEach(dish => {\r\n        const dishListItem = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('li', '', ['dish'], '');\r\n        restaurantMenuList.appendChild(dishListItem);\r\n\r\n        const dishName = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h3', '', ['dish-name'], `${dish.name}`);\r\n        dishListItem.appendChild(dishName);\r\n\r\n        const dishDescription = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('p', '', ['dish-description'], `${dish.description}`);\r\n        dishListItem.appendChild(dishDescription);\r\n\r\n        const dishPrice = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('h4', '', ['dish-price'], `${dish.price}$`);\r\n        dishListItem.appendChild(dishPrice);\r\n\r\n        if (dishes.indexOf(dish) !== dishes.length - 1) {const menuHr = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('hr', '', ['thin-hr'], '');\r\n            dishListItem.appendChild(menuHr);\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page-odin/./src/menu.js?");

/***/ }),

/***/ "./src/background-img.jpg":
/*!********************************!*\
  !*** ./src/background-img.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b82cd5a289766cfde52.jpg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/background-img.jpg?");

/***/ }),

/***/ "./src/github-mark.svg":
/*!*****************************!*\
  !*** ./src/github-mark.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1dc5ab12ef3fc81720b0.svg\";\n\n//# sourceURL=webpack://restaurant-page-odin/./src/github-mark.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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