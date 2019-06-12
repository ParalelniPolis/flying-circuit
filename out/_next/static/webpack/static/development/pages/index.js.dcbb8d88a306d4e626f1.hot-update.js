webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SubscribeForm.jsx":
/*!**************************************!*\
  !*** ./components/SubscribeForm.jsx ***!
  \**************************************/
/*! exports provided: SubscribeForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeForm", function() { return SubscribeForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reaptcha */ "./node_modules/reaptcha/dist/index.js");
/* harmony import */ var reaptcha__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reaptcha__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var node_rsa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! node-rsa */ "./node_modules/node-rsa/src/NodeRSA.js");
/* harmony import */ var node_rsa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_rsa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _keys_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../keys/public */ "./keys/public.js");
/* harmony import */ var _keys_private__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../keys/private */ "./keys/private.js");




var _jsxFileName = "/Users/michaltakac/Projects/javascript/flying-circuit/components/SubscribeForm.jsx";







var ENCODING = "base64";
var rsa = new node_rsa__WEBPACK_IMPORTED_MODULE_7___default.a(_keys_private__WEBPACK_IMPORTED_MODULE_9__["default"]);
rsa.importKey(_keys_public__WEBPACK_IMPORTED_MODULE_8__["default"]);
var initialState = {
  email: "",
  name: "",
  projectDescription: "",
  track: "Privacy",
  honeypot: "",
  error: "",
  submitted: false,
  loading: false,
  recaptchaLoaded: false,
  recaptchaVerified: false
};
function SubscribeForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // TODO: find out why recaptcha resets the state


  var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["createRef"])();
  var nameRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["createRef"])();
  var descRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["createRef"])();
  var trackRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["createRef"])();

  function updateState(newState) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, newState));
  }

  function onRecaptchaVerified() {
    updateState({
      recaptchaVerified: true,
      email: emailRef.current.value,
      name: nameRef.current.value,
      projectDescription: descRef.current.value,
      track: trackRef.current.value
    });
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
                error: "Your name/nickname is missing."
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
              return fetch("".concat("https://script.google.com/macros/s/AKfycbzzzic64flcbwKdrxVbS3kIla7TEsPEP6iTAVTn8-WeUK5miuIa/exec", "?name=").concat(encodeURIComponent(rsa.encrypt(state.name, ENCODING)), "&email=").concat(encodeURIComponent(rsa.encrypt(state.email, ENCODING)), "&track=").concat(encodeURIComponent(rsa.encrypt(state.track, ENCODING)), "&description=").concat(encodeURIComponent(rsa.encrypt(state.projectDescription, ENCODING))));

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

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
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
    className: "jsx-3364965741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
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
    className: "jsx-3364965741" + " " + "honeypot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
    htmlFor: "track-select",
    className: "jsx-3364965741" + " " + "u-pull-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Preferred track"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
    id: "track-select",
    ref: trackRef,
    className: "jsx-3364965741" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
    value: "Privacy",
    className: "jsx-3364965741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Privacy"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
    value: "Decentralization",
    className: "jsx-3364965741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Decentralization"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
    value: "Urban Hacktivism",
    className: "jsx-3364965741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Urban Hacktivism")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    ref: emailRef,
    type: "email",
    name: "email",
    placeholder: "Email",
    id: "email-input",
    className: "jsx-3364965741" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    ref: nameRef,
    type: "text",
    name: "name",
    placeholder: "Name/Nickname",
    id: "name-input",
    className: "jsx-3364965741" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
    ref: descRef,
    type: "text",
    name: "description",
    placeholder: "What you'd like to hack?",
    id: "project-description-input",
    className: "jsx-3364965741" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reaptcha__WEBPACK_IMPORTED_MODULE_6___default.a, {
    sitekey: "6LdhpKIUAAAAADgAU_Z2QkI1x81P9MpOfOH9yY_9",
    theme: "dark",
    onVerify: onRecaptchaVerified,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    type: "submit",
    value: "RSVP",
    disabled: !state.recaptchaVerified,
    className: "jsx-3364965741" + " " + "button ".concat(state.recaptchaVerified ? "" : "button-disabled"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), state.loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-3364965741" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Loading...") : state.submitted && (state.error ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-3364965741" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-3364965741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, state.error)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-3364965741" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-3364965741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Submitted! We're excited to see you at the event."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1860918561",
    __self: this
  }, ".honeypot.jsx-3364965741{display:none;}.button-disabled.jsx-3364965741,.button-disabled.jsx-3364965741:hover,.button-disabled.jsx-3364965741:focus{color:#777777;border:1px solid #777777;-webkit-text-decoration:line-through;text-decoration:line-through;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvU3Vic2NyaWJlRm9ybS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUtrQixBQUd3QixBQU1DLGFBTGhCLENBTTJCLHlCQUNJLGtFQUMvQiIsImZpbGUiOiIvVXNlcnMvbWljaGFsdGFrYWMvUHJvamVjdHMvamF2YXNjcmlwdC9mbHlpbmctY2lyY3VpdC9jb21wb25lbnRzL1N1YnNjcmliZUZvcm0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYXB0Y2hhIGZyb20gXCJyZWFwdGNoYVwiO1xuaW1wb3J0IE5vZGVSU0EgZnJvbSBcIm5vZGUtcnNhXCI7XG5pbXBvcnQgUFVCTElDX0tFWSBmcm9tIFwiLi4va2V5cy9wdWJsaWNcIjtcbmltcG9ydCBQUklWQVRFX0tFWSBmcm9tIFwiLi4va2V5cy9wcml2YXRlXCI7XG5cbmNvbnN0IEVOQ09ESU5HID0gXCJiYXNlNjRcIjtcblxudmFyIHJzYSA9IG5ldyBOb2RlUlNBKFBSSVZBVEVfS0VZKTtcbnJzYS5pbXBvcnRLZXkoUFVCTElDX0tFWSk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZW1haWw6IFwiXCIsXG4gIG5hbWU6IFwiXCIsXG4gIHByb2plY3REZXNjcmlwdGlvbjogXCJcIixcbiAgdHJhY2s6IFwiUHJpdmFjeVwiLFxuICBob25leXBvdDogXCJcIixcbiAgZXJyb3I6IFwiXCIsXG4gIHN1Ym1pdHRlZDogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICByZWNhcHRjaGFMb2FkZWQ6IGZhbHNlLFxuICByZWNhcHRjaGFWZXJpZmllZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlRm9ybSgpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICAvLyBUT0RPOiBmaW5kIG91dCB3aHkgcmVjYXB0Y2hhIHJlc2V0cyB0aGUgc3RhdGVcbiAgY29uc3QgZW1haWxSZWYgPSBjcmVhdGVSZWYoKTtcbiAgY29uc3QgbmFtZVJlZiA9IGNyZWF0ZVJlZigpO1xuICBjb25zdCBkZXNjUmVmID0gY3JlYXRlUmVmKCk7XG4gIGNvbnN0IHRyYWNrUmVmID0gY3JlYXRlUmVmKCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCAuLi5uZXdTdGF0ZSB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUmVjYXB0Y2hhVmVyaWZpZWQoKSB7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgcmVjYXB0Y2hhVmVyaWZpZWQ6IHRydWUsXG4gICAgICBlbWFpbDogZW1haWxSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgIG5hbWU6IG5hbWVSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgIHByb2plY3REZXNjcmlwdGlvbjogZGVzY1JlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgdHJhY2s6IHRyYWNrUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZW5kVG9TcHJlYWRzaGVldCgpIHtcbiAgICBjb25zdCBwcmV2aW91c0VtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoZmMyMDE5LWVtYWlsXCIpO1xuXG4gICAgaWYgKHByZXZpb3VzRW1haWwgPT09IHN0YXRlLmVtYWlsKSB7XG4gICAgICB1cGRhdGVTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSwgZXJyb3I6IFwiWW91IGFscmVhZHkgYXJlIG9uIG91ciBsaXN0LlwiIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUuZW1haWwpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKHsgc3VibWl0dGVkOiB0cnVlLCBlcnJvcjogXCJFbWFpbCBpcyBtaXNzaW5nLlwiIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUubmFtZSkge1xuICAgICAgdXBkYXRlU3RhdGUoeyBzdWJtaXR0ZWQ6IHRydWUsIGVycm9yOiBcIllvdXIgbmFtZS9uaWNrbmFtZSBpcyBtaXNzaW5nLlwiIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3RhdGUucHJvamVjdERlc2NyaXB0aW9uKSB7XG4gICAgICB1cGRhdGVTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSwgZXJyb3I6IFwiUGxlYXNlIGRlc2NyaWJlIHdoYXQgeW91J3JlIHBsYW5uaW5nIHRvIHdvcmsgb24gZHVyaW5nIHRoZSBldmVudCFcIiB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdXBkYXRlU3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuR09PR0xFX1NDUklQVF9VUkx9P25hbWU9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgcnNhLmVuY3J5cHQoc3RhdGUubmFtZSwgRU5DT0RJTkcpXG4gICAgICAgICl9JmVtYWlsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHJzYS5lbmNyeXB0KHN0YXRlLmVtYWlsLCBFTkNPRElORykpfSZ0cmFjaz0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICByc2EuZW5jcnlwdChzdGF0ZS50cmFjaywgRU5DT0RJTkcpXG4gICAgICAgICl9JmRlc2NyaXB0aW9uPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHJzYS5lbmNyeXB0KHN0YXRlLnByb2plY3REZXNjcmlwdGlvbiwgRU5DT0RJTkcpKX1gXG4gICAgICApO1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICB1cGRhdGVTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSwgZXJyb3I6IFwiXCIsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhmYzIwMTktZW1haWxcIiwgc3RhdGUuZW1haWwpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdXBkYXRlU3RhdGUoeyBzdWJtaXR0ZWQ6IHRydWUsIGVycm9yOiBlcnIubWVzc2FnZSwgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmhvbmV5cG90LnZhbHVlIHx8IHN0YXRlLmhvbmV5cG90KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgc2VuZFRvU3ByZWFkc2hlZXQoKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT1cImhvbmV5cG90XCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiaG9uZXlwb3RcIlxuICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZSh7IGhvbmV5cG90OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgIC8+XG5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ1LXB1bGwtbGVmdFwiIGh0bWxGb3I9XCJ0cmFjay1zZWxlY3RcIj5cbiAgICAgICAgUHJlZmVycmVkIHRyYWNrXG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiIGlkPVwidHJhY2stc2VsZWN0XCIgcmVmPXt0cmFja1JlZn0+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJQcml2YWN5XCI+UHJpdmFjeTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGVjZW50cmFsaXphdGlvblwiPkRlY2VudHJhbGl6YXRpb248L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVyYmFuIEhhY2t0aXZpc21cIj5VcmJhbiBIYWNrdGl2aXNtPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cblxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiIHJlZj17ZW1haWxSZWZ9IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBpZD1cImVtYWlsLWlucHV0XCIgLz5cblxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiXG4gICAgICAgIHJlZj17bmFtZVJlZn1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZS9OaWNrbmFtZVwiXG4gICAgICAgIGlkPVwibmFtZS1pbnB1dFwiXG4gICAgICAvPlxuXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgcmVmPXtkZXNjUmVmfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCB5b3UnZCBsaWtlIHRvIGhhY2s/XCJcbiAgICAgICAgaWQ9XCJwcm9qZWN0LWRlc2NyaXB0aW9uLWlucHV0XCJcbiAgICAgIC8+XG5cbiAgICAgIDxSZWFwdGNoYSBzaXRla2V5PXtwcm9jZXNzLmVudi5HT09HTEVfUkVDQVBUQ0hBX0tFWX0gdGhlbWU9XCJkYXJrXCIgb25WZXJpZnk9e29uUmVjYXB0Y2hhVmVyaWZpZWR9IC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gJHtzdGF0ZS5yZWNhcHRjaGFWZXJpZmllZCA/IFwiXCIgOiBcImJ1dHRvbi1kaXNhYmxlZFwifWB9XG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICB2YWx1ZT1cIlJTVlBcIlxuICAgICAgICBkaXNhYmxlZD17IXN0YXRlLnJlY2FwdGNoYVZlcmlmaWVkfVxuICAgICAgLz5cblxuICAgICAge3N0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgc3RhdGUuc3VibWl0dGVkICYmXG4gICAgICAgIChzdGF0ZS5lcnJvciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdj57c3RhdGUuZXJyb3J9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXY+U3VibWl0dGVkISBXZSdyZSBleGNpdGVkIHRvIHNlZSB5b3UgYXQgdGhlIGV2ZW50LjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhvbmV5cG90IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi1kaXNhYmxlZCxcbiAgICAgICAgLmJ1dHRvbi1kaXNhYmxlZDpob3ZlcixcbiAgICAgICAgLmJ1dHRvbi1kaXNhYmxlZDpmb2N1cyB7XG4gICAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc3Nzc3NztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLmctcmVjYXB0Y2hhIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/SubscribeForm.jsx */"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2603386821",
    __self: this
  }, ".g-recaptcha{margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvU3Vic2NyaWJlRm9ybS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEt5QixBQUc4QixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL21pY2hhbHRha2FjL1Byb2plY3RzL2phdmFzY3JpcHQvZmx5aW5nLWNpcmN1aXQvY29tcG9uZW50cy9TdWJzY3JpYmVGb3JtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFwdGNoYSBmcm9tIFwicmVhcHRjaGFcIjtcbmltcG9ydCBOb2RlUlNBIGZyb20gXCJub2RlLXJzYVwiO1xuaW1wb3J0IFBVQkxJQ19LRVkgZnJvbSBcIi4uL2tleXMvcHVibGljXCI7XG5pbXBvcnQgUFJJVkFURV9LRVkgZnJvbSBcIi4uL2tleXMvcHJpdmF0ZVwiO1xuXG5jb25zdCBFTkNPRElORyA9IFwiYmFzZTY0XCI7XG5cbnZhciByc2EgPSBuZXcgTm9kZVJTQShQUklWQVRFX0tFWSk7XG5yc2EuaW1wb3J0S2V5KFBVQkxJQ19LRVkpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGVtYWlsOiBcIlwiLFxuICBuYW1lOiBcIlwiLFxuICBwcm9qZWN0RGVzY3JpcHRpb246IFwiXCIsXG4gIHRyYWNrOiBcIlByaXZhY3lcIixcbiAgaG9uZXlwb3Q6IFwiXCIsXG4gIGVycm9yOiBcIlwiLFxuICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgcmVjYXB0Y2hhTG9hZGVkOiBmYWxzZSxcbiAgcmVjYXB0Y2hhVmVyaWZpZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZUZvcm0oKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgLy8gVE9ETzogZmluZCBvdXQgd2h5IHJlY2FwdGNoYSByZXNldHMgdGhlIHN0YXRlXG4gIGNvbnN0IGVtYWlsUmVmID0gY3JlYXRlUmVmKCk7XG4gIGNvbnN0IG5hbWVSZWYgPSBjcmVhdGVSZWYoKTtcbiAgY29uc3QgZGVzY1JlZiA9IGNyZWF0ZVJlZigpO1xuICBjb25zdCB0cmFja1JlZiA9IGNyZWF0ZVJlZigpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgLi4ubmV3U3RhdGUgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblJlY2FwdGNoYVZlcmlmaWVkKCkge1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIHJlY2FwdGNoYVZlcmlmaWVkOiB0cnVlLFxuICAgICAgZW1haWw6IGVtYWlsUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICBuYW1lOiBuYW1lUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb246IGRlc2NSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgIHRyYWNrOiB0cmFja1JlZi5jdXJyZW50LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VuZFRvU3ByZWFkc2hlZXQoKSB7XG4gICAgY29uc3QgcHJldmlvdXNFbWFpbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGZjMjAxOS1lbWFpbFwiKTtcblxuICAgIGlmIChwcmV2aW91c0VtYWlsID09PSBzdGF0ZS5lbWFpbCkge1xuICAgICAgdXBkYXRlU3RhdGUoeyBzdWJtaXR0ZWQ6IHRydWUsIGVycm9yOiBcIllvdSBhbHJlYWR5IGFyZSBvbiBvdXIgbGlzdC5cIiB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLmVtYWlsKSB7XG4gICAgICB1cGRhdGVTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSwgZXJyb3I6IFwiRW1haWwgaXMgbWlzc2luZy5cIiB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLm5hbWUpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKHsgc3VibWl0dGVkOiB0cnVlLCBlcnJvcjogXCJZb3VyIG5hbWUvbmlja25hbWUgaXMgbWlzc2luZy5cIiB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLnByb2plY3REZXNjcmlwdGlvbikge1xuICAgICAgdXBkYXRlU3RhdGUoeyBzdWJtaXR0ZWQ6IHRydWUsIGVycm9yOiBcIlBsZWFzZSBkZXNjcmliZSB3aGF0IHlvdSdyZSBwbGFubmluZyB0byB3b3JrIG9uIGR1cmluZyB0aGUgZXZlbnQhXCIgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHVwZGF0ZVN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGAke3Byb2Nlc3MuZW52LkdPT0dMRV9TQ1JJUFRfVVJMfT9uYW1lPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgIHJzYS5lbmNyeXB0KHN0YXRlLm5hbWUsIEVOQ09ESU5HKVxuICAgICAgICApfSZlbWFpbD0ke2VuY29kZVVSSUNvbXBvbmVudChyc2EuZW5jcnlwdChzdGF0ZS5lbWFpbCwgRU5DT0RJTkcpKX0mdHJhY2s9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgcnNhLmVuY3J5cHQoc3RhdGUudHJhY2ssIEVOQ09ESU5HKVxuICAgICAgICApfSZkZXNjcmlwdGlvbj0ke2VuY29kZVVSSUNvbXBvbmVudChyc2EuZW5jcnlwdChzdGF0ZS5wcm9qZWN0RGVzY3JpcHRpb24sIEVOQ09ESU5HKSl9YFxuICAgICAgKTtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgdXBkYXRlU3RhdGUoeyBzdWJtaXR0ZWQ6IHRydWUsIGVycm9yOiBcIlwiLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoZmMyMDE5LWVtYWlsXCIsIHN0YXRlLmVtYWlsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHVwZGF0ZVN0YXRlKHsgc3VibWl0dGVkOiB0cnVlLCBlcnJvcjogZXJyLm1lc3NhZ2UsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0PXthc3luYyBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5ob25leXBvdC52YWx1ZSB8fCBzdGF0ZS5ob25leXBvdCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHNlbmRUb1NwcmVhZHNoZWV0KCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJob25leXBvdFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImhvbmV5cG90XCJcbiAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoeyBob25leXBvdDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAvPlxuXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidS1wdWxsLWxlZnRcIiBodG1sRm9yPVwidHJhY2stc2VsZWN0XCI+XG4gICAgICAgIFByZWZlcnJlZCB0cmFja1xuICAgICAgPC9sYWJlbD5cblxuICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIiBpZD1cInRyYWNrLXNlbGVjdFwiIHJlZj17dHJhY2tSZWZ9PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUHJpdmFjeVwiPlByaXZhY3k8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRlY2VudHJhbGl6YXRpb25cIj5EZWNlbnRyYWxpemF0aW9uPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJVcmJhbiBIYWNrdGl2aXNtXCI+VXJiYW4gSGFja3RpdmlzbTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIiByZWY9e2VtYWlsUmVmfSB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgaWQ9XCJlbWFpbC1pbnB1dFwiIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICByZWY9e25hbWVSZWZ9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWUvTmlja25hbWVcIlxuICAgICAgICBpZD1cIm5hbWUtaW5wdXRcIlxuICAgICAgLz5cblxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiXG4gICAgICAgIHJlZj17ZGVzY1JlZn1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgeW91J2QgbGlrZSB0byBoYWNrP1wiXG4gICAgICAgIGlkPVwicHJvamVjdC1kZXNjcmlwdGlvbi1pbnB1dFwiXG4gICAgICAvPlxuXG4gICAgICA8UmVhcHRjaGEgc2l0ZWtleT17cHJvY2Vzcy5lbnYuR09PR0xFX1JFQ0FQVENIQV9LRVl9IHRoZW1lPVwiZGFya1wiIG9uVmVyaWZ5PXtvblJlY2FwdGNoYVZlcmlmaWVkfSAvPlxuXG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uICR7c3RhdGUucmVjYXB0Y2hhVmVyaWZpZWQgPyBcIlwiIDogXCJidXR0b24tZGlzYWJsZWRcIn1gfVxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgdmFsdWU9XCJSU1ZQXCJcbiAgICAgICAgZGlzYWJsZWQ9eyFzdGF0ZS5yZWNhcHRjaGFWZXJpZmllZH1cbiAgICAgIC8+XG5cbiAgICAgIHtzdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIHN0YXRlLnN1Ym1pdHRlZCAmJlxuICAgICAgICAoc3RhdGUuZXJyb3IgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXY+e3N0YXRlLmVycm9yfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2PlN1Ym1pdHRlZCEgV2UncmUgZXhjaXRlZCB0byBzZWUgeW91IGF0IHRoZSBldmVudC48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ob25leXBvdCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24tZGlzYWJsZWQsXG4gICAgICAgIC5idXR0b24tZGlzYWJsZWQ6aG92ZXIsXG4gICAgICAgIC5idXR0b24tZGlzYWJsZWQ6Zm9jdXMge1xuICAgICAgICAgIGNvbG9yOiAjNzc3Nzc3O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc3Nzc7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5nLXJlY2FwdGNoYSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/SubscribeForm.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.dcbb8d88a306d4e626f1.hot-update.js.map