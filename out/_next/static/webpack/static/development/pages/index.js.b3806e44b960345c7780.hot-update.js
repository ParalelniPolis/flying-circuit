webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Partners.jsx":
/*!*********************************!*\
  !*** ./components/Partners.jsx ***!
  \*********************************/
/*! exports provided: Partners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partners", function() { return Partners; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/Users/michaltakac/Projects/javascript/flying-circuit/components/Partners.jsx";



var initialState = {
  showForm: false,
  email: "",
  name: "",
  message: ""
};
function Partners() {
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
  }, "Partners"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
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
  }, "Become a partner!")), state.showForm && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-886544686" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-886544686" + " " + "six columns offset-by-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
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
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "email-input",
    className: "jsx-886544686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "name-input",
    className: "jsx-886544686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "message-input",
    className: "jsx-886544686",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Message"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", {
    type: "text",
    rows: "4",
    placeholder: "Message",
    id: "message-input",
    onChange: function onChange(e) {
      return updateState("message", e.target.value);
    },
    className: "jsx-886544686" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "submit",
    value: "Submit",
    className: "jsx-886544686" + " " + "button-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "886544686",
    __self: this
  }, ".partner-image.jsx-886544686{width:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvUGFydG5lcnMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFa0IsQUFHdUIsWUFDZCIsImZpbGUiOiIvVXNlcnMvbWljaGFsdGFrYWMvUHJvamVjdHMvamF2YXNjcmlwdC9mbHlpbmctY2lyY3VpdC9jb21wb25lbnRzL1BhcnRuZXJzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvd0Zvcm06IGZhbHNlLFxuICBlbWFpbDogXCJcIixcbiAgbmFtZTogXCJcIixcbiAgbWVzc2FnZTogXCJcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQYXJ0bmVycygpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKGtleSwgdmFsdWUpIHtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBba2V5XTogdmFsdWUgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8aDM+UGFydG5lcnM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZS10aGlyZCBjb2x1bW4gc3BlYWtlci1jYXJkXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwYXJ0bmVyLWltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWcvcGFyYWxlbG5pcG9saXMtbG9nby13aGl0ZS5wbmdcIiBhbHQ9XCJGaXJzdG5hbWUgTGFzdG5hbWVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmUtdGhpcmQgY29sdW1uIHNwZWFrZXItY2FyZFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGFydG5lci1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1nL3BhcmFsZWxuaXBvbGlzLWxvZ28td2hpdGUucG5nXCIgYWx0PVwiRmlyc3RuYW1lIExhc3RuYW1lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lLXRoaXJkIGNvbHVtbiBzcGVha2VyLWNhcmRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBhcnRuZXItaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltZy9wYXJhbGVsbmlwb2xpcy1sb2dvLXdoaXRlLnBuZ1wiIGFsdD1cIkZpcnN0bmFtZSBMYXN0bmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVN0YXRlKFwic2hvd0Zvcm1cIiwgIXN0YXRlLnNob3dGb3JtKX0+XG4gICAgICAgICAgQmVjb21lIGEgcGFydG5lciFcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzdGF0ZS5zaG93Rm9ybSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIj5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUT0RPOiBpbXBsZW1lbnQgZm9ybSBzZW5kaW5nXCIsIHN0YXRlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbC1pbnB1dFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGVzdEBleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoXCJlbWFpbFwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lLWlucHV0XCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2F0b3NoaSBOYWthbW90b1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZShcIm5hbWVcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZS1pbnB1dFwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2UtaW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXRlKFwibWVzc2FnZVwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wYXJ0bmVyLWltYWdlIHtcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Partners.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.b3806e44b960345c7780.hot-update.js.map