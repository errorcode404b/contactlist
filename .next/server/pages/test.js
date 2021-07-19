(function() {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\coder\\Documents\\contactlist\\pages\\test.js";

function Form() {
  const registerUser = async event => {
    event.preventDefault();
    const res = await fetch('/api/register', {
      body: JSON.stringify({
        name: event.target.name.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const result = await res.json(); // result.user => 'Ada Lovelace'
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    onSubmit: registerUser,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: "name",
      children: "Name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      id: "name",
      name: "name",
      type: "text",
      autoComplete: "name",
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: "Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/test.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWN0bGlzdC8uL3BhZ2VzL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vY29udGFjdGxpc3QvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb3JtIiwicmVnaXN0ZXJVc2VyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJzIiwibWV0aG9kIiwicmVzdWx0IiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLElBQVQsR0FBZ0I7QUFDWixRQUFNQyxZQUFZLEdBQUcsTUFBTUMsS0FBTixJQUFlO0FBQ2xDQSxTQUFLLENBQUNDLGNBQU47QUFFQSxVQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGVBQUQsRUFBa0I7QUFDdkNDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLFlBQUksRUFBRVAsS0FBSyxDQUFDUSxNQUFOLENBQWFELElBQWIsQ0FBa0JFO0FBREwsT0FBZixDQURpQztBQUl2Q0MsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FKOEI7QUFPdkNDLFlBQU0sRUFBRTtBQVArQixLQUFsQixDQUF2QjtBQVVBLFVBQU1DLE1BQU0sR0FBRyxNQUFNVixHQUFHLENBQUNXLElBQUosRUFBckIsQ0Fia0MsQ0FjbEM7QUFDRCxHQWZEOztBQWlCQSxzQkFDRTtBQUFNLFlBQVEsRUFBRWQsWUFBaEI7QUFBQSw0QkFDRTtBQUFPLGFBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFPLFFBQUUsRUFBQyxNQUFWO0FBQWlCLFVBQUksRUFBQyxNQUF0QjtBQUE2QixVQUFJLEVBQUMsTUFBbEM7QUFBeUMsa0JBQVksRUFBQyxNQUF0RDtBQUE2RCxjQUFRO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVELCtEQUFlRCxJQUFmLEU7Ozs7Ozs7Ozs7O0FDM0JGLG1EIiwiZmlsZSI6InBhZ2VzL3Rlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBGb3JtKCkge1xyXG4gICAgY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3JlZ2lzdGVyJywge1xyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC5uYW1lLnZhbHVlXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCdcclxuICAgICAgfSlcclxuICBcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAvLyByZXN1bHQudXNlciA9PiAnQWRhIExvdmVsYWNlJ1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3JlZ2lzdGVyVXNlcn0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEZvcm0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=