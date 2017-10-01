webpackHotUpdate(0,{

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _fuse = __webpack_require__(351);\n\nvar _fuse2 = _interopRequireDefault(_fuse);\n\nvar _links = __webpack_require__(312);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Links: {\n    displayName: 'Links'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/Desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/Desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Links = _wrapComponent('Links')(function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      link: '',\n      title: '',\n      description: '',\n      links: [],\n      updateId: '',\n      updateLink: '',\n      updateTitle: '',\n      updateDescription: '',\n      searchString: '',\n      searchResults: ''\n    };\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    _this.getLinks = _this.getLinks.bind(_this);\n    _this.handleUpdate = _this.handleUpdate.bind(_this);\n    _this.handleSearch = _this.handleSearch.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n      this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n      this.setState({\n        link: '',\n        title: '',\n        description: ''\n      });\n      setTimeout(function () {\n        _this2.getLinks();\n      }, 600);\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(id, index) {\n      this.setState(function (prevState) {\n        return {\n          links: prevState.links.filter(function (_, i) {\n            return i !== index;\n          })\n        };\n      });\n      this.props.dispatch((0, _links.deleteLink)(id, ''));\n    }\n  }, {\n    key: 'handleUpdate',\n    value: function handleUpdate(link, index) {\n      this.setState({\n        updateIndex: index,\n        updateId: link._id,\n        updateLink: link.link,\n        updateTitle: link.title,\n        updateDescription: link.description\n      });\n    }\n  }, {\n    key: 'handleSaveUpdate',\n    value: function handleSaveUpdate(event) {\n      var _this3 = this;\n\n      event.preventDefault();\n      this.props.dispatch((0, _links.updateLink)(this.state.updateId, this.state.updateLink, this.state.updateTitle, this.state.updateDescription));\n      setTimeout(function () {\n        _this3.getLinks();\n      }, 600);\n\n      var stateCopy = Object.assign({}, this.state);\n      stateCopy.links[this.state.links].link = this.state.updateLink;\n      stateCopy.links[this.state.links].title = this.state.updateTitle;\n      stateCopy.links[this.state.links].description = this.state.updateDescription;\n\n      this.setState(stateCopy);\n\n      /*\n      this.setState((prevState) => ({\n        links: prevState.links[this.state.index])\n      }));*/\n      this.setState({\n        updateIndex: '',\n        updateId: '',\n        updateLink: '',\n        updateTitle: '',\n        updateDescription: ''\n      });\n    }\n  }, {\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this4 = this;\n\n      fetch('/api/link').then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var filterData = data.links;\n        filterData.sort(function (a, b) {\n          return parseFloat(b.time) - parseFloat(a.time);\n        });\n        _this4.setState({\n          links: filterData\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'handleSearch',\n    value: function handleSearch(event) {\n      this.handleChange(event);\n      var options = {\n        shouldSort: true,\n        threshold: 0.6,\n        location: 0,\n        distance: 100,\n        maxPatternLength: 30,\n        minMatchCharLength: 1,\n        keys: [\"title\", \"url\", \"description\"]\n      };\n      var fuse = new _fuse2.default(this.state.links, options);\n      var searchResults = fuse.search(this.state.searchString);\n      this.setState({\n        searchResults: searchResults\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getLinks();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var filteredLinks = this.state.links;\n      if (this.state.searchString.length > 1) {\n        filteredLinks = this.state.searchResults;\n      }\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Create link'\n        ),\n        _react3.default.createElement(\n          'form',\n          { onSubmit: this.handleSubmit.bind(this) },\n          _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, placeholder: 'Url...', onChange: this.handleChange.bind(this), autoFocus: true }),\n          _react3.default.createElement(\n            'button',\n            { type: 'submit' },\n            'Send'\n          )\n        ),\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Search'\n        ),\n        _react3.default.createElement('input', { type: 'text', name: 'searchString', id: 'searchString', placeholder: 'Search...', value: this.state.searchString, onChange: this.handleSearch.bind(this) }),\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Links'\n        ),\n        filteredLinks.map(function (link, i) {\n          return _react3.default.createElement(\n            'card',\n            { key: link._id },\n            link._id === _this5.state.updateId ? _react3.default.createElement(\n              'form',\n              { onSubmit: _this5.handleSaveUpdate.bind(_this5) },\n              _react3.default.createElement('input', { type: 'text', name: 'updateTitle', placeholder: 'Title', id: 'updateTitle', value: _this5.state.updateTitle, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement('input', { type: 'text', name: 'updateLink', placeholder: 'Link', id: 'updateLink', value: _this5.state.updateLink, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement('textarea', { name: 'updateDescription', placeholder: 'Description', id: 'updateDescription', value: _this5.state.updateDescription, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit', value: _this5.state.updateId },\n                'Save'\n              )\n            ) : _react3.default.createElement(\n              'div',\n              null,\n              _react3.default.createElement(\n                'h5',\n                { className: 'cardTitle' },\n                link.title\n              ),\n              _react3.default.createElement(\n                'a',\n                { href: link.link, className: 'cardLink', target: '_blank' },\n                _react3.default.createElement(\n                  'p',\n                  null,\n                  link.link\n                )\n              ),\n              _react3.default.createElement(\n                'p',\n                { className: 'cardDescription' },\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this5.handleUpdate(link, i);\n                  } },\n                _react3.default.createElement('i', { className: 'fa fa-pencil-square-o', 'aria-hidden': 'true' })\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this5.handleDelete(link._id, i);\n                  } },\n                _react3.default.createElement('i', { className: 'fa fa-trash-o', 'aria-hidden': 'true' })\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Links);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpbmtzLmpzPzRmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xuaW1wb3J0IHsgc3VibWl0Q3JlYXRlTGluaywgZGVsZXRlTGluaywgdXBkYXRlTGluayB9IGZyb20gJy4uL2FjdGlvbnMvbGlua3MnO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vTWVzc2FnZXMnO1xuXG5jbGFzcyBMaW5rcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaW5rOiAnJyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGxpbmtzOiBbXSxcbiAgICAgIHVwZGF0ZUlkOiAnJyxcbiAgICAgIHVwZGF0ZUxpbms6ICcnLFxuICAgICAgdXBkYXRlVGl0bGU6ICcnLFxuICAgICAgdXBkYXRlRGVzY3JpcHRpb246ICcnLFxuICAgICAgc2VhcmNoU3RyaW5nOiAnJyxcbiAgICAgIHNlYXJjaFJlc3VsdHM6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRMaW5rcyA9IHRoaXMuZ2V0TGlua3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVVwZGF0ZSA9IHRoaXMuaGFuZGxlVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2ggPSB0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzdWJtaXRDcmVhdGVMaW5rKHRoaXMuc3RhdGUubGluaywgdGhpcy5zdGF0ZS50aXRsZSwgdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbikpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGluazogJycsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldExpbmtzKCk7XG4gICAgfSwgNjAwKTtcbiAgfVxuXG4gIGhhbmRsZURlbGV0ZShpZCwgaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICBsaW5rczogcHJldlN0YXRlLmxpbmtzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpXG4gICAgfSkpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZGVsZXRlTGluayhpZCwnJykpO1xuICB9XG5cbiAgaGFuZGxlVXBkYXRlKGxpbmssIGluZGV4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1cGRhdGVJbmRleDogaW5kZXgsXG4gICAgICB1cGRhdGVJZDogbGluay5faWQsXG4gICAgICB1cGRhdGVMaW5rOiBsaW5rLmxpbmssXG4gICAgICB1cGRhdGVUaXRsZTogbGluay50aXRsZSxcbiAgICAgIHVwZGF0ZURlc2NyaXB0aW9uOiBsaW5rLmRlc2NyaXB0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2F2ZVVwZGF0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVMaW5rKFxuICAgICAgdGhpcy5zdGF0ZS51cGRhdGVJZCxcbiAgICAgIHRoaXMuc3RhdGUudXBkYXRlTGluayxcbiAgICAgIHRoaXMuc3RhdGUudXBkYXRlVGl0bGUsXG4gICAgICB0aGlzLnN0YXRlLnVwZGF0ZURlc2NyaXB0aW9uLFxuICAgICkpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRMaW5rcygpO1xuICAgIH0sIDYwMCk7XG5cblxuICAgIHZhciBzdGF0ZUNvcHkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKTtcbiAgICBzdGF0ZUNvcHkubGlua3NbdGhpcy5zdGF0ZS5saW5rc10ubGluayA9IHRoaXMuc3RhdGUudXBkYXRlTGluaztcbiAgICBzdGF0ZUNvcHkubGlua3NbdGhpcy5zdGF0ZS5saW5rc10udGl0bGUgPSB0aGlzLnN0YXRlLnVwZGF0ZVRpdGxlO1xuICAgIHN0YXRlQ29weS5saW5rc1t0aGlzLnN0YXRlLmxpbmtzXS5kZXNjcmlwdGlvbiA9IHRoaXMuc3RhdGUudXBkYXRlRGVzY3JpcHRpb247XG5cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlQ29weSk7XG5cbiAgICAvKlxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIGxpbmtzOiBwcmV2U3RhdGUubGlua3NbdGhpcy5zdGF0ZS5pbmRleF0pXG4gICAgfSkpOyovXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1cGRhdGVJbmRleDogJycsXG4gICAgICB1cGRhdGVJZDogJycsXG4gICAgICB1cGRhdGVMaW5rOiAnJyxcbiAgICAgIHVwZGF0ZVRpdGxlOiAnJyxcbiAgICAgIHVwZGF0ZURlc2NyaXB0aW9uOiAnJyxcbiAgICB9KTtcbiAgfVxuXG4gIGdldExpbmtzKCl7XG4gICAgZmV0Y2goJy9hcGkvbGluaycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgZmlsdGVyRGF0YSA9IGRhdGEubGlua3M7XG4gICAgICAgIGZpbHRlckRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoYi50aW1lKSAtcGFyc2VGbG9hdChhLnRpbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbGlua3M6ZmlsdGVyRGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShldmVudClcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZFNvcnQ6IHRydWUsXG4gICAgICB0aHJlc2hvbGQ6IDAuNixcbiAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgIG1heFBhdHRlcm5MZW5ndGg6IDMwLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAgICAga2V5czogW1xuICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgIFwidXJsXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIlxuICAgICAgXVxuICAgIH07XG4gICAgdmFyIGZ1c2UgPSBuZXcgRnVzZSh0aGlzLnN0YXRlLmxpbmtzLCBvcHRpb25zKTtcbiAgICB2YXIgc2VhcmNoUmVzdWx0cyA9IGZ1c2Uuc2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFJlc3VsdHM6IHNlYXJjaFJlc3VsdHNcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRMaW5rcygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBmaWx0ZXJlZExpbmtzID0gdGhpcy5zdGF0ZS5saW5rcztcbiAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFN0cmluZy5sZW5ndGggPiAxKXtcbiAgICAgIGZpbHRlcmVkTGlua3MgPSB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHM7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDM+Q3JlYXRlIGxpbms8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpbmtcIiBpZD1cImxpbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS5saW5rfSBwbGFjZWhvbGRlcj1cIlVybC4uLlwib25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IGF1dG9Gb2N1cy8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cblxuICAgICAgICA8aDM+U2VhcmNoPC9oMz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFN0cmluZ1wiIGlkPVwic2VhcmNoU3RyaW5nXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfS8+XG5cblxuICAgICAgICA8aDM+TGlua3M8L2gzPlxuICAgICAgICB7ZmlsdGVyZWRMaW5rcy5tYXAoKGxpbmssIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNhcmQga2V5PXtsaW5rLl9pZH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgbGluay5faWQgPT09IHRoaXMuc3RhdGUudXBkYXRlSWQgP1xuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTYXZlVXBkYXRlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1cGRhdGVUaXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBpZD1cInVwZGF0ZVRpdGxlXCIgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlVGl0bGV9ICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1cGRhdGVMaW5rXCIgcGxhY2Vob2xkZXI9XCJMaW5rXCIgaWQ9XCJ1cGRhdGVMaW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlTGlua30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInVwZGF0ZURlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIGlkPVwidXBkYXRlRGVzY3JpcHRpb25cIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVEZXNjcmlwdGlvbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlSWR9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkVGl0bGVcIj57bGluay50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5saW5rfSBjbGFzc05hbWU9XCJjYXJkTGlua1wiIHRhcmdldD1cIl9ibGFua1wiPjxwPntsaW5rLmxpbmt9PC9wPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmREZXNjcmlwdGlvblwiPntsaW5rLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuaGFuZGxlVXBkYXRlKGxpbmssIGkpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZURlbGV0ZShsaW5rLl9pZCwgaSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvY2FyZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlua3MpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL0xpbmtzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQWtCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBVkE7QUFvQkE7QUFuQ0E7QUFzQ0E7Ozs7QUFqTEE7QUFDQTtBQW1MQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})