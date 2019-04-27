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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/Users/michaltakac/Projects/javascript/flying-circuit/components/Tickets.jsx";



var initialState = {
  email: "",
  name: ""
};
function Tickets() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  function updateState(key, value) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value)));
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-954648650" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-954648650" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "jsx-954648650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Tickets"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-954648650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-954648650" + " " + "row ticket-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-954648650" + " " + "six columns offset-by-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      console.log("TODO: implement form sending", state);
    },
    className: "jsx-954648650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "email",
    placeholder: "Email",
    id: "email-input",
    onChange: function onChange(e) {
      return updateState("email", e.target.value);
    },
    className: "jsx-954648650" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    placeholder: "Name",
    id: "name-input",
    onChange: function onChange(e) {
      return updateState("name", e.target.value);
    },
    className: "jsx-954648650" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "submit",
    value: "RSVP",
    className: "jsx-954648650" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "954648650",
    __self: this
  }, ".ticket-form.jsx-954648650{margin-top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvVGlja2V0cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUcyQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL21pY2hhbHRha2FjL1Byb2plY3RzL2phdmFzY3JpcHQvZmx5aW5nLWNpcmN1aXQvY29tcG9uZW50cy9UaWNrZXRzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZW1haWw6IFwiXCIsXG4gIG5hbWU6IFwiXCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVGlja2V0cygpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKGtleSwgdmFsdWUpIHtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBba2V5XTogdmFsdWUgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8aDM+VGlja2V0czwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cbiAgICAgICAgICBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bVxuICAgICAgICAgIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtXG4gICAgICAgICAgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRpY2tldC1mb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE86IGltcGxlbWVudCBmb3JtIHNlbmRpbmdcIiwgc3RhdGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWwtaW5wdXRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZShcImVtYWlsXCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwibmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXRlKFwibmFtZVwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUlNWUFwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGlja2V0LWZvcm0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Tickets.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.bec3cb049891937ed7d6.hot-update.js.map