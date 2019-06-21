webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Intro.jsx":
/*!******************************!*\
  !*** ./components/Intro.jsx ***!
  \******************************/
/*! exports provided: Intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return Intro; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ScrollIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollIcon */ "./components/ScrollIcon.jsx");
/* harmony import */ var _HeroBlackBg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroBlackBg */ "./components/HeroBlackBg.jsx");


var _jsxFileName = "/Users/michaltakac/Projects/javascript/flying-circuit/components/Intro.jsx";





var initialState = {
  innerHeight: 0,
  lockHeight: null,
  currentScrollHeight: null,
  logoOpacity: 0,
  lockScroll: true,
  logoWidth: 80,
  logoMarginLeft: 40,
  logoIntensity: 100
};
var scrollTo = null;
function Intro() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (typeof window !== "undefined") {
      scrollTo = function scrollTo(id) {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth"
        });
      };
    }

    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      innerHeight: window.innerHeight
    }));

    var onScroll = function onScroll() {
      var lockHeight = window.innerHeight + state.sectionTopMargin;
      var logoIntensity = 100 - window.scrollY / 10 * 2; // console.log(logoIntensity);

      setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        logoIntensity: logoIntensity
      })); // var logoOpacityA = window.scrollY / 1000;
      // var logoWidth = window.scrollY;
      // //
      // setState({...state, logoOpacity: logoOpacityA});
      // if (window.scrollY > lockHeight) {
      //   // not revealing yet...
      //   setState({ ...state, lockHeight });
      // } else {
      //   // whole logo revealed
      //   setState({ ...state, lockHeight: null });
      // }
    };

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, [state.lockHeight, state.logoOpacity, state.logoIntensity]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "u-full-width header row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "leftTop",
    className: "jsx-3262289189" + " " + "header-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/institute-presents-black.png",
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "rightTop",
    className: "jsx-3262289189" + " " + "header-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/paralelnipolis-logo.png",
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-3262289189" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    onClick: function onClick() {
      if (scrollTo) {
        scrollTo("manifesto");
      }
    },
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Manifesto")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    onClick: function onClick() {
      if (scrollTo) {
        scrollTo("content");
      }
    },
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Topics")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    onClick: function onClick() {
      if (scrollTo) {
        scrollTo("signup");
      }
    },
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    onClick: function onClick() {
      if (scrollTo) {
        scrollTo("sponsors");
      }
    },
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Sponsors"))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "info row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "u-full-width column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "July 19", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", {
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "th"), "-21", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", {
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "st"), ", 2019, Prague, CZ")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "container sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "intro-body row sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/hfc-text-color-transparent.png",
    style: {
      width: "".concat(state.logoWidth, "%"),
      // marginLeft: `-${state.logoMarginLeft}%`,
      filter: "grayscale(".concat(state.logoIntensity, "%)") // opacity: `${state.logoOpacity}`

    },
    className: "jsx-3262289189",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "container black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3262289189" + " " + "row u-full-width black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/flowers.png",
    className: "jsx-3262289189" + " " + "flowers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/head.png",
    className: "jsx-3262289189" + " " + "head sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3262289189",
    __self: this
  }, ".test.jsx-3262289189{position:relative;overflow:hidden;margin-top:-80px;}.info.jsx-3262289189{color:black;font-weight:700;font-size:2rem;text-align:center;}.sticky.jsx-3262289189{position:-webkit-sticky;position:sticky;top:0;}.intro.jsx-3262289189{background:white;background:linear-gradient(white,black);height:100vh;}.intro-body.jsx-3262289189{padding:5%;}.header.jsx-3262289189{top:0;padding:40px;height:120px;z-index:200;}.header.jsx-3262289189 a.jsx-3262289189{cursor:pointer;}.header-logos.jsx-3262289189{display:inline-block;margin-bottom:45px;}.header-logos.jsx-3262289189 img.jsx-3262289189{max-width:130px;max-height:80px;}#leftTop.jsx-3262289189{float:left;}#rightTop.jsx-3262289189{margin-top:-20px;float:right;}.intro-body.jsx-3262289189{text-align:center;}.intro-body.jsx-3262289189 img.jsx-3262289189{width:80%;height:auto;position:-webkit-sticky;position:sticky;position:-webkit-sticky;top:50px;display:initial;}.black.jsx-3262289189{text-align:center;background-color:#000000;}.flowers.jsx-3262289189{width:96%;margin:0 2%;z-index:100;}.head.jsx-3262289189{position:absolute;width:90%;left:29%;margin-top:-60px;z-index:100;}ul.jsx-3262289189{list-style-type:none;margin:0;padding:0;overflow:hidden;text-align:center;}li.jsx-3262289189{float:left;}li.jsx-3262289189 a.jsx-3262289189{display:block;color:black;text-align:center;font-size:1.6rem;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}li.jsx-3262289189 a.jsx-3262289189:hover{color:#404040;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvSW50cm8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdKa0IsQUFHNkIsQUFLTixBQU1JLEFBSUMsQUFTTixBQUlMLEFBTVMsQUFJTSxBQUlMLEFBS0wsQUFJTSxBQUtDLEFBSVIsQUFZUSxBQUlSLEFBS1EsQUFVRyxBQVFWLEFBSUcsQUFTQSxNQW5GRCxJQWdDRCxBQWdCQSxDQXBEZCxBQXVCQSxBQW9EQSxDQTlGa0IsRUFrR0osQUFTZCxDQTlFQSxDQVFrQixDQTNCeUIsQUFvQzdCLENBbkRJLEFBd0RsQixBQWdCMkIsQUFTZixDQXBERyxFQVNNLEFBcURWLENBOUJPLEFBZ0JKLElBMkJNLEVBbEdILEFBNEVOLENBOUJYLENBd0NZLEVBOURFLEFBYWQsRUExQ21CLEFBNkVuQixHQUttQixHQXhFWCxBQTRCUixBQXNEa0IsR0F0RkUsQUFrRXBCLENBMUNBLEFBMEVtQixFQTdGbkIsS0FWQSxHQWtGYyxFQVVNLENBM0VMLElBWGYsQUFrR29CLENBNUNNLElBeUIxQixJQW5FQSxJQTJFQSxLQVl1QixPQTVDWixTQUNPLGdCQUNsQixrQkEyQ0EiLCJmaWxlIjoiL1VzZXJzL21pY2hhbHRha2FjL1Byb2plY3RzL2phdmFzY3JpcHQvZmx5aW5nLWNpcmN1aXQvY29tcG9uZW50cy9JbnRyby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTY3JvbGxJY29uIH0gZnJvbSBcIi4vU2Nyb2xsSWNvblwiO1xuaW1wb3J0IHsgSGVyb0JsYWNrQmcgfSBmcm9tIFwiLi9IZXJvQmxhY2tCZ1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlubmVySGVpZ2h0OiAwLFxuICBsb2NrSGVpZ2h0OiBudWxsLFxuICBjdXJyZW50U2Nyb2xsSGVpZ2h0OiBudWxsLFxuICBsb2dvT3BhY2l0eTogMCxcbiAgbG9ja1Njcm9sbDogdHJ1ZSxcbiAgbG9nb1dpZHRoOiA4MCxcbiAgbG9nb01hcmdpbkxlZnQ6IDQwLFxuICBsb2dvSW50ZW5zaXR5OiAxMDAsXG59O1xuXG5sZXQgc2Nyb2xsVG8gPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gSW50cm8oKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzY3JvbGxUbyA9IGlkID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaW5uZXJIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KTtcblxuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9ja0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIHN0YXRlLnNlY3Rpb25Ub3BNYXJnaW47XG4gICAgICB2YXIgbG9nb0ludGVuc2l0eSA9IDEwMCAtICh3aW5kb3cuc2Nyb2xsWSAvIDEwKSAqIDI7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsb2dvSW50ZW5zaXR5KTtcbiAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGxvZ29JbnRlbnNpdHk6IGxvZ29JbnRlbnNpdHkgfSk7XG5cbiAgICAgIC8vIHZhciBsb2dvT3BhY2l0eUEgPSB3aW5kb3cuc2Nyb2xsWSAvIDEwMDA7XG4gICAgICAvLyB2YXIgbG9nb1dpZHRoID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAvLyAvL1xuICAgICAgLy8gc2V0U3RhdGUoey4uLnN0YXRlLCBsb2dvT3BhY2l0eTogbG9nb09wYWNpdHlBfSk7XG5cbiAgICAgIC8vIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGxvY2tIZWlnaHQpIHtcbiAgICAgIC8vICAgLy8gbm90IHJldmVhbGluZyB5ZXQuLi5cbiAgICAgIC8vICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbG9ja0hlaWdodCB9KTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIC8vIHdob2xlIGxvZ28gcmV2ZWFsZWRcbiAgICAgIC8vICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbG9ja0hlaWdodDogbnVsbCB9KTtcbiAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3N0YXRlLmxvY2tIZWlnaHQsIHN0YXRlLmxvZ29PcGFjaXR5LCBzdGF0ZS5sb2dvSW50ZW5zaXR5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aCBoZWFkZXIgcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nb3NcIiBpZD1cImxlZnRUb3BcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvaW5zdGl0dXRlLXByZXNlbnRzLWJsYWNrLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvc1wiIGlkPVwicmlnaHRUb3BcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcGFyYWxlbG5pcG9saXMtbG9nby5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG8oXCJtYW5pZmVzdG9cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19Pk1hbmlmZXN0bzwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG8oXCJjb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fT5Ub3BpY3M8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUbyhcInNpZ251cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUbyhcInNwb25zb3JzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fT5TcG9uc29yczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyByb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aCBjb2x1bW5cIj5cbiAgICAgICAgICAgIEp1bHkgMTk8c3VwPnRoPC9zdXA+LTIxPHN1cD5zdDwvc3VwPiwgMjAxOSwgUHJhZ3VlLCBDWlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzdGlja3lcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvLWJvZHkgcm93IHN0aWNreVwiPlxuICAgICAgICAgICAgey8qPGltZyBzcmM9XCIvc3RhdGljL2ltZy9oZmMtdGV4dC1idy10cmFuc3BhcmVudC5wbmdcIiovfVxuICAgICAgICAgICAgey8qICAgc3R5bGU9e3sqL31cbiAgICAgICAgICAgIHsvKiAgICAgd2lkdGg6IGAke3N0YXRlLmxvZ29XaWR0aH0lYCwqL31cbiAgICAgICAgICAgIHsvKiAgICAgLy8gbWFyZ2luTGVmdDogYC0ke3N0YXRlLmxvZ29NYXJnaW5MZWZ0fSVgLCovfVxuICAgICAgICAgICAgey8qfX0vPiovfVxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltZy9oZmMtdGV4dC1jb2xvci10cmFuc3BhcmVudC5wbmdcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtzdGF0ZS5sb2dvV2lkdGh9JWAsXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luTGVmdDogYC0ke3N0YXRlLmxvZ29NYXJnaW5MZWZ0fSVgLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogYGdyYXlzY2FsZSgke3N0YXRlLmxvZ29JbnRlbnNpdHl9JSlgLFxuICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IGAke3N0YXRlLmxvZ29PcGFjaXR5fWBcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qPGRpdiovfVxuICAgICAgICAgIHsvKiAgY2xhc3NOYW1lPVwic2Nyb2xsLWRvd24gcm93XCIqL31cbiAgICAgICAgICB7LyogIC8vIHN0eWxlPXt7IHRvcDogYCR7c3RhdGUubW91bnRlZCA/IHN0YXRlLmlubmVySGVpZ2h0IC0gMTUwIDogNTAwfXB4YCwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSovfVxuICAgICAgICAgIHsvKj4qL31cbiAgICAgICAgICB7LyogIDxTY3JvbGxJY29uIHNjcm9sbFRvPVwiI21hbmlmZXN0b1wiIHNtb290aFNjcm9sbD17dHJ1ZX0gLz4qL31cbiAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidGVzdFwiPiovfVxuICAgICAgICB7LyogIFRlc3QqL31cbiAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJsYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdS1mdWxsLXdpZHRoIGJsYWNrXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb3dlcnNcIiBzcmM9XCIvc3RhdGljL2ltZy9mbG93ZXJzLnBuZ1wiIC8+XG4gICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInRlc3RcIj4qL31cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGVhZCBzdGlja3lcIiBzcmM9XCIvc3RhdGljL2ltZy9oZWFkLnBuZ1wiIC8+XG4gICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGVzdCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnN0aWNreSB7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGJsYWNrKTtcbiAgICAgICAgICAvLyBtaW4taGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IC1tb3otYXZhaWxhYmxlO1xuICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IGZpbGwtYXZhaWxhYmxlO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8tYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIGEge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXItbG9nb3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXItbG9nb3MgaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjbGVmdFRvcCB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAjcmlnaHRUb3Age1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyby1ib2R5IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8tYm9keSBpbWcge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcm9sbC1kb3duIHtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibGFjayB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmZsb3dlcnMge1xuICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgbWFyZ2luOiAwIDIlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbGVmdDogMjklO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAvLyBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIC8vIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBsaSBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBsaSBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzQwNDA0MDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Intro.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.0b3ae35ae37a3020d3ea.hot-update.js.map