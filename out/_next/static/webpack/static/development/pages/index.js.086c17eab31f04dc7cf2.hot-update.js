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
              previousEmail = localStorage.getItem("hfc2019-email");

              if (!(previousEmail === state.email)) {
                _context2.next = 5;
                break;
              }

              updateState("submitted", true);
              updateState("error", "You already are on our list.");
              return _context2.abrupt("return", false);

            case 5:
              if (state.email) {
                _context2.next = 9;
                break;
              }

              updateState("submitted", true);
              updateState("error", "Email is missing!");
              return _context2.abrupt("return", false);

            case 9:
              if (state.name) {
                _context2.next = 13;
                break;
              }

              updateState("submitted", true);
              updateState("error", "Your name is missing!");
              return _context2.abrupt("return", false);

            case 13:
              if (state.projectDescription) {
                _context2.next = 17;
                break;
              }

              updateState("submitted", true);
              updateState("error", "Please describe what you're planning to work on during the event!");
              return _context2.abrupt("return", false);

            case 17:
              _context2.prev = 17;
              _context2.next = 20;
              return fetch("".concat(GOOGLE_SCRIPT_URL, "?name=").concat(encodeURIComponent(state.name), "&email=").concat(encodeURIComponent(state.email), "&description=").concat(encodeURIComponent(state.projectDescription)));

            case 20:
              res = _context2.sent;

              if (res.status === 200) {
                updateState("submitted", true);
                updateState("error", "");
                localStorage.setItem("hfc2019-email", state.email);
              }

              _context2.next = 28;
              break;

            case 24:
              _context2.prev = 24;
              _context2.t0 = _context2["catch"](17);
              updateState("submitted", true);
              updateState("error", _context2.t0.message);

            case 28:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[17, 24]]);
    }));
    return _sendToSpreadsheet.apply(this, arguments);
  }

  console.log(state.submitted);
  console.log(state.error, state.error ? "yay" : "nay");
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Tickets"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row ticket-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "six columns offset-by-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
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
      lineNumber: 79
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
      lineNumber: 90
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
      lineNumber: 97
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
      lineNumber: 106
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
      lineNumber: 115
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
    type: "submit",
    value: "RSVP",
    className: "jsx-2596677117" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })))), state.submitted && (state.error ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, state.error)) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Submitted! We're excited to see you at the event."))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2596677117",
    __self: this
  }, ".ticket-form.jsx-2596677117{margin-top:50px;}.honeypot.jsx-2596677117{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvVGlja2V0cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0lrQixBQUcyQixBQUdILGFBQ2YsR0FIQSIsImZpbGUiOiIvVXNlcnMvbWljaGFsdGFrYWMvUHJvamVjdHMvamF2YXNjcmlwdC9mbHlpbmctY2lyY3VpdC9jb21wb25lbnRzL1RpY2tldHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogXCJcIixcbiAgbmFtZTogXCJcIixcbiAgcHJvamVjdERlc2NyaXB0aW9uOiBcIlwiLFxuICBob25leXBvdDogXCJcIixcbiAgZXJyb3I6IFwiXCIsXG4gIHN1Ym1pdHRlZDogZmFsc2UsXG59O1xuXG5jb25zdCBHT09HTEVfU0NSSVBUX1VSTCA9XG4gIFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6enppYzY0ZmxjYndLZHJ4VmJTM2tJbGE3VEVzUEVQNmlUQVZUbjgtV2VVSzVtaXVJYS9leGVjXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUaWNrZXRzKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUoa2V5LCB2YWx1ZSkge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtrZXldOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRUb1NwcmVhZHNoZWV0KCkge1xuICAgIGNvbnN0IHByZXZpb3VzRW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhmYzIwMTktZW1haWxcIik7XG4gICAgaWYgKHByZXZpb3VzRW1haWwgPT09IHN0YXRlLmVtYWlsKSB7XG4gICAgICB1cGRhdGVTdGF0ZShcInN1Ym1pdHRlZFwiLCB0cnVlKTtcbiAgICAgIHVwZGF0ZVN0YXRlKFwiZXJyb3JcIiwgXCJZb3UgYWxyZWFkeSBhcmUgb24gb3VyIGxpc3QuXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUuZW1haWwpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKFwic3VibWl0dGVkXCIsIHRydWUpO1xuICAgICAgdXBkYXRlU3RhdGUoXCJlcnJvclwiLCBcIkVtYWlsIGlzIG1pc3NpbmchXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUubmFtZSkge1xuICAgICAgdXBkYXRlU3RhdGUoXCJzdWJtaXR0ZWRcIiwgdHJ1ZSk7XG4gICAgICB1cGRhdGVTdGF0ZShcImVycm9yXCIsIFwiWW91ciBuYW1lIGlzIG1pc3NpbmchXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUucHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgICB1cGRhdGVTdGF0ZShcInN1Ym1pdHRlZFwiLCB0cnVlKTtcbiAgICAgIHVwZGF0ZVN0YXRlKFwiZXJyb3JcIiwgXCJQbGVhc2UgZGVzY3JpYmUgd2hhdCB5b3UncmUgcGxhbm5pbmcgdG8gd29yayBvbiBkdXJpbmcgdGhlIGV2ZW50IVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke0dPT0dMRV9TQ1JJUFRfVVJMfT9uYW1lPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0YXRlLm5hbWUpfSZlbWFpbD0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICBzdGF0ZS5lbWFpbFxuICAgICAgICApfSZkZXNjcmlwdGlvbj0ke2VuY29kZVVSSUNvbXBvbmVudChzdGF0ZS5wcm9qZWN0RGVzY3JpcHRpb24pfWBcbiAgICAgICk7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKFwic3VibWl0dGVkXCIsIHRydWUpO1xuICAgICAgICB1cGRhdGVTdGF0ZShcImVycm9yXCIsIFwiXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhmYzIwMTktZW1haWxcIiwgc3RhdGUuZW1haWwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdXBkYXRlU3RhdGUoXCJzdWJtaXR0ZWRcIiwgdHJ1ZSk7XG4gICAgICB1cGRhdGVTdGF0ZShcImVycm9yXCIsIGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coc3RhdGUuc3VibWl0dGVkKVxuICBjb25zb2xlLmxvZyhzdGF0ZS5lcnJvciwgc3RhdGUuZXJyb3IgPyBcInlheVwiIDogXCJuYXlcIik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxoMz5UaWNrZXRzPC9oMz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bVxuICAgICAgICAgIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtXG4gICAgICAgICAgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cbiAgICAgICAgICBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGlja2V0LWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIj5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmhvbmV5cG90LnZhbHVlLCBlLnRhcmdldC5ob25leXBvdC52YWx1ZSA/IFwieWF5XCIgOiBcIm5heVwiKTtcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmhvbmV5cG90LnZhbHVlIHx8IHN0YXRlLmhvbmV5cG90KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYXdhaXQgc2VuZFRvU3ByZWFkc2hlZXQoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvbmV5cG90XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiaG9uZXlwb3RcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZShcImhvbmV5cG90XCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWwtaW5wdXRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZShcImVtYWlsXCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoXCJuYW1lXCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgd2hhdCB5b3Ugd2FudCB0byBidWlsZCBpbiBmZXcgd29yZHNcIlxuICAgICAgICAgICAgICBpZD1cInByb2plY3QtZGVzY3JpcHRpb24taW5wdXRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZShcInByb2plY3REZXNjcmlwdGlvblwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUlNWUFwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3N0YXRlLnN1Ym1pdHRlZCAmJiAoc3RhdGUuZXJyb3IgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdj57c3RhdGUuZXJyb3J9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlN1Ym1pdHRlZCEgV2UncmUgZXhjaXRlZCB0byBzZWUgeW91IGF0IHRoZSBldmVudC48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRpY2tldC1mb3JtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ob25leXBvdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Tickets.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.086c17eab31f04dc7cf2.hot-update.js.map