webpackHotUpdate(2,{

/***/ "./src/https/shop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _products = [{ \"id\": 1, \"title\": \"iPad 4 Mini\", \"price\": 500.01, \"inventory\": 2 }, { \"id\": 2, \"title\": \"H&M T-Shirt White\", \"price\": 10.99, \"inventory\": 10 }, { \"id\": 3, \"title\": \"Charli XCX - Sucker CD\", \"price\": 19.99, \"inventory\": 5 }];\n\n/* unused harmony default export */ var _unused_webpack_default_export = ({\n  getProducts: function getProducts(cb) {\n    setTimeout(function () {\n      return cb(_products);\n    }, 100);\n  },\n  buyProducts: function buyProducts(products, cb, errorCb) {\n    setTimeout(function () {\n      // simulate random checkout failure.\n      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1 ? cb() : errorCb();\n    }, 100);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaHR0cHMvc2hvcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaHR0cHMvc2hvcC5qcz9iZjM0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9wcm9kdWN0cyA9IFtcbiAgICB7XCJpZFwiOiAxLCBcInRpdGxlXCI6IFwiaVBhZCA0IE1pbmlcIiwgXCJwcmljZVwiOiA1MDAuMDEsIFwiaW52ZW50b3J5XCI6IDJ9LFxuICAgIHtcImlkXCI6IDIsIFwidGl0bGVcIjogXCJIJk0gVC1TaGlydCBXaGl0ZVwiLCBcInByaWNlXCI6IDEwLjk5LCBcImludmVudG9yeVwiOiAxMH0sXG4gICAge1wiaWRcIjogMywgXCJ0aXRsZVwiOiBcIkNoYXJsaSBYQ1ggLSBTdWNrZXIgQ0RcIiwgXCJwcmljZVwiOiAxOS45OSwgXCJpbnZlbnRvcnlcIjogNX1cbiAgXVxuICBcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldFByb2R1Y3RzIChjYikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBjYihfcHJvZHVjdHMpLCAxMDApXG4gICAgfSxcbiAgXG4gICAgYnV5UHJvZHVjdHMgKHByb2R1Y3RzLCBjYiwgZXJyb3JDYikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIHNpbXVsYXRlIHJhbmRvbSBjaGVja291dCBmYWlsdXJlLlxuICAgICAgICAoTWF0aC5yYW5kb20oKSA+IDAuNSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1BoYW50b21KUycpID4gLTEpXG4gICAgICAgICAgPyBjYigpXG4gICAgICAgICAgOiBlcnJvckNiKClcbiAgICAgIH0sIDEwMClcbiAgICB9XG4gIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2h0dHBzL3Nob3AuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFaQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/https/shop.js\n");

/***/ }),

/***/ "./src/store/modules/products.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__https_shop__ = __webpack_require__(\"./src/https/shop.js\");\n\n\n// initial state\nvar state = {\n  all: []\n\n  // getters\n};var getters = {};\n\n// actions\nvar actions = {};\n\n// mutations\nvar mutations = {};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  namespaced: true,\n  state: state,\n  getters: getters,\n  actions: actions,\n  mutations: mutations\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy9wcm9kdWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3RvcmUvbW9kdWxlcy9wcm9kdWN0cy5qcz85OGE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9wIGZyb20gJy4uLy4uL2h0dHBzL3Nob3AnXG5cbi8vIGluaXRpYWwgc3RhdGVcbmNvbnN0IHN0YXRlID0ge1xuICBhbGw6IFtdXG59XG5cbi8vIGdldHRlcnNcbmNvbnN0IGdldHRlcnMgPSB7fVxuXG4vLyBhY3Rpb25zXG5jb25zdCBhY3Rpb25zID0ge1xufVxuXG4vLyBtdXRhdGlvbnNcbmNvbnN0IG11dGF0aW9ucyA9IHtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZSxcbiAgZ2V0dGVycyxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdG9yZS9tb2R1bGVzL3Byb2R1Y3RzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/modules/products.js\n");

/***/ })

})