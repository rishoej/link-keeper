webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _links = __webpack_require__(307);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Links: {\n    displayName: 'Links'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/Desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/Desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Links = _wrapComponent('Links')(function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      link: '',\n      title: '',\n      description: '',\n      links: []\n    };\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch('/api/link').then(function (response) {\n        console.log(response);\n        return response.json();\n      }).then(function (data) {\n        console.log(data);\n        _this2.setState({\n          links: data.links\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Contact Form'\n        ),\n        _react3.default.createElement(_Messages2.default, { messages: this.props.messages }),\n        _react3.default.createElement(\n          'form',\n          { onSubmit: this.handleSubmit.bind(this) },\n          _react3.default.createElement(\n            'label',\n            { htmlFor: 'name' },\n            'Url'\n          ),\n          _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, onChange: this.handleChange.bind(this), autoFocus: true }),\n          _react3.default.createElement(\n            'button',\n            { type: 'submit' },\n            'Send'\n          )\n        ),\n        this.state.links.map(function (link) {\n          return _react3.default.createElement(\n            'card',\n            { key: link._id },\n            _react3.default.createElement(\n              'h5',\n              null,\n              link.title\n            ),\n            _react3.default.createElement(\n              'a',\n              { href: link.link },\n              _react3.default.createElement(\n                'p',\n                null,\n                link.link\n              )\n            ),\n            _react3.default.createElement(\n              'p',\n              null,\n              link.description\n            ),\n            _react3.default.createElement(\n              'button',\n              null,\n              'Update'\n            ),\n            _react3.default.createElement(\n              'button',\n              null,\n              'Delete'\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Links);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpbmtzLmpzPzRmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN1Ym1pdENyZWF0ZUxpbmsgfSBmcm9tICcuLi9hY3Rpb25zL2xpbmtzJztcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzJztcblxuY2xhc3MgTGlua3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluazogJycsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBsaW5rczogW11cbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzdWJtaXRDcmVhdGVMaW5rKHRoaXMuc3RhdGUubGluaywgdGhpcy5zdGF0ZS50aXRsZSwgdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbikpO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHN1Ym1pdENyZWF0ZUxpbmsodGhpcy5zdGF0ZS5saW5rLCB0aGlzLnN0YXRlLnRpdGxlLCB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCgnL2FwaS9saW5rJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxpbmtzOmRhdGEubGlua3NcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDM+Q29udGFjdCBGb3JtPC9oMz5cbiAgICAgICAgPE1lc3NhZ2VzIG1lc3NhZ2VzPXt0aGlzLnByb3BzLm1lc3NhZ2VzfS8+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Vcmw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsaW5rXCIgaWQ9XCJsaW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUubGlua30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IGF1dG9Gb2N1cy8+XG4gICAgICAgICAgey8qPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJyLz4qL31cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAge3RoaXMuc3RhdGUubGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxjYXJkIGtleT17bGluay5faWR9PlxuICAgICAgICAgICAgICA8aDU+e2xpbmsudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5saW5rfT48cD57bGluay5saW5rfTwvcD48L2E+XG4gICAgICAgICAgICAgIDxwPntsaW5rLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvY2FyZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlua3MpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL0xpbmtzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQXZCQTtBQTBCQTs7OztBQXRFQTtBQUNBO0FBd0VBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})