webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _links = __webpack_require__(307);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Links: {\n    displayName: 'Links'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Links = _wrapComponent('Links')(function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      link: '',\n      title: '',\n      description: '',\n      links: [],\n      updateId: '',\n      updateLink: '',\n      updateTitle: '',\n      updateDescription: ''\n    };\n    _this.getLinks = _this.getLinks.bind(_this);\n    _this.handleUpdate = _this.handleUpdate.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      console.log(event.target.name, event.target.value);\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n      this.getLinks();\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.deleteLink)(event.target.value, function () {}));\n      this.getLinks();\n    }\n  }, {\n    key: 'handleUpdate',\n    value: function handleUpdate(event, link, title, description) {\n      console.log(event.target.value._id);\n      this.setState({\n        updateId: event.target.value._id,\n        updateLink: link,\n        updateTitle: title,\n        updateDescription: description\n      });\n    }\n  }, {\n    key: 'handleSaveUpdate',\n    value: function handleSaveUpdate(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.deleteLink)(this.state.updateId, this.state.updateLink, this.state.updateTitle, this.state.updateDescription, function () {}));\n      this.getLinks();\n    }\n  }, {\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this2 = this;\n\n      fetch('/api/link').then(function (response) {\n        console.log(response);\n        return response.json();\n      }).then(function (data) {\n        console.log(data);\n        _this2.setState({\n          links: data.links\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getLinks();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'card',\n          null,\n          _react3.default.createElement(\n            'h3',\n            null,\n            'Create link'\n          ),\n          _react3.default.createElement(_Messages2.default, { messages: this.props.messages }),\n          _react3.default.createElement(\n            'form',\n            { onSubmit: this.handleSubmit.bind(this) },\n            _react3.default.createElement(\n              'label',\n              { htmlFor: 'name' },\n              'Url'\n            ),\n            _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, onChange: this.handleChange.bind(this), autoFocus: true }),\n            _react3.default.createElement(\n              'button',\n              { type: 'submit' },\n              'Send'\n            )\n          )\n        ),\n        this.state.links.map(function (link) {\n          return _react3.default.createElement(\n            'card',\n            { key: link._id },\n            link._id === _this3.state.updateId ? _react3.default.createElement(\n              'form',\n              { onSubmit: _this3.handleSaveUpdate.bind(_this3) },\n              _react3.default.createElement('input', { type: 'text', name: 'updateTitle', id: 'updateTitle', value: _this3.state.updateTitle, onChange: _this3.handleChange.bind(_this3) }),\n              _react3.default.createElement('input', { type: 'text', name: 'updateLink', id: 'updateLink', value: _this3.state.updateLink, onChange: _this3.handleChange.bind(_this3) }),\n              _react3.default.createElement('textarea', { name: 'updateDescription', id: 'updateDescription', value: _this3.state.updateDescription, onChange: _this3.handleChange.bind(_this3) }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit', value: _this3.state.updateId },\n                'Save'\n              )\n            ) : _react3.default.createElement(\n              'div',\n              null,\n              _react3.default.createElement(\n                'h5',\n                null,\n                link.title\n              ),\n              _react3.default.createElement(\n                'a',\n                { href: link.link },\n                _react3.default.createElement(\n                  'p',\n                  null,\n                  link.link\n                )\n              ),\n              _react3.default.createElement(\n                'p',\n                null,\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { value: link._id, onClick: _this3.handleUpdate.bind(link._id, link.link, link.title, link.description) },\n                'Update'\n              ),\n              _react3.default.createElement(\n                'button',\n                { value: link._id, onClick: _this3.handleDelete.bind(_this3) },\n                'Delete'\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Links);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpbmtzLmpzPzRmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN1Ym1pdENyZWF0ZUxpbmssIGRlbGV0ZUxpbmssIHVwZGF0ZUxpbmsgfSBmcm9tICcuLi9hY3Rpb25zL2xpbmtzJztcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzJztcblxuY2xhc3MgTGlua3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluazogJycsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBsaW5rczogW10sXG4gICAgICB1cGRhdGVJZDogJycsXG4gICAgICB1cGRhdGVMaW5rOiAnJyxcbiAgICAgIHVwZGF0ZVRpdGxlOiAnJyxcbiAgICAgIHVwZGF0ZURlc2NyaXB0aW9uOiAnJyxcbiAgICB9O1xuICAgIHRoaXMuZ2V0TGlua3MgPSB0aGlzLmdldExpbmtzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVVcGRhdGUgPSB0aGlzLmhhbmRsZVVwZGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzdWJtaXRDcmVhdGVMaW5rKHRoaXMuc3RhdGUubGluaywgdGhpcy5zdGF0ZS50aXRsZSwgdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbikpO1xuICAgIHRoaXMuZ2V0TGlua3MoKTtcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChkZWxldGVMaW5rKGV2ZW50LnRhcmdldC52YWx1ZSwgZnVuY3Rpb24oKXtcbiAgICB9KSk7XG4gICAgdGhpcy5nZXRMaW5rcygpO1xuICB9XG5cbiAgaGFuZGxlVXBkYXRlKGV2ZW50LCBsaW5rLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUuX2lkKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVwZGF0ZUlkOiBldmVudC50YXJnZXQudmFsdWUuX2lkLFxuICAgICAgdXBkYXRlTGluazogbGluayxcbiAgICAgIHVwZGF0ZVRpdGxlOnRpdGxlLFxuICAgICAgdXBkYXRlRGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2F2ZVVwZGF0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChkZWxldGVMaW5rKHRoaXMuc3RhdGUudXBkYXRlSWQsIHRoaXMuc3RhdGUudXBkYXRlTGluaywgdGhpcy5zdGF0ZS51cGRhdGVUaXRsZSwgdGhpcy5zdGF0ZS51cGRhdGVEZXNjcmlwdGlvbiwgZnVuY3Rpb24oKXt9KSk7XG4gICAgdGhpcy5nZXRMaW5rcygpO1xuICB9XG5cbiAgZ2V0TGlua3MoKXtcbiAgICBmZXRjaCgnL2FwaS9saW5rJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxpbmtzOmRhdGEubGlua3NcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRMaW5rcygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Y2FyZD5cbiAgICAgICAgICA8aDM+Q3JlYXRlIGxpbms8L2gzPlxuICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17dGhpcy5wcm9wcy5tZXNzYWdlc30vPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlVybDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGlua1wiIGlkPVwibGlua1wiIHZhbHVlPXt0aGlzLnN0YXRlLmxpbmt9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9jYXJkPlxuICAgICAgICB7dGhpcy5zdGF0ZS5saW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNhcmQga2V5PXtsaW5rLl9pZH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgbGluay5faWQgPT09IHRoaXMuc3RhdGUudXBkYXRlSWQgP1xuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTYXZlVXBkYXRlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1cGRhdGVUaXRsZVwiIGlkPVwidXBkYXRlVGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVUaXRsZX0gIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVwZGF0ZUxpbmtcIiBpZD1cInVwZGF0ZUxpbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVMaW5rfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidXBkYXRlRGVzY3JpcHRpb25cIiBpZD1cInVwZGF0ZURlc2NyaXB0aW9uXCIgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlRGVzY3JpcHRpb259IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXt0aGlzLnN0YXRlLnVwZGF0ZUlkfT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICA8aDU+e2xpbmsudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsubGlua30+PHA+e2xpbmsubGlua308L3A+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgPHA+e2xpbmsuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17bGluay5faWR9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlLmJpbmQobGluay5faWQsIGxpbmsubGluaywgbGluay50aXRsZSwgbGluay5kZXNjcmlwdGlvbil9PlVwZGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17bGluay5faWR9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2NhcmQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExpbmtzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9MaW5rcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBYkE7QUFjQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFWQTtBQW9CQTtBQWhDQTtBQW1DQTs7OztBQTdHQTtBQUNBO0FBK0dBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})