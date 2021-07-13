self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_coder_Documents_contactlist_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\coder\\Documents\\contactlist\\pages\\index.js",
    _s = $RefreshSig$();







function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      contactList = _useState[0],
      setContactList = _useState[1];

  var getContact = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/(0,C_Users_coder_Documents_contactlist_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response;
    return C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_6___default().get('/api/contacts');

          case 3:
            response = _context.sent;
            setContactList(response.data);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  })), []);
  var newContact = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/(0,C_Users_coder_Documents_contactlist_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var response;
    return C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/api/contacts');

          case 3:
            response = _context2.sent;
            setContactList(response.data);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  })), []);
  var updateContact = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/(0,C_Users_coder_Documents_contactlist_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    var response;
    return C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_6___default().patch('/api/contacts');

          case 3:
            response = _context3.sent;
            setContactList(response.data);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  })), []);
  var removeContact = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_coder_Documents_contactlist_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(id) {
      var response;
      return C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default().delete("/api/contacts/".concat(id));

            case 3:
              response = _context4.sent;
              setContactList(response.data);
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }(), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "My Contact List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
          children: "Welcome to my contact list!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: newContact,
          children: "New Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: getContact,
          children: "Get Contacts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7
        }, this), contactList.map(function (contact) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().addresslist),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().addresslistitem),
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().addresslistimage)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 51
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().addresslistimage),
                src: contact.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 10
              }, _this), " ", contact.firstName, " ", contact.lastName, " ", contact.email, " ", contact.phone, " ", contact.work]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 10
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().addressedit),
              onClick: updateContact,
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 10
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().addressremove),
              onClick: function onClick() {
                return removeContact(contact.id);
              },
              children: "Remove"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 10
            }, _this)]
          }, contact.id, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 9
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: "/vercel.svg",
            alt: "Vercel Logo",
            width: 72,
            height: 16
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

_s(Home, "tK6ZizXnFqf2hZ00ULt4mGlnXIs=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiY29udGFjdExpc3QiLCJzZXRDb250YWN0TGlzdCIsImdldENvbnRhY3QiLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwibmV3Q29udGFjdCIsInVwZGF0ZUNvbnRhY3QiLCJyZW1vdmVDb250YWN0IiwiaWQiLCJzdHlsZXMiLCJtYXAiLCJjb250YWN0IiwiYWRkcmVzc2xpc3RpbWFnZSIsImltYWdlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwid29yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRVNDLCtDQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXRCQyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBSTdCLE1BQU1DLFVBQVUsR0FBR0Msa0RBQVcseVJBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVMQyxnREFBQSxDQUFVLGVBQVYsQ0FGSzs7QUFBQTtBQUV0QkMsb0JBRnNCO0FBRzVCSiwwQkFBYyxDQUFDSSxRQUFRLENBQUNDLElBQVYsQ0FBZDtBQUg0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVE1QkMsbUJBQU8sQ0FBQ0MsS0FBUjs7QUFSNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRixJQVczQixFQVgyQixDQUE5QjtBQWFBLE1BQU1DLFVBQVUsR0FBR04sa0RBQVcseVJBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVMQyxpREFBQSxDQUFXLGVBQVgsQ0FGSzs7QUFBQTtBQUV0QkMsb0JBRnNCO0FBRzVCSiwwQkFBYyxDQUFDSSxRQUFRLENBQUNDLElBQVYsQ0FBZDtBQUg0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVE1QkMsbUJBQU8sQ0FBQ0MsS0FBUjs7QUFSNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRixJQVczQixFQVgyQixDQUE5QjtBQWFBLE1BQU1FLGFBQWEsR0FBR1Asa0RBQVcseVJBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVSQyxrREFBQSxDQUFZLGVBQVosQ0FGUTs7QUFBQTtBQUV6QkMsb0JBRnlCO0FBRy9CSiwwQkFBYyxDQUFDSSxRQUFRLENBQUNDLElBQVYsQ0FBZDtBQUgrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU8vQkMsbUJBQU8sQ0FBQ0MsS0FBUjs7QUFQK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRixJQVU5QixFQVY4QixDQUFqQztBQVlBLE1BQU1HLGFBQWEsR0FBR1Isa0RBQVc7QUFBQSwwUkFBRSxrQkFBT1MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVJSLG1EQUFBLHlCQUE4QlEsRUFBOUIsRUFGUTs7QUFBQTtBQUV6QlAsc0JBRnlCO0FBRy9CSiw0QkFBYyxDQUFDSSxRQUFRLENBQUNDLElBQVYsQ0FBZDtBQUgrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVEvQkMscUJBQU8sQ0FBQ0MsS0FBUjs7QUFSK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVc5QixFQVg4QixDQUFqQztBQWFBLHNCQUNFO0FBQUssYUFBUyxFQUFFSywwRUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRTtBQUFNLGVBQVMsRUFBRUEscUVBQWpCO0FBQUEsOEJBQ0Y7QUFBQSwrQkFDSTtBQUFJLG1CQUFTLEVBQUVBLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURFLGVBT0Y7QUFBQSxnQ0FDRTtBQUFRLGlCQUFPLEVBQUVKLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBUSxpQkFBTyxFQUFFUCxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixFQUtHRixXQUFXLENBQUNjLEdBQVosQ0FBZ0IsVUFBQ0MsT0FBRDtBQUFBLDhCQUNmO0FBQUsscUJBQVMsRUFBRUYsNEVBQWhCO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFFQSxnRkFBaEI7QUFBQSwyQ0FBeUM7QUFBSyx5QkFBUyxFQUFFQSxpRkFBdUJHO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXpDLGVBRUE7QUFBSyx5QkFBUyxFQUFFSCxpRkFBaEI7QUFBeUMsbUJBQUcsRUFBRUUsT0FBTyxDQUFDRTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZBLE9BRWlFRixPQUFPLENBQUNHLFNBRnpFLE9BRXFGSCxPQUFPLENBQUNJLFFBRjdGLE9BRXdHSixPQUFPLENBQUNLLEtBRmhILE9BRXdITCxPQUFPLENBQUNNLEtBRmhJLE9BRXdJTixPQUFPLENBQUNPLElBRmhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDO0FBQVEsdUJBQVMsRUFBRVQsNEVBQW5CO0FBQXVDLHFCQUFPLEVBQUVILGFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpELGVBS0M7QUFBUSx1QkFBUyxFQUFFRyw4RUFBbkI7QUFBeUMscUJBQU8sRUFBRTtBQUFBLHVCQUFNRixhQUFhLENBQUNJLE9BQU8sQ0FBQ0gsRUFBVCxDQUFuQjtBQUFBLGVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxEO0FBQUEsYUFBeUNHLE9BQU8sQ0FBQ0gsRUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWhCLENBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFnQ0U7QUFBUSxlQUFTLEVBQUVDLHVFQUFuQjtBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLHdHQURQO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFHRSxXQUFHLEVBQUMscUJBSE47QUFBQSxpQ0FLYSxHQUxiLGVBTUU7QUFBTSxtQkFBUyxFQUFFQSxxRUFBakI7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUFPLGVBQUcsRUFBQyxhQUFYO0FBQXlCLGVBQUcsRUFBQyxhQUE3QjtBQUEyQyxpQkFBSyxFQUFFLEVBQWxEO0FBQXNELGtCQUFNLEVBQUU7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0F0R3VCZixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM1MGFkOWRiOTE2MmY5NWRiZDZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgZ2V0VVJMIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFtjb250YWN0TGlzdCwgc2V0Q29udGFjdExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRDb250YWN0ID0gdXNlQ2FsbGJhY2soIGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NvbnRhY3RzJyk7XHJcbiAgICAgIHNldENvbnRhY3RMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbmV3Q29udGFjdCA9IHVzZUNhbGxiYWNrKCBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvY29udGFjdHMnKTtcclxuICAgICAgc2V0Q29udGFjdExpc3QocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVDb250YWN0ID0gdXNlQ2FsbGJhY2soIGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goJy9hcGkvY29udGFjdHMnKTtcclxuICAgICAgc2V0Q29udGFjdExpc3QocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUNvbnRhY3QgPSB1c2VDYWxsYmFjayggYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgL2FwaS9jb250YWN0cy8ke2lkfWApO1xyXG4gICAgICBzZXRDb250YWN0TGlzdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NeSBDb250YWN0IExpc3Q8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgV2VsY29tZSB0byBteSBjb250YWN0IGxpc3QhXHJcbiAgICAgICAgPC9oMT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17bmV3Q29udGFjdH0+TmV3IENvbnRhY3Q8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldENvbnRhY3R9PkdldCBDb250YWN0czwvYnV0dG9uPlxyXG4gICAgICB7Y29udGFjdExpc3QubWFwKChjb250YWN0KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRyZXNzbGlzdH0ga2V5PXtjb250YWN0LmlkfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRyZXNzbGlzdGl0ZW19PiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZHJlc3NsaXN0aW1hZ2V9PiBcclxuICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmFkZHJlc3NsaXN0aW1hZ2V9IHNyYz17Y29udGFjdC5pbWFnZX0gLz4ge2NvbnRhY3QuZmlyc3ROYW1lfSB7Y29udGFjdC5sYXN0TmFtZX0ge2NvbnRhY3QuZW1haWx9IHtjb250YWN0LnBob25lfSB7Y29udGFjdC53b3JrfTwvZGl2PiBcclxuICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRyZXNzZWRpdH0gb25DbGljaz17dXBkYXRlQ29udGFjdH0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZHJlc3NyZW1vdmV9IG9uQ2xpY2s9eygpID0+IHJlbW92ZUNvbnRhY3QoY29udGFjdC5pZCl9PlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=