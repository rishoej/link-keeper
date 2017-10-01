webpackHotUpdate(0,{

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _fuse = __webpack_require__(350);\n\nvar _fuse2 = _interopRequireDefault(_fuse);\n\nvar _links = __webpack_require__(311);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Links: {\n    displayName: 'Links'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Links = _wrapComponent('Links')(function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      link: '',\n      title: '',\n      description: '',\n      displayFullInput: false,\n      links: [],\n      updateId: '',\n      updateLink: '',\n      updateTitle: '',\n      updateDescription: '',\n      searchString: '',\n      searchResults: ''\n    };\n    _this.handleScrapper = _this.handleScrapper.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    _this.getLinks = _this.getLinks.bind(_this);\n    _this.handleUpdate = _this.handleUpdate.bind(_this);\n    _this.handleSearch = _this.handleSearch.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleScrapper',\n    value: function handleScrapper(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n      fetch('/api/scrapper?site=' + this.state.link).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var filterData = data.links;\n        _this2.setState({\n          link: data.site.link,\n          title: data.site.title,\n          description: data.site.description,\n          displayFullInput: true\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      var _this3 = this;\n\n      event.preventDefault();\n      if (this.state.displayFullInput) {\n        console.log(this.state.link, this.state.title, this.state.description);\n        this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n        this.setState({\n          link: '',\n          title: '',\n          description: '',\n          displayFullInput: false\n        });\n        setTimeout(function () {\n          _this3.getLinks();\n        }, 1000);\n      } else {\n        this.handleScrapper(event);\n      }\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(id, index) {\n      this.setState(function (prevState) {\n        return {\n          links: prevState.links.filter(function (_, i) {\n            return i !== index;\n          })\n        };\n      });\n      this.props.dispatch((0, _links.deleteLink)(id, ''));\n    }\n  }, {\n    key: 'handleUpdate',\n    value: function handleUpdate(link, index) {\n      this.setState({\n        updateIndex: index,\n        updateId: link._id,\n        updateLink: link.link,\n        updateTitle: link.title,\n        updateDescription: link.description\n      });\n    }\n  }, {\n    key: 'handleSaveUpdate',\n    value: function handleSaveUpdate(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.updateLink)(this.state.updateId, this.state.updateLink, this.state.updateTitle, this.state.updateDescription));\n\n      var stateCopy = Object.assign({}, this.state);\n      stateCopy.links[this.state.updateIndex].link = this.state.updateLink;\n      stateCopy.links[this.state.updateIndex].title = this.state.updateTitle;\n      stateCopy.links[this.state.updateIndex].description = this.state.updateDescription;\n\n      this.setState(stateCopy);\n\n      this.setState({\n        updateIndex: '',\n        updateId: '',\n        updateLink: '',\n        updateTitle: '',\n        updateDescription: ''\n      });\n    }\n  }, {\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this4 = this;\n\n      fetch('/api/link').then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var filterData = data.links;\n        filterData.sort(function (a, b) {\n          return parseFloat(b.time) - parseFloat(a.time);\n        });\n        _this4.setState({\n          links: filterData\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'handleSearch',\n    value: function handleSearch(event) {\n      this.handleChange(event);\n      var options = {\n        shouldSort: true,\n        threshold: 0.8,\n        location: 0,\n        distance: 100,\n        maxPatternLength: 30,\n        minMatchCharLength: 1,\n        keys: [\"title\", \"url\", \"description\"]\n      };\n      var fuse = new _fuse2.default(this.state.links, options);\n      var searchResults = fuse.search(this.state.searchString);\n      this.setState({\n        searchResults: searchResults\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getLinks();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var filteredLinks = this.state.links;\n      if (this.state.searchString.length > 1) {\n        filteredLinks = this.state.searchResults;\n      }\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'card',\n          null,\n          _react3.default.createElement('input', { type: 'text', name: 'searchString', id: 'searchString', placeholder: 'Search...', value: this.state.searchString, onChange: this.handleSearch.bind(this) })\n        ),\n        _react3.default.createElement(\n          'card',\n          null,\n          _react3.default.createElement(\n            'form',\n            { onSubmit: this.handleSubmit.bind(this) },\n            this.state.displayFullInput ? _react3.default.createElement(\n              'span',\n              null,\n              _react3.default.createElement('input', { type: 'text', name: 'title', id: 'title', value: this.state.title, placeholder: 'Title...', onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, placeholder: 'Insert your link here', onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement('textarea', { name: 'description', id: 'description', value: this.state.description, placeholder: 'Description...', onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit' },\n                'Create'\n              )\n            ) : _react3.default.createElement(\n              'span',\n              null,\n              _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, placeholder: 'Insert your link here', onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit' },\n                'Next'\n              )\n            )\n          )\n        ),\n        filteredLinks.map(function (link, i) {\n          return _react3.default.createElement(\n            'card',\n            { key: link._id },\n            link._id === _this5.state.updateId ? _react3.default.createElement(\n              'form',\n              { onSubmit: _this5.handleSaveUpdate.bind(_this5) },\n              _react3.default.createElement('input', { type: 'text', name: 'updateTitle', placeholder: 'Title', id: 'updateTitle', value: _this5.state.updateTitle, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement('input', { type: 'text', name: 'updateLink', placeholder: 'Link', id: 'updateLink', value: _this5.state.updateLink, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement('textarea', { name: 'updateDescription', placeholder: 'Description', id: 'updateDescription', value: _this5.state.updateDescription, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit', value: _this5.state.updateId },\n                'Save'\n              )\n            ) : _react3.default.createElement(\n              'div',\n              null,\n              _react3.default.createElement(\n                'h5',\n                { className: 'cardTitle' },\n                link.title\n              ),\n              _react3.default.createElement(\n                'a',\n                { href: link.link, className: 'cardLink', target: '_blank' },\n                _react3.default.createElement(\n                  'p',\n                  null,\n                  link.link\n                )\n              ),\n              _react3.default.createElement(\n                'p',\n                { className: 'cardDescription' },\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this5.handleUpdate(link, i);\n                  } },\n                'Update ',\n                _react3.default.createElement('i', { className: 'fa fa-pencil-square-o', 'aria-hidden': 'true' })\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this5.handleDelete(link._id, i);\n                  } },\n                ' Delete ',\n                _react3.default.createElement('i', { className: 'fa fa-trash-o', 'aria-hidden': 'true' })\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Links);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpbmtzLmpzPzRmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRnVzZSBmcm9tICdmdXNlLmpzJztcbmltcG9ydCB7IHNjcmFwU2l0ZSwgc3VibWl0Q3JlYXRlTGluaywgZGVsZXRlTGluaywgdXBkYXRlTGluayB9IGZyb20gJy4uL2FjdGlvbnMvbGlua3MnO1xuaW1wb3J0IE1lc3NhZ2VzIGZyb20gJy4vTWVzc2FnZXMnO1xuXG5jbGFzcyBMaW5rcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaW5rOiAnJyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGRpc3BsYXlGdWxsSW5wdXQ6IGZhbHNlLFxuICAgICAgbGlua3M6IFtdLFxuICAgICAgdXBkYXRlSWQ6ICcnLFxuICAgICAgdXBkYXRlTGluazogJycsXG4gICAgICB1cGRhdGVUaXRsZTogJycsXG4gICAgICB1cGRhdGVEZXNjcmlwdGlvbjogJycsXG4gICAgICBzZWFyY2hTdHJpbmc6ICcnLFxuICAgICAgc2VhcmNoUmVzdWx0czogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2NyYXBwZXIgPSB0aGlzLmhhbmRsZVNjcmFwcGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0TGlua3MgPSB0aGlzLmdldExpbmtzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVVcGRhdGUgPSB0aGlzLmhhbmRsZVVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoID0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBoYW5kbGVTY3JhcHBlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2goJy9hcGkvc2NyYXBwZXI/c2l0ZT0nICsgdGhpcy5zdGF0ZS5saW5rKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGZpbHRlckRhdGEgPSBkYXRhLmxpbmtzO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsaW5rOiBkYXRhLnNpdGUubGluayxcbiAgICAgICAgICB0aXRsZTogZGF0YS5zaXRlLnRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLnNpdGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgZGlzcGxheUZ1bGxJbnB1dDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKHRoaXMuc3RhdGUuZGlzcGxheUZ1bGxJbnB1dCl7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmxpbmssIHRoaXMuc3RhdGUudGl0bGUsIHRoaXMuc3RhdGUuZGVzY3JpcHRpb24pXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHN1Ym1pdENyZWF0ZUxpbmsodGhpcy5zdGF0ZS5saW5rLCB0aGlzLnN0YXRlLnRpdGxlLCB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uKSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGluazogJycsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBkaXNwbGF5RnVsbElucHV0OiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5nZXRMaW5rcygpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlU2NyYXBwZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURlbGV0ZShpZCwgaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICBsaW5rczogcHJldlN0YXRlLmxpbmtzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpXG4gICAgfSkpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZGVsZXRlTGluayhpZCwnJykpO1xuICB9XG5cbiAgaGFuZGxlVXBkYXRlKGxpbmssIGluZGV4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1cGRhdGVJbmRleDogaW5kZXgsXG4gICAgICB1cGRhdGVJZDogbGluay5faWQsXG4gICAgICB1cGRhdGVMaW5rOiBsaW5rLmxpbmssXG4gICAgICB1cGRhdGVUaXRsZTogbGluay50aXRsZSxcbiAgICAgIHVwZGF0ZURlc2NyaXB0aW9uOiBsaW5rLmRlc2NyaXB0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2F2ZVVwZGF0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVMaW5rKFxuICAgICAgdGhpcy5zdGF0ZS51cGRhdGVJZCxcbiAgICAgIHRoaXMuc3RhdGUudXBkYXRlTGluayxcbiAgICAgIHRoaXMuc3RhdGUudXBkYXRlVGl0bGUsXG4gICAgICB0aGlzLnN0YXRlLnVwZGF0ZURlc2NyaXB0aW9uLFxuICAgICkpO1xuXG4gICAgbGV0IHN0YXRlQ29weSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuICAgIHN0YXRlQ29weS5saW5rc1t0aGlzLnN0YXRlLnVwZGF0ZUluZGV4XS5saW5rID0gdGhpcy5zdGF0ZS51cGRhdGVMaW5rO1xuICAgIHN0YXRlQ29weS5saW5rc1t0aGlzLnN0YXRlLnVwZGF0ZUluZGV4XS50aXRsZSA9IHRoaXMuc3RhdGUudXBkYXRlVGl0bGU7XG4gICAgc3RhdGVDb3B5LmxpbmtzW3RoaXMuc3RhdGUudXBkYXRlSW5kZXhdLmRlc2NyaXB0aW9uID0gdGhpcy5zdGF0ZS51cGRhdGVEZXNjcmlwdGlvbjtcblxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVDb3B5KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBkYXRlSW5kZXg6ICcnLFxuICAgICAgdXBkYXRlSWQ6ICcnLFxuICAgICAgdXBkYXRlTGluazogJycsXG4gICAgICB1cGRhdGVUaXRsZTogJycsXG4gICAgICB1cGRhdGVEZXNjcmlwdGlvbjogJycsXG4gICAgfSk7XG4gIH1cblxuICBnZXRMaW5rcygpe1xuICAgIGZldGNoKCcvYXBpL2xpbmsnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IGZpbHRlckRhdGEgPSBkYXRhLmxpbmtzO1xuICAgICAgICBmaWx0ZXJEYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGIudGltZSkgLXBhcnNlRmxvYXQoYS50aW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxpbmtzOmZpbHRlckRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKGV2ZW50KSB7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBzaG91bGRTb3J0OiB0cnVlLFxuICAgICAgdGhyZXNob2xkOiAwLjgsXG4gICAgICBsb2NhdGlvbjogMCxcbiAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICBtYXhQYXR0ZXJuTGVuZ3RoOiAzMCxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgICAgIGtleXM6IFtcbiAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICBcInVybFwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCJcbiAgICAgIF1cbiAgICB9O1xuICAgIHZhciBmdXNlID0gbmV3IEZ1c2UodGhpcy5zdGF0ZS5saW5rcywgb3B0aW9ucyk7XG4gICAgdmFyIHNlYXJjaFJlc3VsdHMgPSBmdXNlLnNlYXJjaCh0aGlzLnN0YXRlLnNlYXJjaFN0cmluZyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hSZXN1bHRzOiBzZWFyY2hSZXN1bHRzXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0TGlua3MoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZmlsdGVyZWRMaW5rcyA9IHRoaXMuc3RhdGUubGlua3M7XG4gICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmcubGVuZ3RoID4gMSl7XG4gICAgICBmaWx0ZXJlZExpbmtzID0gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzO1xuICAgIH1cbiAgICByZXR1cm4gKFxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxjYXJkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hTdHJpbmdcIiBpZD1cInNlYXJjaFN0cmluZ1wiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoU3RyaW5nfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2NhcmQ+XG5cbiAgICAgICAgPGNhcmQ+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheUZ1bGxJbnB1dCA/IChcbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBwbGFjZWhvbGRlcj1cIlRpdGxlLi4uXCJvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gYXV0b0ZvY3VzLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGlua1wiIGlkPVwibGlua1wiIHZhbHVlPXt0aGlzLnN0YXRlLmxpbmt9IHBsYWNlaG9sZGVyPVwiSW5zZXJ0IHlvdXIgbGluayBoZXJlXCJvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gYXV0b0ZvY3VzLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IGF1dG9Gb2N1cy8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsaW5rXCIgaWQ9XCJsaW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUubGlua30gcGxhY2Vob2xkZXI9XCJJbnNlcnQgeW91ciBsaW5rIGhlcmVcIm9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvY2FyZD5cblxuICAgICAgICB7ZmlsdGVyZWRMaW5rcy5tYXAoKGxpbmssIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNhcmQga2V5PXtsaW5rLl9pZH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgbGluay5faWQgPT09IHRoaXMuc3RhdGUudXBkYXRlSWQgP1xuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTYXZlVXBkYXRlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1cGRhdGVUaXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBpZD1cInVwZGF0ZVRpdGxlXCIgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlVGl0bGV9ICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1cGRhdGVMaW5rXCIgcGxhY2Vob2xkZXI9XCJMaW5rXCIgaWQ9XCJ1cGRhdGVMaW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlTGlua30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInVwZGF0ZURlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIGlkPVwidXBkYXRlRGVzY3JpcHRpb25cIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVEZXNjcmlwdGlvbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlSWR9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkVGl0bGVcIj57bGluay50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay5saW5rfSBjbGFzc05hbWU9XCJjYXJkTGlua1wiIHRhcmdldD1cIl9ibGFua1wiPjxwPntsaW5rLmxpbmt9PC9wPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmREZXNjcmlwdGlvblwiPntsaW5rLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuaGFuZGxlVXBkYXRlKGxpbmssIGkpfT5VcGRhdGUgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVEZWxldGUobGluay5faWQsIGkpfT4gRGVsZXRlIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvY2FyZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGlua3MpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL0xpbmtzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFvQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVRBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBVkE7QUFvQkE7QUE3Q0E7QUFnREE7Ozs7QUFqTkE7QUFDQTtBQW1OQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})