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
    return C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {} catch (e) {
              console.error(e);
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "My Contact List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
          children: "Welcome to my contact list!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: getContact,
          children: "Get Contacts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
                lineNumber: 69,
                columnNumber: 51
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().addresslistimage),
                src: contact.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 10
              }, _this), " ", contact.firstName, " ", contact.lastName, " ", contact.email, " ", contact.phone, " ", contact.work]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 10
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().addressedit),
              onClick: updateContact,
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 10
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().addressremove),
              onClick: removeContact,
              children: "Remove"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 10
            }, _this)]
          }, contact.id, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 9
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: newContact,
          children: "New Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
            lineNumber: 93,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiY29udGFjdExpc3QiLCJzZXRDb250YWN0TGlzdCIsImdldENvbnRhY3QiLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwidXBkYXRlQ29udGFjdCIsInJlbW92ZUNvbnRhY3QiLCJlIiwic3R5bGVzIiwibWFwIiwiY29udGFjdCIsImFkZHJlc3NsaXN0aW1hZ2UiLCJpbWFnZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsIndvcmsiLCJpZCIsIm5ld0NvbnRhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUVTQywrQ0FBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUV0QkMsV0FGc0I7QUFBQSxNQUVUQyxjQUZTOztBQUk3QixNQUFNQyxVQUFVLEdBQUdDLGtEQUFXLHlSQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFTEMsZ0RBQUEsQ0FBVSxlQUFWLENBRks7O0FBQUE7QUFFdEJDLG9CQUZzQjtBQUc1QkosMEJBQWMsQ0FBQ0ksUUFBUSxDQUFDQyxJQUFWLENBQWQ7QUFINEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRNUJDLG1CQUFPLENBQUNDLEtBQVI7O0FBUjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUYsSUFXM0IsRUFYMkIsQ0FBOUI7QUFhQSxNQUFNQyxhQUFhLEdBQUdOLGtEQUFXLHlSQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFUkMsa0RBQUEsQ0FBWSxlQUFaLENBRlE7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ZUFNRTtBQUFNLG1CQUFTLEVBQUVBLHFFQUFqQjtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLGFBQVg7QUFBeUIsZUFBRyxFQUFDLGFBQTdCO0FBQTJDLGlCQUFLLEVBQUUsRUFBbEQ7QUFBc0Qsa0JBQU0sRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREOztHQTNGdUJkLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Q5Y2MxZjc3OTg5YWI5YWI5NjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBnZXRVUkwgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgW2NvbnRhY3RMaXN0LCBzZXRDb250YWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGdldENvbnRhY3QgPSB1c2VDYWxsYmFjayggYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvY29udGFjdHMnKTtcclxuICAgICAgc2V0Q29udGFjdExpc3QocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB1cGRhdGVDb250YWN0ID0gdXNlQ2FsbGJhY2soIGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goJy9hcGkvY29udGFjdHMnKTtcclxuICAgICAgc2V0Q29udGFjdExpc3QocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUNvbnRhY3QgPSB1c2VDYWxsYmFjayggYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk15IENvbnRhY3QgTGlzdDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICBcclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICBXZWxjb21lIHRvIG15IGNvbnRhY3QgbGlzdCFcclxuICAgICAgICA8L2gxPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRDb250YWN0fT5HZXQgQ29udGFjdHM8L2J1dHRvbj5cclxuICAgICAge2NvbnRhY3RMaXN0Lm1hcCgoY29udGFjdCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc2xpc3R9IGtleT17Y29udGFjdC5pZH0+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc2xpc3RpdGVtfT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRyZXNzbGlzdGltYWdlfT4gXHJcbiAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hZGRyZXNzbGlzdGltYWdlfSBzcmM9e2NvbnRhY3QuaW1hZ2V9IC8+IHtjb250YWN0LmZpcnN0TmFtZX0ge2NvbnRhY3QubGFzdE5hbWV9IHtjb250YWN0LmVtYWlsfSB7Y29udGFjdC5waG9uZX0ge2NvbnRhY3Qud29ya308L2Rpdj4gXHJcbiAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc2VkaXR9IG9uQ2xpY2s9e3VwZGF0ZUNvbnRhY3R9PkVkaXQ8L2J1dHRvbj4gXHJcbiAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc3JlbW92ZX0gb25DbGljaz17cmVtb3ZlQ29udGFjdH0+UmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXdDb250YWN0fT5OZXcgQ29udGFjdDwvYnV0dG9uPlxyXG4gXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUG93ZXJlZCBieXsnICd9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9