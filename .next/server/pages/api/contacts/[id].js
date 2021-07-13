(function() {
var exports = {};
exports.id = "pages/api/contacts/[id]";
exports.ids = ["pages/api/contacts/[id]"];
exports.modules = {

/***/ "./pages/api/contacts/[id].js":
/*!************************************!*\
  !*** ./pages/api/contacts/[id].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/contacts-service */ "./services/contacts-service.js");


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === "GET") {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://graphql.fauna.com/graphql', {
      query: `
              query {
                  findContactByID(id: ${reg.query.id}) {
                          _id
                          image
                          firstName
                          lastName
                          email
                          phone
                          work
                  } 
              }
          `
    }, {
      headers: {
        Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8"
      }
    });

    if (!response.data.data.findContactByID) {
      res.status(404).json();
      return;
    }

    res.status(200).json(response.data.data.findContactByID);
  }

  if (req.method === "PUT") {
    const contact = (0,_services_contacts_service__WEBPACK_IMPORTED_MODULE_1__.fullUpdate)(req.query.id, req.body);

    if (!contact) {
      res.status(404).json();
      return;
    }

    res.status(200).json(contact);
  }

  if (req.method === "PATCH") {
    const contact = (0,_services_contacts_service__WEBPACK_IMPORTED_MODULE_1__.partialUpdate)(req.query.id, req.body);

    if (!contact) {
      res.status(404).json();
      return;
    }

    res.status(200).json(contact);
  }

  if (req.method === "DELETE") {
    (0,_services_contacts_service__WEBPACK_IMPORTED_MODULE_1__.deleteContact)(req.query.id);
    res.status(204).json();
  }
});

/***/ }),

/***/ "./services/contacts-service.js":
/*!**************************************!*\
  !*** ./services/contacts-service.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllContacts": function() { return /* binding */ getAllContacts; },
/* harmony export */   "createContact": function() { return /* binding */ createContact; },
/* harmony export */   "findContactByID": function() { return /* binding */ findContactByID; },
/* harmony export */   "fullUpdate": function() { return /* binding */ fullUpdate; },
/* harmony export */   "partialUpdate": function() { return /* binding */ partialUpdate; },
/* harmony export */   "deleteContact": function() { return /* binding */ deleteContact; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const GRAPHQL_URL = "https://graphql.fauna.com/graphql";
const headers = {
  Authorization: `Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8`
};
const ALL_CONTACTS = `
query {
  allContacts {
    data {
      _id
      image
      firstName
      lastName
      email
      phone
      work
    }
  }
}`;
const CREATE_CONTACT = `
mutation createContact($data: ContactInput!) {
  createContact(data: $data) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
    }    
}`;
const FIND_CONTACT_BY_ID = `
query findContactByID($id: ID!) {
  findContactByID(id: $id) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
  }
}`;
const UPDATE_CONTACT = `
mutation updateContact($id: ID!, $contactInput: ContactInput!) {
  updateContact(id: $id, data: $contactInput ) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
  }
}`;
const PARTIAL_UPDATE_CONTACT = `
mutation partialUpdateContact($id: ID!, $contactInput: PartialUpdateContactInput!) {
  partialUpdateContact(id: $id, data: $contactInput ) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
  }
}`;
const DELETE_CONTACT = `
mutation deleteContact($id: ID!) {
  deleteContact(id: $id) {
    _id
    image
    firstName
    lastName
    email
    phone
    work
  }
}`;

const graphqlRequest = (query, variables, addtionalHeaders = {}) => axios__WEBPACK_IMPORTED_MODULE_0___default().post(GRAPHQL_URL, {
  query,
  variables
}, {
  headers: _objectSpread(_objectSpread({}, headers), addtionalHeaders)
});

const getAllContacts = () => graphqlRequest(ALL_CONTACTS);
const createContact = contactInput => graphqlRequest(CREATE_CONTACT, {
  data: contactInput
});
const findContactByID = id => graphqlRequest(FIND_CONTACT_BY_ID, {
  id
});
const fullUpdate = (id, input) => graphqlRequest(UPDATE_CONTACT, {
  id,
  data: input
});
const partialUpdate = (id, input) => graphqlRequest(PARTIAL_UPDATE_CONTACT, {
  id,
  data: input
}, {
  "X-Schema-Preview": "partial-update-mutation"
});
const deleteContact = id => graphqlRequest(DELETE_CONTACT, {
  id
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/contacts/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWN0bGlzdC8uL3BhZ2VzL2FwaS9jb250YWN0cy9baWRdLmpzIiwid2VicGFjazovL2NvbnRhY3RsaXN0Ly4vc2VydmljZXMvY29udGFjdHMtc2VydmljZS5qcyIsIndlYnBhY2s6Ly9jb250YWN0bGlzdC9leHRlcm5hbCBcImF4aW9zXCIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwicmVzcG9uc2UiLCJheGlvcyIsInF1ZXJ5IiwicmVnIiwiaWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJmaW5kQ29udGFjdEJ5SUQiLCJzdGF0dXMiLCJqc29uIiwiY29udGFjdCIsImZ1bGxVcGRhdGUiLCJib2R5IiwicGFydGlhbFVwZGF0ZSIsImRlbGV0ZUNvbnRhY3QiLCJHUkFQSFFMX1VSTCIsIkFMTF9DT05UQUNUUyIsIkNSRUFURV9DT05UQUNUIiwiRklORF9DT05UQUNUX0JZX0lEIiwiVVBEQVRFX0NPTlRBQ1QiLCJQQVJUSUFMX1VQREFURV9DT05UQUNUIiwiREVMRVRFX0NPTlRBQ1QiLCJncmFwaHFsUmVxdWVzdCIsInZhcmlhYmxlcyIsImFkZHRpb25hbEhlYWRlcnMiLCJnZXRBbGxDb250YWN0cyIsImNyZWF0ZUNvbnRhY3QiLCJjb250YWN0SW5wdXQiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBRWpDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3RCLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxpREFBQSxDQUFXLG1DQUFYLEVBQ25CO0FBQ0lDLFdBQUssRUFBRztBQUN0QjtBQUNBLHdDQUF3Q0MsR0FBRyxDQUFDRCxLQUFKLENBQVVFLEVBQUc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiVSxLQURt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QVQsQ0FIRixDQURGOztBQU9PLE1BQU1DLGNBQWMsR0FBRyxNQUFNSCxjQUFjLENBQUNOLFlBQUQsQ0FBM0M7QUFFQSxNQUFNVSxhQUFhLEdBQUlDLFlBQUQsSUFDM0JMLGNBQWMsQ0FBQ0wsY0FBRCxFQUFpQjtBQUFFWCxNQUFJLEVBQUVxQjtBQUFSLENBQWpCLENBRFQ7QUFHQSxNQUFNcEIsZUFBZSxHQUFJSixFQUFELElBQzdCbUIsY0FBYyxDQUFDSixrQkFBRCxFQUFxQjtBQUFFZjtBQUFGLENBQXJCLENBRFQ7QUFHQSxNQUFNUSxVQUFVLEdBQUcsQ0FBQ1IsRUFBRCxFQUFLeUIsS0FBTCxLQUN4Qk4sY0FBYyxDQUFDSCxjQUFELEVBQWlCO0FBQUVoQixJQUFGO0FBQU1HLE1BQUksRUFBRXNCO0FBQVosQ0FBakIsQ0FEVDtBQUdBLE1BQU1mLGFBQWEsR0FBRyxDQUFDVixFQUFELEVBQUt5QixLQUFMLEtBQzNCTixjQUFjLENBQ1pGLHNCQURZLEVBRVo7QUFBRWpCLElBQUY7QUFBTUcsTUFBSSxFQUFFc0I7QUFBWixDQUZZLEVBR1o7QUFBRSxzQkFBb0I7QUFBdEIsQ0FIWSxDQURUO0FBT0EsTUFBTWQsYUFBYSxHQUFJWCxFQUFELElBQVFtQixjQUFjLENBQUNELGNBQUQsRUFBaUI7QUFBRWxCO0FBQUYsQ0FBakIsQ0FBNUMsQzs7Ozs7Ozs7Ozs7QUNoSFAsbUMiLCJmaWxlIjoicGFnZXMvYXBpL2NvbnRhY3RzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFxyXG4gICAgZ2V0Q29udGFjdCxcclxuICAgIGZ1bGxVcGRhdGUsXHJcbiAgICBwYXJ0aWFsVXBkYXRlLFxyXG4gICAgZGVsZXRlQ29udGFjdCxcclxufSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvY29udGFjdHMtc2VydmljZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vZ3JhcGhxbC5mYXVuYS5jb20vZ3JhcGhxbCcsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICBxdWVyeSB7XHJcbiAgICAgICAgICAgICAgICAgIGZpbmRDb250YWN0QnlJRChpZDogJHtyZWcucXVlcnkuaWR9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrXHJcbiAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBmbkFFTVJ3MnlnQUNBQ0pXQXV5TE1lU3FhQlIzNGFkQ2ZDY2VyZ284XCIsICAgXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgXHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLmRhdGEuZGF0YS5maW5kQ29udGFjdEJ5SUQpIHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLmRhdGEuZGF0YS5maW5kQ29udGFjdEJ5SUQpO1xyXG5cclxuICB9XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBVVFwiKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBmdWxsVXBkYXRlKHJlcS5xdWVyeS5pZCwgcmVxLmJvZHkpO1xyXG4gICAgICBpZighY29udGFjdCl7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbigpO1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oY29udGFjdCk7XHJcbiAgfVxyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQQVRDSFwiKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBwYXJ0aWFsVXBkYXRlKHJlcS5xdWVyeS5pZCwgcmVxLmJvZHkpO1xyXG4gICAgICBpZighY29udGFjdCl7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbigpO1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oY29udGFjdCk7XHJcbiAgfVxyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xyXG4gICAgICBkZWxldGVDb250YWN0KHJlcS5xdWVyeS5pZCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjA0KS5qc29uKCk7XHJcbiAgfVxyXG59OyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgR1JBUEhRTF9VUkwgPSBcImh0dHBzOi8vZ3JhcGhxbC5mYXVuYS5jb20vZ3JhcGhxbFwiO1xuY29uc3QgaGVhZGVycyA9IHtcbiAgQXV0aG9yaXphdGlvbjogYEJlYXJlciBmbkFFTVJ3MnlnQUNBQ0pXQXV5TE1lU3FhQlIzNGFkQ2ZDY2VyZ284YCxcbn07XG5cbmNvbnN0IEFMTF9DT05UQUNUUyA9IGBcbnF1ZXJ5IHtcbiAgYWxsQ29udGFjdHMge1xuICAgIGRhdGEge1xuICAgICAgX2lkXG4gICAgICBpbWFnZVxuICAgICAgZmlyc3ROYW1lXG4gICAgICBsYXN0TmFtZVxuICAgICAgZW1haWxcbiAgICAgIHBob25lXG4gICAgICB3b3JrXG4gICAgfVxuICB9XG59YDtcblxuY29uc3QgQ1JFQVRFX0NPTlRBQ1QgPSBgXG5tdXRhdGlvbiBjcmVhdGVDb250YWN0KCRkYXRhOiBDb250YWN0SW5wdXQhKSB7XG4gIGNyZWF0ZUNvbnRhY3QoZGF0YTogJGRhdGEpIHtcbiAgICBfaWRcbiAgICBpbWFnZVxuICAgIGZpcnN0TmFtZVxuICAgIGxhc3ROYW1lXG4gICAgZW1haWxcbiAgICBwaG9uZVxuICAgIHdvcmtcbiAgICB9ICAgIFxufWA7XG5cbmNvbnN0IEZJTkRfQ09OVEFDVF9CWV9JRCA9IGBcbnF1ZXJ5IGZpbmRDb250YWN0QnlJRCgkaWQ6IElEISkge1xuICBmaW5kQ29udGFjdEJ5SUQoaWQ6ICRpZCkge1xuICAgIF9pZFxuICAgIGltYWdlXG4gICAgZmlyc3ROYW1lXG4gICAgbGFzdE5hbWVcbiAgICBlbWFpbFxuICAgIHBob25lXG4gICAgd29ya1xuICB9XG59YDtcblxuY29uc3QgVVBEQVRFX0NPTlRBQ1QgPSBgXG5tdXRhdGlvbiB1cGRhdGVDb250YWN0KCRpZDogSUQhLCAkY29udGFjdElucHV0OiBDb250YWN0SW5wdXQhKSB7XG4gIHVwZGF0ZUNvbnRhY3QoaWQ6ICRpZCwgZGF0YTogJGNvbnRhY3RJbnB1dCApIHtcbiAgICBfaWRcbiAgICBpbWFnZVxuICAgIGZpcnN0TmFtZVxuICAgIGxhc3ROYW1lXG4gICAgZW1haWxcbiAgICBwaG9uZVxuICAgIHdvcmtcbiAgfVxufWA7XG5cbmNvbnN0IFBBUlRJQUxfVVBEQVRFX0NPTlRBQ1QgPSBgXG5tdXRhdGlvbiBwYXJ0aWFsVXBkYXRlQ29udGFjdCgkaWQ6IElEISwgJGNvbnRhY3RJbnB1dDogUGFydGlhbFVwZGF0ZUNvbnRhY3RJbnB1dCEpIHtcbiAgcGFydGlhbFVwZGF0ZUNvbnRhY3QoaWQ6ICRpZCwgZGF0YTogJGNvbnRhY3RJbnB1dCApIHtcbiAgICBfaWRcbiAgICBpbWFnZVxuICAgIGZpcnN0TmFtZVxuICAgIGxhc3ROYW1lXG4gICAgZW1haWxcbiAgICBwaG9uZVxuICAgIHdvcmtcbiAgfVxufWA7XG5cbmNvbnN0IERFTEVURV9DT05UQUNUID0gYFxubXV0YXRpb24gZGVsZXRlQ29udGFjdCgkaWQ6IElEISkge1xuICBkZWxldGVDb250YWN0KGlkOiAkaWQpIHtcbiAgICBfaWRcbiAgICBpbWFnZVxuICAgIGZpcnN0TmFtZVxuICAgIGxhc3ROYW1lXG4gICAgZW1haWxcbiAgICBwaG9uZVxuICAgIHdvcmtcbiAgfVxufWA7XG5cbmNvbnN0IGdyYXBocWxSZXF1ZXN0ID0gKHF1ZXJ5LCB2YXJpYWJsZXMsIGFkZHRpb25hbEhlYWRlcnMgPSB7fSkgPT5cbiAgYXhpb3MucG9zdChcbiAgICBHUkFQSFFMX1VSTCxcbiAgICB7IHF1ZXJ5LCB2YXJpYWJsZXMgfSxcbiAgICB7IGhlYWRlcnM6IHsgLi4uaGVhZGVycywgLi4uYWRkdGlvbmFsSGVhZGVycyB9IH1cbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbENvbnRhY3RzID0gKCkgPT4gZ3JhcGhxbFJlcXVlc3QoQUxMX0NPTlRBQ1RTKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbnRhY3QgPSAoY29udGFjdElucHV0KSA9PlxuICBncmFwaHFsUmVxdWVzdChDUkVBVEVfQ09OVEFDVCwgeyBkYXRhOiBjb250YWN0SW5wdXQgfSk7XG5cbmV4cG9ydCBjb25zdCBmaW5kQ29udGFjdEJ5SUQgPSAoaWQpID0+XG4gIGdyYXBocWxSZXF1ZXN0KEZJTkRfQ09OVEFDVF9CWV9JRCwgeyBpZCB9KTtcblxuZXhwb3J0IGNvbnN0IGZ1bGxVcGRhdGUgPSAoaWQsIGlucHV0KSA9PlxuICBncmFwaHFsUmVxdWVzdChVUERBVEVfQ09OVEFDVCwgeyBpZCwgZGF0YTogaW5wdXQgfSk7XG5cbmV4cG9ydCBjb25zdCBwYXJ0aWFsVXBkYXRlID0gKGlkLCBpbnB1dCkgPT5cbiAgZ3JhcGhxbFJlcXVlc3QoXG4gICAgUEFSVElBTF9VUERBVEVfQ09OVEFDVCxcbiAgICB7IGlkLCBkYXRhOiBpbnB1dCB9LFxuICAgIHsgXCJYLVNjaGVtYS1QcmV2aWV3XCI6IFwicGFydGlhbC11cGRhdGUtbXV0YXRpb25cIiB9XG4gICk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb250YWN0ID0gKGlkKSA9PiBncmFwaHFsUmVxdWVzdChERUxFVEVfQ09OVEFDVCwgeyBpZCB9KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9