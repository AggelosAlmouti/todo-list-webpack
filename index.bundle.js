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

.input_container {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    height: 0;
}

.button_container {
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

.input_field {
    width: 0rem;
    height: 0rem;
    background-color: #1a1a1a;
    color: rgb(187, 182, 182);
    border: none;
    border-radius: 5px;
    resize: none;
    transition: all 0.3s;
}

.input_field:focus {
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
    margin-top: 1em;
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

.modal_container {
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

.modal_wrapper {
    display: flex;
    flex-direction: column;
}

.close_modal {
    font-size: larger;
    align-self: flex-end;
}

.close_modal:hover {
    cursor: pointer;
}

.modal_content {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1em;
    padding: .15em;
    border-radius: 10px;
}

.modal_content:hover,
.modal_content:focus {
    background-color: #1a1a1a;
    cursor: pointer;
}

.modal_info {
    color: white;
    opacity: .5;
}

.modal_container::backdrop {
    background-color: black;
    opacity: .25;
}

.index_projects_modal_wrapper {
    display: flex;
}

.index_projects_modal_wrapper input {
    background-color: #1a1a1a;
    border: 1px black solid;
    border-radius: 5px;
    padding: .5em;
    font-size: 1rem;
    margin-top: 1em;
    outline: none;
}

.menu_new_project {
    border-radius: .5rem;
    padding: .25em;
}

.menu_new_project:hover,
.menu_new_project:focus {
    cursor: pointer;
    background-color: #1a1a1a;
}

@media (min-width: 700px) {
    .content {
        max-width: 700px;
        margin: 0 auto;
        padding: 1em;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,qBAAqB;IACrB,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,UAAU;IACV,aAAa;AACjB;;AAEA;;IAEI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,oBAAoB;IACpB,cAAc;AAClB;;AAEA;;IAEI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,gBAAgB;AACpB;;AAEA;;IAEI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,UAAU;IACV,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,yDAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,sBAAsB;IACtB,eAAe;IACf,WAAW;AACf;;AAEA;;IAEI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,kCAAkC;IAClC,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;AACvB;;AAEA;;IAEI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,cAAc;AAClB;;AAEA;;IAEI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI;QACI,gBAAgB;QAChB,cAAc;QACd,YAAY;IAChB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    text-decoration: none;\n    font-family: Roboto, sans-serif;\n    color: #FFFDD0;\n}\n\nbody {\n    background-color: #1a1a1a;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr;\n    gap: .25em;\n    height: 100vh;\n}\n\nnav,\n.pages {\n    background-color: #282828;\n    border-radius: .5rem;\n}\n\nnav {\n    padding-right: 0;\n}\n\nnav .option {\n    display: flex;\n    align-items: center;\n    gap: .1em;\n    margin-top: 1em;\n    border-radius: .5rem;\n    padding: .25em;\n}\n\nnav .option:hover,\nnav .option:focus {\n    cursor: pointer;\n    background-color: #1a1a1a;\n}\n\nnav .option p {\n    font-size: 0rem;\n    transition: font-size 0.3s;\n}\n\nnav .projects_collapse {\n    display: none;\n}\n\nnav .projects_menu {\n    display: none;\n    margin-left: 1em;\n}\n\n.page {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.page h1 {\n    font-size: 2rem;\n    margin-top: 1em;\n    margin-left: 1em;\n}\n\n.button {\n    border-radius: 15px;\n    padding: .25em;\n    max-width: 1.5em;\n}\n\n.button:hover,\n.button:focus {\n    cursor: pointer;\n    background-color: #1a1a1a;\n}\n\n.page .add_task_btn {\n    margin: auto auto 0;\n}\n\n.page_content {\n    margin-top: 2em;\n    margin-left: 2em;\n}\n\n.input_container {\n    display: flex;\n    flex-direction: column;\n    max-width: 90%;\n    height: 0;\n}\n\n.button_container {\n    align-self: flex-end;\n    opacity: 0;\n    transition: all .3s;\n    transition-delay: .5s;\n    display: flex;\n    margin-top: .5em;\n}\n\n.datepicker_input {\n    width: 1.1em;\n    background-color: #282828;\n    border: none;\n    outline: none;\n    font-size: large;\n}\n\n.datepicker_input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background-image: url(./icons/date.svg);\n}\n\n.datepicker_input[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    cursor: pointer;\n    background-color: #1a1a1a;\n    border-radius: 15px;\n}\n\n.input_field {\n    width: 0rem;\n    height: 0rem;\n    background-color: #1a1a1a;\n    color: rgb(187, 182, 182);\n    border: none;\n    border-radius: 5px;\n    resize: none;\n    transition: all 0.3s;\n}\n\n.input_field:focus {\n    outline: none;\n}\n\n.new_todo__new_task_container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #1a1a1a;\n    border-radius: 5px;\n    width: 90%;\n    padding: .5em;\n    margin-top: 1em;\n}\n\n.new_todo__new_task_wrapper {\n    display: flex;\n    width: 100%;\n}\n\n.new_todo__task_content {\n    color: rgb(187, 182, 182);\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n    align-self: flex-start;\n    margin-top: 2px;\n    width: 100%;\n}\n\n.new_todo__task_content:hover,\n.new_todo__task_content:focus {\n    cursor: pointer;\n    opacity: .5;\n}\n\n.modal_container {\n    margin: 0 auto;\n    align-self: center;\n    outline: none;\n    border: none;\n    border-radius: 15px;\n    background-color: #282828;\n    box-shadow: 0 0 1em rgb(0 0 0/ .3);\n    padding: .5em;\n    min-width: 13em;\n}\n\n.modal_wrapper {\n    display: flex;\n    flex-direction: column;\n}\n\n.close_modal {\n    font-size: larger;\n    align-self: flex-end;\n}\n\n.close_modal:hover {\n    cursor: pointer;\n}\n\n.modal_content {\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin-bottom: 1em;\n    padding: .15em;\n    border-radius: 10px;\n}\n\n.modal_content:hover,\n.modal_content:focus {\n    background-color: #1a1a1a;\n    cursor: pointer;\n}\n\n.modal_info {\n    color: white;\n    opacity: .5;\n}\n\n.modal_container::backdrop {\n    background-color: black;\n    opacity: .25;\n}\n\n.index_projects_modal_wrapper {\n    display: flex;\n}\n\n.index_projects_modal_wrapper input {\n    background-color: #1a1a1a;\n    border: 1px black solid;\n    border-radius: 5px;\n    padding: .5em;\n    font-size: 1rem;\n    margin-top: 1em;\n    outline: none;\n}\n\n.menu_new_project {\n    border-radius: .5rem;\n    padding: .25em;\n}\n\n.menu_new_project:hover,\n.menu_new_project:focus {\n    cursor: pointer;\n    background-color: #1a1a1a;\n}\n\n@media (min-width: 700px) {\n    .content {\n        max-width: 700px;\n        margin: 0 auto;\n        padding: 1em;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _new_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new_todo */ "./src/modules/new_todo.js");


function retreive_all() {
    var tasks = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (keys[i] != 'projects') {
            tasks.push(JSON.parse(localStorage.getItem(keys[i])));
        };
    };

    return tasks;
};

function inbox() {
    const page = document.createElement('div');
    page.classList = 'page inbox';

    const title = document.createElement('h1');
    title.innerHTML = 'Inbox';
    page.appendChild(title);

    //tasks
    const content = document.createElement('div');
    content.classList = 'page_content';
    page.appendChild(content);

    //retrieve all tasks
    // localStorage.clear()
    let tasks = retreive_all();
    console.log(tasks)

    if (tasks.length !== 0) {
        for (let i = 0; i < tasks.length; i++) {
            const new_task = (0,_new_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks[i].id, tasks[i].content, tasks[i].date, tasks[i].priority, tasks[i].complete, tasks[i].project).render();
            content.appendChild(new_task);
        };
    };

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
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/delete.svg */ "./src/icons/delete.svg");
/* harmony import */ var _icons_checked_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/checked.svg */ "./src/icons/checked.svg");
/* harmony import */ var _icons_unchecked_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/unchecked.svg */ "./src/icons/unchecked.svg");





function new_todo(id, content, date, priority, complete, project) {
    return {
        id: id,
        content: content,
        date: date,
        priority: priority,
        complete: complete,
        project: project,
        render: function () {

            const new_task_container = document.createElement('div');
            new_task_container.classList = 'new_todo__new_task_container';

            const new_task_wrapper = document.createElement('div');
            new_task_wrapper.classList = 'new_todo__new_task_wrapper';
            new_task_container.appendChild(new_task_wrapper);

            const task_content = document.createElement('p');
            task_content.classList = 'new_todo__task_content';
            task_content.innerHTML = content;
            if (priority == 2) {
                task_content.style.color = '#8B0000';
            } else if (priority == 1) {
                task_content.style.color = 'orange';
            };

            const complete_btn = new Image();
            complete_btn.classList = 'button new_todo__complete_btn';
            if (!this.complete) {
                complete_btn.src = _icons_unchecked_svg__WEBPACK_IMPORTED_MODULE_2__;
            } else {
                this.complete = true;
                complete_btn.src = _icons_checked_svg__WEBPACK_IMPORTED_MODULE_1__;
                task_content.style.opacity = '.5';
            };
            complete_btn.addEventListener('click', () => {
                if (!this.complete) {
                    this.complete = true;
                    complete_btn.src = _icons_checked_svg__WEBPACK_IMPORTED_MODULE_1__;
                    task_content.style.opacity = '.5';
                } else {
                    this.complete = false;
                    complete_btn.src = _icons_unchecked_svg__WEBPACK_IMPORTED_MODULE_2__;
                    task_content.style.opacity = '1';
                };
                let task = { id: id, content: content, date: date, priority: priority, complete: this.complete };
                localStorage.setItem(id, JSON.stringify(task));
            });
            new_task_wrapper.appendChild(complete_btn);
            new_task_wrapper.appendChild(task_content);



            const delete_button = new Image();
            delete_button.src = _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
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
                modal_container.classList = 'modal_container';

                const modal_wrapper = document.createElement('div');
                modal_wrapper.classList = 'modal_wrapper';
                modal_container.appendChild(modal_wrapper);

                const close_modal = document.createElement('div');
                close_modal.classList = 'close_modal';
                close_modal.innerHTML = 'x';
                close_modal.addEventListener('click', () => {
                    modal_container.close();
                });
                modal_wrapper.appendChild(close_modal);

                const modal_content = document.createElement('p');
                modal_content.classList = 'modal_content';
                modal_content.innerHTML = content;
                modal_content.style.color = task_content.style.color;
                modal_wrapper.appendChild(modal_content);

                if (date) {
                    const modal_info = document.createElement('div');
                    modal_info.classList = 'modal_info';
                    let formatted_date = date.split('-');
                    modal_info.innerHTML = formatted_date[2] + '/' + formatted_date[1] + '/' + formatted_date[0];
                    modal_wrapper.appendChild(modal_info);
                };

                const body = document.querySelector('body');
                body.appendChild(modal_container);
                modal_container.showModal();
            });
            
            return new_task_container;
        }
    };
};

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _icons_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/add.svg */ "./src/icons/add.svg");
/* harmony import */ var _icons_tag_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/tag.svg */ "./src/icons/tag.svg");
/* harmony import */ var _icons_tag_orange_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/tag_orange.svg */ "./src/icons/tag_orange.svg");
/* harmony import */ var _icons_tag_red_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/tag_red.svg */ "./src/icons/tag_red.svg");
/* harmony import */ var _new_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new_todo */ "./src/modules/new_todo.js");








function save(id, content, date, priority, complete, project) {
    let task = { id, content, date, priority, complete, project };
    localStorage.setItem(task.id, JSON.stringify(task));
};

function retreive_all(title) {
    let tasks = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (keys[i] != 'projects') {
            let item = JSON.parse(localStorage.getItem(keys[i]));
            if (item.project == title) {
                tasks.push(JSON.parse(localStorage.getItem(keys[i])));
            };
        };
    };

    return tasks;
};

function project(project_name) {

    const page = document.createElement('div');
    page.classList = 'page project';

    const title = document.createElement('h1');
    title.innerHTML = project_name;
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
        input_container.style.height = 'fit-content';
        input_field.style.width = '100%';
        input_field.style.height = '3rem';
        input_field.style.padding = '.5rem';
        button_container.style.opacity = '1';
        input_field.focus();
    });
    page.appendChild(add_task);

    //retrieve all tasks
    let tasks = retreive_all(title.innerHTML);
    let task_id = tasks.length;
    console.log(task_id + ' project task id')

    if (tasks.length !== 0) {
        for (let i = 0; i < tasks.length; i++) {
            const new_task = (0,_new_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(tasks[i].id, tasks[i].content, tasks[i].date, tasks[i].priority, tasks[i].complete, tasks[i].project).render();
            content.appendChild(new_task);
            task_id++;
        };
    };

    //add new task
    add_btn.addEventListener('click', (e) => {
        if (input_field.value != '') {
            const new_task = (0,_new_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(task_id, input_field.value, datepicker_input.value, tag_btn.value, false, title.innerHTML).render();
            content.appendChild(new_task);
            save(task_id, input_field.value, datepicker_input.value, tag_btn.value, false, title.innerHTML);
            task_id++;

            input_field.focus();
            input_field.value = '';
        };
    });

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








function save(id, content, date, priority, complete, project) {
    let task = { id, content, date, priority, complete, project };
    localStorage.setItem(task.id, JSON.stringify(task));
};

function retreive_all(title) {
    let tasks = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (keys[i] != 'projects') {
            let item = JSON.parse(localStorage.getItem(keys[i]));
            if (item.project == title) {
                tasks.push(JSON.parse(localStorage.getItem(keys[i])));
            };
        };
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
        input_container.style.height = 'fit-content';
        input_field.style.width = '100%';
        input_field.style.height = '3rem';
        input_field.style.padding = '.5rem';
        button_container.style.opacity = '1';
        input_field.focus();
    });
    page.appendChild(add_task);

    //retrieve all tasks
    let tasks = retreive_all(title.innerHTML);
    let task_id = tasks.length;
    console.log(task_id + ' today task id')

    if (tasks.length !== 0) {
        for (let i = 0; i < tasks.length; i++) {
            const new_task = (0,_new_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(tasks[i].id, tasks[i].content, tasks[i].date, tasks[i].priority, tasks[i].complete, tasks[i].project).render();
            content.appendChild(new_task);
            task_id++;
        };
    };

    //add new task
    add_btn.addEventListener('click', (e) => {
        if (input_field.value != '') {
            const new_task = (0,_new_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(task_id, input_field.value, datepicker_input.value, tag_btn.value, false, title.innerHTML).render();
            content.appendChild(new_task);
            save(task_id, input_field.value, datepicker_input.value, tag_btn.value, false, title.innerHTML);
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
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_archive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/archive */ "./src/modules/archive.js");















function retreive_all() {
    let projects = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while (i--) {
        if (keys[i] == 'projects') {
            projects = JSON.parse(localStorage.getItem(keys[i]));
        };
    };

    return projects;
};

//icons
const option = document.querySelectorAll('.option_icon');
option[0].src = _icons_today_svg__WEBPACK_IMPORTED_MODULE_1__;
option[1].src = _icons_inbox_svg__WEBPACK_IMPORTED_MODULE_2__;
option[2].src = _icons_keyboard_svg__WEBPACK_IMPORTED_MODULE_3__;
option[3].src = _icons_archive_svg__WEBPACK_IMPORTED_MODULE_4__;

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
    };
    pages.appendChild((0,_modules_today__WEBPACK_IMPORTED_MODULE_8__["default"])());
});

const inbox_option = document.querySelector('.inbox');
inbox_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    };
    pages.appendChild((0,_modules_inbox__WEBPACK_IMPORTED_MODULE_9__["default"])());
});

//projects
const projects_expand = document.querySelector('.projects_expand');
projects_expand.src = _icons_expand_svg__WEBPACK_IMPORTED_MODULE_5__;
const projects_collapse = document.querySelector('.projects_collapse');
projects_collapse.src = _icons_collapse_svg__WEBPACK_IMPORTED_MODULE_6__;
const add_project_btn = document.querySelector('nav .add_project_btn');
add_project_btn.src = _icons_add_svg__WEBPACK_IMPORTED_MODULE_7__;

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

//retrieve all projects
let projects = retreive_all();
if (projects.length !== 0) {
    for (let i = 0; i < projects.length; i++) {
        const new_project = document.createElement('p');
        new_project.classList = 'menu_new_project';
        new_project.innerHTML = projects[i];

        new_project.addEventListener('click', () => {
            if (pages.hasChildNodes()) {
                pages.removeChild(pages.children[0]);
            };
            pages.appendChild((0,_modules_project__WEBPACK_IMPORTED_MODULE_10__["default"])(new_project.innerHTML));
        });
        projects_menu.appendChild(new_project);
    };
};

//modal for new projects
add_project_btn.addEventListener('click', () => {

    const modal_container = document.createElement('dialog');
    modal_container.classList = 'modal_container';
    const body = document.querySelector('body');
    body.appendChild(modal_container);
    modal_container.showModal();

    const modal_wrapper = document.createElement('div');
    modal_wrapper.classList = 'modal_wrapper index_projects_modal_wrapper';
    modal_container.appendChild(modal_wrapper);

    const close_modal = document.createElement('div');
    close_modal.classList = 'close_modal';
    close_modal.innerHTML = 'x';
    close_modal.addEventListener('click', () => {
        modal_container.close();
    });
    modal_wrapper.appendChild(close_modal);

    const modal_title = document.createElement('h2');
    modal_title.innerHTML = 'New Project:';
    modal_wrapper.appendChild(modal_title);

    const modal_input = document.createElement('input');
    modal_input.type = 'text';
    modal_input.maxLength = '23';
    modal_wrapper.appendChild(modal_input);

    modal_input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const new_project = document.createElement('p');
            new_project.classList = 'menu_new_project';
            new_project.innerHTML = modal_input.value;
            projects.push(new_project.innerHTML);

            localStorage.setItem('projects', JSON.stringify(projects));

            new_project.addEventListener('click', () => {
                if (pages.hasChildNodes()) {
                    pages.removeChild(pages.children[0]);
                };
                pages.appendChild((0,_modules_project__WEBPACK_IMPORTED_MODULE_10__["default"])(new_project.innerHTML));
            });
            projects_menu.appendChild(new_project);
        };
    });

});

const archive_option = document.querySelector('.archive');
archive_option.addEventListener('click', () => {
    if (pages.hasChildNodes()) {
        pages.removeChild(pages.children[0]);
    };
    pages.appendChild((0,_modules_archive__WEBPACK_IMPORTED_MODULE_11__["default"])());
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLGtCQUFrQjtBQUNqSSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFX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QUM7O0FBRUQ7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBVztBQUNqQztBQUNBLHdCQUF3QixnREFBYTtBQUNyQztBQUNBLHNCQUFzQiwyQ0FBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZEQUFPO0FBQ3JDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNkRBQU87QUFDekMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2REFBTztBQUM3QixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvbW9kdWxlcy9hcmNoaXZlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvbW9kdWxlcy9uZXdfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svLi9zcmMvbW9kdWxlcy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXdlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL2RhdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI0ZGRkREMDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjtcbiAgICBnYXA6IC4yNWVtO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbm5hdixcbi5wYWdlcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn1cblxubmF2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5uYXYgLm9wdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogLjFlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgcGFkZGluZzogLjI1ZW07XG59XG5cbm5hdiAub3B0aW9uOmhvdmVyLFxubmF2IC5vcHRpb246Zm9jdXMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xufVxuXG5uYXYgLm9wdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDByZW07XG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XG59XG5cbm5hdiAucHJvamVjdHNfY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbm5hdiAucHJvamVjdHNfbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4ucGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICBtYXgtd2lkdGg6IDEuNWVtO1xufVxuXG4uYnV0dG9uOmhvdmVyLFxuLmJ1dHRvbjpmb2N1cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG59XG5cbi5wYWdlIC5hZGRfdGFza19idG4ge1xuICAgIG1hcmdpbjogYXV0byBhdXRvIDA7XG59XG5cbi5wYWdlX2NvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xufVxuXG4uaW5wdXRfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uYnV0dG9uX2NvbnRhaW5lciB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IC41cztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IC41ZW07XG59XG5cbi5kYXRlcGlja2VyX2lucHV0IHtcbiAgICB3aWR0aDogMS4xZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uZGF0ZXBpY2tlcl9pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5kYXRlcGlja2VyX2lucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pbnB1dF9maWVsZCB7XG4gICAgd2lkdGg6IDByZW07XG4gICAgaGVpZ2h0OiAwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG4gICAgY29sb3I6IHJnYigxODcsIDE4MiwgMTgyKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmlucHV0X2ZpZWxkOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3X3RvZG9fX25ld190YXNrX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4ubmV3X3RvZG9fX25ld190YXNrX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdfdG9kb19fdGFza19jb250ZW50IHtcbiAgICBjb2xvcjogcmdiKDE4NywgMTgyLCAxODIpO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5ld190b2RvX190YXNrX2NvbnRlbnQ6aG92ZXIsXG4ubmV3X3RvZG9fX3Rhc2tfY29udGVudDpmb2N1cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IC41O1xufVxuXG4ubW9kYWxfY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiKDAgMCAwLyAuMyk7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBtaW4td2lkdGg6IDEzZW07XG59XG5cbi5tb2RhbF93cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jbG9zZV9tb2RhbCB7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5jbG9zZV9tb2RhbDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWxfY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIHBhZGRpbmc6IC4xNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tb2RhbF9jb250ZW50OmhvdmVyLFxuLm1vZGFsX2NvbnRlbnQ6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWxfaW5mbyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IC41O1xufVxuXG4ubW9kYWxfY29udGFpbmVyOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb3BhY2l0eTogLjI1O1xufVxuXG4uaW5kZXhfcHJvamVjdHNfbW9kYWxfd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmluZGV4X3Byb2plY3RzX21vZGFsX3dyYXBwZXIgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWVudV9uZXdfcHJvamVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgcGFkZGluZzogLjI1ZW07XG59XG5cbi5tZW51X25ld19wcm9qZWN0OmhvdmVyLFxuLm1lbnVfbmV3X3Byb2plY3Q6Zm9jdXMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5REFBdUM7QUFDM0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBOztJQUVJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNGRkZERDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7XFxuICAgIGdhcDogLjI1ZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdixcXG4ucGFnZXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG59XFxuXFxubmF2IHtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG59XFxuXFxubmF2IC5vcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4xZW07XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbn1cXG5cXG5uYXYgLm9wdGlvbjpob3ZlcixcXG5uYXYgLm9wdGlvbjpmb2N1cyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG59XFxuXFxubmF2IC5vcHRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMHJlbTtcXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XFxufVxcblxcbm5hdiAucHJvamVjdHNfY29sbGFwc2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5uYXYgLnByb2plY3RzX21lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG4ucGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnBhZ2UgaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBtYXgtd2lkdGg6IDEuNWVtO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyLFxcbi5idXR0b246Zm9jdXMge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxufVxcblxcbi5wYWdlIC5hZGRfdGFza19idG4ge1xcbiAgICBtYXJnaW46IGF1dG8gYXV0byAwO1xcbn1cXG5cXG4ucGFnZV9jb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcbn1cXG5cXG4uaW5wdXRfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLmJ1dHRvbl9jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjVzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbn1cXG5cXG4uZGF0ZXBpY2tlcl9pbnB1dCB7XFxuICAgIHdpZHRoOiAxLjFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uZGF0ZXBpY2tlcl9pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ljb25zL2RhdGUuc3ZnKTtcXG59XFxuXFxuLmRhdGVwaWNrZXJfaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5pbnB1dF9maWVsZCB7XFxuICAgIHdpZHRoOiAwcmVtO1xcbiAgICBoZWlnaHQ6IDByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODIsIDE4Mik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uaW5wdXRfZmllbGQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3X3RvZG9fX25ld190YXNrX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxufVxcblxcbi5uZXdfdG9kb19fbmV3X3Rhc2tfd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmV3X3RvZG9fX3Rhc2tfY29udGVudCB7XFxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODIsIDE4Mik7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmV3X3RvZG9fX3Rhc2tfY29udGVudDpob3ZlcixcXG4ubmV3X3RvZG9fX3Rhc2tfY29udGVudDpmb2N1cyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5tb2RhbF9jb250YWluZXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiKDAgMCAwLyAuMyk7XFxuICAgIHBhZGRpbmc6IC41ZW07XFxuICAgIG1pbi13aWR0aDogMTNlbTtcXG59XFxuXFxuLm1vZGFsX3dyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2xvc2VfbW9kYWwge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5jbG9zZV9tb2RhbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsX2NvbnRlbnQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgcGFkZGluZzogLjE1ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tb2RhbF9jb250ZW50OmhvdmVyLFxcbi5tb2RhbF9jb250ZW50OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWxfaW5mbyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3BhY2l0eTogLjU7XFxufVxcblxcbi5tb2RhbF9jb250YWluZXI6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IC4yNTtcXG59XFxuXFxuLmluZGV4X3Byb2plY3RzX21vZGFsX3dyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaW5kZXhfcHJvamVjdHNfbW9kYWxfd3JhcHBlciBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubWVudV9uZXdfcHJvamVjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG59XFxuXFxuLm1lbnVfbmV3X3Byb2plY3Q6aG92ZXIsXFxuLm1lbnVfbmV3X3Byb2plY3Q6Zm9jdXMge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICAuY29udGVudCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcmNoaXZlKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlLmNsYXNzTGlzdCA9ICdwYWdlJztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnQXJjaGl2ZSc7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcmV0dXJuIHBhZ2U7XG59OyIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gJy4vbmV3X3RvZG8nO1xuXG5mdW5jdGlvbiByZXRyZWl2ZV9hbGwoKSB7XG4gICAgdmFyIHRhc2tzID0gW10sXG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLFxuICAgICAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAoa2V5c1tpXSAhPSAncHJvamVjdHMnKSB7XG4gICAgICAgICAgICB0YXNrcy5wdXNoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5c1tpXSkpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRhc2tzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5ib3goKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2UuY2xhc3NMaXN0ID0gJ3BhZ2UgaW5ib3gnO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdJbmJveCc7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvL3Rhc2tzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0ID0gJ3BhZ2VfY29udGVudCc7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIC8vcmV0cmlldmUgYWxsIHRhc2tzXG4gICAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICBsZXQgdGFza3MgPSByZXRyZWl2ZV9hbGwoKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrcylcblxuICAgIGlmICh0YXNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3X3Rhc2sgPSBjcmVhdGVUYXNrKHRhc2tzW2ldLmlkLCB0YXNrc1tpXS5jb250ZW50LCB0YXNrc1tpXS5kYXRlLCB0YXNrc1tpXS5wcmlvcml0eSwgdGFza3NbaV0uY29tcGxldGUsIHRhc2tzW2ldLnByb2plY3QpLnJlbmRlcigpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdfdGFzayk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBwYWdlO1xufTsiLCJpbXBvcnQgZGVsZXRlX2ljb24gZnJvbSAnLi4vaWNvbnMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgY2hlY2tlZF9pY29uIGZyb20gJy4uL2ljb25zL2NoZWNrZWQuc3ZnJztcbmltcG9ydCB1bmNoZWNrZWRfaWNvbiBmcm9tICcuLi9pY29ucy91bmNoZWNrZWQuc3ZnJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdfdG9kbyhpZCwgY29udGVudCwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlLCBwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSxcbiAgICAgICAgcHJvamVjdDogcHJvamVjdCxcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld190YXNrX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3X3Rhc2tfY29udGFpbmVyLmNsYXNzTGlzdCA9ICduZXdfdG9kb19fbmV3X3Rhc2tfY29udGFpbmVyJztcblxuICAgICAgICAgICAgY29uc3QgbmV3X3Rhc2tfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3X3Rhc2tfd3JhcHBlci5jbGFzc0xpc3QgPSAnbmV3X3RvZG9fX25ld190YXNrX3dyYXBwZXInO1xuICAgICAgICAgICAgbmV3X3Rhc2tfY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld190YXNrX3dyYXBwZXIpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0YXNrX2NvbnRlbnQuY2xhc3NMaXN0ID0gJ25ld190b2RvX190YXNrX2NvbnRlbnQnO1xuICAgICAgICAgICAgdGFza19jb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHkgPT0gMikge1xuICAgICAgICAgICAgICAgIHRhc2tfY29udGVudC5zdHlsZS5jb2xvciA9ICcjOEIwMDAwJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRhc2tfY29udGVudC5zdHlsZS5jb2xvciA9ICdvcmFuZ2UnO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVfYnRuID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjb21wbGV0ZV9idG4uY2xhc3NMaXN0ID0gJ2J1dHRvbiBuZXdfdG9kb19fY29tcGxldGVfYnRuJztcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlX2J0bi5zcmMgPSB1bmNoZWNrZWRfaWNvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcGxldGVfYnRuLnNyYyA9IGNoZWNrZWRfaWNvbjtcbiAgICAgICAgICAgICAgICB0YXNrX2NvbnRlbnQuc3R5bGUub3BhY2l0eSA9ICcuNSc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29tcGxldGVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVfYnRuLnNyYyA9IGNoZWNrZWRfaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgdGFza19jb250ZW50LnN0eWxlLm9wYWNpdHkgPSAnLjUnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVfYnRuLnNyYyA9IHVuY2hlY2tlZF9pY29uO1xuICAgICAgICAgICAgICAgICAgICB0YXNrX2NvbnRlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0geyBpZDogaWQsIGNvbnRlbnQ6IGNvbnRlbnQsIGRhdGU6IGRhdGUsIHByaW9yaXR5OiBwcmlvcml0eSwgY29tcGxldGU6IHRoaXMuY29tcGxldGUgfTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdfdGFza193cmFwcGVyLmFwcGVuZENoaWxkKGNvbXBsZXRlX2J0bik7XG4gICAgICAgICAgICBuZXdfdGFza193cmFwcGVyLmFwcGVuZENoaWxkKHRhc2tfY29udGVudCk7XG5cblxuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVfYnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBkZWxldGVfYnV0dG9uLnNyYyA9IGRlbGV0ZV9pY29uO1xuICAgICAgICAgICAgZGVsZXRlX2J1dHRvbi5jbGFzc0xpc3QgPSAnYnV0dG9uIG5ld190b2RvX19kZWxldGVfdGFza19idG4nO1xuICAgICAgICAgICAgZGVsZXRlX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdfdGFza19jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgbmV3X3Rhc2tfY29udGFpbmVyLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3X3Rhc2tfY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZV9idXR0b24pO1xuXG4gICAgICAgICAgICAvL21vZGFsXG4gICAgICAgICAgICB0YXNrX2NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbW9kYWxfY29udGFpbmVyLmNsYXNzTGlzdCA9ICdtb2RhbF9jb250YWluZXInO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG1vZGFsX3dyYXBwZXIuY2xhc3NMaXN0ID0gJ21vZGFsX3dyYXBwZXInO1xuICAgICAgICAgICAgICAgIG1vZGFsX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbF93cmFwcGVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlX21vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2xvc2VfbW9kYWwuY2xhc3NMaXN0ID0gJ2Nsb3NlX21vZGFsJztcbiAgICAgICAgICAgICAgICBjbG9zZV9tb2RhbC5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgICAgICAgICAgY2xvc2VfbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsX2NvbnRhaW5lci5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1vZGFsX3dyYXBwZXIuYXBwZW5kQ2hpbGQoY2xvc2VfbW9kYWwpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBtb2RhbF9jb250ZW50LmNsYXNzTGlzdCA9ICdtb2RhbF9jb250ZW50JztcbiAgICAgICAgICAgICAgICBtb2RhbF9jb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgbW9kYWxfY29udGVudC5zdHlsZS5jb2xvciA9IHRhc2tfY29udGVudC5zdHlsZS5jb2xvcjtcbiAgICAgICAgICAgICAgICBtb2RhbF93cmFwcGVyLmFwcGVuZENoaWxkKG1vZGFsX2NvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWxfaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbF9pbmZvLmNsYXNzTGlzdCA9ICdtb2RhbF9pbmZvJztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZF9kYXRlID0gZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbF9pbmZvLmlubmVySFRNTCA9IGZvcm1hdHRlZF9kYXRlWzJdICsgJy8nICsgZm9ybWF0dGVkX2RhdGVbMV0gKyAnLycgKyBmb3JtYXR0ZWRfZGF0ZVswXTtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxfd3JhcHBlci5hcHBlbmRDaGlsZChtb2RhbF9pbmZvKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsX2NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgbW9kYWxfY29udGFpbmVyLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBuZXdfdGFza19jb250YWluZXI7XG4gICAgICAgIH1cbiAgICB9O1xufTsiLCJpbXBvcnQgYWRkX2ljb24gZnJvbSAnLi4vaWNvbnMvYWRkLnN2Zyc7XG5pbXBvcnQgdGFnX2ljb24gZnJvbSAnLi4vaWNvbnMvdGFnLnN2Zyc7XG5pbXBvcnQgdGFnX2ljb25fb3JhbmdlIGZyb20gJy4uL2ljb25zL3RhZ19vcmFuZ2Uuc3ZnJztcbmltcG9ydCB0YWdfaWNvbl9yZWQgZnJvbSAnLi4vaWNvbnMvdGFnX3JlZC5zdmcnO1xuXG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL25ld190b2RvJztcblxuXG5mdW5jdGlvbiBzYXZlKGlkLCBjb250ZW50LCBkYXRlLCBwcmlvcml0eSwgY29tcGxldGUsIHByb2plY3QpIHtcbiAgICBsZXQgdGFzayA9IHsgaWQsIGNvbnRlbnQsIGRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSwgcHJvamVjdCB9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2suaWQsIEpTT04uc3RyaW5naWZ5KHRhc2spKTtcbn07XG5cbmZ1bmN0aW9uIHJldHJlaXZlX2FsbCh0aXRsZSkge1xuICAgIGxldCB0YXNrcyA9IFtdLFxuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSxcbiAgICAgICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKGtleXNbaV0gIT0gJ3Byb2plY3RzJykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleXNbaV0pKTtcbiAgICAgICAgICAgIGlmIChpdGVtLnByb2plY3QgPT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5c1tpXSkpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiB0YXNrcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3QocHJvamVjdF9uYW1lKSB7XG5cbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZS5jbGFzc0xpc3QgPSAncGFnZSBwcm9qZWN0JztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0X25hbWU7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvL3Rhc2tzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0ID0gJ3BhZ2VfY29udGVudCc7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIC8vaW5wdXQgZmllbGQgYW5kIGJ1dHRvbnNcbiAgICBjb25zdCBpbnB1dF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dF9jb250YWluZXIuY2xhc3NMaXN0ID0gJ2lucHV0X2NvbnRhaW5lcic7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dF9jb250YWluZXIpO1xuXG4gICAgY29uc3QgaW5wdXRfZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGlucHV0X2ZpZWxkLmNsYXNzTGlzdCA9ICdpbnB1dF9maWVsZCc7XG4gICAgaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0X2ZpZWxkKTtcblxuICAgIGNvbnN0IGJ1dHRvbl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25fY29udGFpbmVyLmNsYXNzTGlzdCA9ICdidXR0b25fY29udGFpbmVyJztcbiAgICBpbnB1dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uX2NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhZGRfYnRuID0gbmV3IEltYWdlKCk7XG4gICAgYWRkX2J0bi5zcmMgPSBhZGRfaWNvbjtcbiAgICBhZGRfYnRuLmNsYXNzTGlzdCA9ICdidXR0b24gZGF0ZV9idG4nO1xuICAgIGJ1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkX2J0bik7XG5cbiAgICAvL2RhdGVwaWNrZXJcbiAgICBjb25zdCBkYXRlcGlja2VyX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlcGlja2VyX2lucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZXBpY2tlcl9pbnB1dC5jbGFzc0xpc3QgPSAnZGF0ZXBpY2tlcl9pbnB1dCc7XG4gICAgYnV0dG9uX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlcGlja2VyX2lucHV0KTtcblxuICAgIC8vcHJpb3JpdHkgYnV0dG9uXG4gICAgY29uc3QgdGFnX2J0biA9IG5ldyBJbWFnZSgpO1xuICAgIHRhZ19idG4uc3JjID0gdGFnX2ljb247XG4gICAgdGFnX2J0bi5jbGFzc0xpc3QgPSAnYnV0dG9uIHRhZ19idG4nO1xuICAgIHRhZ19idG4udmFsdWUgPSAwO1xuICAgIHRhZ19idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0YWdfYnRuLnZhbHVlID09IDApIHtcbiAgICAgICAgICAgIHRhZ19idG4udmFsdWUgPSAxO1xuICAgICAgICAgICAgdGFnX2J0bi5zcmMgPSB0YWdfaWNvbl9vcmFuZ2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnX2J0bi52YWx1ZSA9PSAxKSB7XG4gICAgICAgICAgICB0YWdfYnRuLnZhbHVlID0gMlxuICAgICAgICAgICAgdGFnX2J0bi5zcmMgPSB0YWdfaWNvbl9yZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnX2J0bi52YWx1ZSA9PSAyKSB7XG4gICAgICAgICAgICB0YWdfYnRuLnZhbHVlID0gMFxuICAgICAgICAgICAgdGFnX2J0bi5zcmMgPSB0YWdfaWNvbjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGJ1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGFnX2J0bik7XG5cbiAgICAvL2FkZCB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGFkZF90YXNrID0gbmV3IEltYWdlKCk7XG4gICAgYWRkX3Rhc2suc3JjID0gYWRkX2ljb247XG4gICAgYWRkX3Rhc2suY2xhc3NMaXN0ID0gJ2J1dHRvbiBhZGRfdGFza19idG4nO1xuXG4gICAgYWRkX3Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlucHV0X2NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnZml0LWNvbnRlbnQnO1xuICAgICAgICBpbnB1dF9maWVsZC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgaW5wdXRfZmllbGQuc3R5bGUuaGVpZ2h0ID0gJzNyZW0nO1xuICAgICAgICBpbnB1dF9maWVsZC5zdHlsZS5wYWRkaW5nID0gJy41cmVtJztcbiAgICAgICAgYnV0dG9uX2NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBpbnB1dF9maWVsZC5mb2N1cygpO1xuICAgIH0pO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoYWRkX3Rhc2spO1xuXG4gICAgLy9yZXRyaWV2ZSBhbGwgdGFza3NcbiAgICBsZXQgdGFza3MgPSByZXRyZWl2ZV9hbGwodGl0bGUuaW5uZXJIVE1MKTtcbiAgICBsZXQgdGFza19pZCA9IHRhc2tzLmxlbmd0aDtcbiAgICBjb25zb2xlLmxvZyh0YXNrX2lkICsgJyBwcm9qZWN0IHRhc2sgaWQnKVxuXG4gICAgaWYgKHRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdfdGFzayA9IGNyZWF0ZVRhc2sodGFza3NbaV0uaWQsIHRhc2tzW2ldLmNvbnRlbnQsIHRhc2tzW2ldLmRhdGUsIHRhc2tzW2ldLnByaW9yaXR5LCB0YXNrc1tpXS5jb21wbGV0ZSwgdGFza3NbaV0ucHJvamVjdCkucmVuZGVyKCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld190YXNrKTtcbiAgICAgICAgICAgIHRhc2tfaWQrKztcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy9hZGQgbmV3IHRhc2tcbiAgICBhZGRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGlucHV0X2ZpZWxkLnZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdfdGFzayA9IGNyZWF0ZVRhc2sodGFza19pZCwgaW5wdXRfZmllbGQudmFsdWUsIGRhdGVwaWNrZXJfaW5wdXQudmFsdWUsIHRhZ19idG4udmFsdWUsIGZhbHNlLCB0aXRsZS5pbm5lckhUTUwpLnJlbmRlcigpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdfdGFzayk7XG4gICAgICAgICAgICBzYXZlKHRhc2tfaWQsIGlucHV0X2ZpZWxkLnZhbHVlLCBkYXRlcGlja2VyX2lucHV0LnZhbHVlLCB0YWdfYnRuLnZhbHVlLCBmYWxzZSwgdGl0bGUuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIHRhc2tfaWQrKztcblxuICAgICAgICAgICAgaW5wdXRfZmllbGQuZm9jdXMoKTtcbiAgICAgICAgICAgIGlucHV0X2ZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFnZTtcbn07IiwiaW1wb3J0IGFkZF9pY29uIGZyb20gJy4uL2ljb25zL2FkZC5zdmcnO1xuaW1wb3J0IHRhZ19pY29uIGZyb20gJy4uL2ljb25zL3RhZy5zdmcnO1xuaW1wb3J0IHRhZ19pY29uX29yYW5nZSBmcm9tICcuLi9pY29ucy90YWdfb3JhbmdlLnN2Zyc7XG5pbXBvcnQgdGFnX2ljb25fcmVkIGZyb20gJy4uL2ljb25zL3RhZ19yZWQuc3ZnJztcblxuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9uZXdfdG9kbyc7XG5cblxuZnVuY3Rpb24gc2F2ZShpZCwgY29udGVudCwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlLCBwcm9qZWN0KSB7XG4gICAgbGV0IHRhc2sgPSB7IGlkLCBjb250ZW50LCBkYXRlLCBwcmlvcml0eSwgY29tcGxldGUsIHByb2plY3QgfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0YXNrLmlkLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG59O1xuXG5mdW5jdGlvbiByZXRyZWl2ZV9hbGwodGl0bGUpIHtcbiAgICBsZXQgdGFza3MgPSBbXSxcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSksXG4gICAgICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGlmIChrZXlzW2ldICE9ICdwcm9qZWN0cycpIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlzW2ldKSk7XG4gICAgICAgICAgICBpZiAoaXRlbS5wcm9qZWN0ID09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdGFza3MucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleXNbaV0pKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gdGFza3M7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RheSgpIHtcblxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlLmNsYXNzTGlzdCA9ICdwYWdlIHRvZGF5JztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnVG9kYXknO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy90YXNrc1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdCA9ICdwYWdlX2NvbnRlbnQnO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICAvL2lucHV0IGZpZWxkIGFuZCBidXR0b25zXG4gICAgY29uc3QgaW5wdXRfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRfY29udGFpbmVyLmNsYXNzTGlzdCA9ICdpbnB1dF9jb250YWluZXInO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRfY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGlucHV0X2ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBpbnB1dF9maWVsZC5jbGFzc0xpc3QgPSAnaW5wdXRfZmllbGQnO1xuICAgIGlucHV0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dF9maWVsZCk7XG5cbiAgICBjb25zdCBidXR0b25fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uX2NvbnRhaW5lci5jbGFzc0xpc3QgPSAnYnV0dG9uX2NvbnRhaW5lcic7XG4gICAgaW5wdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbl9jb250YWluZXIpO1xuXG4gICAgY29uc3QgYWRkX2J0biA9IG5ldyBJbWFnZSgpO1xuICAgIGFkZF9idG4uc3JjID0gYWRkX2ljb247XG4gICAgYWRkX2J0bi5jbGFzc0xpc3QgPSAnYnV0dG9uIGRhdGVfYnRuJztcbiAgICBidXR0b25fY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZF9idG4pO1xuXG4gICAgLy9kYXRlcGlja2VyXG4gICAgY29uc3QgZGF0ZXBpY2tlcl9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZXBpY2tlcl9pbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVwaWNrZXJfaW5wdXQuY2xhc3NMaXN0ID0gJ2RhdGVwaWNrZXJfaW5wdXQnO1xuICAgIGJ1dHRvbl9jb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZXBpY2tlcl9pbnB1dCk7XG5cbiAgICAvL3ByaW9yaXR5IGJ1dHRvblxuICAgIGNvbnN0IHRhZ19idG4gPSBuZXcgSW1hZ2UoKTtcbiAgICB0YWdfYnRuLnNyYyA9IHRhZ19pY29uO1xuICAgIHRhZ19idG4uY2xhc3NMaXN0ID0gJ2J1dHRvbiB0YWdfYnRuJztcbiAgICB0YWdfYnRuLnZhbHVlID0gMDtcbiAgICB0YWdfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGFnX2J0bi52YWx1ZSA9PSAwKSB7XG4gICAgICAgICAgICB0YWdfYnRuLnZhbHVlID0gMTtcbiAgICAgICAgICAgIHRhZ19idG4uc3JjID0gdGFnX2ljb25fb3JhbmdlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZ19idG4udmFsdWUgPT0gMSkge1xuICAgICAgICAgICAgdGFnX2J0bi52YWx1ZSA9IDJcbiAgICAgICAgICAgIHRhZ19idG4uc3JjID0gdGFnX2ljb25fcmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZ19idG4udmFsdWUgPT0gMikge1xuICAgICAgICAgICAgdGFnX2J0bi52YWx1ZSA9IDBcbiAgICAgICAgICAgIHRhZ19idG4uc3JjID0gdGFnX2ljb247XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBidXR0b25fY29udGFpbmVyLmFwcGVuZENoaWxkKHRhZ19idG4pO1xuXG4gICAgLy9hZGQgdGFzayBidXR0b25cbiAgICBjb25zdCBhZGRfdGFzayA9IG5ldyBJbWFnZSgpO1xuICAgIGFkZF90YXNrLnNyYyA9IGFkZF9pY29uO1xuICAgIGFkZF90YXNrLmNsYXNzTGlzdCA9ICdidXR0b24gYWRkX3Rhc2tfYnRuJztcblxuICAgIGFkZF90YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpbnB1dF9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgaW5wdXRfZmllbGQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGlucHV0X2ZpZWxkLnN0eWxlLmhlaWdodCA9ICczcmVtJztcbiAgICAgICAgaW5wdXRfZmllbGQuc3R5bGUucGFkZGluZyA9ICcuNXJlbSc7XG4gICAgICAgIGJ1dHRvbl9jb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgaW5wdXRfZmllbGQuZm9jdXMoKTtcbiAgICB9KTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGFkZF90YXNrKTtcblxuICAgIC8vcmV0cmlldmUgYWxsIHRhc2tzXG4gICAgbGV0IHRhc2tzID0gcmV0cmVpdmVfYWxsKHRpdGxlLmlubmVySFRNTCk7XG4gICAgbGV0IHRhc2tfaWQgPSB0YXNrcy5sZW5ndGg7XG4gICAgY29uc29sZS5sb2codGFza19pZCArICcgdG9kYXkgdGFzayBpZCcpXG5cbiAgICBpZiAodGFza3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld190YXNrID0gY3JlYXRlVGFzayh0YXNrc1tpXS5pZCwgdGFza3NbaV0uY29udGVudCwgdGFza3NbaV0uZGF0ZSwgdGFza3NbaV0ucHJpb3JpdHksIHRhc2tzW2ldLmNvbXBsZXRlLCB0YXNrc1tpXS5wcm9qZWN0KS5yZW5kZXIoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3X3Rhc2spO1xuICAgICAgICAgICAgdGFza19pZCsrO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvL2FkZCBuZXcgdGFza1xuICAgIGFkZF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoaW5wdXRfZmllbGQudmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld190YXNrID0gY3JlYXRlVGFzayh0YXNrX2lkLCBpbnB1dF9maWVsZC52YWx1ZSwgZGF0ZXBpY2tlcl9pbnB1dC52YWx1ZSwgdGFnX2J0bi52YWx1ZSwgZmFsc2UsIHRpdGxlLmlubmVySFRNTCkucmVuZGVyKCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5ld190YXNrKTtcbiAgICAgICAgICAgIHNhdmUodGFza19pZCwgaW5wdXRfZmllbGQudmFsdWUsIGRhdGVwaWNrZXJfaW5wdXQudmFsdWUsIHRhZ19idG4udmFsdWUsIGZhbHNlLCB0aXRsZS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgdGFza19pZCsrO1xuXG4gICAgICAgICAgICBpbnB1dF9maWVsZC5mb2N1cygpO1xuICAgICAgICAgICAgaW5wdXRfZmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYWdlO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHRvZGF5X2ljb24gZnJvbSAnLi9pY29ucy90b2RheS5zdmcnO1xuaW1wb3J0IGluYm94X2ljb24gZnJvbSAnLi9pY29ucy9pbmJveC5zdmcnO1xuaW1wb3J0IHByb2plY3RzX2ljb24gZnJvbSAnLi9pY29ucy9rZXlib2FyZC5zdmcnO1xuaW1wb3J0IGFyY2hpdmVfaWNvbiBmcm9tICcuL2ljb25zL2FyY2hpdmUuc3ZnJztcbmltcG9ydCBleHBhbmRfaWNvbiBmcm9tICcuL2ljb25zL2V4cGFuZC5zdmcnO1xuaW1wb3J0IGNvbGxhcHNlX2ljb24gZnJvbSAnLi9pY29ucy9jb2xsYXBzZS5zdmcnO1xuaW1wb3J0IGFkZF9pY29uIGZyb20gJy4vaWNvbnMvYWRkLnN2Zyc7XG5cbmltcG9ydCB0b2RheSBmcm9tICcuL21vZHVsZXMvdG9kYXknO1xuaW1wb3J0IGluYm94IGZyb20gJy4vbW9kdWxlcy9pbmJveCc7XG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdCc7XG5pbXBvcnQgYXJjaGl2ZSBmcm9tICcuL21vZHVsZXMvYXJjaGl2ZSc7XG5cbmZ1bmN0aW9uIHJldHJlaXZlX2FsbCgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXSxcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSksXG4gICAgICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGlmIChrZXlzW2ldID09ICdwcm9qZWN0cycpIHtcbiAgICAgICAgICAgIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlzW2ldKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBwcm9qZWN0cztcbn07XG5cbi8vaWNvbnNcbmNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb25faWNvbicpO1xub3B0aW9uWzBdLnNyYyA9IHRvZGF5X2ljb247XG5vcHRpb25bMV0uc3JjID0gaW5ib3hfaWNvbjtcbm9wdGlvblsyXS5zcmMgPSBwcm9qZWN0c19pY29uO1xub3B0aW9uWzNdLnNyYyA9IGFyY2hpdmVfaWNvbjtcblxuLy9tZWRpYSBxdWVyeSBmb3Igc2NyZWVuIHdpZHRoXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VzJyk7XG5jb25zdCBvcHRpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IC5vcHRpb24gcCcpO1xuXG4vL2NoZWNrIGlmIHBhZ2UgbG9hZHMgb24gZGVza3RvcCBmaXJzdFxuaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPj0gNzY4KSB7XG4gICAgb3B0aW9uTmFtZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBlLnN0eWxlLmZvbnRTaXplID0gJzFyZW0nO1xuICAgIH0pO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSA3NjgpIHtcbiAgICAgICAgb3B0aW9uTmFtZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS5mb250U2l6ZSA9ICcxcmVtJztcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCA3NjgpIHtcbiAgICAgICAgICAgIG9wdGlvbk5hbWUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLmZvbnRTaXplID0gJzByZW0nO1xuICAgICAgICAgICAgICAgIHByb2plY3RzX21lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0c19jb2xsYXBzZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHByb2plY3RzX2V4cGFuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG59KTtcblxubmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBvcHRpb25OYW1lLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLnN0eWxlLmZvbnRTaXplID0gJzFyZW0nO1xuICAgICAgICB9KTtcbiAgICB9O1xufSk7XG5cbnBhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgICAgICBvcHRpb25OYW1lLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLnN0eWxlLmZvbnRTaXplID0gJzByZW0nO1xuICAgICAgICAgICAgcHJvamVjdHNfbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgcHJvamVjdHNfY29sbGFwc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHByb2plY3RzX2V4cGFuZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8vdGFiIGJyb3dzaW5nXG5wYWdlcy5hcHBlbmRDaGlsZCh0b2RheSgpKTtcblxuY29uc3QgdG9kYXlfb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG50b2RheV9vcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHBhZ2VzLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBwYWdlcy5yZW1vdmVDaGlsZChwYWdlcy5jaGlsZHJlblswXSk7XG4gICAgfTtcbiAgICBwYWdlcy5hcHBlbmRDaGlsZCh0b2RheSgpKTtcbn0pO1xuXG5jb25zdCBpbmJveF9vcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcbmluYm94X29wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocGFnZXMuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIHBhZ2VzLnJlbW92ZUNoaWxkKHBhZ2VzLmNoaWxkcmVuWzBdKTtcbiAgICB9O1xuICAgIHBhZ2VzLmFwcGVuZENoaWxkKGluYm94KCkpO1xufSk7XG5cbi8vcHJvamVjdHNcbmNvbnN0IHByb2plY3RzX2V4cGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19leHBhbmQnKTtcbnByb2plY3RzX2V4cGFuZC5zcmMgPSBleHBhbmRfaWNvbjtcbmNvbnN0IHByb2plY3RzX2NvbGxhcHNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX2NvbGxhcHNlJyk7XG5wcm9qZWN0c19jb2xsYXBzZS5zcmMgPSBjb2xsYXBzZV9pY29uO1xuY29uc3QgYWRkX3Byb2plY3RfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2IC5hZGRfcHJvamVjdF9idG4nKTtcbmFkZF9wcm9qZWN0X2J0bi5zcmMgPSBhZGRfaWNvbjtcblxuY29uc3QgcHJvamVjdHNfb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5jb25zdCBwcm9qZWN0c19tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX21lbnUnKTtcbnByb2plY3RzX29wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocHJvamVjdHNfbWVudS5zdHlsZS5kaXNwbGF5ID09ICdibG9jaycpIHtcbiAgICAgICAgcHJvamVjdHNfbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0c19jb2xsYXBzZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwcm9qZWN0c19leHBhbmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHNfbWVudS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgcHJvamVjdHNfY29sbGFwc2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHByb2plY3RzX2V4cGFuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH07XG59KTtcblxuLy9yZXRyaWV2ZSBhbGwgcHJvamVjdHNcbmxldCBwcm9qZWN0cyA9IHJldHJlaXZlX2FsbCgpO1xuaWYgKHByb2plY3RzLmxlbmd0aCAhPT0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3X3Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5ld19wcm9qZWN0LmNsYXNzTGlzdCA9ICdtZW51X25ld19wcm9qZWN0JztcbiAgICAgICAgbmV3X3Byb2plY3QuaW5uZXJIVE1MID0gcHJvamVjdHNbaV07XG5cbiAgICAgICAgbmV3X3Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZXMuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAgICAgcGFnZXMucmVtb3ZlQ2hpbGQocGFnZXMuY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBhZ2VzLmFwcGVuZENoaWxkKHByb2plY3QobmV3X3Byb2plY3QuaW5uZXJIVE1MKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0c19tZW51LmFwcGVuZENoaWxkKG5ld19wcm9qZWN0KTtcbiAgICB9O1xufTtcblxuLy9tb2RhbCBmb3IgbmV3IHByb2plY3RzXG5hZGRfcHJvamVjdF9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICBjb25zdCBtb2RhbF9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICBtb2RhbF9jb250YWluZXIuY2xhc3NMaXN0ID0gJ21vZGFsX2NvbnRhaW5lcic7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1vZGFsX2NvbnRhaW5lcik7XG4gICAgbW9kYWxfY29udGFpbmVyLnNob3dNb2RhbCgpO1xuXG4gICAgY29uc3QgbW9kYWxfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsX3dyYXBwZXIuY2xhc3NMaXN0ID0gJ21vZGFsX3dyYXBwZXIgaW5kZXhfcHJvamVjdHNfbW9kYWxfd3JhcHBlcic7XG4gICAgbW9kYWxfY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsX3dyYXBwZXIpO1xuXG4gICAgY29uc3QgY2xvc2VfbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbG9zZV9tb2RhbC5jbGFzc0xpc3QgPSAnY2xvc2VfbW9kYWwnO1xuICAgIGNsb3NlX21vZGFsLmlubmVySFRNTCA9ICd4JztcbiAgICBjbG9zZV9tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWxfY29udGFpbmVyLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgbW9kYWxfd3JhcHBlci5hcHBlbmRDaGlsZChjbG9zZV9tb2RhbCk7XG5cbiAgICBjb25zdCBtb2RhbF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbW9kYWxfdGl0bGUuaW5uZXJIVE1MID0gJ05ldyBQcm9qZWN0Oic7XG4gICAgbW9kYWxfd3JhcHBlci5hcHBlbmRDaGlsZChtb2RhbF90aXRsZSk7XG5cbiAgICBjb25zdCBtb2RhbF9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbW9kYWxfaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBtb2RhbF9pbnB1dC5tYXhMZW5ndGggPSAnMjMnO1xuICAgIG1vZGFsX3dyYXBwZXIuYXBwZW5kQ2hpbGQobW9kYWxfaW5wdXQpO1xuXG4gICAgbW9kYWxfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdfcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG5ld19wcm9qZWN0LmNsYXNzTGlzdCA9ICdtZW51X25ld19wcm9qZWN0JztcbiAgICAgICAgICAgIG5ld19wcm9qZWN0LmlubmVySFRNTCA9IG1vZGFsX2lucHV0LnZhbHVlO1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChuZXdfcHJvamVjdC5pbm5lckhUTUwpO1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gICAgICAgICAgICBuZXdfcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFnZXMuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLnJlbW92ZUNoaWxkKHBhZ2VzLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHBhZ2VzLmFwcGVuZENoaWxkKHByb2plY3QobmV3X3Byb2plY3QuaW5uZXJIVE1MKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3RzX21lbnUuYXBwZW5kQ2hpbGQobmV3X3Byb2plY3QpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG59KTtcblxuY29uc3QgYXJjaGl2ZV9vcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJjaGl2ZScpO1xuYXJjaGl2ZV9vcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHBhZ2VzLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBwYWdlcy5yZW1vdmVDaGlsZChwYWdlcy5jaGlsZHJlblswXSk7XG4gICAgfTtcbiAgICBwYWdlcy5hcHBlbmRDaGlsZChhcmNoaXZlKCkpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9