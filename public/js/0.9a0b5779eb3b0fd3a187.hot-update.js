webpackHotUpdate(0,{

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _reactHelmet = __webpack_require__(591);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Home: {\n    displayName: 'Home'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Home.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Home.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Home = _wrapComponent('Home')(function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react3.default.createElement(\n            'title',\n            null,\n            'Link Keeper - Store your favorite links'\n          ),\n          _react3.default.createElement('meta', { name: 'description', content: 'Free service for online storage of links' })\n        ),\n        _react3.default.createElement(_Messages2.default, { messages: this.props.messages }),\n        _react3.default.createElement(\n          'div',\n          { className: 'row' },\n          _react3.default.createElement(\n            'div',\n            { className: 'col-sm' },\n            _react3.default.createElement(\n              'h3',\n              null,\n              'Heading 1'\n            ),\n            _react3.default.createElement(\n              'p',\n              null,\n              'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'\n            ),\n            _react3.default.createElement(\n              'a',\n              { href: '#', role: 'button' },\n              'View details'\n            )\n          ),\n          _react3.default.createElement(\n            'div',\n            { className: 'col-sm' },\n            _react3.default.createElement(\n              'h3',\n              null,\n              'Heading 2'\n            ),\n            _react3.default.createElement(\n              'p',\n              null,\n              'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'\n            ),\n            _react3.default.createElement(\n              'a',\n              { href: '#', role: 'button' },\n              'View details'\n            )\n          ),\n          _react3.default.createElement(\n            'div',\n            { className: 'col-sm' },\n            _react3.default.createElement(\n              'h3',\n              null,\n              'Heading 3'\n            ),\n            _react3.default.createElement(\n              'p',\n              null,\n              'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'\n            ),\n            _react3.default.createElement(\n              'a',\n              { href: '#', role: 'button' },\n              'View details'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Home);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0hvbWUuanM/YTM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7SGVsbWV0fSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgPHRpdGxlPkxpbmsgS2VlcGVyIC0gU3RvcmUgeW91ciBmYXZvcml0ZSBsaW5rczwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkZyZWUgc2VydmljZSBmb3Igb25saW5lIHN0b3JhZ2Ugb2YgbGlua3NcIiAvPlxuICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXt0aGlzLnByb3BzLm1lc3NhZ2VzfS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cbiAgICAgICAgICAgIDxoMz5IZWFkaW5nIDE8L2gzPlxuICAgICAgICAgICAgPHA+RG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBGdXNjZSBkYXBpYnVzLCB0ZWxsdXMgYWMgY3Vyc3VzIGNvbW1vZG8sIHRvcnRvclxuICAgICAgICAgICAgICBtYXVyaXMgY29uZGltZW50dW0gbmliaCwgdXQgZmVybWVudHVtIG1hc3NhIGp1c3RvIHNpdCBhbWV0IHJpc3VzLiBFdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hXG4gICAgICAgICAgICAgIG1vbGxpcyBldWlzbW9kLiBEb25lYyBzZWQgb2RpbyBkdWkuPC9wPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCI+VmlldyBkZXRhaWxzPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XG4gICAgICAgICAgICA8aDM+SGVhZGluZyAyPC9oMz5cbiAgICAgICAgICAgIDxwPkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gRnVzY2UgZGFwaWJ1cywgdGVsbHVzIGFjIGN1cnN1cyBjb21tb2RvLCB0b3J0b3JcbiAgICAgICAgICAgICAgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy4gRXRpYW0gcG9ydGEgc2VtIG1hbGVzdWFkYSBtYWduYVxuICAgICAgICAgICAgICBtb2xsaXMgZXVpc21vZC4gRG9uZWMgc2VkIG9kaW8gZHVpLjwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiPlZpZXcgZGV0YWlsczwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxuICAgICAgICAgICAgPGgzPkhlYWRpbmcgMzwvaDM+XG4gICAgICAgICAgICA8cD5Eb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIEZ1c2NlIGRhcGlidXMsIHRlbGx1cyBhYyBjdXJzdXMgY29tbW9kbywgdG9ydG9yXG4gICAgICAgICAgICAgIG1hdXJpcyBjb25kaW1lbnR1bSBuaWJoLCB1dCBmZXJtZW50dW0gbWFzc2EganVzdG8gc2l0IGFtZXQgcmlzdXMuIEV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmFcbiAgICAgICAgICAgICAgbW9sbGlzIGV1aXNtb2QuIERvbmVjIHNlZCBvZGlvIGR1aS48L3A+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIj5WaWV3IGRldGFpbHM8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIb21lKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9Ib21lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQWZBO0FBTkE7QUErQkE7Ozs7QUFsQ0E7QUFDQTtBQW9DQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})