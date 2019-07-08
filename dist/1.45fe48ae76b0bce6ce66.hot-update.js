webpackHotUpdate(1,{

/***/ "./node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/views/home/ProductList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(\"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(\"./node_modules/_vuex@3.1.1@vuex/dist/vuex.esm.js\");\n\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'ProductList',\n    data: function data() {\n        return {\n            model: false,\n            columns: [{\n                title: 'ID',\n                key: 'commdityId'\n            }, {\n                title: '描述',\n                key: 'productDes'\n            }, {\n                title: '图片',\n                key: 'imageUrl'\n            }, {\n                title: '手机号码',\n                key: 'phoneNumber'\n            }, {\n                title: '学校名',\n                key: 'schoolName'\n            }, {\n                title: '学校ID',\n                key: 'schoolId'\n            }, {\n                title: '状态',\n                key: 'status',\n                render: function render(h, params) {\n                    console.log(h, params);\n                    var txt = '';\n                    if (params.row.status === 0) {\n                        txt = '未上线';\n                    } else {\n                        txt = '上线中';\n                    }\n                    return txt;\n                }\n            }],\n            data: []\n        };\n    },\n\n    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapState */])({\n        checkoutStatus: function checkoutStatus(state) {\n            return state.cart.checkoutStatus;\n        }\n    })),\n    methods: {\n        getCommodityList: function getCommodityList() {\n            var _this = this;\n\n            this.httpService.getCommodityList().then(function (res) {\n                if (res.code) {\n                    _this.data = res.data;\n                }\n            });\n        },\n        addUser: function addUser() {\n            this.model = true;\n        }\n    },\n    mounted: function mounted() {\n        this.getCommodityList();\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNUBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuM0B2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL3ZpZXdzL2hvbWUvUHJvZHVjdExpc3QudnVlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1Byb2R1Y3RMaXN0LnZ1ZT9lN2JlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiUHJvZHVjdExpc3RcIj5cbiAgICAgICAgPFRhYmxlIDpjb2x1bW5zPVwiY29sdW1uc1wiIDpkYXRhPVwiZGF0YVwiPjwvVGFibGU+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwU3RhdGUgfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1Byb2R1Y3RMaXN0JyxcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZGVsOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSUQnLFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb21tZGl0eUlkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPj+i/sCcsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Byb2R1Y3REZXMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Zu+54mHJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnaW1hZ2VVcmwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5omL5py65Y+356CBJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncGhvbmVOdW1iZXInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5a2m5qCh5ZCNJyxcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnc2Nob29sTmFtZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflrabmoKFJRCcsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3NjaG9vbElkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+eKtuaAgScsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3N0YXR1cycsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogKGgsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaCwgcGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR4dCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5yb3cuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gJ+acquS4iue6vydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gJ+S4iue6v+S4rSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBTdGF0ZSh7XG4gICAgICAgICAgICBjaGVja291dFN0YXR1czogc3RhdGUgPT4gc3RhdGUuY2FydC5jaGVja291dFN0YXR1c1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRDb21tb2RpdHlMaXN0KCkge1xuICAgICAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRDb21tb2RpdHlMaXN0KCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSByZXMuZGF0YVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhZGRVc2VyKCkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21tb2RpdHlMaXN0KClcbiAgICB9XG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbi5idG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBQcm9kdWN0TGlzdC52dWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBZUE7QUExQ0E7QUE0Q0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBbkVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js!./node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=script&index=0!./src/views/home/ProductList.vue\n");

/***/ })

})