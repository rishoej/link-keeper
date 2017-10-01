webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _links = __webpack_require__(307);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Links: {\n    displayName: 'Links'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Links = _wrapComponent('Links')(function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      link: '',\n      title: '',\n      description: '',\n      links: [],\n      update: ''\n    };\n    _this.getLinks = _this.getLinks.bind(_this);\n    _this.handleUpdate = _this.handleUpdate.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n      this.getLinks();\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.deleteLink)(event.target.value, function () {}));\n      this.getLinks();\n    }\n  }, {\n    key: 'handleUpdate',\n    value: function handleUpdate(event) {\n      this.setState({\n        update: event.target.value\n      });\n    }\n  }, {\n    key: 'handleSaveUpdate',\n    value: function handleSaveUpdate(event) {\n      event.preventDefault();\n      console.log(event.target);\n      /*\n      this.props.dispatch(updateLink(event.target.value, function(){\n       }));\n      this.getLinks();*/\n    }\n  }, {\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this2 = this;\n\n      fetch('/api/link').then(function (response) {\n        console.log(response);\n        return response.json();\n      }).then(function (data) {\n        console.log(data);\n        _this2.setState({\n          links: data.links\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getLinks();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'card',\n          null,\n          _react3.default.createElement(\n            'h3',\n            null,\n            'Create link'\n          ),\n          _react3.default.createElement(_Messages2.default, { messages: this.props.messages }),\n          _react3.default.createElement(\n            'form',\n            { onSubmit: this.handleSubmit.bind(this) },\n            _react3.default.createElement(\n              'label',\n              { htmlFor: 'name' },\n              'Url'\n            ),\n            _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, onChange: this.handleChange.bind(this), autoFocus: true }),\n            _react3.default.createElement(\n              'button',\n              { type: 'submit' },\n              'Send'\n            )\n          )\n        ),\n        this.state.links.map(function (link) {\n          return _react3.default.createElement(\n            'card',\n            { key: link._id },\n            link._id === _this3.state.update ? _react3.default.createElement(\n              'form',\n              { onSubmit: _this3.handleSaveUpdate.bind(_this3) },\n              _react3.default.createElement(\n                'h5',\n                null,\n                _react3.default.createElement('input', { type: 'text', value: link.title })\n              ),\n              _react3.default.createElement('input', { type: 'text', value: link.link }),\n              _react3.default.createElement(\n                'textarea',\n                null,\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit', value: link._id },\n                'Save'\n              )\n            ) : _react3.default.createElement(\n              'div',\n              null,\n              _react3.default.createElement(\n                'h5',\n                null,\n                link.title\n              ),\n              _react3.default.createElement(\n                'a',\n                { href: link.link },\n                _react3.default.createElement(\n                  'p',\n                  null,\n                  link.link\n                )\n              ),\n              _react3.default.createElement(\n                'p',\n                null,\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { value: link._id, onClick: _this3.handleUpdate.bind(_this3) },\n                'Update'\n              ),\n              _react3.default.createElement(\n                'button',\n                { value: link._id, onClick: _this3.handleDelete.bind(_this3) },\n                'Delete'\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Links);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpbmtzLmpzPzRmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN1Ym1pdENyZWF0ZUxpbmssIGRlbGV0ZUxpbmssIHVwZGF0ZUxpbmsgfSBmcm9tICcuLi9hY3Rpb25zL2xpbmtzJztcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzJztcblxuY2xhc3MgTGlua3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluazogJycsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBsaW5rczogW10sXG4gICAgICB1cGRhdGU6ICcnXG4gICAgfTtcbiAgICB0aGlzLmdldExpbmtzID0gdGhpcy5nZXRMaW5rcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVXBkYXRlID0gdGhpcy5oYW5kbGVVcGRhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc3VibWl0Q3JlYXRlTGluayh0aGlzLnN0YXRlLmxpbmssIHRoaXMuc3RhdGUudGl0bGUsIHRoaXMuc3RhdGUuZGVzY3JpcHRpb24pKTtcbiAgICB0aGlzLmdldExpbmtzKCk7XG4gIH1cblxuICBoYW5kbGVEZWxldGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZGVsZXRlTGluayhldmVudC50YXJnZXQudmFsdWUsIGZ1bmN0aW9uKCl7XG4gICAgfSkpO1xuICAgIHRoaXMuZ2V0TGlua3MoKTtcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBkYXRlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNhdmVVcGRhdGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gICAgLypcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUxpbmsoZXZlbnQudGFyZ2V0LnZhbHVlLCBmdW5jdGlvbigpe1xuXG4gICAgfSkpO1xuICAgIHRoaXMuZ2V0TGlua3MoKTsqL1xuICB9XG5cbiAgZ2V0TGlua3MoKXtcbiAgICBmZXRjaCgnL2FwaS9saW5rJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxpbmtzOmRhdGEubGlua3NcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRMaW5rcygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Y2FyZD5cbiAgICAgICAgICA8aDM+Q3JlYXRlIGxpbms8L2gzPlxuICAgICAgICAgIDxNZXNzYWdlcyBtZXNzYWdlcz17dGhpcy5wcm9wcy5tZXNzYWdlc30vPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlVybDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGlua1wiIGlkPVwibGlua1wiIHZhbHVlPXt0aGlzLnN0YXRlLmxpbmt9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9jYXJkPlxuICAgICAgICB7dGhpcy5zdGF0ZS5saW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNhcmQga2V5PXtsaW5rLl9pZH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgbGluay5faWQgPT09IHRoaXMuc3RhdGUudXBkYXRlID9cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2F2ZVVwZGF0ZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2xpbmsudGl0bGV9Lz48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtsaW5rLmxpbmt9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWE+e2xpbmsuZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17bGluay5faWR9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxoNT57bGluay50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5saW5rfT48cD57bGluay5saW5rfTwvcD48L2E+XG4gICAgICAgICAgICAgICAgICAgICA8cD57bGluay5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHZhbHVlPXtsaW5rLl9pZH0gb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGUuYmluZCh0aGlzKX0+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHZhbHVlPXtsaW5rLl9pZH0gb25DbGljaz17dGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKX0+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvY2FyZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlua3MpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL0xpbmtzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFWQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVZBO0FBb0JBO0FBaENBO0FBbUNBOzs7O0FBekdBO0FBQ0E7QUEyR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})