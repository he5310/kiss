(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{47:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Test; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n    var enterModule = __webpack_require__(6).enterModule;\n\n    enterModule && enterModule(module);\n})();\n\n\n// import { X } from 'react-feather';\nvar X = __webpack_require__(54).X;\nvar request = __webpack_require__(83).default;\nrequest('/login', {\n    account: '724494205@qq.com'\n});\nclass Test extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    render() {\n        return (\n            // <Notification />\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null)))\n        );\n    }\n\n    __reactstandin__regenerateByEval(key, code) {\n        this[key] = eval(code);\n    }\n\n}\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(6).default;\n\n    var leaveModule = __webpack_require__(6).leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(X, 'X', 'C:/Users/he724/Desktop/kiss/src/views/main/test.tsx');\n    reactHotLoader.register(request, 'request', 'C:/Users/he724/Desktop/kiss/src/views/main/test.tsx');\n    reactHotLoader.register(Test, 'Test', 'C:/Users/he724/Desktop/kiss/src/views/main/test.tsx');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWFpbi90ZXN0LnRzeD82NmUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFFTTtBQUVyQyxJQUFLLElBQVUsb0JBQWlCLElBQUc7QUFFbkMsSUFBVyxVQUFVLG9CQUE2QixJQUFTO0FBRXBELFFBQVM7QUFDUixhQUNMO0FBRmM7QUFNSCxNQUFZLGFBQWEsK0NBQVU7QUFDMUM7QUFDRTtBQUNZO0FBQ2xCLDRFQUNDLGdFQUNDLDJEQUlKOztBQUNBIiwiZmlsZSI6IjQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBpbXBvcnQgeyBYIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XG5cbnZhciBYID0gcmVxdWlyZSgncmVhY3QtZmVhdGhlcicpLlg7XG5cbnZhciByZXF1ZXN0ID0gcmVxdWlyZSgnLi4vLi4vc2VydmljZXMvcmVxdWVzdC5qcycpLmRlZmF1bHQ7XG5cbnJlcXVlc3QoJy9sb2dpbicse1xuXHRhY2NvdW50Oic3MjQ0OTQyMDVAcXEuY29tJ1xufSk7XG5cbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0Ly8gPE5vdGlmaWNhdGlvbiAvPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0PGRpdj48L2Rpdj5cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0KTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///47\n")},83:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _axios = __webpack_require__(82);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_axios2.default.defaults.baseURL = '/api';\n// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;\n_axios2.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';\n\nexports.default = async function (url, params) {\n\tvar res = _axios2.default.post(url, params).then(function (data) {\n\t\tconsole.log(data);\n\t}).catch(function (err) {\n\t\tconsole.log(res);\n\t});\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVxdWVzdC5qcz9iZGQwIl0sIm5hbWVzIjpbImRlZmF1bHRzIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJwb3N0IiwidXJsIiwicGFyYW1zIiwicmVzIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxnQkFBTUEsUUFBTixDQUFlQyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0E7QUFDQSxnQkFBTUQsUUFBTixDQUFlRSxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxtQ0FBOUM7O2tCQUVlLGdCQUFnQkMsR0FBaEIsRUFBcUJDLE1BQXJCLEVBQTZCO0FBQzNDLEtBQU1DLE1BQU0sZ0JBQU1ILElBQU4sQ0FBV0MsR0FBWCxFQUFnQkMsTUFBaEIsRUFBd0JFLElBQXhCLENBQTZCLGdCQUFRO0FBQ2hEQyxVQUFRQyxHQUFSLENBQVlDLElBQVo7QUFDQSxFQUZXLEVBRVRDLEtBRlMsQ0FFSCxlQUFPO0FBQ2ZILFVBQVFDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLEVBSlcsQ0FBWjtBQUtBLEMiLCJmaWxlIjoiODMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJy9hcGknO1xuLy8gYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IEFVVEhfVE9LRU47XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uICh1cmwsIHBhcmFtcykge1xuXHRjb25zdCByZXMgPSBheGlvcy5wb3N0KHVybCwgcGFyYW1zKS50aGVuKGRhdGEgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHR9KS5jYXRjaChlcnIgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///83\n")}}]);