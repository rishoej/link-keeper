webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(18);\n\nvar _fuse = __webpack_require__(346);\n\nvar _fuse2 = _interopRequireDefault(_fuse);\n\nvar _links = __webpack_require__(307);\n\nvar _Messages = __webpack_require__(24);\n\nvar _Messages2 = _interopRequireDefault(_Messages);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Links: {\n    displayName: 'Links'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/desktop/linkia/app/components/Links.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Links = _wrapComponent('Links')(function (_React$Component) {\n  _inherits(Links, _React$Component);\n\n  function Links(props) {\n    _classCallCheck(this, Links);\n\n    var _this = _possibleConstructorReturn(this, (Links.__proto__ || Object.getPrototypeOf(Links)).call(this, props));\n\n    _this.state = {\n      link: '',\n      title: '',\n      description: '',\n      links: [],\n      updateId: '',\n      updateLink: '',\n      updateTitle: '',\n      updateDescription: '',\n      searchString: '',\n      searchResults: ''\n    };\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    _this.getLinks = _this.getLinks.bind(_this);\n    _this.handleUpdate = _this.handleUpdate.bind(_this);\n    _this.handleSearch = _this.handleSearch.bind(_this);\n    return _this;\n  }\n\n  _createClass(Links, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState(_defineProperty({}, event.target.name, event.target.value));\n    }\n  }, {\n    key: 'handleScrapper',\n    value: function handleScrapper(event) {\n      event.preventDefault();\n\n      fetch('/api/scrapper?site=' + site, {\n        method: 'get',\n        headers: { 'Content-Type': 'application/json' }\n      }).then(function (response) {\n        if (response.ok) {\n          console.log(response);\n        }\n      });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n      this.props.dispatch((0, _links.submitCreateLink)(this.state.link, this.state.title, this.state.description));\n      this.setState({\n        link: '',\n        title: '',\n        description: ''\n      });\n      setTimeout(function () {\n        _this2.getLinks();\n      }, 1000);\n    }\n  }, {\n    key: 'handleDelete',\n    value: function handleDelete(id, index) {\n      this.setState(function (prevState) {\n        return {\n          links: prevState.links.filter(function (_, i) {\n            return i !== index;\n          })\n        };\n      });\n      this.props.dispatch((0, _links.deleteLink)(id, ''));\n    }\n  }, {\n    key: 'handleUpdate',\n    value: function handleUpdate(link, index) {\n      this.setState({\n        updateIndex: index,\n        updateId: link._id,\n        updateLink: link.link,\n        updateTitle: link.title,\n        updateDescription: link.description\n      });\n    }\n  }, {\n    key: 'handleSaveUpdate',\n    value: function handleSaveUpdate(event) {\n      event.preventDefault();\n      this.props.dispatch((0, _links.updateLink)(this.state.updateId, this.state.updateLink, this.state.updateTitle, this.state.updateDescription));\n\n      var stateCopy = Object.assign({}, this.state);\n      stateCopy.links[this.state.updateIndex].link = this.state.updateLink;\n      stateCopy.links[this.state.updateIndex].title = this.state.updateTitle;\n      stateCopy.links[this.state.updateIndex].description = this.state.updateDescription;\n\n      this.setState(stateCopy);\n\n      this.setState({\n        updateIndex: '',\n        updateId: '',\n        updateLink: '',\n        updateTitle: '',\n        updateDescription: ''\n      });\n    }\n  }, {\n    key: 'getLinks',\n    value: function getLinks() {\n      var _this3 = this;\n\n      fetch('/api/link').then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        var filterData = data.links;\n        filterData.sort(function (a, b) {\n          return parseFloat(b.time) - parseFloat(a.time);\n        });\n        _this3.setState({\n          links: filterData\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: 'handleSearch',\n    value: function handleSearch(event) {\n      this.handleChange(event);\n      var options = {\n        shouldSort: true,\n        threshold: 0.6,\n        location: 0,\n        distance: 100,\n        maxPatternLength: 30,\n        minMatchCharLength: 1,\n        keys: [\"title\", \"url\", \"description\"]\n      };\n      var fuse = new _fuse2.default(this.state.links, options);\n      var searchResults = fuse.search(this.state.searchString);\n      this.setState({\n        searchResults: searchResults\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getLinks();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      var filteredLinks = this.state.links;\n      if (this.state.searchString.length > 1) {\n        filteredLinks = this.state.searchResults;\n      }\n      return _react3.default.createElement(\n        'div',\n        { className: 'container' },\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Create link'\n        ),\n        _react3.default.createElement(\n          'form',\n          { onSubmit: this.handleScrapper.bind(this) },\n          _react3.default.createElement('input', { type: 'text', name: 'link', id: 'link', value: this.state.link, placeholder: 'Url...', onChange: this.handleChange.bind(this), autoFocus: true }),\n          _react3.default.createElement(\n            'button',\n            { type: 'submit' },\n            'Send'\n          )\n        ),\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Search'\n        ),\n        _react3.default.createElement('input', { type: 'text', name: 'searchString', id: 'searchString', placeholder: 'Search...', value: this.state.searchString, onChange: this.handleSearch.bind(this) }),\n        _react3.default.createElement(\n          'h3',\n          null,\n          'Links'\n        ),\n        filteredLinks.map(function (link, i) {\n          return _react3.default.createElement(\n            'card',\n            { key: link._id },\n            link._id === _this4.state.updateId ? _react3.default.createElement(\n              'form',\n              { onSubmit: _this4.handleSaveUpdate.bind(_this4) },\n              _react3.default.createElement('input', { type: 'text', name: 'updateTitle', placeholder: 'Title', id: 'updateTitle', value: _this4.state.updateTitle, onChange: _this4.handleChange.bind(_this4) }),\n              _react3.default.createElement('input', { type: 'text', name: 'updateLink', placeholder: 'Link', id: 'updateLink', value: _this4.state.updateLink, onChange: _this4.handleChange.bind(_this4) }),\n              _react3.default.createElement('textarea', { name: 'updateDescription', placeholder: 'Description', id: 'updateDescription', value: _this4.state.updateDescription, onChange: _this4.handleChange.bind(_this4) }),\n              _react3.default.createElement(\n                'button',\n                { type: 'submit', value: _this4.state.updateId },\n                'Save'\n              )\n            ) : _react3.default.createElement(\n              'div',\n              null,\n              _react3.default.createElement(\n                'h5',\n                { className: 'cardTitle' },\n                link.title\n              ),\n              _react3.default.createElement(\n                'a',\n                { href: link.link, className: 'cardLink', target: '_blank' },\n                _react3.default.createElement(\n                  'p',\n                  null,\n                  link.link\n                )\n              ),\n              _react3.default.createElement(\n                'p',\n                { className: 'cardDescription' },\n                link.description\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this4.handleUpdate(link, i);\n                  } },\n                _react3.default.createElement('i', { className: 'fa fa-pencil-square-o', 'aria-hidden': 'true' })\n              ),\n              _react3.default.createElement(\n                'button',\n                { onClick: function onClick() {\n                    return _this4.handleDelete(link._id, i);\n                  } },\n                _react3.default.createElement('i', { className: 'fa fa-trash-o', 'aria-hidden': 'true' })\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return Links;\n}(_react3.default.Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    messages: state.messages\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Links);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpbmtzLmpzPzRmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnO1xuaW1wb3J0IHsgc2NyYXBTaXRlLCBzdWJtaXRDcmVhdGVMaW5rLCBkZWxldGVMaW5rLCB1cGRhdGVMaW5rIH0gZnJvbSAnLi4vYWN0aW9ucy9saW5rcyc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcyc7XG5cbmNsYXNzIExpbmtzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbms6ICcnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgbGlua3M6IFtdLFxuICAgICAgdXBkYXRlSWQ6ICcnLFxuICAgICAgdXBkYXRlTGluazogJycsXG4gICAgICB1cGRhdGVUaXRsZTogJycsXG4gICAgICB1cGRhdGVEZXNjcmlwdGlvbjogJycsXG4gICAgICBzZWFyY2hTdHJpbmc6ICcnLFxuICAgICAgc2VhcmNoUmVzdWx0czogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldExpbmtzID0gdGhpcy5nZXRMaW5rcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVXBkYXRlID0gdGhpcy5oYW5kbGVVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlU2NyYXBwZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZmV0Y2goJy9hcGkvc2NyYXBwZXI/c2l0ZT0nICsgc2l0ZSwge1xuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc3VibWl0Q3JlYXRlTGluayh0aGlzLnN0YXRlLmxpbmssIHRoaXMuc3RhdGUudGl0bGUsIHRoaXMuc3RhdGUuZGVzY3JpcHRpb24pKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxpbms6ICcnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5nZXRMaW5rcygpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlKGlkLCBpbmRleCkge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgIGxpbmtzOiBwcmV2U3RhdGUubGlua3MuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleClcbiAgICB9KSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChkZWxldGVMaW5rKGlkLCcnKSk7XG4gIH1cblxuICBoYW5kbGVVcGRhdGUobGluaywgaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVwZGF0ZUluZGV4OiBpbmRleCxcbiAgICAgIHVwZGF0ZUlkOiBsaW5rLl9pZCxcbiAgICAgIHVwZGF0ZUxpbms6IGxpbmsubGluayxcbiAgICAgIHVwZGF0ZVRpdGxlOiBsaW5rLnRpdGxlLFxuICAgICAgdXBkYXRlRGVzY3JpcHRpb246IGxpbmsuZGVzY3JpcHRpb24sXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTYXZlVXBkYXRlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZUxpbmsoXG4gICAgICB0aGlzLnN0YXRlLnVwZGF0ZUlkLFxuICAgICAgdGhpcy5zdGF0ZS51cGRhdGVMaW5rLFxuICAgICAgdGhpcy5zdGF0ZS51cGRhdGVUaXRsZSxcbiAgICAgIHRoaXMuc3RhdGUudXBkYXRlRGVzY3JpcHRpb24sXG4gICAgKSk7XG5cbiAgICBsZXQgc3RhdGVDb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG4gICAgc3RhdGVDb3B5LmxpbmtzW3RoaXMuc3RhdGUudXBkYXRlSW5kZXhdLmxpbmsgPSB0aGlzLnN0YXRlLnVwZGF0ZUxpbms7XG4gICAgc3RhdGVDb3B5LmxpbmtzW3RoaXMuc3RhdGUudXBkYXRlSW5kZXhdLnRpdGxlID0gdGhpcy5zdGF0ZS51cGRhdGVUaXRsZTtcbiAgICBzdGF0ZUNvcHkubGlua3NbdGhpcy5zdGF0ZS51cGRhdGVJbmRleF0uZGVzY3JpcHRpb24gPSB0aGlzLnN0YXRlLnVwZGF0ZURlc2NyaXB0aW9uO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZUNvcHkpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1cGRhdGVJbmRleDogJycsXG4gICAgICB1cGRhdGVJZDogJycsXG4gICAgICB1cGRhdGVMaW5rOiAnJyxcbiAgICAgIHVwZGF0ZVRpdGxlOiAnJyxcbiAgICAgIHVwZGF0ZURlc2NyaXB0aW9uOiAnJyxcbiAgICB9KTtcbiAgfVxuXG4gIGdldExpbmtzKCl7XG4gICAgZmV0Y2goJy9hcGkvbGluaycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgZmlsdGVyRGF0YSA9IGRhdGEubGlua3M7XG4gICAgICAgIGZpbHRlckRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoYi50aW1lKSAtcGFyc2VGbG9hdChhLnRpbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbGlua3M6ZmlsdGVyRGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goZXZlbnQpIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShldmVudClcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHNob3VsZFNvcnQ6IHRydWUsXG4gICAgICB0aHJlc2hvbGQ6IDAuNixcbiAgICAgIGxvY2F0aW9uOiAwLFxuICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgIG1heFBhdHRlcm5MZW5ndGg6IDMwLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAgICAga2V5czogW1xuICAgICAgICBcInRpdGxlXCIsXG4gICAgICAgIFwidXJsXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIlxuICAgICAgXVxuICAgIH07XG4gICAgdmFyIGZ1c2UgPSBuZXcgRnVzZSh0aGlzLnN0YXRlLmxpbmtzLCBvcHRpb25zKTtcbiAgICB2YXIgc2VhcmNoUmVzdWx0cyA9IGZ1c2Uuc2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFJlc3VsdHM6IHNlYXJjaFJlc3VsdHNcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRMaW5rcygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBmaWx0ZXJlZExpbmtzID0gdGhpcy5zdGF0ZS5saW5rcztcbiAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFN0cmluZy5sZW5ndGggPiAxKXtcbiAgICAgIGZpbHRlcmVkTGlua3MgPSB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHM7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDM+Q3JlYXRlIGxpbms8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTY3JhcHBlci5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGlua1wiIGlkPVwibGlua1wiIHZhbHVlPXt0aGlzLnN0YXRlLmxpbmt9IHBsYWNlaG9sZGVyPVwiVXJsLi4uXCJvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gYXV0b0ZvY3VzLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuXG4gICAgICAgIDxoMz5TZWFyY2g8L2gzPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoU3RyaW5nXCIgaWQ9XCJzZWFyY2hTdHJpbmdcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFN0cmluZ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9Lz5cblxuXG4gICAgICAgIDxoMz5MaW5rczwvaDM+XG4gICAgICAgIHtmaWx0ZXJlZExpbmtzLm1hcCgobGluaywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Y2FyZCBrZXk9e2xpbmsuX2lkfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBsaW5rLl9pZCA9PT0gdGhpcy5zdGF0ZS51cGRhdGVJZCA/XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNhdmVVcGRhdGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVwZGF0ZVRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGlkPVwidXBkYXRlVGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVUaXRsZX0gIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVwZGF0ZUxpbmtcIiBwbGFjZWhvbGRlcj1cIkxpbmtcIiBpZD1cInVwZGF0ZUxpbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVMaW5rfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidXBkYXRlRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgaWQ9XCJ1cGRhdGVEZXNjcmlwdGlvblwiIHZhbHVlPXt0aGlzLnN0YXRlLnVwZGF0ZURlc2NyaXB0aW9ufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGRhdGVJZH0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmRUaXRsZVwiPntsaW5rLnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmxpbmt9IGNsYXNzTmFtZT1cImNhcmRMaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PHA+e2xpbmsubGlua308L3A+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZERlc2NyaXB0aW9uXCI+e2xpbmsuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVVcGRhdGUobGluaywgaSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnRoaXMuaGFuZGxlRGVsZXRlKGxpbmsuX2lkLCBpKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9jYXJkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXNcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMaW5rcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvTGlua3MuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBa0JBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVZBO0FBb0JBO0FBbkNBO0FBc0NBOzs7O0FBdExBO0FBQ0E7QUF3TEE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})