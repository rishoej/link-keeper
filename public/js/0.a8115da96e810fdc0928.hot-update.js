webpackHotUpdate(0,{

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRouter = __webpack_require__(33);\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _auth = __webpack_require__(35);\n\nvar _oauth = __webpack_require__(69);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Login: {\n    displayName: 'Login'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Account/Login.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Account/Login.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Login = _wrapComponent('Login')(function (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n    _this.state = { email: '', password: '', displayEmail: false };\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleLogin',\n    value: function handleLogin(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _auth.login)(this.state.email, this.state.password));\n    }\n  }, {\n    key: 'handleEmail',\n    value: function handleEmail() {\n      event.preventDefault();\n      this.setState({\n        displayEmail: true\n      });\n    }\n  }, {\n    key: 'handleFacebook',\n    value: function handleFacebook() {\n      this.props.dispatch((0, _oauth.facebookLogin)());\n    }\n  }, {\n    key: 'handleTwitter',\n    value: function handleTwitter() {\n      this.props.dispatch((0, _oauth.twitterLogin)());\n    }\n  }, {\n    key: 'handleGoogle',\n    value: function handleGoogle() {\n      this.props.dispatch((0, _oauth.googleLogin)());\n    }\n  }, {\n    key: 'handleVk',\n    value: function handleVk() {\n      this.props.dispatch((0, _oauth.vkLogin)());\n    }\n  }, {\n    key: 'handleGithub',\n    value: function handleGithub() {\n      this.props.dispatch((0, _oauth.githubLogin)());\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'card',\n          null,\n          _react3.default.createElement(_Messages2.default, { messages: this.props.messages }),\n          _react3.default.createElement(\n            'form',\n            { onSubmit: this.handleLogin.bind(this) },\n            _react3.default.createElement(\n              'h4',\n              null,\n              'Log in to Link Keeper'\n            ),\n            this.state.displayEmail ? _react3.default.createElement(\n              'span',\n              null,\n              _react3.default.createElement(\n                'label',\n                { htmlFor: 'email' },\n                'Email'\n              ),\n              _react3.default.createElement('input', { type: 'email', name: 'email', id: 'email', placeholder: 'Email', value: this.state.email, onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement(\n                'label',\n                { htmlFor: 'password' },\n                'Password'\n              ),\n              _react3.default.createElement('input', { type: 'password', name: 'password', id: 'password', placeholder: 'Password', value: this.state.password, onChange: this.handleChange.bind(this) }),\n              _react3.default.createElement(\n                'p',\n                null,\n                _react3.default.createElement(\n                  _reactRouter.Link,\n                  { to: '/forgot' },\n                  'Forgot your password?'\n                )\n              ),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit' },\n                'Log in'\n              ),\n              _react3.default.createElement(\n                'p',\n                null,\n                'Don\\'t have an account? ',\n                _react3.default.createElement(\n                  _reactRouter.Link,\n                  { to: '/signup' },\n                  'Sign up'\n                )\n              )\n            ) : _react3.default.createElement(\n              'span',\n              null,\n              _react3.default.createElement(\n                'button',\n                { onClick: this.handleFacebook.bind(this) },\n                _react3.default.createElement('i', { 'class': 'fa fa-facebook', 'aria-hidden': 'true' }),\n                ' Continue with Twitter'\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: this.handleTwitter.bind(this) },\n                _react3.default.createElement('i', { 'class': 'fa fa-twitter', 'aria-hidden': 'true' }),\n                ' Continue with Twitter'\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: this.handleGoogle.bind(this) },\n                _react3.default.createElement('i', { 'class': 'fa fa-google', 'aria-hidden': 'true' }),\n                ' Continue with Google'\n              ),\n              _react3.default.createElement(\n                'a',\n                { onClick: this.handleEmail.bind(this) },\n                'Sign in with Email'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Login);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FjY291bnQvTG9naW4uanM/NTcxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XG5pbXBvcnQgeyBmYWNlYm9va0xvZ2luLCB0d2l0dGVyTG9naW4sIGdvb2dsZUxvZ2luLCB2a0xvZ2luLCBnaXRodWJMb2dpbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvb2F1dGgnO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4uL01lc3NhZ2VzJztcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgZGlzcGxheUVtYWlsOiBmYWxzZSB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUxvZ2luKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGxvZ2luKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpKTtcbiAgfVxuXG4gIGhhbmRsZUVtYWlsKCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNwbGF5RW1haWw6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUZhY2Vib29rKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmFjZWJvb2tMb2dpbigpKVxuICB9XG5cbiAgaGFuZGxlVHdpdHRlcigpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHR3aXR0ZXJMb2dpbigpKVxuICB9XG5cbiAgaGFuZGxlR29vZ2xlKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ29vZ2xlTG9naW4oKSlcbiAgfVxuXG4gIGhhbmRsZVZrKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godmtMb2dpbigpKVxuICB9XG5cbiAgaGFuZGxlR2l0aHViKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2l0aHViTG9naW4oKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGNhcmQ+XG4gICAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXt0aGlzLnByb3BzLm1lc3NhZ2VzfS8+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKX0+XG4gICAgICAgICAgICA8aDQ+TG9nIGluIHRvIExpbmsgS2VlcGVyPC9oND5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXlFbWFpbCAgPyAoXG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgPHA+PExpbmsgdG89XCIvZm9yZ290XCI+Rm9yZ290IHlvdXIgcGFzc3dvcmQ/PC9MaW5rPjwvcD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2cgaW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIHRvPVwiL3NpZ251cFwiPlNpZ24gdXA8L0xpbms+PC9wPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmFjZWJvb2suYmluZCh0aGlzKX0+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gQ29udGludWUgd2l0aCBUd2l0dGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVR3aXR0ZXIuYmluZCh0aGlzKX0+PGkgY2xhc3M9XCJmYSBmYS10d2l0dGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBDb250aW51ZSB3aXRoIFR3aXR0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR29vZ2xlLmJpbmQodGhpcyl9PjxpIGNsYXNzPVwiZmEgZmEtZ29vZ2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBDb250aW51ZSB3aXRoIEdvb2dsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRW1haWwuYmluZCh0aGlzKX0+U2lnbiBpbiB3aXRoIEVtYWlsPC9hPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMb2dpbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvQWNjb3VudC9Mb2dpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFiQTtBQUZBO0FBREE7QUEyQkE7Ozs7QUF2RUE7QUFDQTtBQXlFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})