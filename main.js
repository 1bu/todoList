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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/font/Inter_28pt-Regular.ttf */ "./src/asset/font/Inter_28pt-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --main-bg-color: #1A1C2B;
    --text-light: #E6EDF3;
    --border-light: #30363D;
    --high-priority: #C43302;
    --medium-priority: #EDAA25;
    --low-priority: #1E8252;
    --cancel-btn: #8A8886;
    --create-btn: #FF5733;
    /*
    --delete: #BF1120;
    --edit: #295073;
    */
}

@font-face {
    font-family: 'Inter';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body{
    font-family: 'Inter';
    font-size: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    height: 100vh;
    width: 100%;
}

/*Container*/
.container{
    display: grid;
    grid-template-columns: .7fr 3.3fr;
    grid-template-rows: 1fr;
    width: auto;
    height: 100%;
    background-color: var(--main-bg-color);
    color: var(--text-light);
}

/*Project List*/
.project-container{
    border-right: 2px solid var(--border-light);
    height: 100%;
}

.project-container button img{
    width: 15px;
    height: 15px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.project-container button img:hover{
    transform: scale(1.2);
}

.project-list{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid var(--border-light);
}

.task{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 1rem;
    padding: .5px;
    margin: 1rem auto;
}

button{
    border: none;
    background-color: transparent;
}

button img{
    width: 15px;
    height: 15px;
    cursor: pointer;
}

.add-icon{
    filter: invert(86%) sepia(13%) saturate(241%) hue-rotate(187deg) brightness(110%) contrast(91%);
}

.icon-delete{
    filter: invert(14%) sepia(57%) saturate(5345%) hue-rotate(345deg) brightness(98%) contrast(102%);
}

.list-edit{
    filter: invert(26%) sepia(42%) saturate(785%) hue-rotate(167deg) brightness(89%) contrast(86%);
}

.edit-project-input{
    padding: 8px;
    border-radius: 5px;
    outline: 1px solid var(--border-light);
    background-color: var(--main-bg-color);
    color: var(--text-light);
    padding: 5px;
}

/*Todo List*/
.todo-header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 2px solid var(--border-light);
}

.todo-elements{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-gap: 10px;
    margin: .5rem;
}

.todo{
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    justify-items: center;
    align-items: center;
    width: 80%;
    border: 2px solid var(--border-light);
}

.todo-text{
    width: 100%;
}

.todo-text-header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
}

/*Dialog*/
.todo-dialog, .project-dialog{
    opacity: 0;
    transform: translateY(-10px);
    animation: fadeIn 0.3s ease-in forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

dialog[open]{
    background: var(--main-bg-color);
    border-color: var(--border-light);
    color: white;
    border-radius: 10px;
    padding: 20px;
    border: none;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    display: grid;
    align-content: center;
}

.todo-dialog[open]{
    width: 30%;
    height: 60%;
}
    
.todo-dialog::backdrop {
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.5);
}

.form-container{
    text-align: center;
}

.row{
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 5px auto;
}

.row input, .row select, .row textarea{
    padding: 8px;
    border-radius: 5px;
    outline: 1px solid var(--border-light);
    background-color: var(--main-bg-color);
    color: var(--text-light);
    padding: 5px;
}

.row label{
    text-align: left;
    padding-bottom: 5px;
}

.btn-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 8px;
    gap: .75rem;
}

.btn-container button{
    padding: 5px;
    border-radius: 5px;
    font-size: 15px;
    border: none;
}

.close-btn{
    background-color: var(--cancel-btn);
    color: var(--text-light);
}

.create-btn{
    color: var(--text-light);
    background-color: var(--create-btn);
}

.project-dialog[open]{
    width: 30%;
    height: 40%;
}

input[type=checkbox]{
    background-color: transparent;
    /*appearance: none;*/
    margin: 0;
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-light);
    border-radius: 100%;
    cursor: pointer;
}

input[type="checkbox"]:checked{
    background-color: #1A1C2B;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\r\n    --main-bg-color: #1A1C2B;\r\n    --text-light: #E6EDF3;\r\n    --border-light: #30363D;\r\n    --high-priority: #C43302;\r\n    --medium-priority: #EDAA25;\r\n    --low-priority: #1E8252;\r\n    --cancel-btn: #8A8886;\r\n    --create-btn: #FF5733;\r\n    /*\r\n    --delete: #BF1120;\r\n    --edit: #295073;\r\n    */\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter';\r\n    src: url('./asset/font/Inter_28pt-Regular.ttf');\r\n}\r\n\r\nbody{\r\n    font-family: 'Inter';\r\n    font-size: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\n\r\n/*Container*/\r\n.container{\r\n    display: grid;\r\n    grid-template-columns: .7fr 3.3fr;\r\n    grid-template-rows: 1fr;\r\n    width: auto;\r\n    height: 100%;\r\n    background-color: var(--main-bg-color);\r\n    color: var(--text-light);\r\n}\r\n\r\n/*Project List*/\r\n.project-container{\r\n    border-right: 2px solid var(--border-light);\r\n    height: 100%;\r\n}\r\n\r\n.project-container button img{\r\n    width: 15px;\r\n    height: 15px;\r\n    cursor: pointer;\r\n    transition: transform 0.2s ease;\r\n}\r\n\r\n.project-container button img:hover{\r\n    transform: scale(1.2);\r\n}\r\n\r\n.project-list{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    border-bottom: 2px solid var(--border-light);\r\n}\r\n\r\n.task{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    height: 1rem;\r\n    padding: .5px;\r\n    margin: 1rem auto;\r\n}\r\n\r\nbutton{\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\nbutton img{\r\n    width: 15px;\r\n    height: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-icon{\r\n    filter: invert(86%) sepia(13%) saturate(241%) hue-rotate(187deg) brightness(110%) contrast(91%);\r\n}\r\n\r\n.icon-delete{\r\n    filter: invert(14%) sepia(57%) saturate(5345%) hue-rotate(345deg) brightness(98%) contrast(102%);\r\n}\r\n\r\n.list-edit{\r\n    filter: invert(26%) sepia(42%) saturate(785%) hue-rotate(167deg) brightness(89%) contrast(86%);\r\n}\r\n\r\n.edit-project-input{\r\n    padding: 8px;\r\n    border-radius: 5px;\r\n    outline: 1px solid var(--border-light);\r\n    background-color: var(--main-bg-color);\r\n    color: var(--text-light);\r\n    padding: 5px;\r\n}\r\n\r\n/*Todo List*/\r\n.todo-header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    border-bottom: 2px solid var(--border-light);\r\n}\r\n\r\n.todo-elements{\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: center;\r\n    grid-gap: 10px;\r\n    margin: .5rem;\r\n}\r\n\r\n.todo{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 2fr;\r\n    justify-items: center;\r\n    align-items: center;\r\n    width: 80%;\r\n    border: 2px solid var(--border-light);\r\n}\r\n\r\n.todo-text{\r\n    width: 100%;\r\n}\r\n\r\n.todo-text-header{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n/*Dialog*/\r\n.todo-dialog, .project-dialog{\r\n    opacity: 0;\r\n    transform: translateY(-10px);\r\n    animation: fadeIn 0.3s ease-in forwards;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(-10px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\ndialog[open]{\r\n    background: var(--main-bg-color);\r\n    border-color: var(--border-light);\r\n    color: white;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    border: none;\r\n    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);\r\n    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\r\n    display: grid;\r\n    align-content: center;\r\n}\r\n\r\n.todo-dialog[open]{\r\n    width: 30%;\r\n    height: 60%;\r\n}\r\n    \r\n.todo-dialog::backdrop {\r\n    backdrop-filter: blur(5px);\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.form-container{\r\n    text-align: center;\r\n}\r\n\r\n.row{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 5px;\r\n    margin: 5px auto;\r\n}\r\n\r\n.row input, .row select, .row textarea{\r\n    padding: 8px;\r\n    border-radius: 5px;\r\n    outline: 1px solid var(--border-light);\r\n    background-color: var(--main-bg-color);\r\n    color: var(--text-light);\r\n    padding: 5px;\r\n}\r\n\r\n.row label{\r\n    text-align: left;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.btn-container{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 8px;\r\n    gap: .75rem;\r\n}\r\n\r\n.btn-container button{\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    font-size: 15px;\r\n    border: none;\r\n}\r\n\r\n.close-btn{\r\n    background-color: var(--cancel-btn);\r\n    color: var(--text-light);\r\n}\r\n\r\n.create-btn{\r\n    color: var(--text-light);\r\n    background-color: var(--create-btn);\r\n}\r\n\r\n.project-dialog[open]{\r\n    width: 30%;\r\n    height: 40%;\r\n}\r\n\r\ninput[type=checkbox]{\r\n    background-color: transparent;\r\n    /*appearance: none;*/\r\n    margin: 0;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 2px solid var(--border-light);\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked{\r\n    background-color: #1A1C2B;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/dialogManager.js":
/*!**************************************!*\
  !*** ./src/modules/dialogManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDialogEvent: () => (/* binding */ initDialogEvent)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/modules/list.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/modules/todo.js");



function initDialogEvent(){

    document.addEventListener('click',(e)=>{
        const projectBtn = e.target.closest('[project-data]');
        const openBtn = e.target.closest('[data-open]');
        const closeBtn = e.target.closest('.dialog-close');
        
        if(openBtn) document.querySelector('.todo-dialog').showModal();
        if(projectBtn) document.querySelector('.project-dialog').showModal();
        if(closeBtn) closeBtn.closest('dialog').close();
    })

    handleProjectForm();
    handleTodoForm();
}

function handleProjectForm(){
    const projectContainer = document.querySelector('.project-dialog');
    const projectForm = projectContainer.querySelector('form');
    console.log('estoy en handleproject')

    projectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
            
        const newProject = {
                id: new Date().getTime(),
                name: document.getElementById('project-name').value.trim(),
                todos: []
            };

        (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(newProject)
        projectContainer.close();
        projectForm.reset();
    })
}

function handleTodoForm(){
    const todoDialog = document.querySelector('.todo-dialog');
    const todoForm = todoDialog.querySelector('form');
    console.log(todoForm)

    todoForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            name: document.getElementById('todo-name').value.trim(),
            description: document.getElementById('todo-description').value.trim(),
            dueDate: document.getElementById('todo-dueDate').value,
            priority: document.getElementById('todo-priority').value,
        }
        ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.addTodo)(newTodo);
        todoDialog.close();
        todoForm.reset();

    })
}

/***/ }),

/***/ "./src/modules/dialogManagerUI.js":
/*!****************************************!*\
  !*** ./src/modules/dialogManagerUI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectDialog: () => (/* binding */ createProjectDialog),
/* harmony export */   createTodoDialog: () => (/* binding */ createTodoDialog),
/* harmony export */   loadDialogUI: () => (/* binding */ loadDialogUI)
/* harmony export */ });
function createProjectDialog(){
    const dialog = document.createElement('dialog');
    dialog.classList.add('project-dialog');
    dialog.setAttribute('project-modal','dialog');

    const projectDialogContainer = document.createElement('div');
    projectDialogContainer.classList.add('dialog-container');

    const projectHeader = document.createElement('div');
    projectHeader.innerHTML = `
        <h2>New Project</h2>
        <p>Add a new project </p>`

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    formContainer.innerHTML= `                
                <form method="dialog">
                    <div class="inputs">
                        <div class="row">
                            <label for="project-name">Project</label>
                            <input type="text"
                                name="project-name"
                                id="project-name"
                                autocomplete="off"
                                required>
                        </div>
                    </div>
                    <div class="btn-container">
                        <button type="submit" class="create-btn">Create</button>
                        <button type="button" class="dialog-close close-btn">Cancel</button>
                    </div>
                </form> `;


    projectDialogContainer.appendChild(projectHeader);
    projectDialogContainer.appendChild(formContainer);
    dialog.appendChild(projectDialogContainer);

    return dialog;
}

////////////////////////////TODO DIALOG////////////////

function createTodoDialog(){
    const dialog = document.createElement('dialog');
    dialog.classList.add('todo-dialog');
    dialog.setAttribute('data-modal', 'dialog');
    
    const dialogHeader = document.createElement('div');
    dialogHeader.classList.add('dialog-header');

    dialogHeader.innerHTML = `
        <h2>New Todo</h2>
        <p>Adding a new to-do to keep it more organized</p>`
    
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    formContainer.innerHTML = `                    
                <form method="dialog">
                    <div class="inputs">
                        <div class="row">
                            <label for="todo-name">Todo</label>
                            <input type="text"
                                name="todo-name"
                                id="todo-name"
                                autocomplete="off"
                                required>
                        </div>

                        <div class="row">
                            <label for="todo-description">Description</label>
                            <textarea name="todo-description"
                                    id="todo-description"
                                    required>
                            </textarea>
                        </div>

                        <div class="row">
                            <label for="todo-dueDate">Due Date</label>
                            <input type="date"
                                  name="todo-dueDate"
                                  id="todo-dueDate"
                                  required>
                        </div>

                        <div class="row">
                            <label for="todo-priority">Priority</label>
                            <select name="todo-priority" id="todo-priority">
                                <option value="low-priority">Low</option>
                                <option value="medium-priority">Medium</option>
                                <option value="high-priority">High</option>
                            </select>
                        </div>
                    </div>
                    <div class="btn-container">
                        <button type="submit" class="create-btn">Create</button>
                        <button type="button" class="dialog-close close-btn">Cancel</button>
                    </div>
                </form>`;

    dialog.appendChild(dialogHeader)
    dialog.appendChild(formContainer);

    return dialog;
}

function loadDialogUI(){
    const container = document.createElement('div');
    container.append(createProjectDialog(), createTodoDialog());
    return container;
}

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getSelectedProjectId: () => (/* binding */ getSelectedProjectId),
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   saveAndRender: () => (/* binding */ saveAndRender),
/* harmony export */   setSelectedProjectId: () => (/* binding */ setSelectedProjectId),
/* harmony export */   updateProjectName: () => (/* binding */ updateProjectName)
/* harmony export */ });
/* harmony import */ var _todoUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoUI */ "./src/modules/todoUI.js");
/* harmony import */ var _localStorageManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageManager */ "./src/modules/localStorageManager.js");
/* harmony import */ var _listUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listUI */ "./src/modules/listUI.js");




let projectList = [];
let selectedProject = null;

(0,_localStorageManager__WEBPACK_IMPORTED_MODULE_1__.initialSetup)();
projectList = (0,_localStorageManager__WEBPACK_IMPORTED_MODULE_1__.load)();

function renderProjects(){
    (0,_listUI__WEBPACK_IMPORTED_MODULE_2__.renderProjectsUI)(projectList);
}

function saveAndRender(){
    (0,_localStorageManager__WEBPACK_IMPORTED_MODULE_1__.save)(projectList);
    renderProjects();
}

function addProject(project){
    projectList.push(project);
    saveAndRender();
}

function deleteProject(project){
    projectList = projectList.filter(item => item.id != project.id);
    saveAndRender();
}

function setSelectedProjectId(project){
    selectedProject = project.id;
    (0,_localStorageManager__WEBPACK_IMPORTED_MODULE_1__.saveListId)();
}

function getSelectedProjectId(){
    return selectedProject;
}

function updateProjectName(projectId, newName) {
    const project = projectList.find(p => p.id === projectId);
    if (!project || newName.trim() === '') return;

    project.name = newName.trim();
    saveAndRender(); 
}


/***/ }),

/***/ "./src/modules/listUI.js":
/*!*******************************!*\
  !*** ./src/modules/listUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadListUI: () => (/* binding */ loadListUI),
/* harmony export */   renderProjectsUI: () => (/* binding */ renderProjectsUI)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/modules/list.js");
/* harmony import */ var _todoUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoUI */ "./src/modules/todoUI.js");
/* harmony import */ var _asset_trash_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/trash-solid.svg */ "./src/asset/trash-solid.svg");
/* harmony import */ var _asset_pen_to_square_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/pen-to-square-solid.svg */ "./src/asset/pen-to-square-solid.svg");
/* harmony import */ var _asset_plus_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asset/plus-solid.svg */ "./src/asset/plus-solid.svg");






function loadListUI(){
    //Task List Container
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    //Task List Header
    const projectListHeader = document.createElement('div');
    projectListHeader.classList.add('project-list');
    
    const projectTitle = document.createElement('h2');
    projectTitle.innerText = 'Projects';

    const addListItem = document.createElement('button');
    addListItem.classList.add('add-icon');
    addListItem.setAttribute('project-data','button');
    addListItem.innerHTML = `<img src="${_asset_plus_solid_svg__WEBPACK_IMPORTED_MODULE_4__}" alt="add-icon">`;

    //Task Container
    const list = document.createElement('div');
    list.classList.add('task-list');


    //////Task List Container///////
    projectListHeader.appendChild(projectTitle);
    projectListHeader.appendChild(addListItem);

    projectContainer.appendChild(projectListHeader);
    projectContainer.appendChild(list);    

    return projectContainer;
}

function renderProjectsUI(projects){
    const projectElements = document.querySelector('.task-list');
    projectElements.innerHTML = '';

    projects.forEach(project =>{
        //Task Element
        const listItem = document.createElement('div');
        listItem.classList.add('task');
        listItem.setAttribute('data-project', project.id);

        const listItemTitle = document.createElement('h3');
        listItemTitle.textContent = project.name;

        //Task Options
        const listItemOption = document.createElement('div');
        listItemOption.classList.add('task-option');

        const listItemEdit = document.createElement('button');
        listItemEdit.classList.add('list-edit');
        listItemEdit.innerHTML = `<img src="${_asset_pen_to_square_solid_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="edit-icon">`;

        const listItemDelete = document.createElement('button');
        listItemDelete.classList.add('icon-delete');
        listItemDelete.innerHTML = `<img src="${_asset_trash_solid_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="delete-icon">`;


        listItemDelete.addEventListener('click', (e)=>{
            e.stopPropagation();
        
            (0,_list__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project);
            (0,_todoUI__WEBPACK_IMPORTED_MODULE_1__.updateTodoHeader)()
        })

        listItem.addEventListener('click', (e)=>{
            e.stopPropagation();
            (0,_list__WEBPACK_IMPORTED_MODULE_0__.setSelectedProjectId)(project);
            (0,_todoUI__WEBPACK_IMPORTED_MODULE_1__.updateTodoHeader)()
            ;(0,_todoUI__WEBPACK_IMPORTED_MODULE_1__.renderTodoUI)();
           
        })

        listItemEdit.addEventListener('click',(e)=>{
            e.stopPropagation();

            enableProjectEditing(listItemTitle, project);
        })

        listItemOption.appendChild(listItemEdit);
        listItemOption.appendChild(listItemDelete);
    
        listItem.appendChild(listItemTitle);
        listItem.appendChild(listItemOption);

        projectElements.appendChild(listItem);        
    })
    ;(0,_todoUI__WEBPACK_IMPORTED_MODULE_1__.renderTodoUI)();
}

function enableProjectEditing(titleElement, project) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = project.name;
    input.classList.add('edit-project-input');

    titleElement.replaceWith(input);
    input.focus();

    // Guardar cambios al presionar "Enter" o perder el foco
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveProjectName(input, titleElement, project);
        }
    });

    input.addEventListener('blur', () => {
        saveProjectName(input, titleElement, project);
    });
}

function saveProjectName(input, titleElement, project) {
    const newName = input.value.trim();

    if (newName !== '') {
        (0,_list__WEBPACK_IMPORTED_MODULE_0__.updateProjectName)(project.id, newName);
        titleElement.textContent = newName;
    }

    input.replaceWith(titleElement);
}

/***/ }),

/***/ "./src/modules/localStorageManager.js":
/*!********************************************!*\
  !*** ./src/modules/localStorageManager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialSetup: () => (/* binding */ initialSetup),
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   loadListId: () => (/* binding */ loadListId),
/* harmony export */   save: () => (/* binding */ save),
/* harmony export */   saveListId: () => (/* binding */ saveListId)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/modules/list.js");


const STORAGE_KEY = 'projects'
const STORAGE_KEY_LIST_ID ='list-id'

function initialSetup(){
    if(!localStorage.getItem(STORAGE_KEY)){
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}

function save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_list__WEBPACK_IMPORTED_MODULE_0__.projectList));
}

function saveListId(){
    localStorage.setItem(STORAGE_KEY_LIST_ID, JSON.stringify((0,_list__WEBPACK_IMPORTED_MODULE_0__.getSelectedProjectId)()))
}

function load(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function loadListId(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LIST_ID)) || null;
}

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   checkedTodo: () => (/* binding */ checkedTodo),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   getProjectId: () => (/* binding */ getProjectId)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/modules/list.js");
/* harmony import */ var _localStorageManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageManager */ "./src/modules/localStorageManager.js");



//let todoList = [];

function addTodo(todo){
    const projects = getProjectId();

    if(projects === null) return;

    if(projects){
        projects.todos.push(todo);
        (0,_list__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();
    }
}

function deleteTodo(todo){
    const projects = getProjectId()
    console.log('delete',getProjectId());

    if(projects === null) return;

    projects.todos = projects.todos.filter(item => item.id !== todo.id);
    (0,_list__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();
}

function checkedTodo(todo){
    const selectedProjects = getProjectId()

    if(selectedProjects === null) return;

    const projects = selectedProjects.todos.find(todoList => todoList.id === todo.id);
    if(projects){
        projects.completed = !todo.completed;
        (0,_localStorageManager__WEBPACK_IMPORTED_MODULE_1__.save)();
        (0,_list__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();
    }
}

function getProjectId(){
    return _list__WEBPACK_IMPORTED_MODULE_0__.projectList.find(project => project.id === (0,_localStorageManager__WEBPACK_IMPORTED_MODULE_1__.loadListId)()) || null;
    
    /*let selectedProject = projectList.find(project => project.id === loadListId())
        if(!selectedProject) return null

    return selectedProject;
    */
}


/***/ }),

/***/ "./src/modules/todoUI.js":
/*!*******************************!*\
  !*** ./src/modules/todoUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeColor: () => (/* binding */ changeColor),
/* harmony export */   loadTodoUI: () => (/* binding */ loadTodoUI),
/* harmony export */   renderTodoUI: () => (/* binding */ renderTodoUI),
/* harmony export */   updateTodoHeader: () => (/* binding */ updateTodoHeader)
/* harmony export */ });
/* harmony import */ var _asset_plus_solid_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/plus-solid.svg */ "./src/asset/plus-solid.svg");
/* harmony import */ var _asset_trash_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/trash-solid.svg */ "./src/asset/trash-solid.svg");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");




function loadTodoUI(){
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    
    const todoHeader = document.createElement('div');
    todoHeader.classList.add('todo-header');

    const taskTitleHeader = document.createElement('h2');
    taskTitleHeader.classList.add('project-title');
    taskTitleHeader.textContent = updateTodoHeader();

    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('add-icon');
    addTodoBtn.setAttribute('data-open', 'button');
    addTodoBtn.innerHTML = `<img src="${_asset_plus_solid_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="delete-icon">`;

    const todoElements = document.createElement('div');
    todoElements.classList.add('todo-elements');
 
    //////Todo Container////////
    todoHeader.appendChild(taskTitleHeader);
    todoHeader.appendChild(addTodoBtn);

    todoContainer.appendChild(todoHeader);
    todoContainer.appendChild(todoElements);

    return todoContainer;
}

function renderTodoUI(){
        const todoElements = document.querySelector('.todo-elements');
        todoElements.innerHTML = '';
    
        let selectedProject = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.getProjectId)();
        
        if(selectedProject){
            selectedProject.todos.forEach(todo =>{
                const todoItem = document.createElement('div');
                todoItem.classList.add('todo');
                todoItem.setAttribute(['data-todo'], todo.id);
                todoItem.style.borderColor = changeColor(todo.priority);
        
                const todoCheck = document.createElement('input');
                todoCheck.setAttribute('type', 'checkbox'); 
                todoCheck.checked = todo.completed;
                
                const todoText = document.createElement('div');
                todoText.classList.add('todo-text');
        
                const todoTextHeader = document.createElement('div');
                todoTextHeader.classList.add('todo-text-header');

                const todoTitle = document.createElement('h3');
                todoTitle.textContent = todo.name;

                const todoDate = document.createElement('p');
                todoDate.textContent = `${todo.dueDate}`;

                const todoDescription = document.createElement('p');
                todoDescription.textContent = todo.description;
                
                const todoDelete = document.createElement('button');
                todoDelete.classList.add('icon-delete');
                todoDelete.innerHTML = `<img src="${_asset_trash_solid_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="delete-icon">`;
        
                todoDelete.addEventListener('click', ()=>{
                    (0,_todo__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(todo);
                })
        
                todoCheck.addEventListener('click',()=>{
                    ;(0,_todo__WEBPACK_IMPORTED_MODULE_2__.checkedTodo)(todo);
                })
            
                todoItem.appendChild(todoCheck);
                todoItem.appendChild(todoText);
                todoItem.appendChild(todoDelete);
            
                todoTextHeader.appendChild(todoTitle);
                todoTextHeader.appendChild(todoDate);

                todoText.appendChild(todoTextHeader);
                todoText.appendChild(todoDescription);
            
                todoElements.appendChild(todoItem);
            })
        }
}


function updateTodoHeader() {
    const taskTitleHeader = document.querySelector('.project-title');
    const selectedProject = (0,_todo__WEBPACK_IMPORTED_MODULE_2__.getProjectId)();

    if (taskTitleHeader) {
        taskTitleHeader.textContent = selectedProject ? selectedProject.name : '';
    }
}


function changeColor(priority){
    const colors ={ 
        'low-priority': '#1E8252',
        'medium-priority': '#EDAA25',
        'high-priority': '#C43302'
    }
    return colors[priority];
}

/***/ }),

/***/ "./src/asset/font/Inter_28pt-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/asset/font/Inter_28pt-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd012577d3f8e88a8149.ttf";

/***/ }),

/***/ "./src/asset/pen-to-square-solid.svg":
/*!*******************************************!*\
  !*** ./src/asset/pen-to-square-solid.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b8a486168c1759a9c1c.svg";

/***/ }),

/***/ "./src/asset/plus-solid.svg":
/*!**********************************!*\
  !*** ./src/asset/plus-solid.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02d32f1a0a805169615e.svg";

/***/ }),

/***/ "./src/asset/trash-solid.svg":
/*!***********************************!*\
  !*** ./src/asset/trash-solid.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14227052dac2e311a885.svg";

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/list */ "./src/modules/list.js");
/* harmony import */ var _modules_listUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/listUI */ "./src/modules/listUI.js");
/* harmony import */ var _modules_todoUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todoUI */ "./src/modules/todoUI.js");
/* harmony import */ var _modules_dialogManagerUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dialogManagerUI */ "./src/modules/dialogManagerUI.js");
/* harmony import */ var _modules_dialogManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dialogManager */ "./src/modules/dialogManager.js");







function init(){
    const content = document.getElementById('content');
    
    content.appendChild((0,_modules_listUI__WEBPACK_IMPORTED_MODULE_2__.loadListUI)());
    content.appendChild((0,_modules_todoUI__WEBPACK_IMPORTED_MODULE_3__.loadTodoUI)());
    content.append((0,_modules_dialogManagerUI__WEBPACK_IMPORTED_MODULE_4__.loadDialogUI)());

    (0,_modules_list__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
    (0,_modules_todoUI__WEBPACK_IMPORTED_MODULE_3__.updateTodoHeader)()
    ;(0,_modules_dialogManager__WEBPACK_IMPORTED_MODULE_5__.initDialogEvent)();

}

document.addEventListener("DOMContentLoaded", init);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFzRDtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUss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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzQztBQUNEO0FBQ3JDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFVO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lCO0FBQ0E7QUFDZTtBQUNKO0FBQ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQVU7QUFDbEMsd0JBQXdCLDJEQUFVO0FBQ2xDLG1CQUFtQixzRUFBWTtBQUMvQjtBQUNBLElBQUksNkRBQWM7QUFDbEIsSUFBSSxpRUFBZ0I7QUFDcEIsSUFBSSx3RUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxvRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC02LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTYtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LTYtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC02LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTYtLS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC02LS0tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RpYWxvZ01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC02LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGlhbG9nTWFuYWdlclVJLmpzIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC02LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbGlzdFVJLmpzIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC02LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTYtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvVUkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC02LS0tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LTYtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtNi0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LTYtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC02LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LTYtLS10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXQvZm9udC9JbnRlcl8yOHB0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcclxuICAgIC0tbWFpbi1iZy1jb2xvcjogIzFBMUMyQjtcclxuICAgIC0tdGV4dC1saWdodDogI0U2RURGMztcclxuICAgIC0tYm9yZGVyLWxpZ2h0OiAjMzAzNjNEO1xyXG4gICAgLS1oaWdoLXByaW9yaXR5OiAjQzQzMzAyO1xyXG4gICAgLS1tZWRpdW0tcHJpb3JpdHk6ICNFREFBMjU7XHJcbiAgICAtLWxvdy1wcmlvcml0eTogIzFFODI1MjtcclxuICAgIC0tY2FuY2VsLWJ0bjogIzhBODg4NjtcclxuICAgIC0tY3JlYXRlLWJ0bjogI0ZGNTczMztcclxuICAgIC8qXHJcbiAgICAtLWRlbGV0ZTogI0JGMTEyMDtcclxuICAgIC0tZWRpdDogIzI5NTA3MztcclxuICAgICovXHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLypDb250YWluZXIqL1xyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjdmciAzLjNmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxufVxyXG5cclxuLypQcm9qZWN0IExpc3QqL1xyXG4ucHJvamVjdC1jb250YWluZXJ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250YWluZXIgYnV0dG9uIGltZ3tcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnByb2plY3QtY29udGFpbmVyIGJ1dHRvbiBpbWc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XHJcbn1cclxuXHJcbi50YXNre1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZzogLjVweDtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuYnV0dG9uIGltZ3tcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkLWljb257XHJcbiAgICBmaWx0ZXI6IGludmVydCg4NiUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMjQxJSkgaHVlLXJvdGF0ZSgxODdkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoOTElKTtcclxufVxyXG5cclxuLmljb24tZGVsZXRle1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTQlKSBzZXBpYSg1NyUpIHNhdHVyYXRlKDUzNDUlKSBodWUtcm90YXRlKDM0NWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMiUpO1xyXG59XHJcblxyXG4ubGlzdC1lZGl0e1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMjYlKSBzZXBpYSg0MiUpIHNhdHVyYXRlKDc4NSUpIGh1ZS1yb3RhdGUoMTY3ZGVnKSBicmlnaHRuZXNzKDg5JSkgY29udHJhc3QoODYlKTtcclxufVxyXG5cclxuLmVkaXQtcHJvamVjdC1pbnB1dHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi8qVG9kbyBMaXN0Ki9cclxuLnRvZG8taGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xyXG59XHJcblxyXG4udG9kby1lbGVtZW50c3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICBtYXJnaW46IC41cmVtO1xyXG59XHJcblxyXG4udG9kb3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMmZyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xyXG59XHJcblxyXG4udG9kby10ZXh0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b2RvLXRleHQtaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKkRpYWxvZyovXHJcbi50b2RvLWRpYWxvZywgLnByb2plY3QtZGlhbG9ne1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW4gZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuZGlhbG9nW29wZW5de1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jb2xvcik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1saWdodCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvZG8tZGlhbG9nW29wZW5de1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcbiAgICBcclxuLnRvZG8tZGlhbG9nOjpiYWNrZHJvcCB7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcblxyXG4ucm93IGlucHV0LCAucm93IHNlbGVjdCwgLnJvdyB0ZXh0YXJlYXtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5yb3cgbGFiZWx7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGdhcDogLjc1cmVtO1xyXG59XHJcblxyXG4uYnRuLWNvbnRhaW5lciBidXR0b257XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9zZS1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwtYnRuKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxufVxyXG5cclxuLmNyZWF0ZS1idG57XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmVhdGUtYnRuKTtcclxufVxyXG5cclxuLnByb2plY3QtZGlhbG9nW29wZW5de1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLyphcHBlYXJhbmNlOiBub25lOyovXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFDMkI7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCOzs7S0FHQztBQUNMOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUErQztBQUNuRDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNi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cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjMUExQzJCO1xcclxcbiAgICAtLXRleHQtbGlnaHQ6ICNFNkVERjM7XFxyXFxuICAgIC0tYm9yZGVyLWxpZ2h0OiAjMzAzNjNEO1xcclxcbiAgICAtLWhpZ2gtcHJpb3JpdHk6ICNDNDMzMDI7XFxyXFxuICAgIC0tbWVkaXVtLXByaW9yaXR5OiAjRURBQTI1O1xcclxcbiAgICAtLWxvdy1wcmlvcml0eTogIzFFODI1MjtcXHJcXG4gICAgLS1jYW5jZWwtYnRuOiAjOEE4ODg2O1xcclxcbiAgICAtLWNyZWF0ZS1idG46ICNGRjU3MzM7XFxyXFxuICAgIC8qXFxyXFxuICAgIC0tZGVsZXRlOiAjQkYxMTIwO1xcclxcbiAgICAtLWVkaXQ6ICMyOTUwNzM7XFxyXFxuICAgICovXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXQvZm9udC9JbnRlcl8yOHB0LVJlZ3VsYXIudHRmJyk7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypDb250YWluZXIqL1xcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjdmciAzLjNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxyXFxufVxcclxcblxcclxcbi8qUHJvamVjdCBMaXN0Ki9cXHJcXG4ucHJvamVjdC1jb250YWluZXJ7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIGJ1dHRvbiBpbWd7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIGJ1dHRvbiBpbWc6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cHg7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiBpbWd7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pY29ue1xcclxcbiAgICBmaWx0ZXI6IGludmVydCg4NiUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoMjQxJSkgaHVlLXJvdGF0ZSgxODdkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoOTElKTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tZGVsZXRle1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxNCUpIHNlcGlhKDU3JSkgc2F0dXJhdGUoNTM0NSUpIGh1ZS1yb3RhdGUoMzQ1ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAyJSk7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWVkaXR7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDI2JSkgc2VwaWEoNDIlKSBzYXR1cmF0ZSg3ODUlKSBodWUtcm90YXRlKDE2N2RlZykgYnJpZ2h0bmVzcyg4OSUpIGNvbnRyYXN0KDg2JSk7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXByb2plY3QtaW5wdXR7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKlRvZG8gTGlzdCovXFxyXFxuLnRvZG8taGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWVsZW1lbnRze1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3tcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDJmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10ZXh0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGV4dC1oZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLypEaWFsb2cqL1xcclxcbi50b2RvLWRpYWxvZywgLnByb2plY3QtZGlhbG9ne1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmRpYWxvZ1tvcGVuXXtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWxpZ2h0KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGlhbG9nW29wZW5de1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBoZWlnaHQ6IDYwJTtcXHJcXG59XFxyXFxuICAgIFxcclxcbi50b2RvLWRpYWxvZzo6YmFja2Ryb3Age1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXJ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvd3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBtYXJnaW46IDVweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IGlucHV0LCAucm93IHNlbGVjdCwgLnJvdyB0ZXh0YXJlYXtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5yb3cgbGFiZWx7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGdhcDogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNvbnRhaW5lciBidXR0b257XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ0bik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1idG57XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JlYXRlLWJ0bik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRpYWxvZ1tvcGVuXXtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hde1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgLyphcHBlYXJhbmNlOiBub25lOyovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFDMkI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICcuL2xpc3QuanMnXHJcbmltcG9ydCAgeyBhZGRUb2RvIH0gZnJvbSAnLi90b2RvLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGlhbG9nRXZlbnQoKXtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1twcm9qZWN0LWRhdGFdJyk7XHJcbiAgICAgICAgY29uc3Qgb3BlbkJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW9wZW5dJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBlLnRhcmdldC5jbG9zZXN0KCcuZGlhbG9nLWNsb3NlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYob3BlbkJ0bikgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGlhbG9nJykuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgaWYocHJvamVjdEJ0bikgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGlhbG9nJykuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgaWYoY2xvc2VCdG4pIGNsb3NlQnRuLmNsb3Nlc3QoJ2RpYWxvZycpLmNsb3NlKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGhhbmRsZVByb2plY3RGb3JtKCk7XHJcbiAgICBoYW5kbGVUb2RvRm9ybSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0Rm9ybSgpe1xyXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRpYWxvZycpO1xyXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBwcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuICAgIGNvbnNvbGUubG9nKCdlc3RveSBlbiBoYW5kbGVwcm9qZWN0JylcclxuXHJcbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICB0b2RvczogW11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KVxyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xvc2UoKTtcclxuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVG9kb0Zvcm0oKXtcclxuICAgIGNvbnN0IHRvZG9EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kaWFsb2cnKTtcclxuICAgIGNvbnN0IHRvZG9Gb3JtID0gdG9kb0RpYWxvZy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0b2RvRm9ybSlcclxuXHJcbiAgICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IHtcclxuICAgICAgICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBuYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1uYW1lJykudmFsdWUudHJpbSgpLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgIGR1ZURhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZURhdGUnKS52YWx1ZSxcclxuICAgICAgICAgICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5JykudmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZFRvZG8obmV3VG9kbyk7XHJcbiAgICAgICAgdG9kb0RpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgIHRvZG9Gb3JtLnJlc2V0KCk7XHJcblxyXG4gICAgfSlcclxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlhbG9nKCl7XHJcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcclxuICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpYWxvZycpO1xyXG4gICAgZGlhbG9nLnNldEF0dHJpYnV0ZSgncHJvamVjdC1tb2RhbCcsJ2RpYWxvZycpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REaWFsb2dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3REaWFsb2dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMj5OZXcgUHJvamVjdDwvaDI+XHJcbiAgICAgICAgPHA+QWRkIGEgbmV3IHByb2plY3QgPC9wPmBcclxuXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5pbm5lckhUTUw9IGAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJkaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWVcIj5Qcm9qZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2plY3QtbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9qZWN0LW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY3JlYXRlLWJ0blwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRpYWxvZy1jbG9zZSBjbG9zZS1idG5cIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT4gYDtcclxuXHJcblxyXG4gICAgcHJvamVjdERpYWxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcclxuICAgIHByb2plY3REaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQocHJvamVjdERpYWxvZ0NvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGRpYWxvZztcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1RPRE8gRElBTE9HLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9EaWFsb2coKXtcclxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xyXG4gICAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGlhbG9nJyk7XHJcbiAgICBkaWFsb2cuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJywgJ2RpYWxvZycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkaWFsb2dIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpYWxvZ0hlYWRlci5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctaGVhZGVyJyk7XHJcblxyXG4gICAgZGlhbG9nSGVhZGVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDI+TmV3IFRvZG88L2gyPlxyXG4gICAgICAgIDxwPkFkZGluZyBhIG5ldyB0by1kbyB0byBrZWVwIGl0IG1vcmUgb3JnYW5pemVkPC9wPmBcclxuICAgIFxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gYCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJkaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLW5hbWVcIj5Ub2RvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvZG8tbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b2RvLW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInRvZG8tZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvZG8tZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tZHVlRGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9kby1kdWVEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9kby1kdWVEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLXByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwidG9kby1wcmlvcml0eVwiIGlkPVwidG9kby1wcmlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3ctcHJpb3JpdHlcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtLXByaW9yaXR5XCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2gtcHJpb3JpdHlcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJjcmVhdGUtYnRuXCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGlhbG9nLWNsb3NlIGNsb3NlLWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPmA7XHJcblxyXG4gICAgZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0hlYWRlcilcclxuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZGlhbG9nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZERpYWxvZ1VJKCl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlUHJvamVjdERpYWxvZygpLCBjcmVhdGVUb2RvRGlhbG9nKCkpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufSIsImltcG9ydCB7IHJlbmRlclRvZG9VSSB9IGZyb20gXCIuL3RvZG9VSVwiO1xyXG5pbXBvcnQgeyBpbml0aWFsU2V0dXAsIHNhdmUsIGxvYWQsIHNhdmVMaXN0SWQsIGxvYWRMaXN0SWQgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3RzVUkgfSBmcm9tIFwiLi9saXN0VUlcIjtcclxuXHJcbmV4cG9ydCBsZXQgcHJvamVjdExpc3QgPSBbXTtcclxubGV0IHNlbGVjdGVkUHJvamVjdCA9IG51bGw7XHJcblxyXG5pbml0aWFsU2V0dXAoKTtcclxucHJvamVjdExpc3QgPSBsb2FkKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKXtcclxuICAgIHJlbmRlclByb2plY3RzVUkocHJvamVjdExpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFuZFJlbmRlcigpe1xyXG4gICAgc2F2ZShwcm9qZWN0TGlzdCk7XHJcbiAgICByZW5kZXJQcm9qZWN0cygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KXtcclxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICBzYXZlQW5kUmVuZGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3Qpe1xyXG4gICAgcHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9IHByb2plY3QuaWQpO1xyXG4gICAgc2F2ZUFuZFJlbmRlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRQcm9qZWN0SWQocHJvamVjdCl7XHJcbiAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0LmlkO1xyXG4gICAgc2F2ZUxpc3RJZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKXtcclxuICAgIHJldHVybiBzZWxlY3RlZFByb2plY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0TmFtZShwcm9qZWN0SWQsIG5ld05hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TGlzdC5maW5kKHAgPT4gcC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgIGlmICghcHJvamVjdCB8fCBuZXdOYW1lLnRyaW0oKSA9PT0gJycpIHJldHVybjtcclxuXHJcbiAgICBwcm9qZWN0Lm5hbWUgPSBuZXdOYW1lLnRyaW0oKTtcclxuICAgIHNhdmVBbmRSZW5kZXIoKTsgXHJcbn1cclxuIiwiaW1wb3J0IHtzZXRTZWxlY3RlZFByb2plY3RJZCwgZGVsZXRlUHJvamVjdCwgdXBkYXRlUHJvamVjdE5hbWV9IGZyb20gJy4vbGlzdCdcclxuaW1wb3J0IHsgcmVuZGVyVG9kb1VJLCB1cGRhdGVUb2RvSGVhZGVyIH0gZnJvbSBcIi4vdG9kb1VJXCI7XHJcbmltcG9ydCB0cmFzaCBmcm9tICcuLi9hc3NldC90cmFzaC1zb2xpZC5zdmcnO1xyXG5pbXBvcnQgZWRpdCBmcm9tICcuLi9hc3NldC9wZW4tdG8tc3F1YXJlLXNvbGlkLnN2ZydcclxuaW1wb3J0IGFkZCBmcm9tICcuLi9hc3NldC9wbHVzLXNvbGlkLnN2ZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTGlzdFVJKCl7XHJcbiAgICAvL1Rhc2sgTGlzdCBDb250YWluZXJcclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcclxuXHJcbiAgICAvL1Rhc2sgTGlzdCBIZWFkZXJcclxuICAgIGNvbnN0IHByb2plY3RMaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0TGlzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKTtcclxuICAgIFxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSAnUHJvamVjdHMnO1xyXG5cclxuICAgIGNvbnN0IGFkZExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdhZGQtaWNvbicpO1xyXG4gICAgYWRkTGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdwcm9qZWN0LWRhdGEnLCdidXR0b24nKTtcclxuICAgIGFkZExpc3RJdGVtLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7YWRkfVwiIGFsdD1cImFkZC1pY29uXCI+YDtcclxuXHJcbiAgICAvL1Rhc2sgQ29udGFpbmVyXHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xyXG5cclxuXHJcbiAgICAvLy8vLy9UYXNrIExpc3QgQ29udGFpbmVyLy8vLy8vL1xyXG4gICAgcHJvamVjdExpc3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgIHByb2plY3RMaXN0SGVhZGVyLmFwcGVuZENoaWxkKGFkZExpc3RJdGVtKTtcclxuXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SGVhZGVyKTtcclxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7ICAgIFxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHNVSShwcm9qZWN0cyl7XHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XHJcbiAgICBwcm9qZWN0RWxlbWVudHMuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+e1xyXG4gICAgICAgIC8vVGFzayBFbGVtZW50XHJcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICAgICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0LmlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdEl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgbGlzdEl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuXHJcbiAgICAgICAgLy9UYXNrIE9wdGlvbnNcclxuICAgICAgICBjb25zdCBsaXN0SXRlbU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxpc3RJdGVtT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stb3B0aW9uJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGxpc3RJdGVtRWRpdC5jbGFzc0xpc3QuYWRkKCdsaXN0LWVkaXQnKTtcclxuICAgICAgICBsaXN0SXRlbUVkaXQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtlZGl0fVwiIGFsdD1cImVkaXQtaWNvblwiPmA7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbGlzdEl0ZW1EZWxldGUuY2xhc3NMaXN0LmFkZCgnaWNvbi1kZWxldGUnKTtcclxuICAgICAgICBsaXN0SXRlbURlbGV0ZS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke3RyYXNofVwiIGFsdD1cImRlbGV0ZS1pY29uXCI+YDtcclxuXHJcblxyXG4gICAgICAgIGxpc3RJdGVtRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVRvZG9IZWFkZXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvamVjdElkKHByb2plY3QpO1xyXG4gICAgICAgICAgICB1cGRhdGVUb2RvSGVhZGVyKClcclxuICAgICAgICAgICAgcmVuZGVyVG9kb1VJKCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGlzdEl0ZW1FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGVuYWJsZVByb2plY3RFZGl0aW5nKGxpc3RJdGVtVGl0bGUsIHByb2plY3QpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxpc3RJdGVtT3B0aW9uLmFwcGVuZENoaWxkKGxpc3RJdGVtRWRpdCk7XHJcbiAgICAgICAgbGlzdEl0ZW1PcHRpb24uYXBwZW5kQ2hpbGQobGlzdEl0ZW1EZWxldGUpO1xyXG4gICAgXHJcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEl0ZW1UaXRsZSk7XHJcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEl0ZW1PcHRpb24pO1xyXG5cclxuICAgICAgICBwcm9qZWN0RWxlbWVudHMuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pOyAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgcmVuZGVyVG9kb1VJKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZVByb2plY3RFZGl0aW5nKHRpdGxlRWxlbWVudCwgcHJvamVjdCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIGlucHV0LnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LWlucHV0Jyk7XHJcblxyXG4gICAgdGl0bGVFbGVtZW50LnJlcGxhY2VXaXRoKGlucHV0KTtcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcblxyXG4gICAgLy8gR3VhcmRhciBjYW1iaW9zIGFsIHByZXNpb25hciBcIkVudGVyXCIgbyBwZXJkZXIgZWwgZm9jb1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzYXZlUHJvamVjdE5hbWUoaW5wdXQsIHRpdGxlRWxlbWVudCwgcHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICBzYXZlUHJvamVjdE5hbWUoaW5wdXQsIHRpdGxlRWxlbWVudCwgcHJvamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZVByb2plY3ROYW1lKGlucHV0LCB0aXRsZUVsZW1lbnQsIHByb2plY3QpIHtcclxuICAgIGNvbnN0IG5ld05hbWUgPSBpbnB1dC52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgaWYgKG5ld05hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgdXBkYXRlUHJvamVjdE5hbWUocHJvamVjdC5pZCwgbmV3TmFtZSk7XHJcbiAgICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5yZXBsYWNlV2l0aCh0aXRsZUVsZW1lbnQpO1xyXG59IiwiaW1wb3J0IHsgcHJvamVjdExpc3QsIGdldFNlbGVjdGVkUHJvamVjdElkIH0gZnJvbSBcIi4vbGlzdFwiO1xyXG5cclxuY29uc3QgU1RPUkFHRV9LRVkgPSAncHJvamVjdHMnXHJcbmNvbnN0IFNUT1JBR0VfS0VZX0xJU1RfSUQgPSdsaXN0LWlkJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxTZXR1cCgpe1xyXG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KFtdKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlKCl7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMaXN0SWQoKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZX0xJU1RfSUQsIEpTT04uc3RyaW5naWZ5KGdldFNlbGVjdGVkUHJvamVjdElkKCkpKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZCgpe1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpKSB8fCBbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRMaXN0SWQoKXtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZX0xJU1RfSUQpKSB8fCBudWxsO1xyXG59IiwiaW1wb3J0IHsgcHJvamVjdExpc3QsIGdldFNlbGVjdGVkUHJvamVjdElkLCBzYXZlQW5kUmVuZGVyfSBmcm9tICcuL2xpc3QnO1xyXG5pbXBvcnQgeyBzYXZlLCBsb2FkTGlzdElkIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VNYW5hZ2VyJztcclxuXHJcbi8vbGV0IHRvZG9MaXN0ID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyh0b2RvKXtcclxuICAgIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdElkKCk7XHJcblxyXG4gICAgaWYocHJvamVjdHMgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICBpZihwcm9qZWN0cyl7XHJcbiAgICAgICAgcHJvamVjdHMudG9kb3MucHVzaCh0b2RvKTtcclxuICAgICAgICBzYXZlQW5kUmVuZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pe1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0SWQoKVxyXG4gICAgY29uc29sZS5sb2coJ2RlbGV0ZScsZ2V0UHJvamVjdElkKCkpO1xyXG5cclxuICAgIGlmKHByb2plY3RzID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgcHJvamVjdHMudG9kb3MgPSBwcm9qZWN0cy50b2Rvcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSB0b2RvLmlkKTtcclxuICAgIHNhdmVBbmRSZW5kZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrZWRUb2RvKHRvZG8pe1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0cyA9IGdldFByb2plY3RJZCgpXHJcblxyXG4gICAgaWYoc2VsZWN0ZWRQcm9qZWN0cyA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzID0gc2VsZWN0ZWRQcm9qZWN0cy50b2Rvcy5maW5kKHRvZG9MaXN0ID0+IHRvZG9MaXN0LmlkID09PSB0b2RvLmlkKTtcclxuICAgIGlmKHByb2plY3RzKXtcclxuICAgICAgICBwcm9qZWN0cy5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XHJcbiAgICAgICAgc2F2ZSgpO1xyXG4gICAgICAgIHNhdmVBbmRSZW5kZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RJZCgpe1xyXG4gICAgcmV0dXJuIHByb2plY3RMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBsb2FkTGlzdElkKCkpIHx8IG51bGw7XHJcbiAgICBcclxuICAgIC8qbGV0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBsb2FkTGlzdElkKCkpXHJcbiAgICAgICAgaWYoIXNlbGVjdGVkUHJvamVjdCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0O1xyXG4gICAgKi9cclxufVxyXG4iLCJpbXBvcnQgYWRkIGZyb20gJy4uL2Fzc2V0L3BsdXMtc29saWQuc3ZnJztcclxuaW1wb3J0IHRyYXNoIGZyb20gJy4uL2Fzc2V0L3RyYXNoLXNvbGlkLnN2Zyc7XHJcbmltcG9ydCB7Z2V0UHJvamVjdElkLCBkZWxldGVUb2RvLGNoZWNrZWRUb2RvfSBmcm9tICcuL3RvZG8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUb2RvVUkoKXtcclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcclxuICAgIFxyXG4gICAgY29uc3QgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb0hlYWRlci5jbGFzc0xpc3QuYWRkKCd0b2RvLWhlYWRlcicpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tUaXRsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0YXNrVGl0bGVIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xyXG4gICAgdGFza1RpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gdXBkYXRlVG9kb0hlYWRlcigpO1xyXG5cclxuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWljb24nKTtcclxuICAgIGFkZFRvZG9CdG4uc2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nLCAnYnV0dG9uJyk7XHJcbiAgICBhZGRUb2RvQnRuLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7YWRkfVwiIGFsdD1cImRlbGV0ZS1pY29uXCI+YDtcclxuXHJcbiAgICBjb25zdCB0b2RvRWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9FbGVtZW50cy5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnRzJyk7XHJcbiBcclxuICAgIC8vLy8vL1RvZG8gQ29udGFpbmVyLy8vLy8vLy9cclxuICAgIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlSGVhZGVyKTtcclxuICAgIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bik7XHJcblxyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnRzKTtcclxuXHJcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvZG9VSSgpe1xyXG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWVsZW1lbnRzJyk7XHJcbiAgICAgICAgdG9kb0VsZW1lbnRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGdldFByb2plY3RJZCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNlbGVjdGVkUHJvamVjdCl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC50b2Rvcy5mb3JFYWNoKHRvZG8gPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0uc2V0QXR0cmlidXRlKFsnZGF0YS10b2RvJ10sIHRvZG8uaWQpO1xyXG4gICAgICAgICAgICAgICAgdG9kb0l0ZW0uc3R5bGUuYm9yZGVyQ29sb3IgPSBjaGFuZ2VDb2xvcih0b2RvLnByaW9yaXR5KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICB0b2RvQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7IFxyXG4gICAgICAgICAgICAgICAgdG9kb0NoZWNrLmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHRvZG9UZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGV4dCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb1RleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHRvZG9UZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGV4dC1oZWFkZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICAgICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RvLmR1ZURhdGV9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2ljb24tZGVsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICB0b2RvRGVsZXRlLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7dHJhc2h9XCIgYWx0PVwiZGVsZXRlLWljb25cIj5gO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9kb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlVG9kbyh0b2RvKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2RvQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFRvZG8odG9kbyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9DaGVjayk7XHJcbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2RvVGV4dEhlYWRlci5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgdG9kb1RleHRIZWFkZXIuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZG9UZXh0LmFwcGVuZENoaWxkKHRvZG9UZXh0SGVhZGVyKTtcclxuICAgICAgICAgICAgICAgIHRvZG9UZXh0LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9kb0VsZW1lbnRzLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9kb0hlYWRlcigpIHtcclxuICAgIGNvbnN0IHRhc2tUaXRsZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBnZXRQcm9qZWN0SWQoKTtcclxuXHJcbiAgICBpZiAodGFza1RpdGxlSGVhZGVyKSB7XHJcbiAgICAgICAgdGFza1RpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0ID8gc2VsZWN0ZWRQcm9qZWN0Lm5hbWUgOiAnJztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDb2xvcihwcmlvcml0eSl7XHJcbiAgICBjb25zdCBjb2xvcnMgPXsgXHJcbiAgICAgICAgJ2xvdy1wcmlvcml0eSc6ICcjMUU4MjUyJyxcclxuICAgICAgICAnbWVkaXVtLXByaW9yaXR5JzogJyNFREFBMjUnLFxyXG4gICAgICAgICdoaWdoLXByaW9yaXR5JzogJyNDNDMzMDInXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sb3JzW3ByaW9yaXR5XTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7cmVuZGVyUHJvamVjdHN9IGZyb20gJy4vbW9kdWxlcy9saXN0JztcclxuaW1wb3J0IHsgbG9hZExpc3RVSSB9IGZyb20gJy4vbW9kdWxlcy9saXN0VUknO1xyXG5pbXBvcnQge2xvYWRUb2RvVUksIHVwZGF0ZVRvZG9IZWFkZXJ9IGZyb20gJy4vbW9kdWxlcy90b2RvVUknXHJcbmltcG9ydCB7IGxvYWREaWFsb2dVSSB9IGZyb20gJy4vbW9kdWxlcy9kaWFsb2dNYW5hZ2VyVUknO1xyXG5pbXBvcnQgeyBpbml0RGlhbG9nRXZlbnQgfSBmcm9tICcuL21vZHVsZXMvZGlhbG9nTWFuYWdlcic7XHJcblxyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkTGlzdFVJKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkVG9kb1VJKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmQobG9hZERpYWxvZ1VJKCkpO1xyXG5cclxuICAgIHJlbmRlclByb2plY3RzKCk7XHJcbiAgICB1cGRhdGVUb2RvSGVhZGVyKClcclxuICAgIGluaXREaWFsb2dFdmVudCgpO1xyXG5cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9