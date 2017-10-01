webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _links = __webpack_require__(307);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Links: {\n    displayName: 'Links'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Links = _wrapComponent('Links')(function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      link: '',\n      title: '',\n      description: '',\n      links: [],\n      updateId: '',\n      updateLink: '',\n      updateTitle: '',\n      updateDescription: ''\n    };\n    _this.getLinks = _this.getLinks.bind(_this);\n    _this.handleUpdate = _this.handleUpdate.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n      this.getLinks();\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.deleteLink)(event.target.value, function () {}));\n      this.getLinks();\n    }\n  }, {\n    key: 'handleUpdate',\n    value: function handleUpdate(event) {\n      this.setState({\n        updateId: event.target.value\n      });\n    }\n  }, {\n    key: 'handleSaveUpdate',\n    value: function handleSaveUpdate(event) {\n      event.preventDefault();\n      console.log(event);\n      /*\n      this.props.dispatch(updateLink(event.target.value, function(){\n       }));\n      this.getLinks();*/\n    }\n  }, {\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this2 = this;\n\n      fetch('/api/link').then(function (response) {\n        console.log(response);\n        return response.json();\n      }).then(function (data) {\n        console.log(data);\n        _this2.setState({\n          links: data.links\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getLinks();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'card',\n          null,\n          _react3.default.createElement(\n            'h3',\n            null,\n            'Create link'\n          ),\n          _react3.default.createElement(_Messages2.default, { messages: this.props.messages }),\n          _react3.default.createElement(\n            'form',\n            { onSubmit: this.handleSubmit.bind(this) },\n            _react3.default.createElement(\n              'label',\n              { htmlFor: 'name' },\n              'Url'\n            ),\n            _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, onChange: this.handleChange.bind(this), autoFocus: true }),\n            _react3.default.createElement(\n              'button',\n              { type: 'submit' },\n              'Send'\n            )\n          )\n        ),\n        this.state.links.map(function (link) {\n          return _react3.default.createElement(\n            'card',\n            { key: link._id },\n            link._id === _this3.state.updateId ? _react3.default.createElement(\n              'form',\n              { onSubmit: _this3.handleSaveUpdate.bind(_this3) },\n              _react3.default.createElement(\n                'h5',\n                null,\n                _react3.default.createElement('input', { type: 'text', value: link.title })\n              ),\n              _react3.default.createElement('input', { type: 'text', value: link.link }),\n              _react3.default.createElement(\n                'textarea',\n                null,\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit', value: link._id },\n                'Save'\n              )\n            ) : _react3.default.createElement(\n              'div',\n              null,\n              _react3.default.createElement(\n                'h5',\n                null,\n                link.title\n              ),\n              _react3.default.createElement(\n                'a',\n                { href: link.link },\n                _react3.default.createElement(\n                  'p',\n                  null,\n                  link.link\n                )\n              ),\n              _react3.default.createElement(\n                'p',\n                null,\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { value: link._id, onClick: _this3.handleUpdate.bind(_this3) },\n                'Update'\n              ),\n              _react3.default.createElement(\n                'button',\n                { value: link._id, onClick: _this3.handleDelete.bind(_this3) },\n                'Delete'\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Links);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpbmtzLmpzPzRmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN1Ym1pdENyZWF0ZUxpbmssIGRlbGV0ZUxpbmssIHVwZGF0ZUxpbmsgfSBmcm9tICcuLi9hY3Rpb25zL2xpbmtzJztcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzJztcblxuY2xhc3MgTGlua3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluazogJycsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBsaW5rczogW10sXG4gICAgICB1cGRhdGVJZDogJycsXG4gICAgICB1cGRhdGVMaW5rOiAnJyxcbiAgICAgIHVwZGF0ZVRpdGxlOiAnJyxcbiAgICAgIHVwZGF0ZURlc2NyaXB0aW9uOiAnJyxcbiAgICB9O1xuICAgIHRoaXMuZ2V0TGlua3MgPSB0aGlzLmdldExpbmtzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVVcGRhdGUgPSB0aGlzLmhhbmRsZVVwZGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzdWJtaXRDcmVhdGVMaW5rKHRoaXMuc3RhdGUubGluaywgdGhpcy5zdGF0ZS50aXRsZSwgdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbikpO1xuICAgIHRoaXMuZ2V0TGlua3MoKTtcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChkZWxldGVMaW5rKGV2ZW50LnRhcmdldC52YWx1ZSwgZnVuY3Rpb24oKXtcbiAgICB9KSk7XG4gICAgdGhpcy5nZXRMaW5rcygpO1xuICB9XG5cbiAgaGFuZGxlVXBkYXRlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1cGRhdGVJZDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTYXZlVXBkYXRlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgLypcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUxpbmsoZXZlbnQudGFyZ2V0LnZhbHVlLCBmdW5jdGlvbigpe1xuXG4gICAgfSkpO1xuICAgIHRoaXMuZ2V0TGlua3MoKTsqL1xuICB9XG5cbiAgZ2V0TGlua3MoKXtcbiAgICBmZXRjaCgnL2FwaS9saW5rJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxpbmtzOmRhdGEubGlua3NcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRMaW5rcygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Y2FyZD5cbiAgICAgICAgICA8aDM+Q3JlYXRlIGxpbms8L2gzPlxuICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17dGhpcy5wcm9wcy5tZXNzYWdlc30vPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlVybDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGlua1wiIGlkPVwibGlua1wiIHZhbHVlPXt0aGlzLnN0YXRlLmxpbmt9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9jYXJkPlxuICAgICAgICB7dGhpcy5zdGF0ZS5saW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNhcmQga2V5PXtsaW5rLl9pZH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgbGluay5faWQgPT09IHRoaXMuc3RhdGUudXBkYXRlSWQgP1xuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTYXZlVXBkYXRlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxoNT48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bGluay50aXRsZX0vPjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xpbmsubGlua30vPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYT57bGluay5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXtsaW5rLl9pZH0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGg1PntsaW5rLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmxpbmt9PjxwPntsaW5rLmxpbmt9PC9wPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDxwPntsaW5rLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdmFsdWU9e2xpbmsuX2lkfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZS5iaW5kKHRoaXMpfT5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdmFsdWU9e2xpbmsuX2lkfSBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9jYXJkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMaW5rcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvTGlua3MuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQWJBO0FBY0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBVkE7QUFvQkE7QUFoQ0E7QUFtQ0E7Ozs7QUE1R0E7QUFDQTtBQThHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})