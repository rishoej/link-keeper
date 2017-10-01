webpackHotUpdate(0,{

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRouter = __webpack_require__(33);\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _auth = __webpack_require__(35);\n\nvar _oauth = __webpack_require__(69);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Login: {\n    displayName: 'Login'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Account/Login.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Account/Login.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Login = _wrapComponent('Login')(function (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n    _this.state = { email: '', password: '', displayEmail: false };\n    _this.handleFacebook = _this.handleFacebook.bind(_this);\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleLogin',\n    value: function handleLogin(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _auth.login)(this.state.email, this.state.password));\n    }\n  }, {\n    key: 'handleFacebook',\n    value: function handleFacebook() {\n      this.setState({\n        displayEmail: true\n      });\n    }\n  }, {\n    key: 'handleFacebook',\n    value: function handleFacebook() {\n      this.props.dispatch((0, _oauth.facebookLogin)());\n    }\n  }, {\n    key: 'handleTwitter',\n    value: function handleTwitter() {\n      this.props.dispatch((0, _oauth.twitterLogin)());\n    }\n  }, {\n    key: 'handleGoogle',\n    value: function handleGoogle() {\n      this.props.dispatch((0, _oauth.googleLogin)());\n    }\n  }, {\n    key: 'handleVk',\n    value: function handleVk() {\n      this.props.dispatch((0, _oauth.vkLogin)());\n    }\n  }, {\n    key: 'handleGithub',\n    value: function handleGithub() {\n      this.props.dispatch((0, _oauth.githubLogin)());\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'card',\n          null,\n          _react3.default.createElement(_Messages2.default, { messages: this.props.messages }),\n          _react3.default.createElement(\n            'form',\n            { onSubmit: this.handleLogin.bind(this) },\n            _react3.default.createElement(\n              'h4',\n              null,\n              'Log In'\n            ),\n            this.state.displayEmail ? _react3.default.createElement(\n              'button',\n              { onClick: this.handleEmail.bind(this) },\n              'Email'\n            ) : _react3.default.createElement(\n              'span',\n              null,\n              _react3.default.createElement(\n                'label',\n                { htmlFor: 'email' },\n                'Email'\n              ),\n              _react3.default.createElement('input', { type: 'email', name: 'email', id: 'email', placeholder: 'Email', value: this.state.email, onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement(\n                'label',\n                { htmlFor: 'password' },\n                'Password'\n              ),\n              _react3.default.createElement('input', { type: 'password', name: 'password', id: 'password', placeholder: 'Password', value: this.state.password, onChange: this.handleChange.bind(this) }),\n              _react3.default.createElement(\n                'p',\n                null,\n                _react3.default.createElement(\n                  _reactRouter.Link,\n                  { to: '/forgot' },\n                  'Forgot your password?'\n                )\n              ),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit' },\n                'Log in'\n              )\n            )\n          ),\n          _react3.default.createElement('hr', null),\n          _react3.default.createElement(\n            'button',\n            { onClick: this.handleFacebook.bind(this) },\n            'Sign in with Facebook'\n          ),\n          _react3.default.createElement(\n            'button',\n            { onClick: this.handleTwitter.bind(this) },\n            'Sign in with Twitter'\n          ),\n          _react3.default.createElement(\n            'button',\n            { onClick: this.handleGoogle.bind(this) },\n            'Sign in with Google'\n          ),\n          _react3.default.createElement(\n            'p',\n            null,\n            'Don\\'t have an account? ',\n            _react3.default.createElement(\n              _reactRouter.Link,\n              { to: '/signup' },\n              'Sign up'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FjY291bnQvTG9naW4uanM/NTcxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XG5pbXBvcnQgeyBmYWNlYm9va0xvZ2luLCB0d2l0dGVyTG9naW4sIGdvb2dsZUxvZ2luLCB2a0xvZ2luLCBnaXRodWJMb2dpbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvb2F1dGgnO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4uL01lc3NhZ2VzJztcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgZGlzcGxheUVtYWlsOiBmYWxzZSB9O1xuICAgIHRoaXMuaGFuZGxlRmFjZWJvb2sgPSB0aGlzLmhhbmRsZUZhY2Vib29rLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlTG9naW4oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobG9naW4odGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCkpO1xuICB9XG5cbiAgaGFuZGxlRmFjZWJvb2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5RW1haWw6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUZhY2Vib29rKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmFjZWJvb2tMb2dpbigpKVxuICB9XG5cbiAgaGFuZGxlVHdpdHRlcigpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHR3aXR0ZXJMb2dpbigpKVxuICB9XG5cbiAgaGFuZGxlR29vZ2xlKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ29vZ2xlTG9naW4oKSlcbiAgfVxuXG4gIGhhbmRsZVZrKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godmtMb2dpbigpKVxuICB9XG5cbiAgaGFuZGxlR2l0aHViKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2l0aHViTG9naW4oKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGNhcmQ+XG4gICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXt0aGlzLnByb3BzLm1lc3NhZ2VzfS8+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKX0+XG4gICAgICAgICAgICA8aDQ+TG9nIEluPC9oND5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXlFbWFpbCAgPyAoXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVFbWFpbC5iaW5kKHRoaXMpfT5FbWFpbDwvYnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IGF1dG9Gb2N1cy8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICA8cD48TGluayB0bz1cIi9mb3Jnb3RcIj5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L0xpbms+PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZyBpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8aHIvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVGYWNlYm9vay5iaW5kKHRoaXMpfT5TaWduIGluIHdpdGggRmFjZWJvb2s8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVHdpdHRlci5iaW5kKHRoaXMpfT5TaWduIGluIHdpdGggVHdpdHRlcjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVHb29nbGUuYmluZCh0aGlzKX0+U2lnbiBpbiB3aXRoIEdvb2dsZTwvYnV0dG9uPlxuXG4gICAgICAgICAgPHA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8TGluayB0bz1cIi9zaWdudXBcIj5TaWduIHVwPC9MaW5rPjwvcD5cbiAgICAgICAgPC9jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMb2dpbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvQWNjb3VudC9Mb2dpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUxBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXRCQTtBQURBO0FBMkJBOzs7O0FBdkVBO0FBQ0E7QUF5RUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})