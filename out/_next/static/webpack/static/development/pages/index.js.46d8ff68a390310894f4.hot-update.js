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
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "u-full-width header row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "leftTop",
    className: "jsx-2796458697" + " " + "header-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/institute-presents-black.png",
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "rightTop",
    className: "jsx-2796458697" + " " + "header-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/paralelnipolis-logo.png",
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "container navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-2796458697" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-2796458697",
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
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Manifesto")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-2796458697",
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
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Topics")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-2796458697",
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
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-2796458697",
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
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Sponsors"))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "info row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "u-full-width column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "July 19", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", {
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "th"), "-21", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", {
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "st"), ", 2019, Prague, CZ")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "container sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "intro-body row sticky",
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
    className: "jsx-2796458697",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "container black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2796458697" + " " + "row u-full-width black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/flowers.png",
    className: "jsx-2796458697" + " " + "flowers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/head.png",
    className: "jsx-2796458697" + " " + "head sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2796458697",
    __self: this
  }, ".test.jsx-2796458697{position:relative;overflow:hidden;margin-top:-80px;}.info.jsx-2796458697{color:black;font-weight:700;font-size:2rem;text-align:center;}.sticky.jsx-2796458697{position:-webkit-sticky;position:sticky;top:0;}.intro.jsx-2796458697{background:white;background:linear-gradient(white,black);height:100vh;}.intro-body.jsx-2796458697{padding:5%;}.header.jsx-2796458697{top:0;padding:40px;height:120px;z-index:200;}.header.jsx-2796458697 a.jsx-2796458697{cursor:pointer;}.header-logos.jsx-2796458697{display:inline-block;margin-bottom:45px;}.header-logos.jsx-2796458697 img.jsx-2796458697{max-width:130px;max-height:80px;}#leftTop.jsx-2796458697{float:left;}#rightTop.jsx-2796458697{margin-top:-20px;float:right;}.intro-body.jsx-2796458697{text-align:center;}.intro-body.jsx-2796458697 img.jsx-2796458697{width:80%;height:auto;position:-webkit-sticky;position:sticky;position:-webkit-sticky;top:50px;display:initial;}.black.jsx-2796458697{text-align:center;background-color:#000000;}.flowers.jsx-2796458697{width:96%;margin:0 2%;z-index:100;}.head.jsx-2796458697{position:absolute;width:90%;left:29%;margin-top:-60px;z-index:100;}.navbar.jsx-2796458697{text-align:center;}ul.jsx-2796458697{list-style-type:none;margin:0 auto;padding:0;overflow:hidden;display:inline-block;}li.jsx-2796458697{float:left;text-align:center;}li.jsx-2796458697 a.jsx-2796458697{display:block;color:black;text-align:center;font-size:1.6rem;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}li.jsx-2796458697 a.jsx-2796458697:hover{color:#404040;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvSW50cm8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdKa0IsQUFHNkIsQUFLTixBQU1JLEFBSUMsQUFTTixBQUlMLEFBTVMsQUFJTSxBQUlMLEFBS0wsQUFJTSxBQUtDLEFBSVIsQUFZUSxBQUlSLEFBS1EsQUFVQSxBQUlHLEFBUVYsQUFLRyxBQVNBLE1BeEZELElBZ0NELEFBZ0JBLENBcERkLEFBdUJBLEFBd0RvQixDQWxHRixFQXVHSixBQVNkLENBbkZBLENBUWtCLENBM0J5QixBQW9DN0IsQ0FuREksQUF3RGxCLEFBZ0IyQixBQVNmLEFBVVosQ0E5RGUsRUFTTSxBQXlETCxDQWxDRSxBQWdCSixJQWdDTSxFQXZHSCxBQTRFTixDQTlCWCxBQW9EQSxHQTFFYyxBQWFkLEVBMUNtQixBQTZFbkIsQ0FrQlksRUFiTyxHQXhFWCxBQTRCUixHQWhDb0IsQUFrRXBCLENBMUNBLEFBK0VtQixDQWJELENBckZsQixLQVZBLEdBa0ZjLEdBakVDLElBWGYsQUEwRnVCLEFBYUgsQ0FqRE0sSUF5QjFCLElBbkVBLFNBNEZ1QixHQWJ2QixJQXBDVyxTQUNPLGdCQUNsQixrQkFnREEiLCJmaWxlIjoiL1VzZXJzL21pY2hhbHRha2FjL1Byb2plY3RzL2phdmFzY3JpcHQvZmx5aW5nLWNpcmN1aXQvY29tcG9uZW50cy9JbnRyby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTY3JvbGxJY29uIH0gZnJvbSBcIi4vU2Nyb2xsSWNvblwiO1xuaW1wb3J0IHsgSGVyb0JsYWNrQmcgfSBmcm9tIFwiLi9IZXJvQmxhY2tCZ1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlubmVySGVpZ2h0OiAwLFxuICBsb2NrSGVpZ2h0OiBudWxsLFxuICBjdXJyZW50U2Nyb2xsSGVpZ2h0OiBudWxsLFxuICBsb2dvT3BhY2l0eTogMCxcbiAgbG9ja1Njcm9sbDogdHJ1ZSxcbiAgbG9nb1dpZHRoOiA4MCxcbiAgbG9nb01hcmdpbkxlZnQ6IDQwLFxuICBsb2dvSW50ZW5zaXR5OiAxMDAsXG59O1xuXG5sZXQgc2Nyb2xsVG8gPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gSW50cm8oKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzY3JvbGxUbyA9IGlkID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaW5uZXJIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KTtcblxuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgbG9ja0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIHN0YXRlLnNlY3Rpb25Ub3BNYXJnaW47XG4gICAgICB2YXIgbG9nb0ludGVuc2l0eSA9IDEwMCAtICh3aW5kb3cuc2Nyb2xsWSAvIDEwKSAqIDI7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsb2dvSW50ZW5zaXR5KTtcbiAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGxvZ29JbnRlbnNpdHk6IGxvZ29JbnRlbnNpdHkgfSk7XG5cbiAgICAgIC8vIHZhciBsb2dvT3BhY2l0eUEgPSB3aW5kb3cuc2Nyb2xsWSAvIDEwMDA7XG4gICAgICAvLyB2YXIgbG9nb1dpZHRoID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAvLyAvL1xuICAgICAgLy8gc2V0U3RhdGUoey4uLnN0YXRlLCBsb2dvT3BhY2l0eTogbG9nb09wYWNpdHlBfSk7XG5cbiAgICAgIC8vIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGxvY2tIZWlnaHQpIHtcbiAgICAgIC8vICAgLy8gbm90IHJldmVhbGluZyB5ZXQuLi5cbiAgICAgIC8vICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbG9ja0hlaWdodCB9KTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIC8vIHdob2xlIGxvZ28gcmV2ZWFsZWRcbiAgICAgIC8vICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbG9ja0hlaWdodDogbnVsbCB9KTtcbiAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3N0YXRlLmxvY2tIZWlnaHQsIHN0YXRlLmxvZ29PcGFjaXR5LCBzdGF0ZS5sb2dvSW50ZW5zaXR5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aCBoZWFkZXIgcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nb3NcIiBpZD1cImxlZnRUb3BcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvaW5zdGl0dXRlLXByZXNlbnRzLWJsYWNrLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvc1wiIGlkPVwicmlnaHRUb3BcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvcGFyYWxlbG5pcG9saXMtbG9nby5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbmF2YmFyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUbykge1xuICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvKFwibWFuaWZlc3RvXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fT5NYW5pZmVzdG88L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUbykge1xuICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvKFwiY29udGVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX0+VG9waWNzPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG8oXCJzaWdudXBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG8oXCJzcG9uc29yc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX0+U3BvbnNvcnM8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGggY29sdW1uXCI+XG4gICAgICAgICAgICBKdWx5IDE5PHN1cD50aDwvc3VwPi0yMTxzdXA+c3Q8L3N1cD4sIDIwMTksIFByYWd1ZSwgQ1pcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3RpY2t5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyby1ib2R5IHJvdyBzdGlja3lcIj5cbiAgICAgICAgICAgIHsvKjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvaGZjLXRleHQtYnctdHJhbnNwYXJlbnQucG5nXCIqL31cbiAgICAgICAgICAgIHsvKiAgIHN0eWxlPXt7Ki99XG4gICAgICAgICAgICB7LyogICAgIHdpZHRoOiBgJHtzdGF0ZS5sb2dvV2lkdGh9JWAsKi99XG4gICAgICAgICAgICB7LyogICAgIC8vIG1hcmdpbkxlZnQ6IGAtJHtzdGF0ZS5sb2dvTWFyZ2luTGVmdH0lYCwqL31cbiAgICAgICAgICAgIHsvKn19Lz4qL31cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWcvaGZjLXRleHQtY29sb3ItdHJhbnNwYXJlbnQucG5nXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7c3RhdGUubG9nb1dpZHRofSVgLFxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbkxlZnQ6IGAtJHtzdGF0ZS5sb2dvTWFyZ2luTGVmdH0lYCxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGBncmF5c2NhbGUoJHtzdGF0ZS5sb2dvSW50ZW5zaXR5fSUpYCxcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5OiBgJHtzdGF0ZS5sb2dvT3BhY2l0eX1gXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKjxkaXYqL31cbiAgICAgICAgICB7LyogIGNsYXNzTmFtZT1cInNjcm9sbC1kb3duIHJvd1wiKi99XG4gICAgICAgICAgey8qICAvLyBzdHlsZT17eyB0b3A6IGAke3N0YXRlLm1vdW50ZWQgPyBzdGF0ZS5pbm5lckhlaWdodCAtIDE1MCA6IDUwMH1weGAsIHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0qL31cbiAgICAgICAgICB7Lyo+Ki99XG4gICAgICAgICAgey8qICA8U2Nyb2xsSWNvbiBzY3JvbGxUbz1cIiNtYW5pZmVzdG9cIiBzbW9vdGhTY3JvbGw9e3RydWV9IC8+Ki99XG4gICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInRlc3RcIj4qL31cbiAgICAgICAgey8qICBUZXN0Ki99XG4gICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBibGFja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHUtZnVsbC13aWR0aCBibGFja1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG93ZXJzXCIgc3JjPVwiL3N0YXRpYy9pbWcvZmxvd2Vycy5wbmdcIiAvPlxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJ0ZXN0XCI+Ki99XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhlYWQgc3RpY2t5XCIgc3JjPVwiL3N0YXRpYy9pbWcvaGVhZC5wbmdcIiAvPlxuICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRlc3Qge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC04MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdGlja3kge1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCBibGFjayk7XG4gICAgICAgICAgLy8gbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgICAvLyBtaW4taGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcbiAgICAgICAgICAvLyBtaW4taGVpZ2h0OiBmaWxsLWF2YWlsYWJsZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvLWJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICB6LWluZGV4OiAyMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlciBhIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLWxvZ29zIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyLWxvZ29zIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI2xlZnRUb3Age1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgI3JpZ2h0VG9wIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8tYm9keSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvLWJvZHkgaW1nIHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JvbGwtZG93biB7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxhY2sge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5mbG93ZXJzIHtcbiAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgIG1hcmdpbjogMCAyJTtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGxlZnQ6IDI5JTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgLy8gb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAvLyBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkgYSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Intro.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.46d8ff68a390310894f4.hot-update.js.map