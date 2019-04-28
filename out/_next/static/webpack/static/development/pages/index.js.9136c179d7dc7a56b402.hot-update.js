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
  submitted: false
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
              _context2.next = 16;
              return fetch("".concat(GOOGLE_SCRIPT_URL, "?name=").concat(encodeURIComponent(state.name), "&email=").concat(encodeURIComponent(state.email), "&description=").concat(encodeURIComponent(state.projectDescription)));

            case 16:
              res = _context2.sent;

              if (res.status === 200) {
                updateState({
                  submitted: true,
                  error: ""
                });
                localStorage.setItem("hfc2019-email", state.email);
              }

              _context2.next = 23;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](13);
              updateState({
                submitted: true,
                error: _context2.t0.message
              });

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[13, 20]]);
    }));
    return _sendToSpreadsheet.apply(this, arguments);
  }

  console.log(state.submitted);
  console.log(state.error, state.error ? "yay" : "nay");
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Tickets"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row ticket-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "six columns offset-by-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
      lineNumber: 73
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
      lineNumber: 84
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
      lineNumber: 91
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
      lineNumber: 100
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
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    type: "submit",
    value: "RSVP",
    className: "jsx-2596677117" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })))), state.submitted && (state.error ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, state.error)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2596677117",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Submitted! We're excited to see you at the event."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2596677117",
    __self: this
  }, ".ticket-form.jsx-2596677117{margin-top:50px;}.honeypot.jsx-2596677117{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvVGlja2V0cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlrQixBQUcyQixBQUdILGFBQ2YsR0FIQSIsImZpbGUiOiIvVXNlcnMvbWljaGFsdGFrYWMvUHJvamVjdHMvamF2YXNjcmlwdC9mbHlpbmctY2lyY3VpdC9jb21wb25lbnRzL1RpY2tldHMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBlbWFpbDogXCJcIixcbiAgbmFtZTogXCJcIixcbiAgcHJvamVjdERlc2NyaXB0aW9uOiBcIlwiLFxuICBob25leXBvdDogXCJcIixcbiAgZXJyb3I6IFwiXCIsXG4gIHN1Ym1pdHRlZDogZmFsc2UsXG59O1xuXG5jb25zdCBHT09HTEVfU0NSSVBUX1VSTCA9XG4gIFwiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J6enppYzY0ZmxjYndLZHJ4VmJTM2tJbGE3VEVzUEVQNmlUQVZUbjgtV2VVSzVtaXVJYS9leGVjXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUaWNrZXRzKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCAuLi5uZXdTdGF0ZSB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlbmRUb1NwcmVhZHNoZWV0KCkge1xuICAgIGNvbnN0IHByZXZpb3VzRW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhmYzIwMTktZW1haWxcIik7XG4gICAgaWYgKHByZXZpb3VzRW1haWwgPT09IHN0YXRlLmVtYWlsKSB7XG4gICAgICB1cGRhdGVTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSwgZXJyb3I6IFwiWW91IGFscmVhZHkgYXJlIG9uIG91ciBsaXN0LlwiIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUuZW1haWwpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKHsgc3VibWl0dGVkOiB0cnVlLCBlcnJvcjogXCJFbWFpbCBpcyBtaXNzaW5nLlwiIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUubmFtZSkge1xuICAgICAgdXBkYXRlU3RhdGUoeyBzdWJtaXR0ZWQ6IHRydWUsIGVycm9yOiBcIllvdXIgbmFtZSBpcyBtaXNzaW5nLlwiIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUucHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgICB1cGRhdGVTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSwgZXJyb3I6IFwiUGxlYXNlIGRlc2NyaWJlIHdoYXQgeW91J3JlIHBsYW5uaW5nIHRvIHdvcmsgb24gZHVyaW5nIHRoZSBldmVudCFcIiB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke0dPT0dMRV9TQ1JJUFRfVVJMfT9uYW1lPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHN0YXRlLm5hbWUpfSZlbWFpbD0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICBzdGF0ZS5lbWFpbFxuICAgICAgICApfSZkZXNjcmlwdGlvbj0ke2VuY29kZVVSSUNvbXBvbmVudChzdGF0ZS5wcm9qZWN0RGVzY3JpcHRpb24pfWBcbiAgICAgICk7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHsgc3VibWl0dGVkOiB0cnVlLCBlcnJvcjogXCJcIiB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoZmMyMDE5LWVtYWlsXCIsIHN0YXRlLmVtYWlsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKHsgc3VibWl0dGVkOiB0cnVlLCBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKHN0YXRlLnN1Ym1pdHRlZCk7XG4gIGNvbnNvbGUubG9nKHN0YXRlLmVycm9yLCBzdGF0ZS5lcnJvciA/IFwieWF5XCIgOiBcIm5heVwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGgzPlRpY2tldHM8L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtXG4gICAgICAgICAgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cbiAgICAgICAgICBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bVxuICAgICAgICAgIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0aWNrZXQtZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVwiPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgZSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaG9uZXlwb3QudmFsdWUsIGUudGFyZ2V0LmhvbmV5cG90LnZhbHVlID8gXCJ5YXlcIiA6IFwibmF5XCIpO1xuICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaG9uZXlwb3QudmFsdWUgfHwgc3RhdGUuaG9uZXlwb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhd2FpdCBzZW5kVG9TcHJlYWRzaGVldCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9uZXlwb3RcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJob25leXBvdFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXRlKHsgaG9uZXlwb3Q6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1pbnB1dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICBpZD1cIm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmliZSB3aGF0IHlvdSB3YW50IHRvIGJ1aWxkIGluIGZldyB3b3Jkc1wiXG4gICAgICAgICAgICAgIGlkPVwicHJvamVjdC1kZXNjcmlwdGlvbi1pbnB1dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXRlKHsgcHJvamVjdERlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJSU1ZQXCIgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7c3RhdGUuc3VibWl0dGVkICYmXG4gICAgICAgIChzdGF0ZS5lcnJvciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdj57c3RhdGUuZXJyb3J9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXY+U3VibWl0dGVkISBXZSdyZSBleGNpdGVkIHRvIHNlZSB5b3UgYXQgdGhlIGV2ZW50LjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRpY2tldC1mb3JtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ob25leXBvdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Tickets.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.9136c179d7dc7a56b402.hot-update.js.map