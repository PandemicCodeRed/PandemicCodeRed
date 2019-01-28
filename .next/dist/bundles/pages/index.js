module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants/cities.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var markers = [{ markerOffset: 0, name: 'Algiers', coordinates: [3.0588, 36.7538] }, { markerOffset: 0, name: 'Atlanta', coordinates: [-84.3880, 33.7490] }, { markerOffset: 0, name: 'Baghdad', coordinates: [44.3661, 33.3152] }, { markerOffset: 0, name: 'Bankok', coordinates: [100.5018, 13.7563] }, { markerOffset: 0, name: 'Beijing', coordinates: [116.4074, 39.9042] }, { markerOffset: 0, name: 'Bogota', coordinates: [-74.0721, 4.7110] }, { markerOffset: 0, name: 'Buenos_Aires', coordinates: [-58.3816, -34.6037] }, { markerOffset: 0, name: 'Cairo', coordinates: [31.2357, 30.0444] }, { markerOffset: 0, name: 'Chennai', coordinates: [80.2707, 13.0827] }, { markerOffset: 0, name: 'Chicago', coordinates: [-87.6298, 41.8781] }, { markerOffset: 0, name: 'Dehli', coordinates: [77.1025, 28.7041] }, { markerOffset: 0, name: 'Essen', coordinates: [7.0116, 51.4556] }, { markerOffset: 0, name: 'Ho_Chi_Minh_City', coordinates: [106.6297, 10.8231] }, { markerOffset: 0, name: 'Hong_Kong', coordinates: [114.1095, 22.3964] }, { markerOffset: 0, name: 'Istanbul', coordinates: [28.9784, 41.0082] }, { markerOffset: 0, name: 'Jakarta', coordinates: [106.8283, -6.1805] }, { markerOffset: 0, name: 'Johannesburg', coordinates: [28.0473, -26.2041] }, { markerOffset: 0, name: 'Karachi', coordinates: [67.0011, 24.8607] }, { markerOffset: 0, name: 'Khartoum', coordinates: [32.5599, 15.5007] }, { markerOffset: 0, name: 'Kinshasa', coordinates: [15.2663, -4.4419] }, { markerOffset: 0, name: 'Kolkata', coordinates: [88.3639, 22.5726] }, { markerOffset: 0, name: 'Lagos', coordinates: [3.3792, 6.5244] }, { markerOffset: 0, name: 'Lima', coordinates: [-77.0428, -12.0464] }, { markerOffset: 0, name: 'London', coordinates: [-0.1278, 51.5074] }, { markerOffset: 0, name: 'Los_Angeles', coordinates: [-118.2437, 34.0522] }, { markerOffset: 0, name: "Madrid", coordinates: [-3.7038, 40.4168] }, { markerOffset: 0, name: "Manila", coordinates: [120.9842, 14.5995] }, { markerOffset: 0, name: "Mexico_city", coordinates: [-99.1332, 19.4326] }, { markerOffset: 0, name: "Miami", coordinates: [-80.1918, 25.7617] }, { markerOffset: 0, name: "Milan", coordinates: [9.1900, 45.4642] }, { markerOffset: 0, name: "Montreal", coordinates: [-73.5673, 45.5017] }, { markerOffset: 0, name: "Moscow", coordinates: [37.6173, 55.7558] }, { markerOffset: 0, name: "Mumbai", coordinates: [72.8777, 19.0760] }, { markerOffset: 0, name: "New_york", coordinates: [-74.0060, 40.7128] }, { markerOffset: 0, name: "Osaka", coordinates: [135.5022, 34.6937] }, { markerOffset: 0, name: "Paris", coordinates: [2.3522, 48.8566] }, { markerOffset: 0, name: "Riyadh", coordinates: [46.6753, 24.7136] }, { markerOffset: 0, name: "San_Francisco", coordinates: [-122.4194, 37.7749] }, { markerOffset: 0, name: "Santiago", coordinates: [-70.6693, -33.4489] }, { markerOffset: 0, name: "Sao_paulo", coordinates: [-46.6333, -23.5505] }, { markerOffset: 0, name: "Seoul", coordinates: [126.9780, 37.5665] }, { markerOffset: 0, name: "Shanghai", coordinates: [121.4737, 31.2304] }, { markerOffset: 0, name: "St._Petersburg", coordinates: [-82.6403, 27.7676] }, { markerOffset: 0, name: "Sydney", coordinates: [151.2093, -33.8688] }, { markerOffset: 0, name: "Taipei", coordinates: [121.5654, 25.0330] }, { markerOffset: 0, name: "Tehran", coordinates: [51.3890, 35.6892] }, { markerOffset: 0, name: "Tokyo", coordinates: [139.6917, 35.6895] }, { markerOffset: 0, name: "Washington,_D.C.", coordinates: [-77.0369, 38.9072] }];

/* harmony default export */ __webpack_exports__["a"] = (markers);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps__ = __webpack_require__("react-simple-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_simple_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_cities__ = __webpack_require__("./constants/cities.js");
var _jsxFileName = "/home/drewga/Fullstack/Capstone/PandemicCodeRed/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
              scale: 205,
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
                    r: 3.5,
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
  }]);

  return BasicMap;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BasicMap);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-simple-maps":
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map