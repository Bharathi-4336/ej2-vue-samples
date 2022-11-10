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
/******/ 		"speed-dial/styles/main": 0
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
/******/ 	deferredModules.push(["./Samples/speed-dial/styles/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/speed-dial/styles/App.vue":
/*!*******************************************!*\
  !*** ./Samples/speed-dial/styles/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0b631bee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0b631bee& */ \"./Samples/speed-dial/styles/App.vue?vue&type=template&id=0b631bee&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/speed-dial/styles/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_0b631bee_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=0b631bee&lang=css& */ \"./Samples/speed-dial/styles/App.vue?vue&type=style&index=0&id=0b631bee&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0b631bee___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0b631bee___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/speed-dial/styles/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/speed-dial/styles/App.vue?");

/***/ }),

/***/ "./Samples/speed-dial/styles/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/speed-dial/styles/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/speed-dial/styles/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/speed-dial/styles/App.vue?");

/***/ }),

/***/ "./Samples/speed-dial/styles/App.vue?vue&type=style&index=0&id=0b631bee&lang=css&":
/*!****************************************************************************************!*\
  !*** ./Samples/speed-dial/styles/App.vue?vue&type=style&index=0&id=0b631bee&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0b631bee_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0b631bee&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/speed-dial/styles/App.vue?vue&type=style&index=0&id=0b631bee&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0b631bee_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0b631bee_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0b631bee_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0b631bee_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/speed-dial/styles/App.vue?");

/***/ }),

/***/ "./Samples/speed-dial/styles/App.vue?vue&type=template&id=0b631bee&":
/*!**************************************************************************!*\
  !*** ./Samples/speed-dial/styles/App.vue?vue&type=template&id=0b631bee& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0b631bee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0b631bee& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/speed-dial/styles/App.vue?vue&type=template&id=0b631bee&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0b631bee___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0b631bee___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/speed-dial/styles/App.vue?");

/***/ }),

/***/ "./Samples/speed-dial/styles/main.js":
/*!*******************************************!*\
  !*** ./Samples/speed-dial/styles/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/speed-dial/styles/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/speed-dial/styles/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/speed-dial/styles/App.vue?vue&type=style&index=0&id=0b631bee&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/speed-dial/styles/App.vue?vue&type=style&index=0&id=0b631bee&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.speeddial-appearence-target {\\n        min-height:310px;\\n        width: 70%;\\n        margin: 5% 15%;\\n        position:relative;\\n}\\n@media only screen and (max-width: 600px) {\\n.speeddial-appearence-target {\\n        width: 90%;\\n        margin: 5%;\\n}\\n}\\n.custom-index {\\n    z-index:500 !important;\\n}\\n@font-face {\\n    font-family: 'speeddial-icons';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n[class^=\\\"speeddial-icon-\\\"],\\n[class*=\\\"speeddial-icon-\\\"] {\\n    font-family: 'speeddial-icons' !important;\\n    speak: none;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-variant: normal;\\n    text-transform: none;\\n    line-height: inherit;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\n.speeddial-icon-close:before {\\n    content: \\\"\\\\E700\\\";\\n}\\n.speeddial-icon-house:before {\\n    content: \\\"\\\\E701\\\";\\n}\\n.speeddial-icon-people:before {\\n    content: \\\"\\\\E702\\\";\\n}\\n.speeddial-icon-search:before {\\n    content: \\\"\\\\E703\\\";\\n}\\n.speeddial-icon-message:before {\\n    content: \\\"\\\\E704\\\";\\n}\\n.speeddial-icon-menu:before {\\n    content: \\\"\\\\E705\\\";\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-VPHVAP6XYZRHFDBW7Y6GF3L4AOYP7LTWZCJJUZFTRKKVD6G4EJUQ/Samples/speed-dial/styles/App.vue?vue&type=style&index=0&id=0b631bee&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,iBAAiB;QACjB,WAAW;QACX,eAAe;QACf,kBAAkB;CACzB;AACD;AACA;QACQ,WAAW;QACX,WAAW;CAClB;CACA;AACD;IACI,uBAAuB;CAC1B;AACD;IACI,+BAA+B;IAC/B,ukVAAukV;IACvkV,oBAAoB;IACpB,mBAAmB;CACtB;AACD;;IAEI,0CAA0C;IAC1C,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,qBAAqB;IACrB,oCAAoC;IACpC,mCAAmC;CACtC;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&id=0b631bee&lang=css&\",\"sourcesContent\":[\"\\n.speeddial-appearence-target {\\n        min-height:310px;\\n        width: 70%;\\n        margin: 5% 15%;\\n        position:relative;\\n}\\n@media only screen and (max-width: 600px) {\\n.speeddial-appearence-target {\\n        width: 90%;\\n        margin: 5%;\\n}\\n}\\n.custom-index {\\n    z-index:500 !important;\\n}\\n@font-face {\\n    font-family: 'speeddial-icons';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n[class^=\\\"speeddial-icon-\\\"],\\n[class*=\\\"speeddial-icon-\\\"] {\\n    font-family: 'speeddial-icons' !important;\\n    speak: none;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-variant: normal;\\n    text-transform: none;\\n    line-height: inherit;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\n.speeddial-icon-close:before {\\n    content: \\\"\\\\e700\\\";\\n}\\n.speeddial-icon-house:before {\\n    content: \\\"\\\\e701\\\";\\n}\\n.speeddial-icon-people:before {\\n    content: \\\"\\\\e702\\\";\\n}\\n.speeddial-icon-search:before {\\n    content: \\\"\\\\e703\\\";\\n}\\n.speeddial-icon-message:before {\\n    content: \\\"\\\\e704\\\";\\n}\\n.speeddial-icon-menu:before {\\n    content: \\\"\\\\e705\\\";\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/speed-dial/styles/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/speed-dial/styles/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/speed-dial/styles/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n\r\n\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_2__[\"TooltipPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__[\"SpeedDialPlugin\"]);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\r\n    data: function () {\r\n        return {\r\n            items: [\r\n                {\r\n                    text: 'Home',\r\n                    iconCss: 'speeddial-icons speeddial-icon-house'\r\n                },\r\n                {\r\n                    text: 'Contacts',\r\n                    iconCss: 'speeddial-icons speeddial-icon-people'\r\n                },\r\n                {\r\n                    text: 'Search',\r\n                    iconCss: 'speeddial-icons speeddial-icon-search'\r\n                },\r\n                {\r\n                    text: 'Message',\r\n                    iconCss: 'speeddial-icons speeddial-icon-message'\r\n                }\r\n            ],\r\n            itemLabel: [\r\n                {\r\n                    text: 'Home'\r\n                },\r\n                {\r\n                    text: 'Contacts'\r\n                },\r\n                {\r\n                    text: 'Search'\r\n                },\r\n                {\r\n                    text: 'Message'\r\n                }\r\n            ],\r\n            tooltItem: [\r\n                {\r\n                    title: 'Home',\r\n                    iconCss: 'speeddial-icons speeddial-icon-house'\r\n                },\r\n                {\r\n                    title: 'Contacts',\r\n                    iconCss: 'speeddial-icons speeddial-icon-people'\r\n                },\r\n                {\r\n                    title: 'Search',\r\n                    iconCss: 'speeddial-icons speeddial-icon-search'\r\n                },\r\n                {\r\n                    title: 'Message',\r\n                    iconCss: 'speeddial-icons speeddial-icon-message'\r\n                }\r\n            ]\r\n        };\r\n    }\r\n}));\r\n\n\n//# sourceURL=webpack:///./Samples/speed-dial/styles/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/speed-dial/styles/App.vue?vue&type=template&id=0b631bee&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/speed-dial/styles/App.vue?vue&type=template&id=0b631bee& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"id\":\"speed-dial-wrapper\"}},[_c('ejs-tooltip',{attrs:{\"id\":\"details\",\"target\":\".tooltip-speeddial .e-speeddial-li\",\"position\":\"LeftCenter\"}},[_c('div',{staticClass:\"speeddial-appearence-target custom-index\",attrs:{\"id\":\"target\"}},[_c('ejs-speeddial',{attrs:{\"id\":\"speeddial1\",\"content\":\"Edit\",\"target\":\"#target\",\"position\":\"BottomCenter\",\"openIconCss\":\"speeddial-icons speeddial-icon-edit\",\"iconPosition\":\"Left\",\"items\":_vm.items}}),_vm._v(\" \"),_c('ejs-speeddial',{attrs:{\"id\":\"speeddial2\",\"content\":\"Edit\",\"target\":\"#target\",\"position\":\"BottomLeft\",\"items\":_vm.itemLabel}}),_vm._v(\" \"),_c('ejs-speeddial',{attrs:{\"id\":\"speeddial3\",\"title\":\"Edit\",\"target\":\"#target\",\"position\":\"BottomRight\",\"cssClass\":\"tooltip-speeddial\",\"openIconCss\":\"speeddial-icons speeddial-icon-edit\",\"items\":_vm.tooltItem}})],1)])],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n            This sample demonstrates the appearance customization of the Speed Dial action items. \\n            Click the Speed Dial button to open action items.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n            In the above example, Speed Dial items appearence customized using \"),_c('code',[_vm._v(\"text\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"iconCss\")]),_vm._v(\" properties of \"),_c('code',[_vm._v(\"SpeedDialItemModel\")]),_vm._v(\".\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/speed-dial/styles/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });