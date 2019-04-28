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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "/Users/michaltakac/Projects/javascript/flying-circuit/components/Tickets.jsx";



var initialState = {
  email: "",
  name: "",
  projectDescription: "",
  honeypot: "",
  error: "",
  submitted: false,
  loading: false
};
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzzzic64flcbwKdrxVbS3kIla7TEsPEP6iTAVTn8-WeUK5miuIa/exec";
function Tickets() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  function updateState(newState) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, newState));
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
                _context2.next = 4;
                break;
              }

              updateState({
                submitted: true,
                error: "You already are on our list."
              });
              return _context2.abrupt("return", false);

            case 4:
              if (state.email) {
                _context2.next = 7;
                break;
              }

              updateState({
                submitted: true,
                error: "Email is missing."
              });
              return _context2.abrupt("return", false);

            case 7:
              if (state.name) {
                _context2.next = 10;
                break;
              }

              updateState({
                submitted: true,
                error: "Your name is missing."
              });
              return _context2.abrupt("return", false);

            case 10:
              if (state.projectDescription) {
                _context2.next = 13;
                break;
              }

              updateState({
                submitted: true,
                error: "Please describe what you're planning to work on during the event!"
              });
              return _context2.abrupt("return", false);

            case 13:
              _context2.prev = 13;
              updateState({
                loading: true
              });
              _context2.next = 17;
              return fetch("".concat(GOOGLE_SCRIPT_URL, "?name=").concat(encodeURIComponent(state.name), "&email=").concat(encodeURIComponent(state.email), "&description=").concat(encodeURIComponent(state.projectDescription)));

            case 17:
              res = _context2.sent;

              if (res.status === 200) {
                updateState({
                  submitted: true,
                  error: "",
                  loading: false
                });
                localStorage.setItem("hfc2019-email", state.email);
              }

              _context2.next = 24;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](13);
              updateState({
                submitted: true,
                error: _context2.t0.message,
                loading: false
              });

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[13, 21]]);
    }));
    return _sendToSpreadsheet.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Tickets"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row ticket-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "six columns offset-by-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
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

                if (!(e.target.honeypot.value || state.honeypot)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", false);

              case 3:
                _context.next = 5;
                return sendToSpreadsheet();

              case 5:
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
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    type: "text",
    name: "honeypot",
    defaultValue: "",
    onChange: function onChange(e) {
      return updateState({
        honeypot: e.target.value
      });
    },
    className: "jsx-2596677117" + " " + "honeypot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    id: "email-input",
    onChange: function onChange(e) {
      return updateState({
        email: e.target.value
      });
    },
    className: "jsx-2596677117" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Name",
    id: "name-input",
    onChange: function onChange(e) {
      return updateState({
        name: e.target.value
      });
    },
    className: "jsx-2596677117" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
    type: "text",
    name: "description",
    placeholder: "Describe what you want to build in few words",
    id: "project-description-input",
    onChange: function onChange(e) {
      return updateState({
        projectDescription: e.target.value
      });
    },
    className: "jsx-2596677117" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    type: "submit",
    value: "RSVP",
    className: "jsx-2596677117" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })))), state.loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Loading...") : state.submitted && (state.error ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, state.error)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Submitted! We're excited to see you at the event."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2596677117",
    __self: this
  }, ".ticket-form.jsx-2596677117{margin-top:50px;}.honeypot.jsx-2596677117{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvVGlja2V0cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUlrQixBQUcyQixBQUdILGFBQ2YsR0FIQSIsImZpbGUiOiIvVXNlcnMvbWljaGFsdGFrYWMvUHJvamVjdHMvamF2YXNjcmlwdC9mbHlpbmctY2lyY3VpdC9jb21wb25lbnRzL1RpY2tldHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogXCJcIixcbiAgbmFtZTogXCJcIixcbiAgcHJvamVjdERlc2NyaXB0aW9uOiBcIlwiLFxuICBob25leXBvdDogXCJcIixcbiAgZXJyb3I6IFwiXCIsXG4gIHN1Ym1pdHRlZDogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxufTtcblxuY29uc3QgR09PR0xFX1NDUklQVF9VUkwgPVxuICBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNienp6aWM2NGZsY2J3S2RyeFZiUzNrSWxhN1RFc1BFUDZpVEFWVG44LVdlVUs1bWl1SWEvZXhlY1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGlja2V0cygpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgLi4ubmV3U3RhdGUgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZW5kVG9TcHJlYWRzaGVldCgpIHtcbiAgICBjb25zdCBwcmV2aW91c0VtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoZmMyMDE5LWVtYWlsXCIpO1xuICAgIGlmIChwcmV2aW91c0VtYWlsID09PSBzdGF0ZS5lbWFpbCkge1xuICAgICAgdXBkYXRlU3RhdGUoeyBzdWJtaXR0ZWQ6IHRydWUsIGVycm9yOiBcIllvdSBhbHJlYWR5IGFyZSBvbiBvdXIgbGlzdC5cIiB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLmVtYWlsKSB7XG4gICAgICB1cGRhdGVTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSwgZXJyb3I6IFwiRW1haWwgaXMgbWlzc2luZy5cIiB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLm5hbWUpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKHsgc3VibWl0dGVkOiB0cnVlLCBlcnJvcjogXCJZb3VyIG5hbWUgaXMgbWlzc2luZy5cIiB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLnByb2plY3REZXNjcmlwdGlvbikge1xuICAgICAgdXBkYXRlU3RhdGUoeyBzdWJtaXR0ZWQ6IHRydWUsIGVycm9yOiBcIlBsZWFzZSBkZXNjcmliZSB3aGF0IHlvdSdyZSBwbGFubmluZyB0byB3b3JrIG9uIGR1cmluZyB0aGUgZXZlbnQhXCIgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHVwZGF0ZVN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke0dPT0dMRV9TQ1JJUFRfVVJMfT9uYW1lPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0YXRlLm5hbWUpfSZlbWFpbD0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICBzdGF0ZS5lbWFpbFxuICAgICAgICApfSZkZXNjcmlwdGlvbj0ke2VuY29kZVVSSUNvbXBvbmVudChzdGF0ZS5wcm9qZWN0RGVzY3JpcHRpb24pfWBcbiAgICAgICk7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHsgc3VibWl0dGVkOiB0cnVlLCBlcnJvcjogXCJcIiwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGZjMjAxOS1lbWFpbFwiLCBzdGF0ZS5lbWFpbCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB1cGRhdGVTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSwgZXJyb3I6IGVyci5tZXNzYWdlLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8aDM+VGlja2V0czwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cbiAgICAgICAgICBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bVxuICAgICAgICAgIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtXG4gICAgICAgICAgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRpY2tldC1mb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyBlID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgIGlmIChlLnRhcmdldC5ob25leXBvdC52YWx1ZSB8fCBzdGF0ZS5ob25leXBvdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGF3YWl0IHNlbmRUb1NwcmVhZHNoZWV0KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob25leXBvdFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImhvbmV5cG90XCJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoeyBob25leXBvdDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICBpZD1cImVtYWlsLWlucHV0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwibmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaWJlIHdoYXQgeW91IHdhbnQgdG8gYnVpbGQgaW4gZmV3IHdvcmRzXCJcbiAgICAgICAgICAgICAgaWQ9XCJwcm9qZWN0LWRlc2NyaXB0aW9uLWlucHV0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoeyBwcm9qZWN0RGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJTVlBcIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIHN0YXRlLnN1Ym1pdHRlZCAmJlxuICAgICAgICAoc3RhdGUuZXJyb3IgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXY+e3N0YXRlLmVycm9yfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2PlN1Ym1pdHRlZCEgV2UncmUgZXhjaXRlZCB0byBzZWUgeW91IGF0IHRoZSBldmVudC48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50aWNrZXQtZm9ybSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaG9uZXlwb3Qge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Tickets.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.a15957af79643ac6992f.hot-update.js.map