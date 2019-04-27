webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Sponsors.jsx":
/*!*********************************!*\
  !*** ./components/Sponsors.jsx ***!
  \*********************************/
/*! exports provided: Sponsors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sponsors", function() { return Sponsors; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/Users/michaltakac/Projects/javascript/flying-circuit/components/Sponsors.jsx";



var initialState = {
  showForm: false,
  email: "",
  name: "",
  message: ""
};
function Sponsors() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  function updateState(key, value) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value)));
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-886544686" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-886544686" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "jsx-886544686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Sponsors"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-886544686" + " " + "one-third column speaker-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "/static/img/paralelnipolis-logo-white.png",
    alt: "Firstname Lastname",
    className: "jsx-886544686" + " " + "partner-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-886544686" + " " + "one-third column speaker-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "/static/img/paralelnipolis-logo-white.png",
    alt: "Firstname Lastname",
    className: "jsx-886544686" + " " + "partner-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-886544686" + " " + "one-third column speaker-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: "/static/img/paralelnipolis-logo-white.png",
    alt: "Firstname Lastname",
    className: "jsx-886544686" + " " + "partner-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-886544686" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: function onClick() {
      return updateState("showForm", !state.showForm);
    },
    className: "jsx-886544686" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Become a sponsor!")), state.isShown && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-886544686" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      console.log("TODO: implement form sending", state);
    },
    className: "jsx-886544686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "email-input",
    className: "jsx-886544686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "email",
    placeholder: "test@example.com",
    id: "email-input",
    onChange: function onChange(e) {
      return updateState("email", e.target.value);
    },
    className: "jsx-886544686" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "name-input",
    className: "jsx-886544686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    placeholder: "Satoshi Nakamoto",
    id: "name-input",
    onChange: function onChange(e) {
      return updateState("name", e.target.value);
    },
    className: "jsx-886544686" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "message-input",
    className: "jsx-886544686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Message"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", {
    type: "text",
    placeholder: "Message",
    id: "message-input",
    onChange: function onChange(e) {
      return updateState("message", e.target.value);
    },
    className: "jsx-886544686" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "submit",
    value: "Submit",
    className: "jsx-886544686" + " " + "button-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "886544686",
    __self: this
  }, ".partner-image.jsx-886544686{width:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvU3BvbnNvcnMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ea0IsQUFHdUIsWUFDZCIsImZpbGUiOiIvVXNlcnMvbWljaGFsdGFrYWMvUHJvamVjdHMvamF2YXNjcmlwdC9mbHlpbmctY2lyY3VpdC9jb21wb25lbnRzL1Nwb25zb3JzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvd0Zvcm06IGZhbHNlLFxuICBlbWFpbDogXCJcIixcbiAgbmFtZTogXCJcIixcbiAgbWVzc2FnZTogXCJcIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gU3BvbnNvcnMoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKGtleSwgdmFsdWUpIHtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBba2V5XTogdmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxoMz5TcG9uc29yczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lLXRoaXJkIGNvbHVtbiBzcGVha2VyLWNhcmRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBhcnRuZXItaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltZy9wYXJhbGVsbmlwb2xpcy1sb2dvLXdoaXRlLnBuZ1wiIGFsdD1cIkZpcnN0bmFtZSBMYXN0bmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZS10aGlyZCBjb2x1bW4gc3BlYWtlci1jYXJkXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwYXJ0bmVyLWltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWcvcGFyYWxlbG5pcG9saXMtbG9nby13aGl0ZS5wbmdcIiBhbHQ9XCJGaXJzdG5hbWUgTGFzdG5hbWVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmUtdGhpcmQgY29sdW1uIHNwZWFrZXItY2FyZFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGFydG5lci1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1nL3BhcmFsZWxuaXBvbGlzLWxvZ28td2hpdGUucG5nXCIgYWx0PVwiRmlyc3RuYW1lIExhc3RuYW1lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4gdXBkYXRlU3RhdGUoXCJzaG93Rm9ybVwiLCAhc3RhdGUuc2hvd0Zvcm0pfT5CZWNvbWUgYSBzcG9uc29yITwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7c3RhdGUuaXNTaG93biAmJiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE86IGltcGxlbWVudCBmb3JtIHNlbmRpbmdcIiwgc3RhdGUpXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbC1pbnB1dFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ0ZXN0QGV4YW1wbGUuY29tXCIgaWQ9XCJlbWFpbC1pbnB1dFwiICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZShcImVtYWlsXCIsIGUudGFyZ2V0LnZhbHVlKX0gLz5cblxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZS1pbnB1dFwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2F0b3NoaSBOYWthbW90b1wiIGlkPVwibmFtZS1pbnB1dFwiICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZShcIm5hbWVcIiwgZS50YXJnZXQudmFsdWUpfSAvPlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlLWlucHV0XCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgaWQ9XCJtZXNzYWdlLWlucHV0XCIgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXRlKFwibWVzc2FnZVwiLCBlLnRhcmdldC52YWx1ZSl9IC8+XG5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj59XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhcnRuZXItaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Sponsors.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.eb81d339e9e946061a32.hot-update.js.map