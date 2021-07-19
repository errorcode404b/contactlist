(function() {
var exports = {};
exports.id = "pages/api/contacts";
exports.ids = ["pages/api/contacts"];
exports.modules = {

/***/ "./pages/api/contacts/index.js":
/*!*************************************!*\
  !*** ./pages/api/contacts/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import {contacts, createContact} from "../../../services/contact-service";

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method === 'GET') {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://graphql.fauna.com/graphql', {
      query: `
            query {
                allContacts {
                    data{
                        _id
                        image
                        firstName
                        lastName
                        email
                        phone
                        work
                    }
                } 
            }

        `
    }, {
      headers: {
        Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8"
      }
    });

    if (response.data.errors) {
      res.status(404).json(response.data.errors);
      return;
    }

    res.status(200).json(response.data.data.allContacts.data);
  }

  if (req.method === 'POST') {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://graphql.fauna.com/graphql', {
      query: `
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
            }
        `,
      variables: {
        data: req.body
      }
    }, {
      headers: {
        Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8"
      }
    });

    if (response.data.errors) {
      res.status(404).json(response.data.errors);
      return;
    }

    res.status(200).json(response.data.data.createContacts);
  }

  if (req.method === 'PUT') {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://graphql.fauna.com/graphql', {
      query: `
            mutation updateContact($id:ID!, $contactInput: ContactInput!) {
                updateContact(id: $id, data: $contactInput) {
                    _id
                    image
                    firstName
                    lastName
                    email
                    phone
                    work
                } 
            }
        `,
      variables: {
        id: req.query.id,
        contactInput: req.body
      }
    }, {
      headers: {
        Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8"
      }
    });

    if (response.data.errors) {
      res.status(404).json(response.data.errors);
      return;
    }

    res.status(200).json(response.data.data.updateContacts);
  }

  if (req.method === 'PATCH') {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://graphql.fauna.com/graphql', {
      query: `
            mutation partialUpdateContact($id:ID!, $contactInput: PartialUpdateContactInput!) {
                partialUpdateContact(id: $id, data: $contactInput) {
                    _id
                    image
                    firstName
                    lastName
                    email
                    phone
                    work
                } 
            }
        `,
      variables: {
        id: req.query.id,
        contactInput: req.body
      }
    }, {
      headers: {
        Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8",
        "X-Schema-Preview": "partial-update-mutation"
      }
    });

    if (response.data.errors) {
      res.status(404).json(response.data.errors);
      return;
    }

    res.status(200).json(response.data.data.partialUpdateContacts);
  }

  if (req.method === 'DELETE') {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://graphql.fauna.com/graphql', {
      query: `
            mutation partialUpdateContact($id:ID!, $contactInput: PartialUpdateContactInput!) {
                partialUpdateContact(id: $id, data: $contactInput) {
                    _id
                    image
                    firstName
                    lastName
                    email
                    phone
                    work
                } 
            }
        `,
      variables: {
        id: req.query.id,
        contactInput: req.body
      }
    }, {
      headers: {
        Authorization: "Bearer fnAEMRw2ygACACJWAuyLMeSqaBR34adCfCcergo8",
        "X-Schema-Preview": "partial-update-mutation"
      }
    });

    if (response.data.errors) {
      res.status(404).json(response.data.errors);
      return;
    }

    res.status(200).json(response.data.data.partialUpdateContacts);
  }
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/contacts/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWN0bGlzdC8uL3BhZ2VzL2FwaS9jb250YWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb250YWN0bGlzdC9leHRlcm5hbCBcImF4aW9zXCIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwicmVzcG9uc2UiLCJheGlvcyIsInF1ZXJ5IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiZXJyb3JzIiwic3RhdHVzIiwianNvbiIsImFsbENvbnRhY3RzIiwidmFyaWFibGVzIiwiYm9keSIsImNyZWF0ZUNvbnRhY3RzIiwiaWQiLCJjb250YWN0SW5wdXQiLCJ1cGRhdGVDb250YWN0cyIsInBhcnRpYWxVcGRhdGVDb250YWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUVuQyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN0QixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsaURBQUEsQ0FDbkIsbUNBRG1CLEVBRW5CO0FBQ0lDLFdBQUssRUFBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQlEsS0FGbUIsRUFvQm5CO0FBQ0lDLGFBQU8sRUFBRTtBQUNMQyxxQkFBYSxFQUFFO0FBRFY7QUFEYixLQXBCbUIsQ0FBdkI7O0FBMkJGLFFBQUlKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxNQUFsQixFQUF5QjtBQUNyQlIsU0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJSLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxNQUFuQztBQUNBO0FBQ0g7O0FBQ0NSLE9BQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUixRQUFRLENBQUNLLElBQVQsQ0FBY0Es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LFFBQW5CLEVBQTZCO0FBQ3pCLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxpREFBQSxDQUNuQixtQ0FEbUIsRUFFbkI7QUFDSUMsV0FBSyxFQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWJRO0FBY0FRLGVBQVMsRUFBRTtBQUNQRyxVQUFFLEVBQUdoQixHQUFHLENBQUNLLEtBQUosQ0FBVVcsRUFEUjtBQUVQQyxvQkFBWSxFQUFFakIsR0FBRyxDQUFDYztBQUZYO0FBZFgsS0FGbUIsRUFxQm5CO0FBQ0lSLGFBQU8sRUFBRTtBQUNMQyxxQkFBYSxFQUFFLGlEQURWO0FBRUwsNEJBQW9CO0FBRmY7QUFEYixLQXJCbUIsQ0FBdkI7O0FBNEJBLFFBQUlKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxNQUFsQixFQUF5QjtBQUNyQlIsU0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJSLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxNQUFuQztBQUNBO0FBQ0g7O0FBQ0NSLE9BQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUixRQUFRLENBQUNLLElBQVQsQ0FBY0EsSUFBZCxDQUFtQlcscUJBQXhDO0FBQ0w7QUFHQSxDQW5MRCxFOzs7Ozs7Ozs7OztBQ0hBLG1DIiwiZmlsZSI6InBhZ2VzL2FwaS9jb250YWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCB7Y29udGFjdHMsIGNyZWF0ZUNvbnRhY3R9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jb250YWN0LXNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgJ2h0dHBzOi8vZ3JhcGhxbC5mYXVuYS5jb20vZ3JhcGhxbCcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICBxdWVyeSB7XHJcbiAgICAgICAgICAgICAgICBhbGxDb250YWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBgLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBmbkFFTVJ3MnlnQUNBQ0pXQXV5TE1lU3FhQlIzNGFkQ2ZDY2VyZ284XCIsICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3JzKXtcclxuICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24ocmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgfSAgXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5kYXRhLmRhdGEuYWxsQ29udGFjdHMuZGF0YSk7XHJcbn1cclxuXHJcbmlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAnaHR0cHM6Ly9ncmFwaHFsLmZhdW5hLmNvbS9ncmFwaHFsJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgIG11dGF0aW9uIGNyZWF0ZUNvbnRhY3QoJGRhdGE6IENvbnRhY3RJbnB1dCEpIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3QoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBfaWRcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgLFxyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBkYXRhOiByZXEuYm9keSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBmbkFFTVJ3MnlnQUNBQ0pXQXV5TE1lU3FhQlIzNGFkQ2ZDY2VyZ284XCIsICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9ycyl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24ocmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gIFxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5kYXRhLmRhdGEuY3JlYXRlQ29udGFjdHMpO1xyXG59XHJcblxyXG5pZiAocmVxLm1ldGhvZCA9PT0gJ1BVVCcpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAnaHR0cHM6Ly9ncmFwaHFsLmZhdW5hLmNvbS9ncmFwaHFsJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgIG11dGF0aW9uIHVwZGF0ZUNvbnRhY3QoJGlkOklEISwgJGNvbnRhY3RJbnB1dDogQ29udGFjdElucHV0ISkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ29udGFjdChpZDogJGlkLCBkYXRhOiAkY29udGFjdElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVcclxuICAgICAgICAgICAgICAgICAgICB3b3JrXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgaWQ6ICByZXEucXVlcnkuaWQsXHJcbiAgICAgICAgICAgIGNvbnRhY3RJbnB1dDogcmVxLmJvZHksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgZm5BRU1SdzJ5Z0FDQUNKV0F1eUxNZVNxYUJSMzRhZENmQ2NlcmdvOFwiLCAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcnMpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9ICBcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YS5kYXRhLnVwZGF0ZUNvbnRhY3RzKTtcclxufVxyXG5cclxuaWYgKHJlcS5tZXRob2QgPT09ICdQQVRDSCcpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAnaHR0cHM6Ly9ncmFwaHFsLmZhdW5hLmNvbS9ncmFwaHFsJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgIG11dGF0aW9uIHBhcnRpYWxVcGRhdGVDb250YWN0KCRpZDpJRCEsICRjb250YWN0SW5wdXQ6IFBhcnRpYWxVcGRhdGVDb250YWN0SW5wdXQhKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWFsVXBkYXRlQ29udGFjdChpZDogJGlkLCBkYXRhOiAkY29udGFjdElucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVcclxuICAgICAgICAgICAgICAgICAgICB3b3JrXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgaWQ6ICByZXEucXVlcnkuaWQsXHJcbiAgICAgICAgICAgIGNvbnRhY3RJbnB1dDogcmVxLmJvZHksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgZm5BRU1SdzJ5Z0FDQUNKV0F1eUxNZVNxYUJSMzRhZENmQ2NlcmdvOFwiLCAgIFxyXG4gICAgICAgICAgICAgICAgXCJYLVNjaGVtYS1QcmV2aWV3XCI6IFwicGFydGlhbC11cGRhdGUtbXV0YXRpb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcnMpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9ICBcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UuZGF0YS5kYXRhLnBhcnRpYWxVcGRhdGVDb250YWN0cyk7XHJcbn1cclxuXHJcbmlmIChyZXEubWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICdodHRwczovL2dyYXBocWwuZmF1bmEuY29tL2dyYXBocWwnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgbXV0YXRpb24gcGFydGlhbFVwZGF0ZUNvbnRhY3QoJGlkOklEISwgJGNvbnRhY3RJbnB1dDogUGFydGlhbFVwZGF0ZUNvbnRhY3RJbnB1dCEpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpYWxVcGRhdGVDb250YWN0KGlkOiAkaWQsIGRhdGE6ICRjb250YWN0SW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfaWRcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgLFxyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBpZDogIHJlcS5xdWVyeS5pZCxcclxuICAgICAgICAgICAgY29udGFjdElucHV0OiByZXEuYm9keSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBmbkFFTVJ3MnlnQUNBQ0pXQXV5TE1lU3FhQlIzNGFkQ2ZDY2VyZ284XCIsICAgXHJcbiAgICAgICAgICAgICAgICBcIlgtU2NoZW1hLVByZXZpZXdcIjogXCJwYXJ0aWFsLXVwZGF0ZS1tdXRhdGlvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9ycyl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24ocmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gIFxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZS5kYXRhLmRhdGEucGFydGlhbFVwZGF0ZUNvbnRhY3RzKTtcclxufVxyXG5cclxuXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=