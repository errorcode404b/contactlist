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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\coder\\Documents\\contactlist\\pages\\index.js",
    _s = $RefreshSig$();











function Home() {
  _s();

  var _this = this;

  var _useDisclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useDisclosure)(),
      isOpen = _useDisclosure.isOpen,
      onClose = _useDisclosure.onClose,
      onOpen = _useDisclosure.onOpen;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      contactList = _useState[0],
      setContactList = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

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
    return C_Users_coder_Documents_contactlist_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {} catch (e) {
              console.error(e);
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
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
              // setContactList(response.data);
              console.log(response);
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
  var addContact = 2;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "My Contact List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
          children: "Your contact list!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: getContact,
          children: "Get Contacts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 5
        }, this), contactList.map(function (contact) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().addresslist),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().addresslistitem),
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().addresslistimage)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 51
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().addresslistimage),
                src: contact.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 10
              }, _this), " ", contact.firstName, " ", contact.lastName, " ", contact.email, " ", contact.phone, " ", contact.work]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 10
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().addressedit),
              onClick: updateContact,
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 10
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().addressremove),
              onClick: function onClick() {
                return removeContact(contact._id);
              },
              children: "Remove"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 10
            }, _this)]
          }, contact._id, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 9
          }, _this);
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
            onClick: onOpen,
            children: "Add Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().logo),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: "/vercel.svg",
            alt: "Vercel Logo",
            width: 72,
            height: 16
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Modal, {
      onClose: onClose,
      isOpen: isOpen,
      isCentered: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.ModalOverlay, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.ModalContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.ModalCloseButton, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.ModalBody, {
          padding: 12,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "In THE MODAL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

_s(Home, "T/V6R38lMhnKAPa1+LvYzvdZr28=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useDisclosure];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZURpc2Nsb3N1cmUiLCJpc09wZW4iLCJvbkNsb3NlIiwib25PcGVuIiwidXNlU3RhdGUiLCJjb250YWN0TGlzdCIsInNldENvbnRhY3RMaXN0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZ2V0Q29udGFjdCIsInVzZUNhbGxiYWNrIiwiYXhpb3MiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJuZXdDb250YWN0IiwiZSIsInVwZGF0ZUNvbnRhY3QiLCJyZW1vdmVDb250YWN0IiwiaWQiLCJsb2ciLCJhZGRDb250YWN0Iiwic3R5bGVzIiwibWFwIiwiY29udGFjdCIsImFkZHJlc3NsaXN0aW1hZ2UiLCJpbWFnZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZSIsIndvcmsiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsdUJBQ09DLCtEQUFhLEVBRHBCO0FBQUEsTUFDckJDLE1BRHFCLGtCQUNyQkEsTUFEcUI7QUFBQSxNQUNiQyxPQURhLGtCQUNiQSxPQURhO0FBQUEsTUFDSkMsTUFESSxrQkFDSkEsTUFESTs7QUFBQSxrQkFFU0MsK0NBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFdEJDLFdBRnNCO0FBQUEsTUFFVEMsY0FGUzs7QUFBQSxtQkFHS0YsK0NBQVEsQ0FBQyxLQUFELENBSGI7QUFBQSxNQUd0QkcsU0FIc0I7QUFBQSxNQUdYQyxZQUhXOztBQUs3QixNQUFNQyxVQUFVLEdBQUdDLGtEQUFXLHlSQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxt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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NGLGVBdURFLDhEQUFDLG1EQUFEO0FBQU8sYUFBTyxFQUFFckIsT0FBaEI7QUFBeUIsWUFBTSxFQUFFRCxNQUFqQztBQUF5QyxnQkFBVSxNQUFuRDtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHVEQUFEO0FBQVcsaUJBQU8sRUFBRSxFQUFwQjtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvRUQ7O0dBL0h1QkYsSTtVQUNjQywyRDs7O0tBRGRELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGNkN2Y2OGQxYjVmZTA3ZjFlODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsT3ZlcmxheSwgTW9kYWxCb2R5LCBNb2RhbENvbnRlbnQsIE1vZGFsQ2xvc2VCdXR0b24sIHVzZURpc2Nsb3N1cmUsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBnZXRVUkwgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25DbG9zZSwgb25PcGVuIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3QgW2NvbnRhY3RMaXN0LCBzZXRDb250YWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZ2V0Q29udGFjdCA9IHVzZUNhbGxiYWNrKCBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jb250YWN0cycpO1xyXG4gICAgICBzZXRDb250YWN0TGlzdChyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG5ld0NvbnRhY3QgPSB1c2VDYWxsYmFjayggYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcblxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQ29udGFjdCA9IHVzZUNhbGxiYWNrKCBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKCcvYXBpL2NvbnRhY3RzJyk7XHJcbiAgICAgIHNldENvbnRhY3RMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByZW1vdmVDb250YWN0ID0gdXNlQ2FsbGJhY2soIGFzeW5jIChpZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoYC9hcGkvY29udGFjdHMvJHtpZH1gKTtcclxuICAgICAgLy8gc2V0Q29udGFjdExpc3QocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuXHJcbiAgfSwgW10pO1xyXG5cclxuY29uc3QgYWRkQ29udGFjdCA9IDJcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TXkgQ29udGFjdCBMaXN0PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIFlvdXIgY29udGFjdCBsaXN0IVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRDb250YWN0fT5HZXQgQ29udGFjdHM8L2J1dHRvbj5cclxuICAgICAge2NvbnRhY3RMaXN0Lm1hcCgoY29udGFjdCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc2xpc3R9IGtleT17Y29udGFjdC5faWR9PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZHJlc3NsaXN0aXRlbX0+IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc2xpc3RpbWFnZX0+IFxyXG4gICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc2xpc3RpbWFnZX0gc3JjPXtjb250YWN0LmltYWdlfSAvPiB7Y29udGFjdC5maXJzdE5hbWV9IHtjb250YWN0Lmxhc3ROYW1lfSB7Y29udGFjdC5lbWFpbH0ge2NvbnRhY3QucGhvbmV9IHtjb250YWN0Lndvcmt9PC9kaXY+IFxyXG4gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZHJlc3NlZGl0fSBvbkNsaWNrPXt1cGRhdGVDb250YWN0fT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc3JlbW92ZX0gb25DbGljaz17KCkgPT4gcmVtb3ZlQ29udGFjdChjb250YWN0Ll9pZCl9PlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25PcGVufT5BZGQgQ29udGFjdDwvQnV0dG9uPlxyXG4gICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc25ld30gb25DbGljaz17c2hvd0lucHV0Qm94fT5BZGQgQ29udGFjdDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRyZXNzbmV3fSBvbkNsaWNrPXsoKSA9PiBuZXdDb250YWN0KGNvbnRhY3QuX2lkKX0+QWRkIENvbnRhY3Q8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc25ld30gb25DbGljaz17KCkgPT4gbmV3Q29udGFjdChjb250YWN0Ll9pZCl9PlNhdmU8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDxNb2RhbCBvbkNsb3NlPXtvbkNsb3NlfSBpc09wZW49e2lzT3Blbn0gaXNDZW50ZXJlZD5cclxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XHJcbiAgICAgICAgPE1vZGFsQ29udGVudD5cclxuICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uLz5cclxuICAgICAgICAgIDxNb2RhbEJvZHkgcGFkZGluZz17MTJ9PlxyXG4gICAgICAgICAgICA8aDE+SW4gVEhFIE1PREFMPC9oMT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICA8L01vZGFsQ29udGVudD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9