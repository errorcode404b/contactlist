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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
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
  var updateContact = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/(0,C_Users_coder_Documents_contactlist_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var response;
    return C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_6___default().patch('/api/contacts');

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
  var removeContact = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/(0,C_Users_coder_Documents_contactlist_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    var response;
    return C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_6___default().post('/api/contacts');

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),
          children: "Welcome to my contact list!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: getContact,
          children: "Get Contacts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 7
        }, this), contactList.map(function (contact) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().addresslist),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().addresslistitem),
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().addresslistimage),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [contact.image(profileImage), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                    src: profileImage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 51
              }, _this), " ", contact.firstName, " ", contact.lastName, " ", contact.email, " ", contact.phone, " ", contact.work]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 10
            }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().addressedit),
                onClick: updateContact,
                children: "Edit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 114
              }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().addressremove),
                onClick: removeContact,
                children: "Remove"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 191
              }, _this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 109
            }, _this)]
          }, contact.id, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 9
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: "/vercel.svg",
            alt: "Vercel Logo",
            width: 72,
            height: 16
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(Home, "TbOR90OrjmEuqm4n+raD9UVbVBU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiY29udGFjdExpc3QiLCJzZXRDb250YWN0TGlzdCIsImdldENvbnRhY3QiLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwidXBkYXRlQ29udGFjdCIsInJlbW92ZUNvbnRhY3QiLCJzdHlsZXMiLCJtYXAiLCJjb250YWN0IiwiaW1hZ2UiLCJwcm9maWxlSW1hZ2UiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmUiLCJ3b3JrIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRVNDLCtDQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXRCQyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBSTdCLE1BQU1DLFVBQVUsR0FBR0Msa0RBQVcseVJBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVMQyxnREFBQSxDQUFVLGVBQVYsQ0FGSzs7QUFBQTtBQUV0QkMsb0JBRnNCO0FBRzVCSiwwQkFBYyxDQUFDSSxRQUFRLENBQUNDLElBQVYsQ0FBZDtBQUg0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVE1QkMsbUJBQU8sQ0FBQ0MsS0FBUjs7QUFSNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRixJQVczQixFQVgyQixDQUE5QjtBQWFBLE1BQU1DLGFBQWEsR0FBR04sa0RBQVcseVJBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVSQyxrREFBQSxDQUFZLGVBQVosQ0FGUTs7QUFBQTtBQUV6QkMsb0JBRnlCO0FBRy9CSiww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QU0sRUFBQyxRQUZUO0FBR0UsV0FBRyxFQUFDLHFCQUhOO0FBQUEsaUNBS2EsR0FMYixlQU1FO0FBQU0sbUJBQVMsRUFBRUEscUVBQWpCO0FBQUEsaUNBQ0UsOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUMsYUFBWDtBQUF5QixlQUFHLEVBQUMsYUFBN0I7QUFBMkMsaUJBQUssRUFBRSxFQUFsRDtBQUFzRCxrQkFBTSxFQUFFO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtREQ7O0dBL0Z1QmIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40N2M2ODg1MzNlYjY4ODlmNzZlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBbY29udGFjdExpc3QsIHNldENvbnRhY3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udGFjdCA9IHVzZUNhbGxiYWNrKCBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jb250YWN0cycpO1xyXG4gICAgICBzZXRDb250YWN0TGlzdChyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUNvbnRhY3QgPSB1c2VDYWxsYmFjayggYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaCgnL2FwaS9jb250YWN0cycpO1xyXG4gICAgICBzZXRDb250YWN0TGlzdChyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUNvbnRhY3QgPSB1c2VDYWxsYmFjayggYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2NvbnRhY3RzJyk7XHJcbiAgICAgIHNldENvbnRhY3RMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICBXZWxjb21lIHRvIG15IGNvbnRhY3QgbGlzdCFcclxuICAgICAgICA8L2gxPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRDb250YWN0fT5HZXQgQ29udGFjdHM8L2J1dHRvbj5cclxuICAgICAge2NvbnRhY3RMaXN0Lm1hcCgoY29udGFjdCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc2xpc3R9IGtleT17Y29udGFjdC5pZH0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc2xpc3RpdGVtfT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRyZXNzbGlzdGltYWdlfT4gXHJcbiAgICAgICAgIDxkaXY+XHJcbiAgICAgICAge2NvbnRhY3QuaW1hZ2UocHJvZmlsZUltYWdlKX0gXHJcbiAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICBzcmM9e3Byb2ZpbGVJbWFnZX0vPlxyXG4gICAgICBcclxuICAgICAgICAgPC9kaXY+IFxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwvZGl2PiB7Y29udGFjdC5maXJzdE5hbWV9IHtjb250YWN0Lmxhc3ROYW1lfSB7Y29udGFjdC5lbWFpbH0ge2NvbnRhY3QucGhvbmV9IHtjb250YWN0Lndvcmt9PC9kaXY+IDxkaXY+PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRyZXNzZWRpdH0gb25DbGljaz17dXBkYXRlQ29udGFjdH0+RWRpdDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZHJlc3NyZW1vdmV9IG9uQ2xpY2s9e3JlbW92ZUNvbnRhY3R9PlJlbW92ZTwvYnV0dG9uPiA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUG93ZXJlZCBieXsnICd9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9