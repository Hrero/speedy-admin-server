webpackHotUpdate(2,{

/***/ "./src/router/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(\"./node_modules/_vue@2.6.10@vue/dist/vue.esm.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(\"./node_modules/_vue-router@3.0.6@vue-router/dist/vue-router.esm.js\");\n\n\n\nvar layout = function layout() {\n    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, \"./src/views/layout/layout.vue\"));\n};\nvar home = function home() {\n    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, \"./src/views/home/home.vue\"));\n};\n\n__WEBPACK_IMPORTED_MODULE_0_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__[\"a\" /* default */]({\n    mode: 'history',\n    routes: [{\n        path: '/', component: layout, children: [{ path: '', name: 'home', component: home, meta: { index: 0, title: '首页' } }]\n    },\n    // 默认首页\n    {\n        path: \"*\",\n        redirect: \"/\"\n    }],\n    scrollBehavior: function scrollBehavior(to, from, savedPosition) {\n        return savedPosition || { x: 0, y: 0 };\n    }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9yb3V0ZXIvaW5kZXguanM/MzY3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcidcblxuY29uc3QgbGF5b3V0ID0gKCkgPT4gaW1wb3J0KCdAL3ZpZXdzL2xheW91dC9sYXlvdXQnKTtcbmNvbnN0IGhvbWUgPSAoKSA9PiBpbXBvcnQoJ0Avdmlld3MvaG9tZS9ob21lJyk7XG5cblZ1ZS51c2UoUm91dGVyKVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKHtcbiAgICBtb2RlOiAnaGlzdG9yeScsXG4gICAgcm91dGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvJywgY29tcG9uZW50OiBsYXlvdXQsIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgeyBwYXRoOiAnJywgbmFtZTogJ2hvbWUnLCBjb21wb25lbnQ6IGhvbWUsIG1ldGE6IHsgaW5kZXg6IDAsIHRpdGxlOiAn6aaW6aG1JyB9IH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOm7mOiupOmmlumhtVxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIipcIixcbiAgICAgICAgICAgIHJlZGlyZWN0OiBcIi9cIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBzY3JvbGxCZWhhdmlvcih0bywgZnJvbSwgc2F2ZWRQb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gc2F2ZWRQb3NpdGlvbiB8fCB7IHg6IDAsIHk6IDB9O1xuICAgIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlci9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBaEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ })

})