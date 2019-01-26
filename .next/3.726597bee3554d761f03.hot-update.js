webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__ = __webpack_require__("./node_modules/react-simple-maps/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_simple_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_cities__ = __webpack_require__("./constants/cities.js");
var _jsxFileName = "/home/drewga/Fullstack/Capstone/PandemicCodeRed/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

var BasicMap = function (_Component) {
  _inherits(BasicMap, _Component);

  function BasicMap() {
    _classCallCheck(this, BasicMap);

    return _possibleConstructorReturn(this, (BasicMap.__proto__ || Object.getPrototypeOf(BasicMap)).apply(this, arguments));
  }

  _createClass(BasicMap, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: wrapperStyles, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["ComposableMap"],
          {
            projectionConfig: {
              scale: 250, // 205
              rotation: [-11, 0, 0]
            },
            width: 980,
            height: 551,
            style: {
              width: "100%",
              height: "auto"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["ZoomableGroup"],
            { center: [0, 20], disablePanning: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Geographies"],
              { geography: "/static/world-50m.json", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              function (geographies, projection) {
                return geographies.map(function (geography, i) {
                  return geography.id !== "ATA" && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Geography"], {
                    key: i,
                    geography: geography,
                    projection: projection,
                    style: {
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none"
                      }
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  });
                });
              }
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Markers"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              __WEBPACK_IMPORTED_MODULE_2__constants_cities__["a" /* default */].map(function (marker, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__["Marker"],
                  {
                    key: i,
                    marker: marker,
                    style: {
                      default: { fill: "#FF5722" },
                      hover: { fill: "#FFFFFF" },
                      pressed: { fill: "#FF5722" }
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", {
                    cx: 0,
                    cy: 0,
                    r: 10,
                    style: {
                      stroke: "#FF5722",
                      strokeWidth: 3,
                      opacity: 0.9
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    }
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "text",
                    {
                      textAnchor: "middle",
                      y: marker.markerOffset,
                      style: {
                        fontFamily: "Roboto, sans-serif",
                        fill: "#607D8B"
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      }
                    },
                    marker.name
                  )
                );
              })
            )
          )
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return BasicMap;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = BasicMap;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(wrapperStyles, "wrapperStyles", "/home/drewga/Fullstack/Capstone/PandemicCodeRed/pages/index.js");
  reactHotLoader.register(BasicMap, "BasicMap", "/home/drewga/Fullstack/Capstone/PandemicCodeRed/pages/index.js");
  reactHotLoader.register(_default, "default", "/home/drewga/Fullstack/Capstone/PandemicCodeRed/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.726597bee3554d761f03.hot-update.js.map