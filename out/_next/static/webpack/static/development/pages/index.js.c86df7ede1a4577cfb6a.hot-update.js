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
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "u-full-width header row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "leftTop",
    className: "jsx-3371775902" + " " + "header-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/institute-presents-black.png",
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "rightTop",
    className: "jsx-3371775902" + " " + "header-logos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/paralelnipolis-logo.png",
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-3371775902" + " " + "u-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-3371775902",
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
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Manifesto")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-3371775902",
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
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Topics")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-3371775902",
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
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-3371775902",
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
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Sponsors"))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "info row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "u-full-width column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "July 19", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", {
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "th"), "-21", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("sup", {
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "st"), ", 2019, Prague, CZ")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "container sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "intro-body row sticky",
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
    className: "jsx-3371775902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "container black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3371775902" + " " + "row u-full-width black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/flowers.png",
    className: "jsx-3371775902" + " " + "flowers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/img/head.png",
    className: "jsx-3371775902" + " " + "head sticky",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3371775902",
    __self: this
  }, ".test.jsx-3371775902{position:relative;overflow:hidden;margin-top:-80px;}.info.jsx-3371775902{color:black;font-weight:700;font-size:2rem;text-align:center;}.sticky.jsx-3371775902{position:-webkit-sticky;position:sticky;top:0;}.intro.jsx-3371775902{background:white;background:linear-gradient(white,black);height:100vh;}.intro-body.jsx-3371775902{padding:5%;}.header.jsx-3371775902{top:0;padding:40px;height:120px;z-index:200;}.header.jsx-3371775902 a.jsx-3371775902{cursor:pointer;}.header-logos.jsx-3371775902{display:inline-block;margin-bottom:45px;}.header-logos.jsx-3371775902 img.jsx-3371775902{max-width:130px;max-height:80px;}#leftTop.jsx-3371775902{float:left;}#rightTop.jsx-3371775902{margin-top:-20px;float:right;}.intro-body.jsx-3371775902{text-align:center;}.intro-body.jsx-3371775902 img.jsx-3371775902{width:80%;height:auto;position:-webkit-sticky;position:sticky;position:-webkit-sticky;top:50px;display:initial;}.black.jsx-3371775902{text-align:center;background-color:#000000;}.flowers.jsx-3371775902{width:96%;margin:0 2%;z-index:100;}.head.jsx-3371775902{position:absolute;width:90%;left:29%;margin-top:-60px;z-index:100;}ul.jsx-3371775902{list-style-type:none;margin:0;padding:0;overflow:hidden;}li.jsx-3371775902{float:left;}li.jsx-3371775902 a.jsx-3371775902{display:block;color:black;text-align:center;font-size:1.6rem;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}li.jsx-3371775902 a.jsx-3371775902:hover{color:#404040;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvSW50cm8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdKa0IsQUFHNkIsQUFLTixBQU1JLEFBSUMsQUFTTixBQUlMLEFBTVMsQUFJTSxBQUlMLEFBS0wsQUFJTSxBQUtDLEFBSVIsQUFZUSxBQUlSLEFBS1EsQUFVRyxBQU9WLEFBSUcsQUFTQSxNQWxGRCxJQWdDRCxBQWdCQSxDQXBEZCxBQXVCQSxBQW1EQSxDQTdGa0IsRUFpR0osQUFTZCxDQTdFQSxDQVFrQixDQTNCeUIsQUFvQzdCLENBbkRJLEFBd0RsQixBQWdCMkIsQUFTZixDQXBERyxFQVNNLEFBcURWLENBOUJPLEFBZ0JKLElBMEJNLEVBakdILEFBNEVOLENBOUJYLENBd0NZLEVBOURFLEFBYWQsRUExQ21CLEFBNkVuQixHQUttQixHQXhFWCxBQTRCUixBQXNEa0IsR0F0RkUsQUFrRXBCLENBMUNBLEFBeUVtQixFQTVGbkIsS0FWQSxHQWtGYyxFQVVkLENBM0VlLElBWGYsQUFpR29CLENBM0NNLElBeUIxQixJQW5FQSxTQXNGdUIsT0EzQ1osU0FDTyxnQkFDbEIsa0JBMENBIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWx0YWthYy9Qcm9qZWN0cy9qYXZhc2NyaXB0L2ZseWluZy1jaXJjdWl0L2NvbXBvbmVudHMvSW50cm8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2Nyb2xsSWNvbiB9IGZyb20gXCIuL1Njcm9sbEljb25cIjtcbmltcG9ydCB7IEhlcm9CbGFja0JnIH0gZnJvbSBcIi4vSGVyb0JsYWNrQmdcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpbm5lckhlaWdodDogMCxcbiAgbG9ja0hlaWdodDogbnVsbCxcbiAgY3VycmVudFNjcm9sbEhlaWdodDogbnVsbCxcbiAgbG9nb09wYWNpdHk6IDAsXG4gIGxvY2tTY3JvbGw6IHRydWUsXG4gIGxvZ29XaWR0aDogODAsXG4gIGxvZ29NYXJnaW5MZWZ0OiA0MCxcbiAgbG9nb0ludGVuc2l0eTogMTAwLFxufTtcblxubGV0IHNjcm9sbFRvID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIEludHJvKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgc2Nyb2xsVG8gPSBpZCA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGlubmVySGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG5cbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxvY2tIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBzdGF0ZS5zZWN0aW9uVG9wTWFyZ2luO1xuICAgICAgdmFyIGxvZ29JbnRlbnNpdHkgPSAxMDAgLSAod2luZG93LnNjcm9sbFkgLyAxMCkgKiAyO1xuICAgICAgLy8gY29uc29sZS5sb2cobG9nb0ludGVuc2l0eSk7XG4gICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBsb2dvSW50ZW5zaXR5OiBsb2dvSW50ZW5zaXR5IH0pO1xuXG4gICAgICAvLyB2YXIgbG9nb09wYWNpdHlBID0gd2luZG93LnNjcm9sbFkgLyAxMDAwO1xuICAgICAgLy8gdmFyIGxvZ29XaWR0aCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgLy8gLy9cbiAgICAgIC8vIHNldFN0YXRlKHsuLi5zdGF0ZSwgbG9nb09wYWNpdHk6IGxvZ29PcGFjaXR5QX0pO1xuXG4gICAgICAvLyBpZiAod2luZG93LnNjcm9sbFkgPiBsb2NrSGVpZ2h0KSB7XG4gICAgICAvLyAgIC8vIG5vdCByZXZlYWxpbmcgeWV0Li4uXG4gICAgICAvLyAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGxvY2tIZWlnaHQgfSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICAvLyB3aG9sZSBsb2dvIHJldmVhbGVkXG4gICAgICAvLyAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGxvY2tIZWlnaHQ6IG51bGwgfSk7XG4gICAgICAvLyB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuICAgIH07XG4gIH0sIFtzdGF0ZS5sb2NrSGVpZ2h0LCBzdGF0ZS5sb2dvT3BhY2l0eSwgc3RhdGUubG9nb0ludGVuc2l0eV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LWZ1bGwtd2lkdGggaGVhZGVyIHJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29zXCIgaWQ9XCJsZWZ0VG9wXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL2luc3RpdHV0ZS1wcmVzZW50cy1ibGFjay5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nb3NcIiBpZD1cInJpZ2h0VG9wXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3BhcmFsZWxuaXBvbGlzLWxvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG8oXCJtYW5pZmVzdG9cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19Pk1hbmlmZXN0bzwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG8oXCJjb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fT5Ub3BpY3M8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUbyhcInNpZ251cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUbyhcInNwb25zb3JzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fT5TcG9uc29yczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyByb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInUtZnVsbC13aWR0aCBjb2x1bW5cIj5cbiAgICAgICAgICAgIEp1bHkgMTk8c3VwPnRoPC9zdXA+LTIxPHN1cD5zdDwvc3VwPiwgMjAxOSwgUHJhZ3VlLCBDWlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzdGlja3lcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvLWJvZHkgcm93IHN0aWNreVwiPlxuICAgICAgICAgICAgey8qPGltZyBzcmM9XCIvc3RhdGljL2ltZy9oZmMtdGV4dC1idy10cmFuc3BhcmVudC5wbmdcIiovfVxuICAgICAgICAgICAgey8qICAgc3R5bGU9e3sqL31cbiAgICAgICAgICAgIHsvKiAgICAgd2lkdGg6IGAke3N0YXRlLmxvZ29XaWR0aH0lYCwqL31cbiAgICAgICAgICAgIHsvKiAgICAgLy8gbWFyZ2luTGVmdDogYC0ke3N0YXRlLmxvZ29NYXJnaW5MZWZ0fSVgLCovfVxuICAgICAgICAgICAgey8qfX0vPiovfVxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltZy9oZmMtdGV4dC1jb2xvci10cmFuc3BhcmVudC5wbmdcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtzdGF0ZS5sb2dvV2lkdGh9JWAsXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luTGVmdDogYC0ke3N0YXRlLmxvZ29NYXJnaW5MZWZ0fSVgLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogYGdyYXlzY2FsZSgke3N0YXRlLmxvZ29JbnRlbnNpdHl9JSlgLFxuICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IGAke3N0YXRlLmxvZ29PcGFjaXR5fWBcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qPGRpdiovfVxuICAgICAgICAgIHsvKiAgY2xhc3NOYW1lPVwic2Nyb2xsLWRvd24gcm93XCIqL31cbiAgICAgICAgICB7LyogIC8vIHN0eWxlPXt7IHRvcDogYCR7c3RhdGUubW91bnRlZCA/IHN0YXRlLmlubmVySGVpZ2h0IC0gMTUwIDogNTAwfXB4YCwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fSovfVxuICAgICAgICAgIHsvKj4qL31cbiAgICAgICAgICB7LyogIDxTY3JvbGxJY29uIHNjcm9sbFRvPVwiI21hbmlmZXN0b1wiIHNtb290aFNjcm9sbD17dHJ1ZX0gLz4qL31cbiAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidGVzdFwiPiovfVxuICAgICAgICB7LyogIFRlc3QqL31cbiAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJsYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdS1mdWxsLXdpZHRoIGJsYWNrXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb3dlcnNcIiBzcmM9XCIvc3RhdGljL2ltZy9mbG93ZXJzLnBuZ1wiIC8+XG4gICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInRlc3RcIj4qL31cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaGVhZCBzdGlja3lcIiBzcmM9XCIvc3RhdGljL2ltZy9oZWFkLnBuZ1wiIC8+XG4gICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGVzdCB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnN0aWNreSB7XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGJsYWNrKTtcbiAgICAgICAgICAvLyBtaW4taGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IC1tb3otYXZhaWxhYmxlO1xuICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IGZpbGwtYXZhaWxhYmxlO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8tYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIGEge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXItbG9nb3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXItbG9nb3MgaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjbGVmdFRvcCB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAjcmlnaHRUb3Age1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRyby1ib2R5IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm8tYm9keSBpbWcge1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcm9sbC1kb3duIHtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibGFjayB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmZsb3dlcnMge1xuICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgbWFyZ2luOiAwIDIlO1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbGVmdDogMjklO1xuICAgICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAvLyBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIC8vIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/michaltakac/Projects/javascript/flying-circuit/components/Intro.jsx */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c86df7ede1a4577cfb6a.hot-update.js.map