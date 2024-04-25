/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/date.svg */ "./src/icons/date.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: Roboto, sans-serif;
    color: #FFFDD0;
}

body {
    background-color: #1a1a1a;
}

.content {
    display: grid;
    grid-template-columns: 1fr 10fr;
    gap: .25em;
    height: 100vh;
}

nav,
.pages {
    background-color: #282828;
    border-radius: .5rem;
}

nav {
    padding-right: 0;
}

nav .option {
    display: flex;
    align-items: center;
    gap: .1em;
    margin-top: 1em;
    border-radius: .5rem;
    padding: .25em;
}

nav .option:hover,
nav .option:focus {
    cursor: pointer;
    background-color: #1a1a1a;
}

nav .option p {
    font-size: 0rem;
    transition: font-size 0.3s;
}

nav .projects_collapse {
    display: none;
}

nav .projects_menu {
    display: none;
    margin-left: 1em;
}

.page {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.page h1 {
    font-size: 2rem;
    margin-top: 1em;
    margin-left: 1em;
}

.button {
    border-radius: 15px;
    padding: .25em;
    max-width: 1.5em;
}

.button:hover,
.button:focus {
    cursor: pointer;
    background-color: #1a1a1a;
}

.page .add_task_btn {
    margin: auto auto 0;
}

.page_content {
    margin-top: 2em;
    margin-left: 2em;
}

.today .input_container {
    display: flex;
    flex-direction: column;
    max-width: 90%;
}

.today .button_container {
    align-self: flex-end;
    opacity: 0;
    transition: all .3s;
    transition-delay: .5s;
    display: flex;
    margin-top: .5em;
}

.datepicker_input {
    width: 1.1em;
    background-color: #282828;
    border: none;
    outline: none;
    font-size: large;
}

.datepicker_input[type="date"]::-webkit-calendar-picker-indicator {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.datepicker_input[type="date"]::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
    background-color: #1a1a1a;
    border-radius: 15px;
}

.today .input_field {
    width: 0rem;
    height: 0rem;
    background-color: #1a1a1a;
    color: rgb(187, 182, 182);
    border: none;
    border-radius: 5px;
    resize: none;
    transition: all 0.3s;
}

.today .input_field:focus {
    outline: none;
}

.new_todo__new_task_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1a1a1a;
    border-radius: 5px;
    width: 90%;
    padding: .5em;
    margin-bottom: .5em;
}

.new_todo__new_task_wrapper {
    display: flex;
    width: 100%;
}

.new_todo__task_content {
    color: rgb(187, 182, 182);
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
    align-self: flex-start;
    margin-top: 2px;
    width: 100%;
}

.new_todo__task_content:hover,
.new_todo__task_content:focus {
    cursor: pointer;
    opacity: .5;
}

.new_todo__modal_container {
    margin: 0 auto;
    align-self: center;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: #282828;
    box-shadow: 0 0 1em rgb(0 0 0/ .3);
    padding: .5em;
    min-width: 13em;
}

.new_todo__modal_wrapper {
    display: flex;
    flex-direction: column;
}

.new_todo__close_modal {
    font-size: larger;
    align-self: flex-end;
}

.new_todo__close_modal:hover {
    cursor: pointer;
}

.new_todo__modal_content {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1em;
    padding: .15em;
    border-radius: 10px;
}

.new_todo__modal_content:hover,
.new_todo__modal_content:focus {
    background-color: #1a1a1a;
    cursor: pointer;
}

.new_todo__modal_info {
    color: white;
    opacity: .5;
}

.new_todo__modal_container::backdrop {
    background-color: black;
    opacity: .25;
}

@media (min-width: 700px) {
    .content {
        max-width: 700px;
        margin: 0 auto;
        padding: 1em;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,qBAAqB;IACrB,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,UAAU;IACV,aAAa;AACjB;;AAEA;;IAEI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,oBAAoB;IACpB,cAAc;AAClB;;AAEA;;IAEI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,gBAAgB;AACpB;;AAEA;;IAEI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,UAAU;IACV,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,yDAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,sBAAsB;IACtB,eAAe;IACf,WAAW;AACf;;AAEA;;IAEI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,kCAAkC;IAClC,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;AACvB;;AAEA;;IAEI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI;QACI,gBAAgB;QAChB,cAAc;QACd,YAAY;IAChB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    text-decoration: none;\n    font-family: Roboto, sans-serif;\n    color: #FFFDD0;\n}\n\nbody {\n    background-color: #1a1a1a;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n    gap: .25em;\n    height: 100vh;\n}\n\nnav,\n.pages {\n    background-color: #282828;\n    border-radius: .5rem;\n}\n\nnav {\n    padding-right: 0;\n}\n\nnav .option {\n    display: flex;\n    align-items: center;\n    gap: .1em;\n    margin-top: 1em;\n    border-radius: .5rem;\n    padding: .25em;\n}\n\nnav .option:hover,\nnav .option:focus {\n    cursor: pointer;\n    background-color: #1a1a1a;\n}\n\nnav .option p {\n    font-size: 0rem;\n    transition: font-size 0.3s;\n}\n\nnav .projects_collapse {\n    display: none;\n}\n\nnav .projects_menu {\n    display: none;\n    margin-left: 1em;\n}\n\n.page {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.page h1 {\n    font-size: 2rem;\n    margin-top: 1em;\n    margin-left: 1em;\n}\n\n.button {\n    border-radius: 15px;\n    padding: .25em;\n    max-width: 1.5em;\n}\n\n.button:hover,\n.button:focus {\n    cursor: pointer;\n    background-color: #1a1a1a;\n}\n\n.page .add_task_btn {\n    margin: auto auto 0;\n}\n\n.page_content {\n    margin-top: 2em;\n    margin-left: 2em;\n}\n\n.today .input_container {\n    display: flex;\n    flex-direction: column;\n    max-width: 90%;\n}\n\n.today .button_container {\n    align-self: flex-end;\n    opacity: 0;\n    transition: all .3s;\n    transition-delay: .5s;\n    display: flex;\n    margin-top: .5em;\n}\n\n.datepicker_input {\n    width: 1.1em;\n    background-color: #282828;\n    border: none;\n    outline: none;\n    font-size: large;\n}\n\n.datepicker_input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-image: url(./icons/date.svg);\n}\n\n.datepicker_input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    cursor: pointer;\n    background-color: #1a1a1a;\n    border-radius: 15px;\n}\n\n.today .input_field {\n    width: 0rem;\n    height: 0rem;\n    background-color: #1a1a1a;\n    color: rgb(187, 182, 182);\n    border: none;\n    border-radius: 5px;\n    resize: none;\n    transition: all 0.3s;\n}\n\n.today .input_field:focus {\n    outline: none;\n}\n\n.new_todo__new_task_container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #1a1a1a;\n    border-radius: 5px;\n    width: 90%;\n    padding: .5em;\n    margin-bottom: .5em;\n}\n\n.new_todo__new_task_wrapper {\n    display: flex;\n    width: 100%;\n}\n\n.new_todo__task_content {\n    color: rgb(187, 182, 182);\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n    align-self: flex-start;\n    margin-top: 2px;\n    width: 100%;\n}\n\n.new_todo__task_content:hover,\n.new_todo__task_content:focus {\n    cursor: pointer;\n    opacity: .5;\n}\n\n.new_todo__modal_container {\n    margin: 0 auto;\n    align-self: center;\n    outline: none;\n    border: none;\n    border-radius: 15px;\n    background-color: #282828;\n    box-shadow: 0 0 1em rgb(0 0 0/ .3);\n    padding: .5em;\n    min-width: 13em;\n}\n\n.new_todo__modal_wrapper {\n    display: flex;\n    flex-direction: column;\n}\n\n.new_todo__close_modal {\n    font-size: larger;\n    align-self: flex-end;\n}\n\n.new_todo__close_modal:hover {\n    cursor: pointer;\n}\n\n.new_todo__modal_content {\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin-bottom: 1em;\n    padding: .15em;\n    border-radius: 10px;\n}\n\n.new_todo__modal_content:hover,\n.new_todo__modal_content:focus {\n    background-color: #1a1a1a;\n    cursor: pointer;\n}\n\n.new_todo__modal_info {\n    color: white;\n    opacity: .5;\n}\n\n.new_todo__modal_container::backdrop {\n    background-color: black;\n    opacity: .25;\n}\n\n@media (min-width: 700px) {\n    .content {\n        max-width: 700px;\n        margin: 0 auto;\n        padding: 1em;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/archive.js":
/*!********************************!*\
  !*** ./src/modules/archive.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ archive)
/* harmony export */ });
function archive() {
    const page = document.createElement('div');
    page.classList = 'page';

    const title = document.createElement('h1');
    title.innerHTML = 'Archive';
    page.appendChild(title);
    return page;
};

/***/ }),

/***/ "./src/modules/inbox.js":
/*!******************************!*\
  !*** ./src/modules/inbox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inbox)
/* harmony export */ });
function inbox() {
    const page = document.createElement('div');
    page.classList = 'page';

    const title = document.createElement('h1');
    title.innerHTML = 'Inbox';
    page.appendChild(title);
    // const add_task = document.querySelector('.add_task');
    // add_task.src = add_icon;
    return page;
};

/***/ }),

/***/ "./src/modules/new_todo.js":
/*!*********************************!*\
  !*** ./src/modules/new_todo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ new_todo)
/* harmony export */ });
/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/edit.svg */ "./src/icons/edit.svg");
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/delete.svg */ "./src/icons/delete.svg");
/* harmony import */ var _icons_checked_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/checked.svg */ "./src/icons/checked.svg");
/* harmony import */ var _icons_unchecked_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/unchecked.svg */ "./src/icons/unchecked.svg");






function new_todo(id, content, date, priority) {
    return {
        id: id,
        content: content,
        date: date,
        priority: priority,
        render: function () {

            const new_task_container = document.createElement('div');
            new_task_container.classList = 'new_todo__new_task_container';

            const new_task_wrapper = document.createElement('div');
            new_task_wrapper.classList = 'new_todo__new_task_wrapper';
            new_task_container.appendChild(new_task_wrapper);

            const complete_btn = new Image();
            complete_btn.classList = 'button new_todo__complete_btn';
            complete_btn.src = _icons_unchecked_svg__WEBPACK_IMPORTED_MODULE_3__;
            complete_btn.value = false;
            complete_btn.addEventListener('click', () => {
                if (!complete_btn.value) {
                    complete_btn.src = _icons_checked_svg__WEBPACK_IMPORTED_MODULE_2__;
                    complete_btn.value = true;
                    task_content.style.opacity = '.5';
                } else {
                    complete_btn.src = _icons_unchecked_svg__WEBPACK_IMPORTED_MODULE_3__;
                    complete_btn.value = false;
                    task_content.style.opacity = '1';
                }
            });
            new_task_wrapper.appendChild(complete_btn);

            const task_content = document.createElement('p');
            task_content.classList = 'new_todo__task_content';
            task_content.innerHTML = content;
            if (priority == 2) {
                task_content.style.color = '#8B0000';
            } else if (priority == 1) {
                task_content.style.color = 'orange';
            }
            new_task_wrapper.appendChild(task_content);

            const delete_button = new Image();
            delete_button.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_1__;
            delete_button.classList = 'button new_todo__delete_task_btn';
            delete_button.addEventListener('click', () => {
                new_task_container.innerHTML = '';
                new_task_container.classList = '';
                localStorage.removeItem(id);
            });
            new_task_container.appendChild(delete_button);

            //modal
            task_content.addEventListener('click', () => {
                const modal_container = document.createElement('dialog');
                modal_container.classList = 'new_todo__modal_container';

                const modal_wrapper = document.createElement('div');
                modal_wrapper.classList = 'new_todo__modal_wrapper';
                modal_container.appendChild(modal_wrapper);

                const close_modal = document.createElement('div');
                close_modal.classList = 'new_todo__close_modal';
                close_modal.innerHTML = 'x';
                close_modal.addEventListener('click', () => {
                    modal_container.close();
                });
                modal_wrapper.appendChild(close_modal);

                const modal_content = document.createElement('p');
                modal_content.classList = 'new_todo__modal_content';
                modal_content.innerHTML = content;
                modal_wrapper.appendChild(modal_content);

                const modal_info = document.createElement('div');
                modal_info.classList = 'new_todo__modal_info';
                let formatted_date = date.split('-');
                modal_info.innerHTML = formatted_date[2] + '/' + formatted_date[1] + '/' + formatted_date[0];
                modal_wrapper.appendChild(modal_info);

                const body = document.querySelector('body');
                body.appendChild(modal_container);
                modal_container.showModal();
            });
            return new_task_container;
        }
    };
};

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projects)
/* harmony export */ });
function projects() {
    const page = document.createElement('div');
    page.classList = 'page';

    return page;
};

/***/ }),

/***/ "./src/modules/today.js":
/*!******************************!*\
  !*** ./src/modules/today.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ today)
/* harmony export */ });
/* harmony import */ var _icons_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/add.svg */ "./src/icons/add.svg");
/* harmony import */ var _icons_tag_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/tag.svg */ "./src/icons/tag.svg");
/* harmony import */ var _icons_tag_orange_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/tag_orange.svg */ "./src/icons/tag_orange.svg");
/* harmony import */ var _icons_tag_red_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/tag_red.svg */ "./src/icons/tag_red.svg");
/* harmony import */ var _new_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new_todo */ "./src/modules/new_todo.js");








function save(id, content, date, priority) {
    let task = { id: id, content: content, date: date, priority: priority };
    localStorage.setItem(id, JSON.stringify(task));
};

function retreive_all() {
    var tasks = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        tasks.push(JSON.parse(localStorage.getItem(keys[i])));
    };

    return tasks;
};

function today() {
    const page = document.createElement('div');
    page.classList = 'page today';

    const title = document.createElement('h1');
    title.innerHTML = 'Today';
    page.appendChild(title);

    //tasks
    const content = document.createElement('div');
    content.classList = 'page_content';
    page.appendChild(content);

    //input field and buttons
    const input_container = document.createElement('div');
    input_container.classList = 'input_container';
    content.appendChild(input_container);

    const input_field = document.createElement('textarea');
    input_field.classList = 'input_field';
    input_container.appendChild(input_field);

    const button_container = document.createElement('div');
    button_container.classList = 'button_container';
    input_container.appendChild(button_container);

    const add_btn = new Image();
    add_btn.src = _icons_add_svg__WEBPACK_IMPORTED_MODULE_0__;
    add_btn.classList = 'button date_btn';
    button_container.appendChild(add_btn);

    //datepicker
    const datepicker_input = document.createElement('input');
    datepicker_input.type = 'date';
    datepicker_input.classList = 'datepicker_input';
    button_container.appendChild(datepicker_input);

    //priority button
    const tag_btn = new Image();
    tag_btn.src = _icons_tag_svg__WEBPACK_IMPORTED_MODULE_1__;
    tag_btn.classList = 'button tag_btn';
    tag_btn.value = 0;
    tag_btn.addEventListener('click', () => {
        if (tag_btn.value == 0) {
            tag_btn.value = 1;
            tag_btn.src = _icons_tag_orange_svg__WEBPACK_IMPORTED_MODULE_2__;
        } else if (tag_btn.value == 1) {
            tag_btn.value = 2
            tag_btn.src = _icons_tag_red_svg__WEBPACK_IMPORTED_MODULE_3__;
        } else if (tag_btn.value == 2) {
            tag_btn.value = 0
            tag_btn.src = _icons_tag_svg__WEBPACK_IMPORTED_MODULE_1__;
        }
    });
    button_container.appendChild(tag_btn);

    //add task button
    const add_task = new Image();
    add_task.src = _icons_add_svg__WEBPACK_IMPORTED_MODULE_0__;
    add_task.classList = 'button add_task_btn';

    add_task.addEventListener('click', () => {
        input_field.style.width = '100%';
        input_field.style.height = '3rem';
        input_field.style.padding = '.5rem';
        button_container.style.opacity = '1';
        input_field.focus();
    });
    page.appendChild(add_task);

    //add new task
    let tasks = retreive_all();
    let task_id = 0;
    //fixme id values aren't consistent
    console.log(tasks);

    if (tasks.length !== 0) {
        task_id = tasks.length;

        for (let i = 0; i < tasks.length; i++) {
            const new_task = (0,_new_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(tasks[i].id, tasks[i].content, tasks[i].date, tasks[i].priority).render();
            content.appendChild(new_task);
        };
    };

    add_btn.addEventListener('click', (e) => {
        if (input_field.value != '') {
            const new_task = (0,_new_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(task_id, input_field.value, datepicker_input.value, tag_btn.value).render();
            content.appendChild(new_task);
            save(task_id, input_field.value, datepicker_input.value, tag_btn.value);
            task_id++;

            input_field.focus();
            input_field.value = '';
        };
    });


    return page;
};

/***/ }),

/***/ "./src/icons/add.svg":
/*!***************************!*\
  !*** ./src/icons/add.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1875f7a39bba508737b.svg";

/***/ }),

/***/ "./src/icons/archive.svg":
/*!*******************************!*\
  !*** ./src/icons/archive.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e6e8fb0ce3e9114da57.svg";

/***/ }),

/***/ "./src/icons/checked.svg":
/*!*******************************!*\
  !*** ./src/icons/checked.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bccf200617072ef611e.svg";

/***/ }),

/***/ "./src/icons/collapse.svg":
/*!********************************!*\
  !*** ./src/icons/collapse.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa35231f2ac7d3c8b13d.svg";

/***/ }),

/***/ "./src/icons/date.svg":
/*!****************************!*\
  !*** ./src/icons/date.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4817147e915f492e5423.svg";

/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "772e4e5ae3f4f45d75f6.svg";

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bed243787dc7b3195b1d.svg";

/***/ }),

/***/ "./src/icons/expand.svg":
/*!******************************!*\
  !*** ./src/icons/expand.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb1cfd7bf196df1bb87a.svg";

/***/ }),

/***/ "./src/icons/inbox.svg":
/*!*****************************!*\
  !*** ./src/icons/inbox.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b9ff9a187c66a15c2fb.svg";

/***/ }),

/***/ "./src/icons/keyboard.svg":
/*!********************************!*\
  !*** ./src/icons/keyboard.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bcd457c1fbc33c17638.svg";

/***/ }),

/***/ "./src/icons/tag.svg":
/*!***************************!*\
  !*** ./src/icons/tag.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88db950c38ea1031dde6.svg";

/***/ }),

/***/ "./src/icons/tag_orange.svg":
/*!**********************************!*\
  !*** ./src/icons/tag_orange.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae23b23bb844ebb5287f.svg";

/***/ }),

/***/ "./src/icons/tag_red.svg":
/*!*******************************!*\
  !*** ./src/icons/tag_red.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1f6074968aebe644171.svg";

/***/ }),

/***/ "./src/icons/today.svg":
/*!*****************************!*\
  !*** ./src/icons/today.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "222dd918b3a0836b8283.svg";

/***/ }),

/***/ "./src/icons/unchecked.svg":
/*!*********************************!*\
  !*** ./src/icons/unchecked.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c26bd049a69907f74f3c.svg";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 			"app": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_today_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/today.svg */ "./src/icons/today.svg");
/* harmony import */ var _icons_inbox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/inbox.svg */ "./src/icons/inbox.svg");
/* harmony import */ var _icons_keyboard_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/keyboard.svg */ "./src/icons/keyboard.svg");
/* harmony import */ var _icons_archive_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/archive.svg */ "./src/icons/archive.svg");
/* harmony import */ var _icons_expand_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/expand.svg */ "./src/icons/expand.svg");
/* harmony import */ var _icons_collapse_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/collapse.svg */ "./src/icons/collapse.svg");
/* harmony import */ var _icons_add_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/add.svg */ "./src/icons/add.svg");
/* harmony import */ var _modules_today__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/today */ "./src/modules/today.js");
/* harmony import */ var _modules_inbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/inbox */ "./src/modules/inbox.js");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/projects */ "./src/modules/projects.js");
/* harmony import */ var _modules_archive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/archive */ "./src/modules/archive.js");















//icons
const option = document.querySelectorAll('.option_icon');
option[0].src = _icons_today_svg__WEBPACK_IMPORTED_MODULE_1__;
option[1].src = _icons_inbox_svg__WEBPACK_IMPORTED_MODULE_2__;
option[2].src = _icons_keyboard_svg__WEBPACK_IMPORTED_MODULE_3__;
option[3].src = _icons_archive_svg__WEBPACK_IMPORTED_MODULE_4__;

const projects_expand = document.querySelector('.projects_expand');
projects_expand.src = _icons_expand_svg__WEBPACK_IMPORTED_MODULE_5__;
const projects_collapse = document.querySelector('.projects_collapse');
projects_collapse.src = _icons_collapse_svg__WEBPACK_IMPORTED_MODULE_6__;
const add_project_btn = document.querySelector('nav .add_project_btn');
add_project_btn.src = _icons_add_svg__WEBPACK_IMPORTED_MODULE_7__;

//media query for screen width
const nav = document.querySelector('nav');
const pages = document.querySelector('.pages');
const optionName = document.querySelectorAll('nav .option p');

//check if page loads on desktop first
if (document.body.clientWidth >= 768) {
    optionName.forEach(e => {
        e.style.fontSize = '1rem';
    });
};

window.addEventListener('resize', function () {
    if (document.body.clientWidth >= 768) {
        optionName.forEach(e => {
            e.style.fontSize = '1rem';
        });
    } else {
        if (document.body.clientWidth < 768) {
            optionName.forEach(e => {
                e.style.fontSize = '0rem';
                projects_menu.style.display = 'none';
                projects_collapse.style.display = 'none';
                projects_expand.style.display = 'block';
            });
        };
    };
});

nav.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        optionName.forEach(e => {
            e.style.fontSize = '1rem';
        });
    };
});

pages.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        optionName.forEach(e => {
            e.style.fontSize = '0rem';
            projects_menu.style.display = 'none';
            projects_collapse.style.display = 'none';
            projects_expand.style.display = 'block';
        });
    }
});

//tab browsing
pages.appendChild((0,_modules_today__WEBPACK_IMPORTED_MODULE_8__["default"])());

const today_option = document.querySelector('.today');
today_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    }
    pages.appendChild((0,_modules_today__WEBPACK_IMPORTED_MODULE_8__["default"])());
});

const inbox_option = document.querySelector('.inbox');
inbox_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    }
    pages.appendChild((0,_modules_inbox__WEBPACK_IMPORTED_MODULE_9__["default"])());
});

const projects_option = document.querySelector('.projects');
const projects_menu = document.querySelector('.projects_menu');
projects_option.addEventListener('click', () => {
    if (projects_menu.style.display == 'block') {
        projects_menu.style.display = 'none';
        projects_collapse.style.display = 'none';
        projects_expand.style.display = 'block';
    } else {
        projects_menu.style.display = 'block';
        projects_collapse.style.display = 'block';
        projects_expand.style.display = 'none';
    };
});

const archive_option = document.querySelector('.archive');
archive_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    }
    pages.appendChild((0,_modules_archive__WEBPACK_IMPORTED_MODULE_11__["default"])());
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLGtCQUFrQjtBQUNqSSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sK0ZBQStGLG1CQUFtQixPQUFPLDZCQUE2QixnQkFBZ0IsaUJBQWlCLHVCQUF1Qiw0QkFBNEIsc0NBQXNDLHFCQUFxQixHQUFHLFVBQVUsZ0NBQWdDLEdBQUcsY0FBYyxvQkFBb0Isc0NBQXNDLGlCQUFpQixvQkFBb0IsR0FBRyxrQkFBa0IsZ0NBQWdDLDJCQUEyQixHQUFHLFNBQVMsdUJBQXVCLEdBQUcsaUJBQWlCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLHNCQUFzQiwyQkFBMkIscUJBQXFCLEdBQUcsMkNBQTJDLHNCQUFzQixnQ0FBZ0MsR0FBRyxtQkFBbUIsc0JBQXNCLGlDQUFpQyxHQUFHLDRCQUE0QixvQkFBb0IsR0FBRyx3QkFBd0Isb0JBQW9CLHVCQUF1QixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixtQkFBbUIsR0FBRyxjQUFjLHNCQUFzQixzQkFBc0IsdUJBQXVCLEdBQUcsYUFBYSwwQkFBMEIscUJBQXFCLHVCQUF1QixHQUFHLG1DQUFtQyxzQkFBc0IsZ0NBQWdDLEdBQUcseUJBQXlCLDBCQUEwQixHQUFHLG1CQUFtQixzQkFBc0IsdUJBQXVCLEdBQUcsNkJBQTZCLG9CQUFvQiw2QkFBNkIscUJBQXFCLEdBQUcsOEJBQThCLDJCQUEyQixpQkFBaUIsMEJBQTBCLDRCQUE0QixvQkFBb0IsdUJBQXVCLEdBQUcsdUJBQXVCLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLG9CQUFvQix1QkFBdUIsR0FBRyx5RUFBeUUsOENBQThDLEdBQUcsK0VBQStFLHNCQUFzQixnQ0FBZ0MsMEJBQTBCLEdBQUcseUJBQXlCLGtCQUFrQixtQkFBbUIsZ0NBQWdDLGdDQUFnQyxtQkFBbUIseUJBQXlCLG1CQUFtQiwyQkFBMkIsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsbUNBQW1DLG9CQUFvQiwwQkFBMEIscUNBQXFDLGdDQUFnQyx5QkFBeUIsaUJBQWlCLG9CQUFvQiwwQkFBMEIsR0FBRyxpQ0FBaUMsb0JBQW9CLGtCQUFrQixHQUFHLDZCQUE2QixnQ0FBZ0MsNEJBQTRCLDRCQUE0Qiw2QkFBNkIsNkJBQTZCLHNCQUFzQixrQkFBa0IsR0FBRyxtRUFBbUUsc0JBQXNCLGtCQUFrQixHQUFHLGdDQUFnQyxxQkFBcUIseUJBQXlCLG9CQUFvQixtQkFBbUIsMEJBQTBCLGdDQUFnQyx5Q0FBeUMsb0JBQW9CLHNCQUFzQixHQUFHLDhCQUE4QixvQkFBb0IsNkJBQTZCLEdBQUcsNEJBQTRCLHdCQUF3QiwyQkFBMkIsR0FBRyxrQ0FBa0Msc0JBQXNCLEdBQUcsOEJBQThCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHFCQUFxQiwwQkFBMEIsR0FBRyxxRUFBcUUsZ0NBQWdDLHNCQUFzQixHQUFHLDJCQUEyQixtQkFBbUIsa0JBQWtCLEdBQUcsMENBQTBDLDhCQUE4QixtQkFBbUIsR0FBRywrQkFBK0IsZ0JBQWdCLDJCQUEyQix5QkFBeUIsdUJBQXVCLE9BQU8sR0FBRyxtQkFBbUI7QUFDMTNMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaFAxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjBDO0FBQ0k7QUFDRTtBQUNJOzs7QUFHckM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixpREFBYztBQUM3QztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsK0NBQVk7QUFDbkQ7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix1Q0FBdUMsaURBQWM7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDhDQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0ZlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHdDO0FBQ0E7QUFDYztBQUNOO0FBQ2Q7O0FBRUU7O0FBRXBDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMkNBQVE7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsMkNBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrREFBZTtBQUN6QyxVQUFVO0FBQ1Y7QUFDQSwwQkFBMEIsK0NBQVk7QUFDdEMsVUFBVTtBQUNWO0FBQ0EsMEJBQTBCLDJDQUFRO0FBQ2xDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQVE7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCO0FBQzFDLDZCQUE2QixxREFBVTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixxREFBVTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQThCOztBQUVhO0FBQ0E7QUFDTTtBQUNGO0FBQ0Y7QUFDSTtBQUNWOztBQUVIO0FBQ0E7QUFDTTtBQUNGOztBQUV4QztBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFVO0FBQzFCLGdCQUFnQiw2Q0FBVTtBQUMxQixnQkFBZ0IsZ0RBQWE7QUFDN0IsZ0JBQWdCLCtDQUFZOztBQUU1QjtBQUNBLHNCQUFzQiw4Q0FBVztBQUNqQztBQUNBLHdCQUF3QixnREFBYTtBQUNyQztBQUNBLHNCQUFzQiwyQ0FBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0Esa0JBQWtCLDBEQUFLOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBEQUFLO0FBQzNCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBSztBQUMzQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFPO0FBQzdCLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9tb2R1bGVzL2FyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvbW9kdWxlcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9tb2R1bGVzL25ld190b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvbW9kdWxlcy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL2RhdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI0ZGRkREMDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcbiAgICBnYXA6IC4yNWVtO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbm5hdixcbi5wYWdlcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn1cblxubmF2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5uYXYgLm9wdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjFlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgcGFkZGluZzogLjI1ZW07XG59XG5cbm5hdiAub3B0aW9uOmhvdmVyLFxubmF2IC5vcHRpb246Zm9jdXMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xufVxuXG5uYXYgLm9wdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDByZW07XG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XG59XG5cbm5hdiAucHJvamVjdHNfY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbm5hdiAucHJvamVjdHNfbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4ucGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICBtYXgtd2lkdGg6IDEuNWVtO1xufVxuXG4uYnV0dG9uOmhvdmVyLFxuLmJ1dHRvbjpmb2N1cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG59XG5cbi5wYWdlIC5hZGRfdGFza19idG4ge1xuICAgIG1hcmdpbjogYXV0byBhdXRvIDA7XG59XG5cbi5wYWdlX2NvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xufVxuXG4udG9kYXkgLmlucHV0X2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC13aWR0aDogOTAlO1xufVxuXG4udG9kYXkgLmJ1dHRvbl9jb250YWluZXIge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuNXM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xufVxuXG4uZGF0ZXBpY2tlcl9pbnB1dCB7XG4gICAgd2lkdGg6IDEuMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmRhdGVwaWNrZXJfaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4uZGF0ZXBpY2tlcl9pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4udG9kYXkgLmlucHV0X2ZpZWxkIHtcbiAgICB3aWR0aDogMHJlbTtcbiAgICBoZWlnaHQ6IDByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbiAgICBjb2xvcjogcmdiKDE4NywgMTgyLCAxODIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4udG9kYXkgLmlucHV0X2ZpZWxkOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3X3RvZG9fX25ld190YXNrX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuLm5ld190b2RvX19uZXdfdGFza193cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubmV3X3RvZG9fX3Rhc2tfY29udGVudCB7XG4gICAgY29sb3I6IHJnYigxODcsIDE4MiwgMTgyKTtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdfdG9kb19fdGFza19jb250ZW50OmhvdmVyLFxuLm5ld190b2RvX190YXNrX2NvbnRlbnQ6Zm9jdXMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAuNTtcbn1cblxuLm5ld190b2RvX19tb2RhbF9jb250YWluZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2IoMCAwIDAvIC4zKTtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIG1pbi13aWR0aDogMTNlbTtcbn1cblxuLm5ld190b2RvX19tb2RhbF93cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uZXdfdG9kb19fY2xvc2VfbW9kYWwge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ubmV3X3RvZG9fX2Nsb3NlX21vZGFsOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdfdG9kb19fbW9kYWxfY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIHBhZGRpbmc6IC4xNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5uZXdfdG9kb19fbW9kYWxfY29udGVudDpob3Zlcixcbi5uZXdfdG9kb19fbW9kYWxfY29udGVudDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdfdG9kb19fbW9kYWxfaW5mbyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IC41O1xufVxuXG4ubmV3X3RvZG9fX21vZGFsX2NvbnRhaW5lcjo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG9wYWNpdHk6IC4yNTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseURBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBOztJQUVJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNGRkZERDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICAgIGdhcDogLjI1ZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdixcXG4ucGFnZXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG59XFxuXFxubmF2IHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG59XFxuXFxubmF2IC5vcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4xZW07XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbn1cXG5cXG5uYXYgLm9wdGlvbjpob3ZlcixcXG5uYXYgLm9wdGlvbjpmb2N1cyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG59XFxuXFxubmF2IC5vcHRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMHJlbTtcXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XFxufVxcblxcbm5hdiAucHJvamVjdHNfY29sbGFwc2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5uYXYgLnByb2plY3RzX21lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG4ucGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnBhZ2UgaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBtYXgtd2lkdGg6IDEuNWVtO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyLFxcbi5idXR0b246Zm9jdXMge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxufVxcblxcbi5wYWdlIC5hZGRfdGFza19idG4ge1xcbiAgICBtYXJnaW46IGF1dG8gYXV0byAwO1xcbn1cXG5cXG4ucGFnZV9jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcbn1cXG5cXG4udG9kYXkgLmlucHV0X2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogOTAlO1xcbn1cXG5cXG4udG9kYXkgLmJ1dHRvbl9jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjVzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbn1cXG5cXG4uZGF0ZXBpY2tlcl9pbnB1dCB7XFxuICAgIHdpZHRoOiAxLjFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uZGF0ZXBpY2tlcl9pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ljb25zL2RhdGUuc3ZnKTtcXG59XFxuXFxuLmRhdGVwaWNrZXJfaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi50b2RheSAuaW5wdXRfZmllbGQge1xcbiAgICB3aWR0aDogMHJlbTtcXG4gICAgaGVpZ2h0OiAwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbiAgICBjb2xvcjogcmdiKDE4NywgMTgyLCAxODIpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnRvZGF5IC5pbnB1dF9maWVsZDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5uZXdfdG9kb19fbmV3X3Rhc2tfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IC41ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XFxufVxcblxcbi5uZXdfdG9kb19fbmV3X3Rhc2tfd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmV3X3RvZG9fX3Rhc2tfY29udGVudCB7XFxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODIsIDE4Mik7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmV3X3RvZG9fX3Rhc2tfY29udGVudDpob3ZlcixcXG4ubmV3X3RvZG9fX3Rhc2tfY29udGVudDpmb2N1cyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5uZXdfdG9kb19fbW9kYWxfY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYigwIDAgMC8gLjMpO1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBtaW4td2lkdGg6IDEzZW07XFxufVxcblxcbi5uZXdfdG9kb19fbW9kYWxfd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXdfdG9kb19fY2xvc2VfbW9kYWwge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5uZXdfdG9kb19fY2xvc2VfbW9kYWw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdfdG9kb19fbW9kYWxfY29udGVudCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBwYWRkaW5nOiAuMTVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm5ld190b2RvX19tb2RhbF9jb250ZW50OmhvdmVyLFxcbi5uZXdfdG9kb19fbW9kYWxfY29udGVudDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ld190b2RvX19tb2RhbF9pbmZvIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLm5ld190b2RvX19tb2RhbF9jb250YWluZXI6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC4yNTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFyY2hpdmUoKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2UuY2xhc3NMaXN0ID0gJ3BhZ2UnO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdBcmNoaXZlJztcbiAgICBwYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICByZXR1cm4gcGFnZTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5ib3goKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2UuY2xhc3NMaXN0ID0gJ3BhZ2UnO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdJbmJveCc7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgLy8gY29uc3QgYWRkX3Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkX3Rhc2snKTtcbiAgICAvLyBhZGRfdGFzay5zcmMgPSBhZGRfaWNvbjtcbiAgICByZXR1cm4gcGFnZTtcbn07IiwiaW1wb3J0IGVkaXRfaWNvbiBmcm9tICcuLi9pY29ucy9lZGl0LnN2Zyc7XG5pbXBvcnQgZGVsZXRlX2ljb24gZnJvbSAnLi4vaWNvbnMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgY2hlY2tlZF9pY29uIGZyb20gJy4uL2ljb25zL2NoZWNrZWQuc3ZnJztcbmltcG9ydCB1bmNoZWNrZWRfaWNvbiBmcm9tICcuLi9pY29ucy91bmNoZWNrZWQuc3ZnJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdfdG9kbyhpZCwgY29udGVudCwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld190YXNrX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3X3Rhc2tfY29udGFpbmVyLmNsYXNzTGlzdCA9ICduZXdfdG9kb19fbmV3X3Rhc2tfY29udGFpbmVyJztcblxuICAgICAgICAgICAgY29uc3QgbmV3X3Rhc2tfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3X3Rhc2tfd3JhcHBlci5jbGFzc0xpc3QgPSAnbmV3X3RvZG9fX25ld190YXNrX3dyYXBwZXInO1xuICAgICAgICAgICAgbmV3X3Rhc2tfY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld190YXNrX3dyYXBwZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZV9idG4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNvbXBsZXRlX2J0bi5jbGFzc0xpc3QgPSAnYnV0dG9uIG5ld190b2RvX19jb21wbGV0ZV9idG4nO1xuICAgICAgICAgICAgY29tcGxldGVfYnRuLnNyYyA9IHVuY2hlY2tlZF9pY29uO1xuICAgICAgICAgICAgY29tcGxldGVfYnRuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBjb21wbGV0ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wbGV0ZV9idG4udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVfYnRuLnNyYyA9IGNoZWNrZWRfaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVfYnRuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFza19jb250ZW50LnN0eWxlLm9wYWNpdHkgPSAnLjUnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlX2J0bi5zcmMgPSB1bmNoZWNrZWRfaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVfYnRuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfY29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3X3Rhc2tfd3JhcHBlci5hcHBlbmRDaGlsZChjb21wbGV0ZV9idG4pO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0YXNrX2NvbnRlbnQuY2xhc3NMaXN0ID0gJ25ld190b2RvX190YXNrX2NvbnRlbnQnO1xuICAgICAgICAgICAgdGFza19jb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHkgPT0gMikge1xuICAgICAgICAgICAgICAgIHRhc2tfY29udGVudC5zdHlsZS5jb2xvciA9ICcjOEIwMDAwJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRhc2tfY29udGVudC5zdHlsZS5jb2xvciA9ICdvcmFuZ2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3X3Rhc2tfd3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrX2NvbnRlbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVfYnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBkZWxldGVfYnV0dG9uLnNyYyA9IGRlbGV0ZV9pY29uO1xuICAgICAgICAgICAgZGVsZXRlX2J1dHRvbi5jbGFzc0xpc3QgPSAnYnV0dG9uIG5ld190b2RvX19kZWxldGVfdGFza19idG4nO1xuICAgICAgICAgICAgZGVsZXRlX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdfdGFza19jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgbmV3X3Rhc2tfY29udGFpbmVyLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3X3Rhc2tfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZV9idXR0b24pO1xuXG4gICAgICAgICAgICAvL21vZGFsXG4gICAgICAgICAgICB0YXNrX2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbW9kYWxfY29udGFpbmVyLmNsYXNzTGlzdCA9ICduZXdfdG9kb19fbW9kYWxfY29udGFpbmVyJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsX3dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBtb2RhbF93cmFwcGVyLmNsYXNzTGlzdCA9ICduZXdfdG9kb19fbW9kYWxfd3JhcHBlcic7XG4gICAgICAgICAgICAgICAgbW9kYWxfY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsX3dyYXBwZXIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VfbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjbG9zZV9tb2RhbC5jbGFzc0xpc3QgPSAnbmV3X3RvZG9fX2Nsb3NlX21vZGFsJztcbiAgICAgICAgICAgICAgICBjbG9zZV9tb2RhbC5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgICAgICAgICAgY2xvc2VfbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsX2NvbnRhaW5lci5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1vZGFsX3dyYXBwZXIuYXBwZW5kQ2hpbGQoY2xvc2VfbW9kYWwpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBtb2RhbF9jb250ZW50LmNsYXNzTGlzdCA9ICduZXdfdG9kb19fbW9kYWxfY29udGVudCc7XG4gICAgICAgICAgICAgICAgbW9kYWxfY29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIG1vZGFsX3dyYXBwZXIuYXBwZW5kQ2hpbGQobW9kYWxfY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbF9pbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbW9kYWxfaW5mby5jbGFzc0xpc3QgPSAnbmV3X3RvZG9fX21vZGFsX2luZm8nO1xuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRfZGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgICAgICBtb2RhbF9pbmZvLmlubmVySFRNTCA9IGZvcm1hdHRlZF9kYXRlWzJdICsgJy8nICsgZm9ybWF0dGVkX2RhdGVbMV0gKyAnLycgKyBmb3JtYXR0ZWRfZGF0ZVswXTtcbiAgICAgICAgICAgICAgICBtb2RhbF93cmFwcGVyLmFwcGVuZENoaWxkKG1vZGFsX2luZm8pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsX2NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgbW9kYWxfY29udGFpbmVyLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3X3Rhc2tfY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMoKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2UuY2xhc3NMaXN0ID0gJ3BhZ2UnO1xuXG4gICAgcmV0dXJuIHBhZ2U7XG59OyIsImltcG9ydCBhZGRfaWNvbiBmcm9tICcuLi9pY29ucy9hZGQuc3ZnJztcbmltcG9ydCB0YWdfaWNvbiBmcm9tICcuLi9pY29ucy90YWcuc3ZnJztcbmltcG9ydCB0YWdfaWNvbl9vcmFuZ2UgZnJvbSAnLi4vaWNvbnMvdGFnX29yYW5nZS5zdmcnO1xuaW1wb3J0IHRhZ19pY29uX3JlZCBmcm9tICcuLi9pY29ucy90YWdfcmVkLnN2Zyc7XG5pbXBvcnQgbmV3X3RvZG8gZnJvbSAnLi9uZXdfdG9kbyc7XG5cbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vbmV3X3RvZG8nO1xuXG5mdW5jdGlvbiBzYXZlKGlkLCBjb250ZW50LCBkYXRlLCBwcmlvcml0eSkge1xuICAgIGxldCB0YXNrID0geyBpZDogaWQsIGNvbnRlbnQ6IGNvbnRlbnQsIGRhdGU6IGRhdGUsIHByaW9yaXR5OiBwcmlvcml0eSB9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG59O1xuXG5mdW5jdGlvbiByZXRyZWl2ZV9hbGwoKSB7XG4gICAgdmFyIHRhc2tzID0gW10sXG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLFxuICAgICAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB0YXNrcy5wdXNoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5c1tpXSkpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRhc2tzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kYXkoKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2UuY2xhc3NMaXN0ID0gJ3BhZ2UgdG9kYXknO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdUb2RheSc7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvL3Rhc2tzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0ID0gJ3BhZ2VfY29udGVudCc7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIC8vaW5wdXQgZmllbGQgYW5kIGJ1dHRvbnNcbiAgICBjb25zdCBpbnB1dF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dF9jb250YWluZXIuY2xhc3NMaXN0ID0gJ2lucHV0X2NvbnRhaW5lcic7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dF9jb250YWluZXIpO1xuXG4gICAgY29uc3QgaW5wdXRfZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGlucHV0X2ZpZWxkLmNsYXNzTGlzdCA9ICdpbnB1dF9maWVsZCc7XG4gICAgaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0X2ZpZWxkKTtcblxuICAgIGNvbnN0IGJ1dHRvbl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25fY29udGFpbmVyLmNsYXNzTGlzdCA9ICdidXR0b25fY29udGFpbmVyJztcbiAgICBpbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uX2NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhZGRfYnRuID0gbmV3IEltYWdlKCk7XG4gICAgYWRkX2J0bi5zcmMgPSBhZGRfaWNvbjtcbiAgICBhZGRfYnRuLmNsYXNzTGlzdCA9ICdidXR0b24gZGF0ZV9idG4nO1xuICAgIGJ1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkX2J0bik7XG5cbiAgICAvL2RhdGVwaWNrZXJcbiAgICBjb25zdCBkYXRlcGlja2VyX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlcGlja2VyX2lucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZXBpY2tlcl9pbnB1dC5jbGFzc0xpc3QgPSAnZGF0ZXBpY2tlcl9pbnB1dCc7XG4gICAgYnV0dG9uX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlcGlja2VyX2lucHV0KTtcblxuICAgIC8vcHJpb3JpdHkgYnV0dG9uXG4gICAgY29uc3QgdGFnX2J0biA9IG5ldyBJbWFnZSgpO1xuICAgIHRhZ19idG4uc3JjID0gdGFnX2ljb247XG4gICAgdGFnX2J0bi5jbGFzc0xpc3QgPSAnYnV0dG9uIHRhZ19idG4nO1xuICAgIHRhZ19idG4udmFsdWUgPSAwO1xuICAgIHRhZ19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0YWdfYnRuLnZhbHVlID09IDApIHtcbiAgICAgICAgICAgIHRhZ19idG4udmFsdWUgPSAxO1xuICAgICAgICAgICAgdGFnX2J0bi5zcmMgPSB0YWdfaWNvbl9vcmFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnX2J0bi52YWx1ZSA9PSAxKSB7XG4gICAgICAgICAgICB0YWdfYnRuLnZhbHVlID0gMlxuICAgICAgICAgICAgdGFnX2J0bi5zcmMgPSB0YWdfaWNvbl9yZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnX2J0bi52YWx1ZSA9PSAyKSB7XG4gICAgICAgICAgICB0YWdfYnRuLnZhbHVlID0gMFxuICAgICAgICAgICAgdGFnX2J0bi5zcmMgPSB0YWdfaWNvbjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGJ1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGFnX2J0bik7XG5cbiAgICAvL2FkZCB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGFkZF90YXNrID0gbmV3IEltYWdlKCk7XG4gICAgYWRkX3Rhc2suc3JjID0gYWRkX2ljb247XG4gICAgYWRkX3Rhc2suY2xhc3NMaXN0ID0gJ2J1dHRvbiBhZGRfdGFza19idG4nO1xuXG4gICAgYWRkX3Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlucHV0X2ZpZWxkLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBpbnB1dF9maWVsZC5zdHlsZS5oZWlnaHQgPSAnM3JlbSc7XG4gICAgICAgIGlucHV0X2ZpZWxkLnN0eWxlLnBhZGRpbmcgPSAnLjVyZW0nO1xuICAgICAgICBidXR0b25fY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGlucHV0X2ZpZWxkLmZvY3VzKCk7XG4gICAgfSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChhZGRfdGFzayk7XG5cbiAgICAvL2FkZCBuZXcgdGFza1xuICAgIGxldCB0YXNrcyA9IHJldHJlaXZlX2FsbCgpO1xuICAgIGxldCB0YXNrX2lkID0gMDtcbiAgICAvL2ZpeG1lIGlkIHZhbHVlcyBhcmVuJ3QgY29uc2lzdGVudFxuICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcblxuICAgIGlmICh0YXNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGFza19pZCA9IHRhc2tzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdfdGFzayA9IGNyZWF0ZVRhc2sodGFza3NbaV0uaWQsIHRhc2tzW2ldLmNvbnRlbnQsIHRhc2tzW2ldLmRhdGUsIHRhc2tzW2ldLnByaW9yaXR5KS5yZW5kZXIoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3X3Rhc2spO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBhZGRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGlucHV0X2ZpZWxkLnZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdfdGFzayA9IGNyZWF0ZVRhc2sodGFza19pZCwgaW5wdXRfZmllbGQudmFsdWUsIGRhdGVwaWNrZXJfaW5wdXQudmFsdWUsIHRhZ19idG4udmFsdWUpLnJlbmRlcigpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdfdGFzayk7XG4gICAgICAgICAgICBzYXZlKHRhc2tfaWQsIGlucHV0X2ZpZWxkLnZhbHVlLCBkYXRlcGlja2VyX2lucHV0LnZhbHVlLCB0YWdfYnRuLnZhbHVlKTtcbiAgICAgICAgICAgIHRhc2tfaWQrKztcblxuICAgICAgICAgICAgaW5wdXRfZmllbGQuZm9jdXMoKTtcbiAgICAgICAgICAgIGlucHV0X2ZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIH07XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBwYWdlO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHRvZGF5X2ljb24gZnJvbSAnLi9pY29ucy90b2RheS5zdmcnO1xuaW1wb3J0IGluYm94X2ljb24gZnJvbSAnLi9pY29ucy9pbmJveC5zdmcnO1xuaW1wb3J0IHByb2plY3RzX2ljb24gZnJvbSAnLi9pY29ucy9rZXlib2FyZC5zdmcnO1xuaW1wb3J0IGFyY2hpdmVfaWNvbiBmcm9tICcuL2ljb25zL2FyY2hpdmUuc3ZnJztcbmltcG9ydCBleHBhbmRfaWNvbiBmcm9tICcuL2ljb25zL2V4cGFuZC5zdmcnO1xuaW1wb3J0IGNvbGxhcHNlX2ljb24gZnJvbSAnLi9pY29ucy9jb2xsYXBzZS5zdmcnO1xuaW1wb3J0IGFkZF9pY29uIGZyb20gJy4vaWNvbnMvYWRkLnN2Zyc7XG5cbmltcG9ydCB0b2RheSBmcm9tICcuL21vZHVsZXMvdG9kYXknO1xuaW1wb3J0IGluYm94IGZyb20gJy4vbW9kdWxlcy9pbmJveCc7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RzJztcbmltcG9ydCBhcmNoaXZlIGZyb20gJy4vbW9kdWxlcy9hcmNoaXZlJztcblxuLy9pY29uc1xuY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbl9pY29uJyk7XG5vcHRpb25bMF0uc3JjID0gdG9kYXlfaWNvbjtcbm9wdGlvblsxXS5zcmMgPSBpbmJveF9pY29uO1xub3B0aW9uWzJdLnNyYyA9IHByb2plY3RzX2ljb247XG5vcHRpb25bM10uc3JjID0gYXJjaGl2ZV9pY29uO1xuXG5jb25zdCBwcm9qZWN0c19leHBhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfZXhwYW5kJyk7XG5wcm9qZWN0c19leHBhbmQuc3JjID0gZXhwYW5kX2ljb247XG5jb25zdCBwcm9qZWN0c19jb2xsYXBzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19jb2xsYXBzZScpO1xucHJvamVjdHNfY29sbGFwc2Uuc3JjID0gY29sbGFwc2VfaWNvbjtcbmNvbnN0IGFkZF9wcm9qZWN0X2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiAuYWRkX3Byb2plY3RfYnRuJyk7XG5hZGRfcHJvamVjdF9idG4uc3JjID0gYWRkX2ljb247XG5cbi8vbWVkaWEgcXVlcnkgZm9yIHNjcmVlbiB3aWR0aFxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG5jb25zdCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlcycpO1xuY29uc3Qgb3B0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiAub3B0aW9uIHAnKTtcblxuLy9jaGVjayBpZiBwYWdlIGxvYWRzIG9uIGRlc2t0b3AgZmlyc3RcbmlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoID49IDc2OCkge1xuICAgIG9wdGlvbk5hbWUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZS5zdHlsZS5mb250U2l6ZSA9ICcxcmVtJztcbiAgICB9KTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPj0gNzY4KSB7XG4gICAgICAgIG9wdGlvbk5hbWUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuc3R5bGUuZm9udFNpemUgPSAnMXJlbSc7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgNzY4KSB7XG4gICAgICAgICAgICBvcHRpb25OYW1lLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS5mb250U2l6ZSA9ICcwcmVtJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0c19tZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNfY29sbGFwc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0c19leHBhbmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xufSk7XG5cbm5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgb3B0aW9uTmFtZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS5mb250U2l6ZSA9ICcxcmVtJztcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pO1xuXG5wYWdlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICAgICAgb3B0aW9uTmFtZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS5mb250U2l6ZSA9ICcwcmVtJztcbiAgICAgICAgICAgIHByb2plY3RzX21lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHByb2plY3RzX2NvbGxhcHNlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBwcm9qZWN0c19leHBhbmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG4vL3RhYiBicm93c2luZ1xucGFnZXMuYXBwZW5kQ2hpbGQodG9kYXkoKSk7XG5cbmNvbnN0IHRvZGF5X29wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xudG9kYXlfb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChwYWdlcy5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgcGFnZXMucmVtb3ZlQ2hpbGQocGFnZXMuY2hpbGRyZW5bMF0pO1xuICAgIH1cbiAgICBwYWdlcy5hcHBlbmRDaGlsZCh0b2RheSgpKTtcbn0pO1xuXG5jb25zdCBpbmJveF9vcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcbmluYm94X29wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocGFnZXMuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIHBhZ2VzLnJlbW92ZUNoaWxkKHBhZ2VzLmNoaWxkcmVuWzBdKTtcbiAgICB9XG4gICAgcGFnZXMuYXBwZW5kQ2hpbGQoaW5ib3goKSk7XG59KTtcblxuY29uc3QgcHJvamVjdHNfb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5jb25zdCBwcm9qZWN0c19tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX21lbnUnKTtcbnByb2plY3RzX29wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocHJvamVjdHNfbWVudS5zdHlsZS5kaXNwbGF5ID09ICdibG9jaycpIHtcbiAgICAgICAgcHJvamVjdHNfbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0c19jb2xsYXBzZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0c19leHBhbmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHNfbWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcHJvamVjdHNfY29sbGFwc2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHByb2plY3RzX2V4cGFuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH07XG59KTtcblxuY29uc3QgYXJjaGl2ZV9vcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJjaGl2ZScpO1xuYXJjaGl2ZV9vcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHBhZ2VzLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBwYWdlcy5yZW1vdmVDaGlsZChwYWdlcy5jaGlsZHJlblswXSk7XG4gICAgfVxuICAgIHBhZ2VzLmFwcGVuZENoaWxkKGFyY2hpdmUoKSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=