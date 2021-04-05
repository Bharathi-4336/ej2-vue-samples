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
/******/ 		"badge/notification/main": 0
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
/******/ 	deferredModules.push(["./Samples/badge/notification/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/badge/notification/App.vue":
/*!********************************************!*\
  !*** ./Samples/badge/notification/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0077423d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0077423d& */ \"./Samples/badge/notification/App.vue?vue&type=template&id=0077423d&\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/badge/notification/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  script,\n  _App_vue_vue_type_template_id_0077423d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0077423d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/badge/notification/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/badge/notification/App.vue?");

/***/ }),

/***/ "./Samples/badge/notification/App.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./Samples/badge/notification/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/notification/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/badge/notification/App.vue?");

/***/ }),

/***/ "./Samples/badge/notification/App.vue?vue&type=template&id=0077423d&":
/*!***************************************************************************!*\
  !*** ./Samples/badge/notification/App.vue?vue&type=template&id=0077423d& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0077423d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0077423d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/notification/App.vue?vue&type=template&id=0077423d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0077423d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0077423d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/badge/notification/App.vue?");

/***/ }),

/***/ "./Samples/badge/notification/main.js":
/*!********************************************!*\
  !*** ./Samples/badge/notification/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/badge/notification/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/badge/notification/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/notification/App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/notification/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.badge-notification .control-section {\\n    overflow: auto;\\n}\\n\\n/* Layout Design */\\n.badge-notification .sample_container {\\n    max-width: 260px;\\n    margin: auto;\\n}\\n.badge-notification .sample_container .badge-block {\\n    position: relative;\\n    display: inline-block;\\n    margin: 10px 13px 10px 10px;\\n}\\n.badge-notification .sample_container .layout {\\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);\\n    padding: 25px 10px 10px 10px;\\n    background: white;\\n    border-radius: 25px;\\n}\\n.highcontrast .badge-notification .sample_container .layout {\\n    box-shadow: 0 2px 15px 0 rgb(92, 91, 91);\\n    background: #000;\\n}\\n.badge-notification .margin {\\n    margin: 15px 0;\\n}\\n.badge-notification .innerMargin {\\n    margin: 15px;\\n    padding: 15px 95px 15px 15px;\\n    display: inline-block;\\n}\\n.badge-notification .fontSize {\\n    font-size: 16px;\\n}\\n.badge-notification .contact.svg_icons+.e-badge-dot,\\n.badge-notification .pinterest.svg_icons+.e-badge-dot {\\n    left: 90%;\\n    bottom: 7px;\\n    top: auto\\n}\\n.badge-notification .skype + .e-badge.e-badge-dot {\\n    transform: translateX(-100%) translateY(-70%);\\n}\\n.badge-notification .facebook + .e-badge.e-badge-dot {\\n    transform: translateX(-100%) translateY(+30%);\\n}\\n\\n/* SVG Icons */\\n.badge-notification .facebook {\\n    background-image: url(\\\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%233c5a99;%7d.cls-2%7bfill:%23fff;%7d%3c/style%3e%3c/defs%3e%3ctitle%3eIcon%3c/title%3e%3crect class='cls-1' x='1' y='1' width='28' height='28' rx='5.75' ry='5.75'/%3e%3cpath class='cls-2' d='M22.53,8.7h2.58V4.64H21.24a5.25,5.25,0,0,0-4,2s-1.06,1-1.08,3.92h0v3H12.36v4.31h3.82V29h4.41V17.86h3.8l.53-4.31H20.59v-3h0A1.78,1.78,0,0,1,22.53,8.7Z'/%3e%3c/svg%3e\\\");\\n}\\n.badge-notification .skype {\\n    background-image: url(\\\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%2331c4ed;%7d.cls-2%7bfill:%23fff;fill-rule:evenodd;%7d%3c/style%3e%3c/defs%3e%3ctitle%3eIcon%3c/title%3e%3crect class='cls-1' x='1' y='1' width='28' height='28' rx='5.75' ry='5.75'/%3e%3cpath class='cls-2' d='M19.5,19.14a4,4,0,0,1-1.75,1.31,7.22,7.22,0,0,1-2.68.46A6.6,6.6,0,0,1,12,20.27,4,4,0,0,1,10.58,19,2.71,2.71,0,0,1,10,17.51a1.05,1.05,0,0,1,.36-.8,1.28,1.28,0,0,1,.9-.33,1.14,1.14,0,0,1,.75.26,1.89,1.89,0,0,1,.51.73,4.54,4.54,0,0,0,.49.86,2,2,0,0,0,.72.55A3.08,3.08,0,0,0,15,19a3,3,0,0,0,1.73-.45,1.23,1.23,0,0,0,.63-1.06,1,1,0,0,0-.33-.8,2.3,2.3,0,0,0-.92-.49c-.39-.12-.92-.26-1.57-.39a12.2,12.2,0,0,1-2.25-.67,3.64,3.64,0,0,1-1.48-1.06,2.47,2.47,0,0,1-.29-.47,2.84,2.84,0,0,1-.26-1.22,2.71,2.71,0,0,1,.58-1.72,3.71,3.71,0,0,1,1.67-1.14A7.37,7.37,0,0,1,15,9.14a7,7,0,0,1,2,.26,4.38,4.38,0,0,1,1.42.7,3.1,3.1,0,0,1,.84.92,2.11,2.11,0,0,1,.26,1,1.13,1.13,0,0,1-.35.82,1.18,1.18,0,0,1-.88.36,1.09,1.09,0,0,1-.74-.23,2.68,2.68,0,0,1-.51-.67,3,3,0,0,0-.77-.94A2.42,2.42,0,0,0,14.87,11a2.76,2.76,0,0,0-1.49.36,1,1,0,0,0-.53.81.78.78,0,0,0,.17.5,1.63,1.63,0,0,0,.52.38,4.48,4.48,0,0,0,.69.27l.15,0,1,.24c.69.15,1.33.32,1.89.49a6.29,6.29,0,0,1,1.47.67,2.81,2.81,0,0,1,1,1,3,3,0,0,1,.35,1.49,3.15,3.15,0,0,1-.6,1.89Zm4-2.23a7.73,7.73,0,0,0,.2-1.81c0-.22,0-.43,0-.64a8.53,8.53,0,0,0-8.56-7.83,8.72,8.72,0,0,0-1.46.12A5.08,5.08,0,0,0,11,6a5,5,0,0,0-5,4.91,4.83,4.83,0,0,0,.68,2.48,7.33,7.33,0,0,0-.13.94,6.51,6.51,0,0,0,0,.77,8.52,8.52,0,0,0,8.58,8.46,8.9,8.9,0,0,0,1.57-.14A5.09,5.09,0,0,0,19,24a4.94,4.94,0,0,0,5-4.91,4.86,4.86,0,0,0-.52-2.18Z'/%3e%3c/svg%3e\\\");\\n}\\n.badge-notification .twitter {\\n    background-image: url(\\\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%231da1f2;%7d.cls-2%7bfill:%23fff;%7d%3c/style%3e%3c/defs%3e%3ctitle%3eIcon%3c/title%3e%3crect class='cls-1' x='1' y='1' width='28' height='28' rx='5.75' ry='5.75'/%3e%3cpath class='cls-2' d='M11.67,23.11A11.3,11.3,0,0,0,23.05,11.73c0-.17,0-.35,0-.52a8,8,0,0,0,2-2.07,8,8,0,0,1-2.29.63,4,4,0,0,0,1.75-2.21,8,8,0,0,1-2.54,1,4,4,0,0,0-6.81,3.65A11.36,11.36,0,0,1,6.89,8a4,4,0,0,0-.54,2,4,4,0,0,0,1.78,3.33,4,4,0,0,1-1.81-.5v.05a4,4,0,0,0,3.2,3.92,4,4,0,0,1-1,.14,3.67,3.67,0,0,1-.75-.07,4,4,0,0,0,3.74,2.78,8.06,8.06,0,0,1-5,1.71,7.61,7.61,0,0,1-1-.06,11.31,11.31,0,0,0,6.14,1.8'/%3e%3c/svg%3e\\\");\\n}\\n.badge-notification .whatsapp {\\n    background-image: url(\\\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%2346bf56;%7d.cls-2%7bfill:%23fff;%7d%3c/style%3e%3c/defs%3e%3ctitle%3eIcon%3c/title%3e%3crect class='cls-1' x='1' y='1' width='28' height='28' rx='5.75' ry='5.75'/%3e%3cpath class='cls-2' d='M15.19,4.68A10.21,10.21,0,0,0,6.4,20.12l-1.29,5.2,5.12-1.47a10.23,10.23,0,1,0,5-19.17Zm.11,18.75a8.41,8.41,0,0,1-4.81-1.5l-2.91.85.74-3a8.49,8.49,0,1,1,7,3.66Z'/%3e%3cpath class='cls-2' d='M12.6,14.09l.36-.41c.2-.23.5-.45.51-.78a2.3,2.3,0,0,0-.21-.93c-.07-.19-.15-.37-.22-.56a4,4,0,0,0-.48-1,.94.94,0,0,0-1-.16,2.52,2.52,0,0,0-1.39,2.9,9.09,9.09,0,0,0,7.22,6.56s2.16.31,2.74-1a2.39,2.39,0,0,0,.19-1,.81.81,0,0,0-.48-.63,10.88,10.88,0,0,0-1-.53,1.51,1.51,0,0,0-1-.29,1.64,1.64,0,0,0-.63.51c-.23.25-.47.49-.71.74C16.46,17.49,13.41,16.37,12.6,14.09Z'/%3e%3c/svg%3e\\\");\\n}\\n.badge-notification .firefox {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23e66000' d='M27.579 8.902l.048.09a.54.54 0 0 1-.045-.082zm-7.06-4.054c-.351.003-.712.024-1.081.067 1.2.192 2.284.501 2.729 1.457-.625-.005-1.3-.054-1.58.291 2.275 1.189 5.035 1.886 5.315 5.096-.36-.17-.48-.58-1.005-.582.23 1.595.78 3.799.145 5.388-.35-.422-.365-1.185-.865-1.457.105 2.68-.025 5.119-1.29 6.407-.035-.572.405-1.424 0-1.892-1.15 3.86-8.29 5.12-10.2 1.746 3.016.292 3.73-1.751 6.176-2.038-.125-.937-.915-1.676-2.01-1.748-1.19-.076-2.215 1.096-3.305 1.02-.56-.04-1.18-.554-1.725-1.02-1.77-1.514-.894-2.931 1.58-1.892.325-.797-.145-1.698-.43-2.33.64-.954 2.245-.928 2.3-2.475-1.76-.012-2.745-.81-3.45-1.894.33-1.317 1.165-2.124 2.015-2.912-1.65.172-2.605 1.05-3.734 1.748-1.075-.346-2.275.005-3.16.29-1-.539-1.15-1.941-1.58-3.057-1.1 1.167-1.445 3.102-1.44 5.388-.765 1.018-1.57 1.998-1.575 3.786.42.168.53-.698.715-.292-2.335 8.76 5.49 16.323 13.644 16.018 8.354-.313 13.649-8.231 13.219-17.182-.65-.12.03 1.098-.575 1.019.025-2.797-.825-5.474-2.155-6.407.31.28.204.983.35 1.428l.032.083-.083-.157c-1.265-2.286-3.702-3.923-6.977-3.897zM16.103 0c2.763-.007 5.09.615 6.784 1.421 4.995 2.381 9.719 7.97 9.049 16.162-.73 8.88-8.514 14.467-16.088 14.417C6.794 31.937-.645 24.6.045 14.816.32 10.992 1.724 8.529 2.634 7.1 4.599 3.998 8.959.67 14.123.111a18.887 18.887 0 0 1 1.98-.11z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-notification .contact {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cellipse cx='16' cy='16' fill='%234285f4' rx='16' ry='16'/%3E%3Cpath fill='%23FFF' d='M13.55 16.95h4.9c2.7 0 4.85 2.05 4.85 4.6 0 .9-.25 1.75-.75 2.45H9.45c-.5-.7-.75-1.55-.75-2.45 0-2.55 2.15-4.6 4.85-4.6zM16.05 8c2.05 0 3.7 1.65 3.7 3.7 0 2.05-1.65 3.7-3.7 3.7-2.05 0-3.7-1.65-3.7-3.7.05-2.05 1.7-3.7 3.7-3.7z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-notification .chrome {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23ffffff' d='M16.033 11.049a5.155 5.155 0 1 1 0 10.312 5.156 5.156 0 0 1 0-10.312zM16.124 0c1.281-.003 9.659.318 14.268 9.043h-.016l.01.018c.33.578 3.745 6.94-.485 14.969 0 0-4.215 8.107-14.565 7.968l-.452-.012-.004.007-.004.007.02-.037c.564-.98 5.112-8.884 6.357-11.067l.016-.028.007-.008.04-.069.11-.127a7.085 7.085 0 0 0 1.457-2.967l.01-.046.035-.151c.088-.424.148-.944.128-1.549l-.006-.117v-.004l-.007-.143-.006-.07-.005-.079-.012-.116v-.01l-.001-.008-.016-.158a7.2 7.2 0 0 0-.096-.572l-.018-.081-.013-.064a9.801 9.801 0 0 0-.692-2.016c-.165-.243-.332-.489-.512-.733l-.142-.187 8.728-2.554s-10.538-.01-13.018-.001l.021.005H16.642l-.14-.013a7.034 7.034 0 0 0-1.132-.003l-.167.016h-.047l-.034-.001c-.193.002-1.213.045-2.492.764l-.005.003-.033.016a7.158 7.158 0 0 0-3.25 3.533l-.059.148-6.485-6.404s4.74 8.311 6.165 10.779l.065.113.023.088a7.14 7.14 0 0 0 7.777 5.118l.144-.02L14.854 32h-.027c-.667-.005-7.894-.234-12.744-7.906 0 0-4.925-7.698.37-16.573l.252-.411.001-.002C2.822 6.904 6.58.374 15.958.003c0 0 .057-.003.166-.003z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-notification .pinterest {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cellipse cx='16' cy='16' fill='%23bd081c' rx='16' ry='16'/%3E%3Cpath fill='%23FFF' d='M16.22 6.458c4.807-.009 9.028 1.888 9.663 5.307.787 4.256-2.438 8.866-8.213 8.535-1.565-.09-2.222-.666-3.448-1.22-.675 2.628-1.5 5.147-3.942 6.463-.754-3.972 1.107-6.954 1.971-10.12-1.474-1.842.177-5.547 3.284-4.634 3.824 1.123-3.31 6.845 1.48 7.56 5 .746 7.04-6.441 3.94-8.779-4.48-3.376-13.042-.077-11.989 4.755.256 1.181 1.9 1.54.657 3.17-2.868-.471-3.724-2.15-3.614-4.39.178-3.664 4.435-6.229 8.705-6.583.506-.043 1.01-.064 1.507-.064z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-notification .svg_icons {\\n    width: 32px;\\n    height: 32px;\\n    display: inline-block;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-Q3MCPQKD5CTBVEJ27NM2EKQ6AS4JRTYTZ6BVT2WM5AO2QTPT47FQ/Samples/badge/notification/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,eAAe;CAClB;;AAED,mBAAmB;AACnB;IACI,iBAAiB;IACjB,aAAa;CAChB;AACD;IACI,mBAAmB;IACnB,sBAAsB;IACtB,4BAA4B;CAC/B;AACD;IACI,6CAA6C;IAC7C,6BAA6B;IAC7B,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,yCAAyC;IACzC,iBAAiB;CACpB;AACD;IACI,eAAe;CAClB;AACD;IACI,aAAa;IACb,6BAA6B;IAC7B,sBAAsB;CACzB;AACD;IACI,gBAAgB;CACnB;AACD;;IAEI,UAAU;IACV,YAAY;IACZ,SAAS;CACZ;AACD;IACI,8CAA8C;CACjD;AACD;IACI,8CAA8C;CACjD;;AAED,eAAe;AACf;IACI,miBAAmiB;CACtiB;AACD;IACI,stDAAstD;CACztD;AACD;IACI,8wBAA8wB;CACjxB;AACD;IACI,g7BAAg7B;CACn7B;AACD;IACI,86CAA86C;CACj7C;AACD;IACI,+cAA+c;CACld;AACD;IACI,0qCAA0qC;CAC7qC;AACD;IACI,qqBAAqqB;CACxqB;AACD;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.badge-notification .control-section {\\n    overflow: auto;\\n}\\n\\n/* Layout Design */\\n.badge-notification .sample_container {\\n    max-width: 260px;\\n    margin: auto;\\n}\\n.badge-notification .sample_container .badge-block {\\n    position: relative;\\n    display: inline-block;\\n    margin: 10px 13px 10px 10px;\\n}\\n.badge-notification .sample_container .layout {\\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);\\n    padding: 25px 10px 10px 10px;\\n    background: white;\\n    border-radius: 25px;\\n}\\n.highcontrast .badge-notification .sample_container .layout {\\n    box-shadow: 0 2px 15px 0 rgb(92, 91, 91);\\n    background: #000;\\n}\\n.badge-notification .margin {\\n    margin: 15px 0;\\n}\\n.badge-notification .innerMargin {\\n    margin: 15px;\\n    padding: 15px 95px 15px 15px;\\n    display: inline-block;\\n}\\n.badge-notification .fontSize {\\n    font-size: 16px;\\n}\\n.badge-notification .contact.svg_icons+.e-badge-dot,\\n.badge-notification .pinterest.svg_icons+.e-badge-dot {\\n    left: 90%;\\n    bottom: 7px;\\n    top: auto\\n}\\n.badge-notification .skype + .e-badge.e-badge-dot {\\n    transform: translateX(-100%) translateY(-70%);\\n}\\n.badge-notification .facebook + .e-badge.e-badge-dot {\\n    transform: translateX(-100%) translateY(+30%);\\n}\\n\\n/* SVG Icons */\\n.badge-notification .facebook {\\n    background-image: url(\\\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%233c5a99;%7d.cls-2%7bfill:%23fff;%7d%3c/style%3e%3c/defs%3e%3ctitle%3eIcon%3c/title%3e%3crect class='cls-1' x='1' y='1' width='28' height='28' rx='5.75' ry='5.75'/%3e%3cpath class='cls-2' d='M22.53,8.7h2.58V4.64H21.24a5.25,5.25,0,0,0-4,2s-1.06,1-1.08,3.92h0v3H12.36v4.31h3.82V29h4.41V17.86h3.8l.53-4.31H20.59v-3h0A1.78,1.78,0,0,1,22.53,8.7Z'/%3e%3c/svg%3e\\\");\\n}\\n.badge-notification .skype {\\n    background-image: url(\\\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%2331c4ed;%7d.cls-2%7bfill:%23fff;fill-rule:evenodd;%7d%3c/style%3e%3c/defs%3e%3ctitle%3eIcon%3c/title%3e%3crect class='cls-1' x='1' y='1' width='28' height='28' rx='5.75' ry='5.75'/%3e%3cpath class='cls-2' d='M19.5,19.14a4,4,0,0,1-1.75,1.31,7.22,7.22,0,0,1-2.68.46A6.6,6.6,0,0,1,12,20.27,4,4,0,0,1,10.58,19,2.71,2.71,0,0,1,10,17.51a1.05,1.05,0,0,1,.36-.8,1.28,1.28,0,0,1,.9-.33,1.14,1.14,0,0,1,.75.26,1.89,1.89,0,0,1,.51.73,4.54,4.54,0,0,0,.49.86,2,2,0,0,0,.72.55A3.08,3.08,0,0,0,15,19a3,3,0,0,0,1.73-.45,1.23,1.23,0,0,0,.63-1.06,1,1,0,0,0-.33-.8,2.3,2.3,0,0,0-.92-.49c-.39-.12-.92-.26-1.57-.39a12.2,12.2,0,0,1-2.25-.67,3.64,3.64,0,0,1-1.48-1.06,2.47,2.47,0,0,1-.29-.47,2.84,2.84,0,0,1-.26-1.22,2.71,2.71,0,0,1,.58-1.72,3.71,3.71,0,0,1,1.67-1.14A7.37,7.37,0,0,1,15,9.14a7,7,0,0,1,2,.26,4.38,4.38,0,0,1,1.42.7,3.1,3.1,0,0,1,.84.92,2.11,2.11,0,0,1,.26,1,1.13,1.13,0,0,1-.35.82,1.18,1.18,0,0,1-.88.36,1.09,1.09,0,0,1-.74-.23,2.68,2.68,0,0,1-.51-.67,3,3,0,0,0-.77-.94A2.42,2.42,0,0,0,14.87,11a2.76,2.76,0,0,0-1.49.36,1,1,0,0,0-.53.81.78.78,0,0,0,.17.5,1.63,1.63,0,0,0,.52.38,4.48,4.48,0,0,0,.69.27l.15,0,1,.24c.69.15,1.33.32,1.89.49a6.29,6.29,0,0,1,1.47.67,2.81,2.81,0,0,1,1,1,3,3,0,0,1,.35,1.49,3.15,3.15,0,0,1-.6,1.89Zm4-2.23a7.73,7.73,0,0,0,.2-1.81c0-.22,0-.43,0-.64a8.53,8.53,0,0,0-8.56-7.83,8.72,8.72,0,0,0-1.46.12A5.08,5.08,0,0,0,11,6a5,5,0,0,0-5,4.91,4.83,4.83,0,0,0,.68,2.48,7.33,7.33,0,0,0-.13.94,6.51,6.51,0,0,0,0,.77,8.52,8.52,0,0,0,8.58,8.46,8.9,8.9,0,0,0,1.57-.14A5.09,5.09,0,0,0,19,24a4.94,4.94,0,0,0,5-4.91,4.86,4.86,0,0,0-.52-2.18Z'/%3e%3c/svg%3e\\\");\\n}\\n.badge-notification .twitter {\\n    background-image: url(\\\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%231da1f2;%7d.cls-2%7bfill:%23fff;%7d%3c/style%3e%3c/defs%3e%3ctitle%3eIcon%3c/title%3e%3crect class='cls-1' x='1' y='1' width='28' height='28' rx='5.75' ry='5.75'/%3e%3cpath class='cls-2' d='M11.67,23.11A11.3,11.3,0,0,0,23.05,11.73c0-.17,0-.35,0-.52a8,8,0,0,0,2-2.07,8,8,0,0,1-2.29.63,4,4,0,0,0,1.75-2.21,8,8,0,0,1-2.54,1,4,4,0,0,0-6.81,3.65A11.36,11.36,0,0,1,6.89,8a4,4,0,0,0-.54,2,4,4,0,0,0,1.78,3.33,4,4,0,0,1-1.81-.5v.05a4,4,0,0,0,3.2,3.92,4,4,0,0,1-1,.14,3.67,3.67,0,0,1-.75-.07,4,4,0,0,0,3.74,2.78,8.06,8.06,0,0,1-5,1.71,7.61,7.61,0,0,1-1-.06,11.31,11.31,0,0,0,6.14,1.8'/%3e%3c/svg%3e\\\");\\n}\\n.badge-notification .whatsapp {\\n    background-image: url(\\\"data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%2346bf56;%7d.cls-2%7bfill:%23fff;%7d%3c/style%3e%3c/defs%3e%3ctitle%3eIcon%3c/title%3e%3crect class='cls-1' x='1' y='1' width='28' height='28' rx='5.75' ry='5.75'/%3e%3cpath class='cls-2' d='M15.19,4.68A10.21,10.21,0,0,0,6.4,20.12l-1.29,5.2,5.12-1.47a10.23,10.23,0,1,0,5-19.17Zm.11,18.75a8.41,8.41,0,0,1-4.81-1.5l-2.91.85.74-3a8.49,8.49,0,1,1,7,3.66Z'/%3e%3cpath class='cls-2' d='M12.6,14.09l.36-.41c.2-.23.5-.45.51-.78a2.3,2.3,0,0,0-.21-.93c-.07-.19-.15-.37-.22-.56a4,4,0,0,0-.48-1,.94.94,0,0,0-1-.16,2.52,2.52,0,0,0-1.39,2.9,9.09,9.09,0,0,0,7.22,6.56s2.16.31,2.74-1a2.39,2.39,0,0,0,.19-1,.81.81,0,0,0-.48-.63,10.88,10.88,0,0,0-1-.53,1.51,1.51,0,0,0-1-.29,1.64,1.64,0,0,0-.63.51c-.23.25-.47.49-.71.74C16.46,17.49,13.41,16.37,12.6,14.09Z'/%3e%3c/svg%3e\\\");\\n}\\n.badge-notification .firefox {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23e66000' d='M27.579 8.902l.048.09a.54.54 0 0 1-.045-.082zm-7.06-4.054c-.351.003-.712.024-1.081.067 1.2.192 2.284.501 2.729 1.457-.625-.005-1.3-.054-1.58.291 2.275 1.189 5.035 1.886 5.315 5.096-.36-.17-.48-.58-1.005-.582.23 1.595.78 3.799.145 5.388-.35-.422-.365-1.185-.865-1.457.105 2.68-.025 5.119-1.29 6.407-.035-.572.405-1.424 0-1.892-1.15 3.86-8.29 5.12-10.2 1.746 3.016.292 3.73-1.751 6.176-2.038-.125-.937-.915-1.676-2.01-1.748-1.19-.076-2.215 1.096-3.305 1.02-.56-.04-1.18-.554-1.725-1.02-1.77-1.514-.894-2.931 1.58-1.892.325-.797-.145-1.698-.43-2.33.64-.954 2.245-.928 2.3-2.475-1.76-.012-2.745-.81-3.45-1.894.33-1.317 1.165-2.124 2.015-2.912-1.65.172-2.605 1.05-3.734 1.748-1.075-.346-2.275.005-3.16.29-1-.539-1.15-1.941-1.58-3.057-1.1 1.167-1.445 3.102-1.44 5.388-.765 1.018-1.57 1.998-1.575 3.786.42.168.53-.698.715-.292-2.335 8.76 5.49 16.323 13.644 16.018 8.354-.313 13.649-8.231 13.219-17.182-.65-.12.03 1.098-.575 1.019.025-2.797-.825-5.474-2.155-6.407.31.28.204.983.35 1.428l.032.083-.083-.157c-1.265-2.286-3.702-3.923-6.977-3.897zM16.103 0c2.763-.007 5.09.615 6.784 1.421 4.995 2.381 9.719 7.97 9.049 16.162-.73 8.88-8.514 14.467-16.088 14.417C6.794 31.937-.645 24.6.045 14.816.32 10.992 1.724 8.529 2.634 7.1 4.599 3.998 8.959.67 14.123.111a18.887 18.887 0 0 1 1.98-.11z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-notification .contact {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cellipse cx='16' cy='16' fill='%234285f4' rx='16' ry='16'/%3E%3Cpath fill='%23FFF' d='M13.55 16.95h4.9c2.7 0 4.85 2.05 4.85 4.6 0 .9-.25 1.75-.75 2.45H9.45c-.5-.7-.75-1.55-.75-2.45 0-2.55 2.15-4.6 4.85-4.6zM16.05 8c2.05 0 3.7 1.65 3.7 3.7 0 2.05-1.65 3.7-3.7 3.7-2.05 0-3.7-1.65-3.7-3.7.05-2.05 1.7-3.7 3.7-3.7z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-notification .chrome {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23ffffff' d='M16.033 11.049a5.155 5.155 0 1 1 0 10.312 5.156 5.156 0 0 1 0-10.312zM16.124 0c1.281-.003 9.659.318 14.268 9.043h-.016l.01.018c.33.578 3.745 6.94-.485 14.969 0 0-4.215 8.107-14.565 7.968l-.452-.012-.004.007-.004.007.02-.037c.564-.98 5.112-8.884 6.357-11.067l.016-.028.007-.008.04-.069.11-.127a7.085 7.085 0 0 0 1.457-2.967l.01-.046.035-.151c.088-.424.148-.944.128-1.549l-.006-.117v-.004l-.007-.143-.006-.07-.005-.079-.012-.116v-.01l-.001-.008-.016-.158a7.2 7.2 0 0 0-.096-.572l-.018-.081-.013-.064a9.801 9.801 0 0 0-.692-2.016c-.165-.243-.332-.489-.512-.733l-.142-.187 8.728-2.554s-10.538-.01-13.018-.001l.021.005H16.642l-.14-.013a7.034 7.034 0 0 0-1.132-.003l-.167.016h-.047l-.034-.001c-.193.002-1.213.045-2.492.764l-.005.003-.033.016a7.158 7.158 0 0 0-3.25 3.533l-.059.148-6.485-6.404s4.74 8.311 6.165 10.779l.065.113.023.088a7.14 7.14 0 0 0 7.777 5.118l.144-.02L14.854 32h-.027c-.667-.005-7.894-.234-12.744-7.906 0 0-4.925-7.698.37-16.573l.252-.411.001-.002C2.822 6.904 6.58.374 15.958.003c0 0 .057-.003.166-.003z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-notification .pinterest {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cellipse cx='16' cy='16' fill='%23bd081c' rx='16' ry='16'/%3E%3Cpath fill='%23FFF' d='M16.22 6.458c4.807-.009 9.028 1.888 9.663 5.307.787 4.256-2.438 8.866-8.213 8.535-1.565-.09-2.222-.666-3.448-1.22-.675 2.628-1.5 5.147-3.942 6.463-.754-3.972 1.107-6.954 1.971-10.12-1.474-1.842.177-5.547 3.284-4.634 3.824 1.123-3.31 6.845 1.48 7.56 5 .746 7.04-6.441 3.94-8.779-4.48-3.376-13.042-.077-11.989 4.755.256 1.181 1.9 1.54.657 3.17-2.868-.471-3.724-2.15-3.614-4.39.178-3.664 4.435-6.229 8.705-6.583.506-.043 1.01-.064 1.507-.064z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-notification .svg_icons {\\n    width: 32px;\\n    height: 32px;\\n    display: inline-block;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/badge/notification/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/notification/App.vue?vue&type=template&id=0077423d&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/notification/App.vue?vue&type=template&id=0077423d& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"badge-notification\" }, [\n      _c(\"div\", { staticClass: \"col-lg-12 control-section\" }, [\n        _c(\"div\", { staticClass: \"sample_container\" }, [\n          _c(\"div\", { staticClass: \"layout\" }, [\n            _c(\"div\", { staticClass: \"margin\" }, [\n              _c(\"div\", { staticClass: \"margin fontSize\" }, [\n                _vm._v(\"Notification\")\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"whatsapp svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\n                  \"span\",\n                  {\n                    staticClass:\n                      \"e-badge e-badge-warning e-badge-notification e-badge-overlap\"\n                  },\n                  [_vm._v(\"99+\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"twitter svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\n                  \"span\",\n                  {\n                    staticClass:\n                      \"e-badge e-badge-primary e-badge-notification e-badge-overlap\"\n                  },\n                  [_vm._v(\"7\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"facebook svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\n                  \"span\",\n                  {\n                    staticClass:\n                      \"e-badge e-badge-danger e-badge-notification e-badge-overlap\"\n                  },\n                  [_vm._v(\"99+\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"skype svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\n                  \"span\",\n                  {\n                    staticClass:\n                      \"e-badge e-badge-secondary e-badge-notification e-badge-overlap\"\n                  },\n                  [_vm._v(\"18\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"margin fontSize\" }, [_vm._v(\"Circle\")]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"whatsapp svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\n                  \"span\",\n                  {\n                    staticClass:\n                      \"e-badge e-badge-warning e-badge-notification e-badge-overlap e-badge-circle\"\n                  },\n                  [_vm._v(\"19\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"twitter svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\n                  \"span\",\n                  {\n                    staticClass:\n                      \"e-badge e-badge-primary e-badge-notification e-badge-overlap e-badge-circle\"\n                  },\n                  [_vm._v(\"27\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"facebook svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\n                  \"span\",\n                  {\n                    staticClass:\n                      \"e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle\"\n                  },\n                  [_vm._v(\"3\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"skype svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\n                  \"span\",\n                  {\n                    staticClass:\n                      \"e-badge e-badge-secondary e-badge-notification e-badge-overlap e-badge-circle\"\n                  },\n                  [_vm._v(\"85\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"margin fontSize\" }, [_vm._v(\"Dot\")]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"contact svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\"span\", {\n                  staticClass:\n                    \"e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom\"\n                })\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"skype svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\"span\", {\n                  staticClass:\n                    \"e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom\"\n                })\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"facebook svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\"span\", {\n                  staticClass:\n                    \"e-badge e-badge-info e-badge-overlap e-badge-dot\"\n                })\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"badge-block\" }, [\n                _c(\"div\", { staticClass: \"pinterest svg_icons\" }),\n                _vm._v(\" \"),\n                _c(\"span\", {\n                  staticClass:\n                    \"e-badge e-badge-danger e-badge-overlap e-badge-dot\"\n                })\n              ])\n            ])\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"action-description\" } }, [\n        _c(\"p\", [\n          _vm._v(\n            \"This sample demonstrates the types of the notification badge. To apply the notification badge, add\\n        \"\n          ),\n          _c(\"code\", [_vm._v(\".e-badge-notification\")]),\n          _vm._v(\" class or\\n        \"),\n          _c(\"code\", [_vm._v(\".e-badge-dot\")]),\n          _vm._v(\" class to the dot badge along with\\n        \"),\n          _c(\"code\", [_vm._v(\".e-badge\")]),\n          _vm._v(\" class.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"description\" } }, [\n        _c(\"p\", [\n          _vm._v(\n            \"There are 3 types of notification badges and they are listed as follows. When using the notification badge, always apply\\n            \"\n          ),\n          _c(\"code\", [_vm._v(\"position: relative\")]),\n          _vm._v(\" to the container element.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"ul\", [\n          _c(\"li\", [\n            _vm._v(\"Default notification: The\\n                \"),\n            _c(\"code\", [_vm._v(\".e-badge-notification\")]),\n            _vm._v(\" applies general notification badge.\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _vm._v(\"Circle notification: The\\n                \"),\n            _c(\"code\", [_vm._v(\".e-badge-circle\")]),\n            _vm._v(\n              \" with .e-badge-notification applies the circle notification badge.\"\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"li\", [\n            _vm._v(\"Dot notification: The\\n                \"),\n            _c(\"code\", [_vm._v(\".e-badge-dot\")]),\n            _vm._v(\" applies the dot badge to the target element.\")\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\n            \"The position can be changed to the bottom by adding the\\n            \"\n          ),\n          _c(\"code\", [_vm._v(\".e-badge-bottom\")]),\n          _vm._v(\" class.\")\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/badge/notification/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });