webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _fuse = __webpack_require__(346);\n\nvar _fuse2 = _interopRequireDefault(_fuse);\n\nvar _links = __webpack_require__(307);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Links: {\n    displayName: 'Links'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Links = _wrapComponent('Links')(function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      link: '',\n      title: '',\n      description: '',\n      displayFullInput: false,\n      links: [],\n      updateId: '',\n      updateLink: '',\n      updateTitle: '',\n      updateDescription: '',\n      searchString: '',\n      searchResults: ''\n    };\n    _this.handleScrapper = _this.handleScrapper.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    _this.getLinks = _this.getLinks.bind(_this);\n    _this.handleUpdate = _this.handleUpdate.bind(_this);\n    _this.handleSearch = _this.handleSearch.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleScrapper',\n    value: function handleScrapper(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n      fetch('/api/scrapper?site=' + this.state.link).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var filterData = data.links;\n        _this2.setState({\n          link: data.site.link,\n          title: data.site.title,\n          description: data.site.description,\n          displayFullInput: true\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      var _this3 = this;\n\n      event.preventDefault();\n      if (this.state.displayFullInput) {\n        this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n        this.setState({\n          link: '',\n          title: '',\n          description: '',\n          displayFullInput: false\n        });\n        setTimeout(function () {\n          _this3.getLinks();\n        }, 1000);\n      } else {\n        this.handleScrapper(event);\n      }\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(id, index) {\n      this.setState(function (prevState) {\n        return {\n          links: prevState.links.filter(function (_, i) {\n            return i !== index;\n          })\n        };\n      });\n      this.props.dispatch((0, _links.deleteLink)(id, ''));\n    }\n  }, {\n    key: 'handleUpdate',\n    value: function handleUpdate(link, index) {\n      this.setState({\n        updateIndex: index,\n        updateId: link._id,\n        updateLink: link.link,\n        updateTitle: link.title,\n        updateDescription: link.description\n      });\n    }\n  }, {\n    key: 'handleSaveUpdate',\n    value: function handleSaveUpdate(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.updateLink)(this.state.updateId, this.state.updateLink, this.state.updateTitle, this.state.updateDescription));\n\n      var stateCopy = Object.assign({}, this.state);\n      stateCopy.links[this.state.updateIndex].link = this.state.updateLink;\n      stateCopy.links[this.state.updateIndex].title = this.state.updateTitle;\n      stateCopy.links[this.state.updateIndex].description = this.state.updateDescription;\n\n      this.setState(stateCopy);\n\n      this.setState({\n        updateIndex: '',\n        updateId: '',\n        updateLink: '',\n        updateTitle: '',\n        updateDescription: ''\n      });\n    }\n  }, {\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this4 = this;\n\n      fetch('/api/link').then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var filterData = data.links;\n        filterData.sort(function (a, b) {\n          return parseFloat(b.time) - parseFloat(a.time);\n        });\n        _this4.setState({\n          links: filterData\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'handleSearch',\n    value: function handleSearch(event) {\n      this.handleChange(event);\n      var options = {\n        shouldSort: true,\n        threshold: 0.6,\n        location: 0,\n        distance: 100,\n        maxPatternLength: 30,\n        minMatchCharLength: 1,\n        keys: [\"title\", \"url\", \"description\"]\n      };\n      var fuse = new _fuse2.default(this.state.links, options);\n      var searchResults = fuse.search(this.state.searchString);\n      this.setState({\n        searchResults: searchResults\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getLinks();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this5 = this;\n\n      var filteredLinks = this.state.links;\n      if (this.state.searchString.length > 1) {\n        filteredLinks = this.state.searchResults;\n      }\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Create link'\n        ),\n        _react3.default.createElement(\n          'form',\n          { onSubmit: this.handleSubmit.bind(this) },\n          _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, placeholder: 'Url...', onChange: this.handleChange.bind(this), autoFocus: true }),\n          this.state.displayFullInput ? _react3.default.createElement(\n            'span',\n            null,\n            _react3.default.createElement('input', { type: 'text', name: 'title', id: 'title', value: this.state.title, placeholder: 'Title...', onChange: this.handleChange.bind(this), autoFocus: true }),\n            _react3.default.createElement('textarea', { name: 'description', id: 'description', value: this.state.description, placeholder: 'Description...', onChange: this.handleChange.bind(this), autoFocus: true })\n          ) : _react3.default.createElement('span', null),\n          _react3.default.createElement(\n            'button',\n            { type: 'submit' },\n            'Send'\n          )\n        ),\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Search'\n        ),\n        _react3.default.createElement('input', { type: 'text', name: 'searchString', id: 'searchString', placeholder: 'Search...', value: this.state.searchString, onChange: this.handleSearch.bind(this) }),\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Links'\n        ),\n        filteredLinks.map(function (link, i) {\n          return _react3.default.createElement(\n            'card',\n            { key: link._id },\n            link._id === _this5.state.updateId ? _react3.default.createElement(\n              'form',\n              { onSubmit: _this5.handleSaveUpdate.bind(_this5) },\n              _react3.default.createElement('input', { type: 'text', name: 'updateTitle', placeholder: 'Title', id: 'updateTitle', value: _this5.state.updateTitle, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement('input', { type: 'text', name: 'updateLink', placeholder: 'Link', id: 'updateLink', value: _this5.state.updateLink, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement('textarea', { name: 'updateDescription', placeholder: 'Description', id: 'updateDescription', value: _this5.state.updateDescription, onChange: _this5.handleChange.bind(_this5) }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit', value: _this5.state.updateId },\n                'Save'\n              )\n            ) : _react3.default.createElement(\n              'div',\n              null,\n              _react3.default.createElement(\n                'h5',\n                { className: 'cardTitle' },\n                link.title\n              ),\n              _react3.default.createElement(\n                'a',\n                { href: link.link, className: 'cardLink', target: '_blank' },\n                _react3.default.createElement(\n                  'p',\n                  null,\n                  link.link\n                )\n              ),\n              _react3.default.createElement(\n                'p',\n                { className: 'cardDescription' },\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this5.handleUpdate(link, i);\n                  } },\n                _react3.default.createElement('i', { className: 'fa fa-pencil-square-o', 'aria-hidden': 'true' })\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this5.handleDelete(link._id, i);\n                  } },\n                _react3.default.createElement('i', { className: 'fa fa-trash-o', 'aria-hidden': 'true' })\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Links);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpbmtzLmpzPzRmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xuaW1wb3J0IHsgc2NyYXBTaXRlLCBzdWJtaXRDcmVhdGVMaW5rLCBkZWxldGVMaW5rLCB1cGRhdGVMaW5rIH0gZnJvbSAnLi4vYWN0aW9ucy9saW5rcyc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcyc7XG5cbmNsYXNzIExpbmtzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbms6ICcnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgZGlzcGxheUZ1bGxJbnB1dDogZmFsc2UsXG4gICAgICBsaW5rczogW10sXG4gICAgICB1cGRhdGVJZDogJycsXG4gICAgICB1cGRhdGVMaW5rOiAnJyxcbiAgICAgIHVwZGF0ZVRpdGxlOiAnJyxcbiAgICAgIHVwZGF0ZURlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHNlYXJjaFN0cmluZzogJycsXG4gICAgICBzZWFyY2hSZXN1bHRzOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTY3JhcHBlciA9IHRoaXMuaGFuZGxlU2NyYXBwZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRMaW5rcyA9IHRoaXMuZ2V0TGlua3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVVwZGF0ZSA9IHRoaXMuaGFuZGxlVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2ggPSB0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVNjcmFwcGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaCgnL2FwaS9zY3JhcHBlcj9zaXRlPScgKyB0aGlzLnN0YXRlLmxpbmspXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgZmlsdGVyRGF0YSA9IGRhdGEubGlua3M7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxpbms6IGRhdGEuc2l0ZS5saW5rLFxuICAgICAgICAgIHRpdGxlOiBkYXRhLnNpdGUudGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuc2l0ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICBkaXNwbGF5RnVsbElucHV0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYodGhpcy5zdGF0ZS5kaXNwbGF5RnVsbElucHV0KXtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc3VibWl0Q3JlYXRlTGluayh0aGlzLnN0YXRlLmxpbmssIHRoaXMuc3RhdGUudGl0bGUsIHRoaXMuc3RhdGUuZGVzY3JpcHRpb24pKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaW5rOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGRpc3BsYXlGdWxsSW5wdXQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmdldExpbmtzKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVTY3JhcHBlcihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGVsZXRlKGlkLCBpbmRleCkge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIGxpbmtzOiBwcmV2U3RhdGUubGlua3MuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleClcbiAgICB9KSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChkZWxldGVMaW5rKGlkLCcnKSk7XG4gIH1cblxuICBoYW5kbGVVcGRhdGUobGluaywgaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVwZGF0ZUluZGV4OiBpbmRleCxcbiAgICAgIHVwZGF0ZUlkOiBsaW5rLl9pZCxcbiAgICAgIHVwZGF0ZUxpbms6IGxpbmsubGluayxcbiAgICAgIHVwZGF0ZVRpdGxlOiBsaW5rLnRpdGxlLFxuICAgICAgdXBkYXRlRGVzY3JpcHRpb246IGxpbmsuZGVzY3JpcHRpb24sXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTYXZlVXBkYXRlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUxpbmsoXG4gICAgICB0aGlzLnN0YXRlLnVwZGF0ZUlkLFxuICAgICAgdGhpcy5zdGF0ZS51cGRhdGVMaW5rLFxuICAgICAgdGhpcy5zdGF0ZS51cGRhdGVUaXRsZSxcbiAgICAgIHRoaXMuc3RhdGUudXBkYXRlRGVzY3JpcHRpb24sXG4gICAgKSk7XG5cbiAgICBsZXQgc3RhdGVDb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG4gICAgc3RhdGVDb3B5LmxpbmtzW3RoaXMuc3RhdGUudXBkYXRlSW5kZXhdLmxpbmsgPSB0aGlzLnN0YXRlLnVwZGF0ZUxpbms7XG4gICAgc3RhdGVDb3B5LmxpbmtzW3RoaXMuc3RhdGUudXBkYXRlSW5kZXhdLnRpdGxlID0gdGhpcy5zdGF0ZS51cGRhdGVUaXRsZTtcbiAgICBzdGF0ZUNvcHkubGlua3NbdGhpcy5zdGF0ZS51cGRhdGVJbmRleF0uZGVzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnVwZGF0ZURlc2NyaXB0aW9uO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZUNvcHkpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1cGRhdGVJbmRleDogJycsXG4gICAgICB1cGRhdGVJZDogJycsXG4gICAgICB1cGRhdGVMaW5rOiAnJyxcbiAgICAgIHVwZGF0ZVRpdGxlOiAnJyxcbiAgICAgIHVwZGF0ZURlc2NyaXB0aW9uOiAnJyxcbiAgICB9KTtcbiAgfVxuXG4gIGdldExpbmtzKCl7XG4gICAgZmV0Y2goJy9hcGkvbGluaycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgZmlsdGVyRGF0YSA9IGRhdGEubGlua3M7XG4gICAgICAgIGZpbHRlckRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoYi50aW1lKSAtcGFyc2VGbG9hdChhLnRpbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbGlua3M6ZmlsdGVyRGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShldmVudClcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZFNvcnQ6IHRydWUsXG4gICAgICB0aHJlc2hvbGQ6IDAuNixcbiAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgIG1heFBhdHRlcm5MZW5ndGg6IDMwLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAgICAga2V5czogW1xuICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgIFwidXJsXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIlxuICAgICAgXVxuICAgIH07XG4gICAgdmFyIGZ1c2UgPSBuZXcgRnVzZSh0aGlzLnN0YXRlLmxpbmtzLCBvcHRpb25zKTtcbiAgICB2YXIgc2VhcmNoUmVzdWx0cyA9IGZ1c2Uuc2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFJlc3VsdHM6IHNlYXJjaFJlc3VsdHNcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRMaW5rcygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBmaWx0ZXJlZExpbmtzID0gdGhpcy5zdGF0ZS5saW5rcztcbiAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFN0cmluZy5sZW5ndGggPiAxKXtcbiAgICAgIGZpbHRlcmVkTGlua3MgPSB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHM7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDM+Q3JlYXRlIGxpbms8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpbmtcIiBpZD1cImxpbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS5saW5rfSBwbGFjZWhvbGRlcj1cIlVybC4uLlwib25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IGF1dG9Gb2N1cy8+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheUZ1bGxJbnB1dCA/IChcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgdmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9IHBsYWNlaG9sZGVyPVwiVGl0bGUuLi5cIm9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgaWQ9XCJkZXNjcmlwdGlvblwiIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IGF1dG9Gb2N1cy8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzcGFuLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgICAgPGgzPlNlYXJjaDwvaDM+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hTdHJpbmdcIiBpZD1cInNlYXJjaFN0cmluZ1wiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoU3RyaW5nfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0vPlxuXG5cbiAgICAgICAgPGgzPkxpbmtzPC9oMz5cbiAgICAgICAge2ZpbHRlcmVkTGlua3MubWFwKChsaW5rLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxjYXJkIGtleT17bGluay5faWR9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGxpbmsuX2lkID09PSB0aGlzLnN0YXRlLnVwZGF0ZUlkID9cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2F2ZVVwZGF0ZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXBkYXRlVGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgaWQ9XCJ1cGRhdGVUaXRsZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnVwZGF0ZVRpdGxlfSAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXBkYXRlTGlua1wiIHBsYWNlaG9sZGVyPVwiTGlua1wiIGlkPVwidXBkYXRlTGlua1wiIHZhbHVlPXt0aGlzLnN0YXRlLnVwZGF0ZUxpbmt9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ1cGRhdGVEZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBpZD1cInVwZGF0ZURlc2NyaXB0aW9uXCIgdmFsdWU9e3RoaXMuc3RhdGUudXBkYXRlRGVzY3JpcHRpb259IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXt0aGlzLnN0YXRlLnVwZGF0ZUlkfT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZFRpdGxlXCI+e2xpbmsudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsubGlua30gY2xhc3NOYW1lPVwiY2FyZExpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj48cD57bGluay5saW5rfTwvcD48L2E+XG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkRGVzY3JpcHRpb25cIj57bGluay5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZVVwZGF0ZShsaW5rLCBpKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVEZWxldGUobGluay5faWQsIGkpfT48aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2NhcmQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExpbmtzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9MaW5rcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBb0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFWQTtBQW9CQTtBQTNDQTtBQThDQTs7OztBQTVNQTtBQUNBO0FBOE1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})