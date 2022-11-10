/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"appbar/default/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Samples/appbar/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/appbar/default/App.vue":
/*!****************************************!*\
  !*** ./Samples/appbar/default/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2791d6ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2791d6ea& */ \"./Samples/appbar/default/App.vue?vue&type=template&id=2791d6ea&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/appbar/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_2791d6ea_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=2791d6ea&lang=css& */ \"./Samples/appbar/default/App.vue?vue&type=style&index=0&id=2791d6ea&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2791d6ea___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2791d6ea___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/appbar/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/appbar/default/App.vue?");

/***/ }),

/***/ "./Samples/appbar/default/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/appbar/default/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/appbar/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/appbar/default/App.vue?");

/***/ }),

/***/ "./Samples/appbar/default/App.vue?vue&type=style&index=0&id=2791d6ea&lang=css&":
/*!*************************************************************************************!*\
  !*** ./Samples/appbar/default/App.vue?vue&type=style&index=0&id=2791d6ea&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2791d6ea_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2791d6ea&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/default/App.vue?vue&type=style&index=0&id=2791d6ea&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2791d6ea_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2791d6ea_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2791d6ea_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2791d6ea_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/appbar/default/App.vue?");

/***/ }),

/***/ "./Samples/appbar/default/App.vue?vue&type=template&id=2791d6ea&":
/*!***********************************************************************!*\
  !*** ./Samples/appbar/default/App.vue?vue&type=template&id=2791d6ea& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2791d6ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2791d6ea& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/default/App.vue?vue&type=template&id=2791d6ea&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2791d6ea___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2791d6ea___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/appbar/default/App.vue?");

/***/ }),

/***/ "./Samples/appbar/default/main.js":
/*!****************************************!*\
  !*** ./Samples/appbar/default/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/appbar/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/appbar/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/default/App.vue?vue&type=style&index=0&id=2791d6ea&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/appbar/default/App.vue?vue&type=style&index=0&id=2791d6ea&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.default-appbar-section .regular,\\n.default-appbar-section .prominent,\\n.default-appbar-section .dense {\\n    margin: 0 5px;\\n}\\n.default-appbar-section .prominent {\\n    align-self: center;\\n    white-space: break-spaces;\\n    text-align: inherit;\\n    font-size: 35px;\\n    line-height: 50px;\\n}\\n.default-appbar-section .e-appbar.prominent-appbar {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/prominent.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n    background-size: 100% 400px;\\n    color: #ffffff;\\n    background-repeat: no-repeat;\\n    height: 400px;\\n}\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn {\\n    background: transparent;\\n}\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn:hover,\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn:focus,\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn:active,\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn.e-active,\\n.default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn:hover,\\n.default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn:focus\\n.default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn:active\\n.default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn.e-active {\\n    background: rgba(255, 255, 255, .08);\\n}\\n@media only screen and (max-width: 480px) {\\n.default-appbar-section .prominent {\\n    font-size: 20px;\\n    line-height: 28px;\\n}\\n.default-appbar-section .e-appbar.prominent-appbar {\\n    background-size: 100% 250px;\\n    height: 250px;\\n}\\n.e-bigger .default-appbar-section .e-inherit.e-btn.login,\\n  .e-bigger.tailwind-dark .default-appbar-section .e-inherit.e-btn.e-icon-btn.menu,\\n  .e-bigger.tailwind .default-appbar-section .e-inherit.e-btn.e-icon-btn.menu {\\n    padding-left: 7px;\\n    padding-right: 7px;\\n}\\n.default-appbar-section .default-appbar-container {\\n    margin: 0 -15px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-3TYJHM65YRSQ6BGX2BVBOH3UJURWWFKK3HTJNKCV2A2XDQW7NQDQ/Samples/appbar/default/App.vue?vue&type=style&index=0&id=2791d6ea&lang=css&\"],\"names\":[],\"mappings\":\";AACA;;;IAGI,cAAc;CACjB;AACD;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;CACrB;AACD;IACI,gDAA8C;IAC9C,4BAA4B;IAC5B,eAAe;IACf,6BAA6B;IAC7B,cAAc;CACjB;AACD;IACI,wBAAwB;CAC3B;AACD;;;;;;;;IAQI,qCAAqC;CACxC;AACD;AACA;IACI,gBAAgB;IAChB,kBAAkB;CACrB;AACD;IACI,4BAA4B;IAC5B,cAAc;CACjB;AACD;;;IAGI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,gBAAgB;CACnB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=2791d6ea&lang=css&\",\"sourcesContent\":[\"\\n.default-appbar-section .regular,\\n.default-appbar-section .prominent,\\n.default-appbar-section .dense {\\n    margin: 0 5px;\\n}\\n.default-appbar-section .prominent {\\n    align-self: center;\\n    white-space: break-spaces;\\n    text-align: inherit;\\n    font-size: 35px;\\n    line-height: 50px;\\n}\\n.default-appbar-section .e-appbar.prominent-appbar {\\n    background-image: url(./images/prominent.png);\\n    background-size: 100% 400px;\\n    color: #ffffff;\\n    background-repeat: no-repeat;\\n    height: 400px;\\n}\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn {\\n    background: transparent;\\n}\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn:hover,\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn:focus,\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn:active,\\n.default-appbar-section .prominent-appbar .e-inherit.e-btn.e-active,\\n.default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn:hover,\\n.default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn:focus\\n.default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn:active\\n.default-appbar-section .prominent-appbar .e-inherit.e-css.e-btn.e-active {\\n    background: rgba(255, 255, 255, .08);\\n}\\n@media only screen and (max-width: 480px) {\\n.default-appbar-section .prominent {\\n    font-size: 20px;\\n    line-height: 28px;\\n}\\n.default-appbar-section .e-appbar.prominent-appbar {\\n    background-size: 100% 250px;\\n    height: 250px;\\n}\\n.e-bigger .default-appbar-section .e-inherit.e-btn.login,\\n  .e-bigger.tailwind-dark .default-appbar-section .e-inherit.e-btn.e-icon-btn.menu,\\n  .e-bigger.tailwind .default-appbar-section .e-inherit.e-btn.e-icon-btn.menu {\\n    padding-left: 7px;\\n    padding-right: 7px;\\n}\\n.default-appbar-section .default-appbar-container {\\n    margin: 0 -15px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/appbar/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/appbar/default/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/appbar/default/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"AppBarPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n        }\n    },\n    mounted: function () {\n        document.getElementById('regularButtonMenu').setAttribute('aria-label', 'menu');\n        document.getElementById('prominentButtonMenu').setAttribute('aria-label', 'menu');\n        document.getElementById('denseButtonMenu').setAttribute('aria-label', 'menu');\n    },\n    methods: {}\n}));\n\n\n//# sourceURL=webpack:///./Samples/appbar/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/default/App.vue?vue&type=template&id=2791d6ea&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/appbar/default/App.vue?vue&type=template&id=2791d6ea& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"col-lg-12 control-section default-appbar-section\"},[_c('div',{staticClass:\"appbar-sample\"},[_c('div',{staticClass:\"default-appbar-container\"},[_vm._m(0),_vm._v(\" \"),_c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-md-12\"},[_c('ejs-appbar',{attrs:{\"colorMode\":\"Primary\"}},[_c('ejs-button',{attrs:{\"id\":\"regularButtonMenu\",\"cssClass\":\"e-inherit menu\",\"iconCss\":\"e-icons e-menu\"}}),_vm._v(\" \"),_c('span',{staticClass:\"regular\"},[_vm._v(\"Vue AppBar\")]),_vm._v(\" \"),_c('div',{staticClass:\"e-appbar-spacer\"}),_vm._v(\" \"),_c('ejs-button',{attrs:{\"cssClass\":\"e-inherit login\"}},[_vm._v(\"FREE TRIAL\")])],1)],1)]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-md-12\"},[_c('ejs-appbar',{attrs:{\"cssClass\":\"prominent-appbar\",\"mode\":\"Prominent\",\"colorMode\":\"Primary\"}},[_c('ejs-button',{attrs:{\"id\":\"prominentButtonMenu\",\"cssClass\":\"e-inherit menu\",\"iconCss\":\"e-icons e-menu\"}}),_vm._v(\" \"),_c('span',{staticClass:\"prominent\"},[_vm._v(\"Vue AppBar Component with Prominent mode\")]),_vm._v(\" \"),_c('div',{staticClass:\"e-appbar-spacer\"}),_vm._v(\" \"),_c('ejs-button',{attrs:{\"cssClass\":\"e-inherit login\"}},[_vm._v(\"FREE TRIAL\")])],1)],1)]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-md-12\"},[_c('ejs-appbar',{attrs:{\"mode\":\"Dense\",\"colorMode\":\"Primary\"}},[_c('ejs-button',{attrs:{\"id\":\"denseButtonMenu\",\"cssClass\":\"e-inherit menu\",\"iconCss\":\"e-icons e-menu\"}}),_vm._v(\" \"),_c('span',{staticClass:\"dense\"},[_vm._v(\"Vue AppBar\")]),_vm._v(\" \"),_c('div',{staticClass:\"e-appbar-spacer\"}),_vm._v(\" \"),_c('ejs-button',{attrs:{\"cssClass\":\"e-inherit login\"}},[_vm._v(\"FREE TRIAL\")])],1)],1)]),_vm._v(\" \"),_c('br')]),_vm._v(\" \"),_vm._m(3),_vm._v(\" \"),_vm._m(4)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-md-12\"},[_c('h5',[_vm._v(\"Simple AppBar\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-md-12\"},[_c('h5',[_vm._v(\"Prominent\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-md-12\"},[_c('h5',[_vm._v(\"Dense\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n                This sample demonstrates the default functionalities of the \"),_c('strong',[_vm._v(\"Vue AppBar\")]),_vm._v(\".\\n            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The \"),_c('strong',[_vm._v(\">Vue AppBar\")]),_vm._v(\" is a navigation component that displays information and actions related to the current view horizontally. \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',[_vm._v(\"In this demo, the available types of Vue AppBar are showcased. They are \"),_c('code',[_vm._v(\"regular\")]),_vm._v(\", \"),_c('code',[_vm._v(\"prominent\")]),_vm._v(\", and \"),_c('code',[_vm._v(\"dense\")]),_vm._v(\", and can be set using the \"),_c('strong',[_vm._v(\"Mode\")]),_vm._v(\" property. \")]),_vm._v(\" \"),_c('p',[_c('code',[_vm._v(\"Regular\")]),_vm._v(\" - The AppBar is displayed with the default height.\")]),_vm._v(\" \"),_c('p',[_c('code',[_vm._v(\"Prominent\")]),_vm._v(\" - Prominent top app bars are longer than regular, and can be used for larger titles, images, or texts.\")]),_vm._v(\" \"),_c('p',[_c('code',[_vm._v(\"Dense\")]),_vm._v(\" - The AppBar's layout is denser to accommodate all the AppBar content.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"In this demo, \"),_c('strong',[_vm._v(\"Button\")]),_vm._v(\" component's styles are inherited from the \"),_c('strong',[_vm._v(\"AppBar\")]),_vm._v(\" component using the \"),_c('code',[_vm._v(\"e-inherit\")]),_vm._v(\" CSS class. \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/appbar/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });