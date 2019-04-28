webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tickets.jsx":
/*!********************************!*\
  !*** ./components/Tickets.jsx ***!
  \********************************/
/*! exports provided: Tickets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tickets", function() { return Tickets; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/michaltakac/Projects/javascript/flying-circuit/components/Tickets.jsx";



var initialState = {
  email: "",
  name: "",
  projectDescription: "",
  honeypot: "",
  error: "",
  submitted: false
};
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzzzic64flcbwKdrxVbS3kIla7TEsPEP6iTAVTn8-WeUK5miuIa/exec";
function Tickets() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  function updateState(key, value) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, value)));
  }

  function sendToSpreadsheet() {
    return _sendToSpreadsheet.apply(this, arguments);
  }

  function _sendToSpreadsheet() {
    _sendToSpreadsheet = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var previousEmail, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              updateState("error", "");
              previousEmail = localStorage.getItem("hfc2019-email");

              if (!(previousEmail === state.email)) {
                _context2.next = 6;
                break;
              }

              updateState("submitted", true);
              updateState("error", "You already are on our list.");
              return _context2.abrupt("return", false);

            case 6:
              if (state.email) {
                _context2.next = 10;
                break;
              }

              updateState("submitted", true);
              updateState("error", "Email is missing!");
              return _context2.abrupt("return", false);

            case 10:
              if (state.name) {
                _context2.next = 14;
                break;
              }

              updateState("submitted", true);
              updateState("error", "Your name is missing!");
              return _context2.abrupt("return", false);

            case 14:
              if (state.projectDescription) {
                _context2.next = 18;
                break;
              }

              updateState("submitted", true);
              updateState("error", "Please describe what you're planning to work on during the event!");
              return _context2.abrupt("return", false);

            case 18:
              _context2.prev = 18;
              _context2.next = 21;
              return fetch("".concat(GOOGLE_SCRIPT_URL, "?name=").concat(encodeURIComponent(state.name), "&email=").concat(encodeURIComponent(state.email), "&description=").concat(encodeURIComponent(state.projectDescription)));

            case 21:
              res = _context2.sent;

              if (res.status === 200) {
                updateState("submitted", true);
                updateState("error", "");
                localStorage.setItem("hfc2019-email", state.email);
              }

              _context2.next = 29;
              break;

            case 25:
              _context2.prev = 25;
              _context2.t0 = _context2["catch"](18);
              updateState("submitted", true);
              updateState("error", _context2.t0.message);

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[18, 25]]);
    }));
    return _sendToSpreadsheet.apply(this, arguments);
  }

  console.log(state.submitted);
  console.log(state.error, state.error ? "yay" : "nay");
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Tickets"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row ticket-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "six columns offset-by-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log(e.target.honeypot.value, e.target.honeypot.value ? "yay" : "nay");

                if (!(e.target.honeypot.value || state.honeypot)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                _context.next = 6;
                return sendToSpreadsheet();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "honeypot",
    defaultValue: "",
    onChange: function onChange(e) {
      return updateState("honeypot", e.target.value);
    },
    className: "jsx-2596677117" + " " + "honeypot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    id: "email-input",
    onChange: function onChange(e) {
      return updateState("email", e.target.value);
    },
    className: "jsx-2596677117" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Name",
    id: "name-input",
    onChange: function onChange(e) {
      return updateState("name", e.target.value);
    },
    className: "jsx-2596677117" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea", {
    type: "text",
    name: "description",
    placeholder: "Describe what you want to build in few words",
    id: "project-description-input",
    onChange: function onChange(e) {
      return updateState("projectDescription", e.target.value);
    },
    className: "jsx-2596677117" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "submit",
    value: "RSVP",
    className: "jsx-2596677117" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })))), state.submitted && state.error ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, state.error)) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Submitted! We're excited to see you at the event.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2596677117",
    __self: this
  }, ".ticket-form.jsx-2596677117{margin-top:50px;}.honeypot.jsx-2596677117{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvVGlja2V0cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMElrQixBQUcyQixBQUdILGFBQ2YsR0FIQSIsImZpbGUiOiIvVXNlcnMvbWljaGFsdGFrYWMvUHJvamVjdHMvamF2YXNjcmlwdC9mbHlpbmctY2lyY3VpdC9jb21wb25lbnRzL1RpY2tldHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogXCJcIixcbiAgbmFtZTogXCJcIixcbiAgcHJvamVjdERlc2NyaXB0aW9uOiBcIlwiLFxuICBob25leXBvdDogXCJcIixcbiAgZXJyb3I6IFwiXCIsXG4gIHN1Ym1pdHRlZDogZmFsc2UsXG59O1xuXG5jb25zdCBHT09HTEVfU0NSSVBUX1VSTCA9XG4gIFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6enppYzY0ZmxjYndLZHJ4VmJTM2tJbGE3VEVzUEVQNmlUQVZUbjgtV2VVSzVtaXVJYS9leGVjXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUaWNrZXRzKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUoa2V5LCB2YWx1ZSkge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtrZXldOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRUb1NwcmVhZHNoZWV0KCkge1xuICAgIHVwZGF0ZVN0YXRlKFwiZXJyb3JcIiwgXCJcIik7XG5cbiAgICBjb25zdCBwcmV2aW91c0VtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoZmMyMDE5LWVtYWlsXCIpO1xuICAgIGlmIChwcmV2aW91c0VtYWlsID09PSBzdGF0ZS5lbWFpbCkge1xuICAgICAgdXBkYXRlU3RhdGUoXCJzdWJtaXR0ZWRcIiwgdHJ1ZSk7XG4gICAgICB1cGRhdGVTdGF0ZShcImVycm9yXCIsIFwiWW91IGFscmVhZHkgYXJlIG9uIG91ciBsaXN0LlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLmVtYWlsKSB7XG4gICAgICB1cGRhdGVTdGF0ZShcInN1Ym1pdHRlZFwiLCB0cnVlKTtcbiAgICAgIHVwZGF0ZVN0YXRlKFwiZXJyb3JcIiwgXCJFbWFpbCBpcyBtaXNzaW5nIVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLm5hbWUpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKFwic3VibWl0dGVkXCIsIHRydWUpO1xuICAgICAgdXBkYXRlU3RhdGUoXCJlcnJvclwiLCBcIllvdXIgbmFtZSBpcyBtaXNzaW5nIVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLnByb2plY3REZXNjcmlwdGlvbikge1xuICAgICAgdXBkYXRlU3RhdGUoXCJzdWJtaXR0ZWRcIiwgdHJ1ZSk7XG4gICAgICB1cGRhdGVTdGF0ZShcImVycm9yXCIsIFwiUGxlYXNlIGRlc2NyaWJlIHdoYXQgeW91J3JlIHBsYW5uaW5nIHRvIHdvcmsgb24gZHVyaW5nIHRoZSBldmVudCFcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtHT09HTEVfU0NSSVBUX1VSTH0/bmFtZT0ke2VuY29kZVVSSUNvbXBvbmVudChzdGF0ZS5uYW1lKX0mZW1haWw9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgc3RhdGUuZW1haWxcbiAgICAgICAgKX0mZGVzY3JpcHRpb249JHtlbmNvZGVVUklDb21wb25lbnQoc3RhdGUucHJvamVjdERlc2NyaXB0aW9uKX1gXG4gICAgICApO1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICB1cGRhdGVTdGF0ZShcInN1Ym1pdHRlZFwiLCB0cnVlKTtcbiAgICAgICAgdXBkYXRlU3RhdGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoZmMyMDE5LWVtYWlsXCIsIHN0YXRlLmVtYWlsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKFwic3VibWl0dGVkXCIsIHRydWUpO1xuICAgICAgdXBkYXRlU3RhdGUoXCJlcnJvclwiLCBlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKHN0YXRlLnN1Ym1pdHRlZClcbiAgY29uc29sZS5sb2coc3RhdGUuZXJyb3IsIHN0YXRlLmVycm9yID8gXCJ5YXlcIiA6IFwibmF5XCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8aDM+VGlja2V0czwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cbiAgICAgICAgICBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bVxuICAgICAgICAgIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtXG4gICAgICAgICAgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRpY2tldC1mb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyBlID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5ob25leXBvdC52YWx1ZSwgZS50YXJnZXQuaG9uZXlwb3QudmFsdWUgPyBcInlheVwiIDogXCJuYXlcIik7XG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldC5ob25leXBvdC52YWx1ZSB8fCBzdGF0ZS5ob25leXBvdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGF3YWl0IHNlbmRUb1NwcmVhZHNoZWV0KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob25leXBvdFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImhvbmV5cG90XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoXCJob25leXBvdFwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICBpZD1cImVtYWlsLWlucHV0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoXCJlbWFpbFwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwibmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXRlKFwibmFtZVwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHdoYXQgeW91IHdhbnQgdG8gYnVpbGQgaW4gZmV3IHdvcmRzXCJcbiAgICAgICAgICAgICAgaWQ9XCJwcm9qZWN0LWRlc2NyaXB0aW9uLWlucHV0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoXCJwcm9qZWN0RGVzY3JpcHRpb25cIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJTVlBcIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzdGF0ZS5zdWJtaXR0ZWQgJiYgc3RhdGUuZXJyb3IgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdj57c3RhdGUuZXJyb3J9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlN1Ym1pdHRlZCEgV2UncmUgZXhjaXRlZCB0byBzZWUgeW91IGF0IHRoZSBldmVudC48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGlja2V0LWZvcm0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhvbmV5cG90IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Tickets.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.54a33b3eda90a71a1b39.hot-update.js.map