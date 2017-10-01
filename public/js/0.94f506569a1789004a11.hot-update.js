webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _reactHelmet = __webpack_require__(591);\n\nvar _fuse = __webpack_require__(346);\n\nvar _fuse2 = _interopRequireDefault(_fuse);\n\nvar _links = __webpack_require__(307);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Links: {\n    displayName: 'Links'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Links = _wrapComponent('Links')(function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      link: '',\n      title: '',\n      description: '',\n      displayFullInput: false,\n      links: [],\n      updateId: '',\n      updateLink: '',\n      updateTitle: '',\n      updateDescription: '',\n      searchString: '',\n      searchResults: ''\n    };\n    _this.handleScrapper = _this.handleScrapper.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    _this.getLinks = _this.getLinks.bind(_this);\n    _this.handleUpdate = _this.handleUpdate.bind(_this);\n    _this.handleSearch = _this.handleSearch.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleScrapper',\n    value: function handleScrapper(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n      fetch('/api/scrapper?site=' + this.state.link).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var filterData = data.links;\n        _this2.setState({\n          link: data.site.link,\n          title: data.site.title,\n          description: data.site.description,\n          displayFullInput: true\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      var _this3 = this;\n\n      event.preventDefault();\n      if (this.state.displayFullInput) {\n        console.log(this.state.link, this.state.title, this.state.description);\n        this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n        this.setState({\n          link: '',\n          title: '',\n          description: '',\n          displayFullInput: false\n        });\n        setTimeout(function () {\n          _this3.getLinks();\n        }, 1000);\n      } else {\n        this.handleScrapper(event);\n      }\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(id, index) {\n      this.setState(function (prevState) {\n        return {\n          links: prevState.links.filter(function (_, i) {\n            return i !== index;\n          })\n        };\n      });\n      this.props.dispatch((0, _links.deleteLink)(id, ''));\n    }\n  }, {\n    key: 'handleUpdate',\n    value: function handleUpdate(link, index) {\n      this.setState({\n        updateIndex: index,\n        updateId: link._id,\n        updateLink: link.link,\n        updateTitle: link.title,\n        updateDescription: link.description\n      });\n    }\n  }, {\n    key: 'handleSaveUpdate',\n    value: function handleSaveUpdate(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.updateLink)(this.state.updateId, this.state.updateLink, this.state.updateTitle, this.state.updateDescription));\n\n      var stateCopy = Object.assign({}, this.state);\n      stateCopy.links[this.state.updateIndex].link = this.state.updateLink;\n      stateCopy.links[this.state.updateIndex].title = this.state.updateTitle;\n      stateCopy.links[this.state.updateIndex].description = this.state.updateDescription;\n\n      this.setState(stateCopy);\n\n      this.setState({\n        updateIndex: '',\n        updateId: '',\n        updateLink: '',\n        updateTitle: '',\n        updateDescription: ''\n      });\n    }\n  }, {\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this4 = this;\n\n      fetch('/api/link').then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var filterData = data.links;\n        filterData.sort(function (a, b) {\n          return parseFloat(b.time) - parseFloat(a.time);\n        });\n        _this4.setState({\n          links: filterData\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'handleSearch',\n    value: function handleSearch(event) {\n      this.handleChange(event);\n      var options = {\n        shouldSort: true,\n        threshold: 0.6,\n        location: 0,\n        distance: 100,\n        maxPatternLength: 30,\n        minMatchCharLength: 1,\n        keys: [\"title\", \"url\", \"description\"]\n      };\n      var fuse = new _fuse2.default(this.state.links, options);\n      var searchResults = fuse.search(this.state.searchString);\n      this.setState({\n        searchResults: searchResults\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getLinks();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var filteredLinks = this.state.links;\n      if (this.state.searchString.length > 1) {\n        filteredLinks = this.state.searchResults;\n      }\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react3.default.createElement(\n            'title',\n            null,\n            'Store your favorite links with Link Keeper'\n          ),\n          _react3.default.createElement('meta', { name: 'description', content: 'Free service for online storage of links' })\n        ),\n        _react3.default.createElement(\n          'card',\n          null,\n          _react3.default.createElement('input', { type: 'text', name: 'searchString', id: 'searchString', placeholder: 'Search...', value: this.state.searchString, onChange: this.handleSearch.bind(this) })\n        ),\n        _react3.default.createElement(\n          'card',\n          null,\n          _react3.default.createElement(\n            'form',\n            { onSubmit: this.handleSubmit.bind(this) },\n            this.state.displayFullInput ? _react3.default.createElement(\n              'span',\n              null,\n              _react3.default.createElement('input', { type: 'text', name: 'title', id: 'title', value: this.state.title, placeholder: 'Title...', onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, placeholder: 'Insert your link here', onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement('textarea', { name: 'description', id: 'description', value: this.state.description, placeholder: 'Description...', onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit' },\n                'Create'\n              )\n            ) : _react3.default.createElement(\n              'span',\n              null,\n              _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, placeholder: 'Insert your link here', onChange: this.handleChange.bind(this), autoFocus: true }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit' },\n                'Next'\n              )\n            )\n          )\n        ),\n        filteredLinks.map(function (link, i) {\n          return _react3.default.createElement(\n            'card',\n            { key: link._id },\n            link._id === _this5.state.updateId ? _react3.default.createElement(\n              'form',\n              { onSubmit: _this5.handleSaveUpdate.bind(_this5) },\n              _react3.default.createElement('input', { type: 'text', name: 'updateTitle', placeholder: 'Title', id: 'updateTitle', value: _this5.state.updateTitle, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement('input', { type: 'text', name: 'updateLink', placeholder: 'Link', id: 'updateLink', value: _this5.state.updateLink, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement('textarea', { name: 'updateDescription', placeholder: 'Description', id: 'updateDescription', value: _this5.state.updateDescription, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit', value: _this5.state.updateId },\n                'Save'\n              )\n            ) : _react3.default.createElement(\n              'div',\n              null,\n              _react3.default.createElement(\n                'h5',\n                { className: 'cardTitle' },\n                link.title\n              ),\n              _react3.default.createElement(\n                'a',\n                { href: link.link, className: 'cardLink', target: '_blank' },\n                _react3.default.createElement(\n                  'p',\n                  null,\n                  link.link\n                )\n              ),\n              _react3.default.createElement(\n                'p',\n                { className: 'cardDescription' },\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this5.handleUpdate(link, i);\n                  } },\n                'Update ',\n                _react3.default.createElement('i', { className: 'fa fa-pencil-square-o', 'aria-hidden': 'true' })\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this5.handleDelete(link._id, i);\n                  } },\n                ' Delete ',\n                _react3.default.createElement('i', { className: 'fa fa-trash-o', 'aria-hidden': 'true' })\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Links);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpbmtzLmpzPzRmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0hlbG1ldH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IEZ1c2UgZnJvbSAnZnVzZS5qcyc7XG5pbXBvcnQgeyBzY3JhcFNpdGUsIHN1Ym1pdENyZWF0ZUxpbmssIGRlbGV0ZUxpbmssIHVwZGF0ZUxpbmsgfSBmcm9tICcuLi9hY3Rpb25zL2xpbmtzJztcbmltcG9ydCBNZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzJztcblxuY2xhc3MgTGlua3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluazogJycsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBkaXNwbGF5RnVsbElucHV0OiBmYWxzZSxcbiAgICAgIGxpbmtzOiBbXSxcbiAgICAgIHVwZGF0ZUlkOiAnJyxcbiAgICAgIHVwZGF0ZUxpbms6ICcnLFxuICAgICAgdXBkYXRlVGl0bGU6ICcnLFxuICAgICAgdXBkYXRlRGVzY3JpcHRpb246ICcnLFxuICAgICAgc2VhcmNoU3RyaW5nOiAnJyxcbiAgICAgIHNlYXJjaFJlc3VsdHM6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVNjcmFwcGVyID0gdGhpcy5oYW5kbGVTY3JhcHBlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldExpbmtzID0gdGhpcy5nZXRMaW5rcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVXBkYXRlID0gdGhpcy5oYW5kbGVVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlU2NyYXBwZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoKCcvYXBpL3NjcmFwcGVyP3NpdGU9JyArIHRoaXMuc3RhdGUubGluaylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXJEYXRhID0gZGF0YS5saW5rcztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbGluazogZGF0YS5zaXRlLmxpbmssXG4gICAgICAgICAgdGl0bGU6IGRhdGEuc2l0ZS50aXRsZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5zaXRlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGRpc3BsYXlGdWxsSW5wdXQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih0aGlzLnN0YXRlLmRpc3BsYXlGdWxsSW5wdXQpe1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5saW5rLCB0aGlzLnN0YXRlLnRpdGxlLCB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uKVxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzdWJtaXRDcmVhdGVMaW5rKHRoaXMuc3RhdGUubGluaywgdGhpcy5zdGF0ZS50aXRsZSwgdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbikpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpbms6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgZGlzcGxheUZ1bGxJbnB1dDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0TGlua3MoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZVNjcmFwcGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEZWxldGUoaWQsIGluZGV4KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgbGlua3M6IHByZXZTdGF0ZS5saW5rcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KVxuICAgIH0pKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGRlbGV0ZUxpbmsoaWQsJycpKTtcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZShsaW5rLCBpbmRleCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXBkYXRlSW5kZXg6IGluZGV4LFxuICAgICAgdXBkYXRlSWQ6IGxpbmsuX2lkLFxuICAgICAgdXBkYXRlTGluazogbGluay5saW5rLFxuICAgICAgdXBkYXRlVGl0bGU6IGxpbmsudGl0bGUsXG4gICAgICB1cGRhdGVEZXNjcmlwdGlvbjogbGluay5kZXNjcmlwdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNhdmVVcGRhdGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlTGluayhcbiAgICAgIHRoaXMuc3RhdGUudXBkYXRlSWQsXG4gICAgICB0aGlzLnN0YXRlLnVwZGF0ZUxpbmssXG4gICAgICB0aGlzLnN0YXRlLnVwZGF0ZVRpdGxlLFxuICAgICAgdGhpcy5zdGF0ZS51cGRhdGVEZXNjcmlwdGlvbixcbiAgICApKTtcblxuICAgIGxldCBzdGF0ZUNvcHkgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKTtcbiAgICBzdGF0ZUNvcHkubGlua3NbdGhpcy5zdGF0ZS51cGRhdGVJbmRleF0ubGluayA9IHRoaXMuc3RhdGUudXBkYXRlTGluaztcbiAgICBzdGF0ZUNvcHkubGlua3NbdGhpcy5zdGF0ZS51cGRhdGVJbmRleF0udGl0bGUgPSB0aGlzLnN0YXRlLnVwZGF0ZVRpdGxlO1xuICAgIHN0YXRlQ29weS5saW5rc1t0aGlzLnN0YXRlLnVwZGF0ZUluZGV4XS5kZXNjcmlwdGlvbiA9IHRoaXMuc3RhdGUudXBkYXRlRGVzY3JpcHRpb247XG5cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlQ29weSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVwZGF0ZUluZGV4OiAnJyxcbiAgICAgIHVwZGF0ZUlkOiAnJyxcbiAgICAgIHVwZGF0ZUxpbms6ICcnLFxuICAgICAgdXBkYXRlVGl0bGU6ICcnLFxuICAgICAgdXBkYXRlRGVzY3JpcHRpb246ICcnLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGlua3MoKXtcbiAgICBmZXRjaCgnL2FwaS9saW5rJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXJEYXRhID0gZGF0YS5saW5rcztcbiAgICAgICAgZmlsdGVyRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChiLnRpbWUpIC1wYXJzZUZsb2F0KGEudGltZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsaW5rczpmaWx0ZXJEYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChldmVudCkge1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KVxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgICAgIHRocmVzaG9sZDogMC42LFxuICAgICAgbG9jYXRpb246IDAsXG4gICAgICBkaXN0YW5jZTogMTAwLFxuICAgICAgbWF4UGF0dGVybkxlbmd0aDogMzAsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IDEsXG4gICAgICBrZXlzOiBbXG4gICAgICAgIFwidGl0bGVcIixcbiAgICAgICAgXCJ1cmxcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiXG4gICAgICBdXG4gICAgfTtcbiAgICB2YXIgZnVzZSA9IG5ldyBGdXNlKHRoaXMuc3RhdGUubGlua3MsIG9wdGlvbnMpO1xuICAgIHZhciBzZWFyY2hSZXN1bHRzID0gZnVzZS5zZWFyY2godGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmcpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoUmVzdWx0czogc2VhcmNoUmVzdWx0c1xuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldExpbmtzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGZpbHRlcmVkTGlua3MgPSB0aGlzLnN0YXRlLmxpbmtzO1xuICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nLmxlbmd0aCA+IDEpe1xuICAgICAgZmlsdGVyZWRMaW5rcyA9IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cztcbiAgICB9XG4gICAgcmV0dXJuIChcblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDx0aXRsZT5TdG9yZSB5b3VyIGZhdm9yaXRlIGxpbmtzIHdpdGggTGluayBLZWVwZXI8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJGcmVlIHNlcnZpY2UgZm9yIG9ubGluZSBzdG9yYWdlIG9mIGxpbmtzXCIgLz5cbiAgICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgICAgPGNhcmQ+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFN0cmluZ1wiIGlkPVwic2VhcmNoU3RyaW5nXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfS8+XG4gICAgICAgIDwvY2FyZD5cblxuICAgICAgICA8Y2FyZD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5RnVsbElucHV0ID8gKFxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IHBsYWNlaG9sZGVyPVwiVGl0bGUuLi5cIm9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsaW5rXCIgaWQ9XCJsaW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUubGlua30gcGxhY2Vob2xkZXI9XCJJbnNlcnQgeW91ciBsaW5rIGhlcmVcIm9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gYXV0b0ZvY3VzLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpbmtcIiBpZD1cImxpbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS5saW5rfSBwbGFjZWhvbGRlcj1cIkluc2VydCB5b3VyIGxpbmsgaGVyZVwib25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IGF1dG9Gb2N1cy8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9jYXJkPlxuXG4gICAgICAgIHtmaWx0ZXJlZExpbmtzLm1hcCgobGluaywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Y2FyZCBrZXk9e2xpbmsuX2lkfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBsaW5rLl9pZCA9PT0gdGhpcy5zdGF0ZS51cGRhdGVJZCA/XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNhdmVVcGRhdGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVwZGF0ZVRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGlkPVwidXBkYXRlVGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVUaXRsZX0gIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVwZGF0ZUxpbmtcIiBwbGFjZWhvbGRlcj1cIkxpbmtcIiBpZD1cInVwZGF0ZUxpbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVMaW5rfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidXBkYXRlRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgaWQ9XCJ1cGRhdGVEZXNjcmlwdGlvblwiIHZhbHVlPXt0aGlzLnN0YXRlLnVwZGF0ZURlc2NyaXB0aW9ufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVJZH0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmRUaXRsZVwiPntsaW5rLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmxpbmt9IGNsYXNzTmFtZT1cImNhcmRMaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PHA+e2xpbmsubGlua308L3A+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZERlc2NyaXB0aW9uXCI+e2xpbmsuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVVcGRhdGUobGluaywgaSl9PlVwZGF0ZSA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZURlbGV0ZShsaW5rLl9pZCwgaSl9PiBEZWxldGUgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9jYXJkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMaW5rcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvTGlua3MuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFvQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBVEE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFWQTtBQW9CQTtBQWxEQTtBQXFEQTs7OztBQXROQTtBQUNBO0FBd05BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})