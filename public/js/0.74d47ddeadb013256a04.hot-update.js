webpackHotUpdate(0,{

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRouter = __webpack_require__(33);\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _auth = __webpack_require__(35);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Header: {\n    displayName: 'Header'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Header.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Header.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Header = _wrapComponent('Header')(function (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: 'handleLogout',\n    value: function handleLogout(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _auth.logout)());\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var rightNav = this.props.token ? _react3.default.createElement(\n        'ul',\n        { className: 'list-inline' },\n        _react3.default.createElement(\n          'li',\n          null,\n          _react3.default.createElement('img', { className: 'avatar', src: this.props.user.picture || this.props.user.gravatar }),\n          ' ',\n          this.props.user.name || this.props.user.email || this.props.user.id,\n          ' '\n        ),\n        _react3.default.createElement(\n          'li',\n          null,\n          _react3.default.createElement(\n            _reactRouter.Link,\n            { to: '/account' },\n            'My Account'\n          )\n        ),\n        _react3.default.createElement(\n          'li',\n          null,\n          _react3.default.createElement(\n            'a',\n            { href: '#', onClick: this.handleLogout.bind(this) },\n            'Logout'\n          )\n        )\n      ) : _react3.default.createElement(\n        'ul',\n        { className: 'list-inline' },\n        _react3.default.createElement(\n          'li',\n          null,\n          _react3.default.createElement(\n            _reactRouter.Link,\n            { to: '/login' },\n            'Log in'\n          )\n        ),\n        _react3.default.createElement(\n          'li',\n          null,\n          _react3.default.createElement(\n            _reactRouter.Link,\n            { to: '/signup' },\n            'Sign up'\n          )\n        )\n      );\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'ul',\n          { className: 'list-inline' },\n          _react3.default.createElement(\n            'li',\n            null,\n            _react3.default.createElement(\n              _reactRouter.IndexLink,\n              { to: '/' },\n              'Link keeper'\n            )\n          ),\n          _react3.default.createElement(\n            'li',\n            null,\n            _react3.default.createElement(\n              _reactRouter.Link,\n              { to: '/links' },\n              'Links'\n            )\n          ),\n          _react3.default.createElement(\n            'li',\n            null,\n            _react3.default.createElement(\n              _reactRouter.Link,\n              { to: '/contact' },\n              'Contact'\n            )\n          )\n        ),\n        rightNav\n      );\n    }\n  }]);\n\n  return Header;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    token: state.auth.token,\n    user: state.auth.user\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0hlYWRlci5qcz82NTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmRleExpbmssIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlTG9nb3V0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGxvZ291dCgpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByaWdodE5hdiA9IHRoaXMucHJvcHMudG9rZW4gPyAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmVcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17dGhpcy5wcm9wcy51c2VyLnBpY3R1cmUgfHwgdGhpcy5wcm9wcy51c2VyLmdyYXZhdGFyfS8+XG4gICAgICAgICAgICB7JyAnfXt0aGlzLnByb3BzLnVzZXIubmFtZSB8fCB0aGlzLnByb3BzLnVzZXIuZW1haWwgfHwgdGhpcy5wcm9wcy51c2VyLmlkfXsnICd9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvYWNjb3VudFwiPk15IEFjY291bnQ8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ291dC5iaW5kKHRoaXMpfT5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgKSA6IChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZVwiPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dpblwiPkxvZyBpbjwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9zaWdudXBcIj5TaWduIHVwPC9MaW5rPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZVwiPlxuICAgICAgICAgIDxsaT48SW5kZXhMaW5rIHRvPVwiL1wiPkxpbmsga2VlcGVyPC9JbmRleExpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbGlua3NcIj5MaW5rczwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICB7cmlnaHROYXZ9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxuICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlclxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBTkE7QUFTQTs7OztBQWhDQTtBQUNBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})