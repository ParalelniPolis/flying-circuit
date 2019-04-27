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
  name: "",
  projectDescription: ""
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
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-954648650" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: "jsx-954648650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Tickets"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-954648650",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-954648650" + " " + "row ticket-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-954648650" + " " + "six columns offset-by-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
      lineNumber: 29
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
      lineNumber: 35
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
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", {
    type: "text",
    placeholder: "Describe what you want to build in few words",
    id: "project-description-input",
    onChange: function onChange(e) {
      return updateState("projectDescription", e.target.value);
    },
    className: "jsx-954648650" + " " + "u-full-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "submit",
    value: "RSVP",
    className: "jsx-954648650" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "954648650",
    __self: this
  }, ".ticket-form.jsx-954648650{margin-top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvVGlja2V0cy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERrQixBQUcyQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL21pY2hhbHRha2FjL1Byb2plY3RzL2phdmFzY3JpcHQvZmx5aW5nLWNpcmN1aXQvY29tcG9uZW50cy9UaWNrZXRzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZW1haWw6IFwiXCIsXG4gIG5hbWU6IFwiXCIsXG4gIHByb2plY3REZXNjcmlwdGlvbjogXCJcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBUaWNrZXRzKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUoa2V5LCB2YWx1ZSkge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtrZXldOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxoMz5UaWNrZXRzPC9oMz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bVxuICAgICAgICAgIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtIGxvcmVtIGlwc3VtXG4gICAgICAgICAgbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW0gbG9yZW0gaXBzdW1cbiAgICAgICAgICBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bSBsb3JlbSBpcHN1bVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGlja2V0LWZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXggY29sdW1ucyBvZmZzZXQtYnktdGhyZWVcIj5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVE9ETzogaW1wbGVtZW50IGZvcm0gc2VuZGluZ1wiLCBzdGF0ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1pbnB1dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVN0YXRlKFwiZW1haWxcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlU3RhdGUoXCJuYW1lXCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgd2hhdCB5b3Ugd2FudCB0byBidWlsZCBpbiBmZXcgd29yZHNcIlxuICAgICAgICAgICAgICBpZD1cInByb2plY3QtZGVzY3JpcHRpb24taW5wdXRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVTdGF0ZShcInByb2plY3REZXNjcmlwdGlvblwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUlNWUFwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGlja2V0LWZvcm0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Tickets.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f88b688aa6acccdbcf0c.hot-update.js.map