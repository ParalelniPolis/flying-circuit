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
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "u-full-width header row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "leftTop",
    className: "jsx-220813763" + " " + "header-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/institute-presents-black.png",
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "rightTop",
    className: "jsx-220813763" + " " + "header-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/paralelnipolis-logo.png",
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "container navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-220813763" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-220813763",
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
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Manifesto")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-220813763",
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
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Topics")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-220813763",
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
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-220813763",
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
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Sponsors"))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "info row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "u-full-width column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "July 19", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", {
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "th"), "-21", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", {
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "st"), ", 2019, Prague, CZ")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "container sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "intro-body row sticky",
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
    className: "jsx-220813763",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "container black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-220813763" + " " + "row u-full-width black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/flowers.png",
    className: "jsx-220813763" + " " + "flowers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/head.png",
    className: "jsx-220813763" + " " + "head sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "220813763",
    __self: this
  }, ".test.jsx-220813763{position:relative;overflow:hidden;margin-top:-80px;}.info.jsx-220813763{color:black;font-weight:700;font-size:2rem;text-align:center;}.sticky.jsx-220813763{position:-webkit-sticky;position:sticky;top:0;}.intro.jsx-220813763{background:white;background:linear-gradient(white,black);height:100vh;}.intro-body.jsx-220813763{padding:5%;}.header.jsx-220813763{top:0;padding:40px;height:120px;z-index:200;}.header.jsx-220813763 a.jsx-220813763{cursor:pointer;}.header-logos.jsx-220813763{display:inline-block;margin-bottom:45px;}.header-logos.jsx-220813763 img.jsx-220813763{max-width:130px;max-height:80px;}#leftTop.jsx-220813763{float:left;}#rightTop.jsx-220813763{margin-top:-20px;float:right;}.intro-body.jsx-220813763{text-align:center;}.intro-body.jsx-220813763 img.jsx-220813763{width:80%;height:auto;position:-webkit-sticky;position:sticky;position:-webkit-sticky;top:50px;display:initial;}.black.jsx-220813763{text-align:center;background-color:#000000;}.flowers.jsx-220813763{width:96%;margin:0 2%;z-index:100;}.head.jsx-220813763{position:absolute;width:90%;left:29%;margin-top:-60px;z-index:100;}ul.jsx-220813763{list-style-type:none;margin:0 auto;padding:0;overflow:hidden;display:inline-block;}li.jsx-220813763{float:left;text-align:center;}li.jsx-220813763 a.jsx-220813763{display:block;color:black;text-align:center;font-size:1.6rem;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}li.jsx-220813763 a.jsx-220813763:hover{color:#404040;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvSW50cm8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdKa0IsQUFHNkIsQUFLTixBQU1JLEFBSUMsQUFTTixBQUlMLEFBTVMsQUFJTSxBQUlMLEFBS0wsQUFJTSxBQUtDLEFBSVIsQUFZUSxBQUlSLEFBS1EsQUFXRyxBQVFWLEFBS0csQUFTQSxNQXJGRCxJQWdDRCxBQWdCQSxDQXBEZCxBQXVCQSxBQXFEb0IsQ0EvRkYsRUFvR0osQUFTZCxDQWhGQSxDQVFrQixDQTNCeUIsQUFvQzdCLENBbkRJLEFBd0RsQixBQWdCMkIsQUFTZixDQXBERyxFQVNNLEFBc0RMLENBL0JFLEFBZ0JKLElBNkJNLEVBcEdILEFBNEVOLENBOUJYLEFBaURBLEdBdkVjLEFBYWQsRUExQ21CLEFBNkVuQixDQWVZLEVBVk8sR0F4RVgsQUE0QlIsR0FoQ29CLEFBa0VwQixDQTFDQSxBQTRFbUIsQ0FiRCxDQWxGbEIsS0FWQSxHQWtGYyxHQWpFQyxJQVhmLEFBdUZ1QixBQWFILENBOUNNLElBeUIxQixJQW5FQSxTQXlGdUIsR0FidkIsSUFqQ1csU0FDTyxnQkFDbEIsa0JBNkNBIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvSW50cm8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2Nyb2xsSWNvbiB9IGZyb20gXCIuL1Njcm9sbEljb25cIjtcbmltcG9ydCB7IEhlcm9CbGFja0JnIH0gZnJvbSBcIi4vSGVyb0JsYWNrQmdcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpbm5lckhlaWdodDogMCxcbiAgbG9ja0hlaWdodDogbnVsbCxcbiAgY3VycmVudFNjcm9sbEhlaWdodDogbnVsbCxcbiAgbG9nb09wYWNpdHk6IDAsXG4gIGxvY2tTY3JvbGw6IHRydWUsXG4gIGxvZ29XaWR0aDogODAsXG4gIGxvZ29NYXJnaW5MZWZ0OiA0MCxcbiAgbG9nb0ludGVuc2l0eTogMTAwLFxufTtcblxubGV0IHNjcm9sbFRvID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIEludHJvKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgc2Nyb2xsVG8gPSBpZCA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGlubmVySGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG5cbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxvY2tIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBzdGF0ZS5zZWN0aW9uVG9wTWFyZ2luO1xuICAgICAgdmFyIGxvZ29JbnRlbnNpdHkgPSAxMDAgLSAod2luZG93LnNjcm9sbFkgLyAxMCkgKiAyO1xuICAgICAgLy8gY29uc29sZS5sb2cobG9nb0ludGVuc2l0eSk7XG4gICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBsb2dvSW50ZW5zaXR5OiBsb2dvSW50ZW5zaXR5IH0pO1xuXG4gICAgICAvLyB2YXIgbG9nb09wYWNpdHlBID0gd2luZG93LnNjcm9sbFkgLyAxMDAwO1xuICAgICAgLy8gdmFyIGxvZ29XaWR0aCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgLy8gLy9cbiAgICAgIC8vIHNldFN0YXRlKHsuLi5zdGF0ZSwgbG9nb09wYWNpdHk6IGxvZ29PcGFjaXR5QX0pO1xuXG4gICAgICAvLyBpZiAod2luZG93LnNjcm9sbFkgPiBsb2NrSGVpZ2h0KSB7XG4gICAgICAvLyAgIC8vIG5vdCByZXZlYWxpbmcgeWV0Li4uXG4gICAgICAvLyAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGxvY2tIZWlnaHQgfSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICAvLyB3aG9sZSBsb2dvIHJldmVhbGVkXG4gICAgICAvLyAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGxvY2tIZWlnaHQ6IG51bGwgfSk7XG4gICAgICAvLyB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgIH07XG4gIH0sIFtzdGF0ZS5sb2NrSGVpZ2h0LCBzdGF0ZS5sb2dvT3BhY2l0eSwgc3RhdGUubG9nb0ludGVuc2l0eV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGggaGVhZGVyIHJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29zXCIgaWQ9XCJsZWZ0VG9wXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2luc3RpdHV0ZS1wcmVzZW50cy1ibGFjay5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nb3NcIiBpZD1cInJpZ2h0VG9wXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3BhcmFsZWxuaXBvbGlzLWxvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG5hdmJhclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUbyhcIm1hbmlmZXN0b1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX0+TWFuaWZlc3RvPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUbyhcImNvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19PlRvcGljczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUbykge1xuICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvKFwic2lnbnVwXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUbykge1xuICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvKFwic3BvbnNvcnNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19PlNwb25zb3JzPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidS1mdWxsLXdpZHRoIGNvbHVtblwiPlxuICAgICAgICAgICAgSnVseSAxOTxzdXA+dGg8L3N1cD4tMjE8c3VwPnN0PC9zdXA+LCAyMDE5LCBQcmFndWUsIENaXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHN0aWNreVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8tYm9keSByb3cgc3RpY2t5XCI+XG4gICAgICAgICAgICB7Lyo8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2hmYy10ZXh0LWJ3LXRyYW5zcGFyZW50LnBuZ1wiKi99XG4gICAgICAgICAgICB7LyogICBzdHlsZT17eyovfVxuICAgICAgICAgICAgey8qICAgICB3aWR0aDogYCR7c3RhdGUubG9nb1dpZHRofSVgLCovfVxuICAgICAgICAgICAgey8qICAgICAvLyBtYXJnaW5MZWZ0OiBgLSR7c3RhdGUubG9nb01hcmdpbkxlZnR9JWAsKi99XG4gICAgICAgICAgICB7Lyp9fS8+Ki99XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1nL2hmYy10ZXh0LWNvbG9yLXRyYW5zcGFyZW50LnBuZ1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke3N0YXRlLmxvZ29XaWR0aH0lYCxcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW5MZWZ0OiBgLSR7c3RhdGUubG9nb01hcmdpbkxlZnR9JWAsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBgZ3JheXNjYWxlKCR7c3RhdGUubG9nb0ludGVuc2l0eX0lKWAsXG4gICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogYCR7c3RhdGUubG9nb09wYWNpdHl9YFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Lyo8ZGl2Ki99XG4gICAgICAgICAgey8qICBjbGFzc05hbWU9XCJzY3JvbGwtZG93biByb3dcIiovfVxuICAgICAgICAgIHsvKiAgLy8gc3R5bGU9e3sgdG9wOiBgJHtzdGF0ZS5tb3VudGVkID8gc3RhdGUuaW5uZXJIZWlnaHQgLSAxNTAgOiA1MDB9cHhgLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19Ki99XG4gICAgICAgICAgey8qPiovfVxuICAgICAgICAgIHsvKiAgPFNjcm9sbEljb24gc2Nyb2xsVG89XCIjbWFuaWZlc3RvXCIgc21vb3RoU2Nyb2xsPXt0cnVlfSAvPiovfVxuICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJ0ZXN0XCI+Ki99XG4gICAgICAgIHsvKiAgVGVzdCovfVxuICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3lcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYmxhY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB1LWZ1bGwtd2lkdGggYmxhY2tcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvd2Vyc1wiIHNyYz1cIi9zdGF0aWMvaW1nL2Zsb3dlcnMucG5nXCIgLz5cbiAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidGVzdFwiPiovfVxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoZWFkIHN0aWNreVwiIHNyYz1cIi9zdGF0aWMvaW1nL2hlYWQucG5nXCIgLz5cbiAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50ZXN0IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtODBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc3RpY2t5IHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAuaW50cm8ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgYmxhY2spO1xuICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgICAgLy8gbWluLWhlaWdodDogLW1vei1hdmFpbGFibGU7XG4gICAgICAgICAgLy8gbWluLWhlaWdodDogZmlsbC1hdmFpbGFibGU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyby1ib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgei1pbmRleDogMjAwO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIgYSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlci1sb2dvcyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlci1sb2dvcyBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNsZWZ0VG9wIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgICNyaWdodFRvcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvLWJvZHkge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyby1ib2R5IGltZyB7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuc2Nyb2xsLWRvd24ge1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsYWNrIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgICAuZmxvd2VycyB7XG4gICAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgICBtYXJnaW46IDAgMiU7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBsZWZ0OiAyOSU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgIC8vIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgLy8gb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICB9XG5cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkgYSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICM0MDQwNDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Intro.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.3a5c71ffe62b0aceb4ef.hot-update.js.map