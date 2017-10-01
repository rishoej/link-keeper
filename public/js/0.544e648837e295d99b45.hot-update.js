webpackHotUpdate(0,{

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(46);\n\nvar _reactSortableHoc = __webpack_require__(512);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  List: {\n    displayName: 'List'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/Desktop/linkia/app/components/List.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/Desktop/linkia/app/components/List.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {\n  return _react3.default.createElement(\n    'span',\n    null,\n    '::'\n  );\n}); // This can be any component you want\n\nvar SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref) {\n  var value = _ref.value;\n\n  return _react3.default.createElement(\n    'li',\n    null,\n    _react3.default.createElement(DragHandle, null),\n    value\n  );\n});\n\nvar SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {\n  var items = _ref2.items;\n\n  return _react3.default.createElement(\n    'ul',\n    null,\n    items.map(function (value, index) {\n      return _react3.default.createElement(SortableItem, { key: 'item-' + index, index: index, value: value });\n    })\n  );\n});\n\nvar List = _wrapComponent('List')(function (_Component) {\n  _inherits(List, _Component);\n\n  function List(props) {\n    _classCallCheck(this, List);\n\n    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));\n\n    _this.state = {\n      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']\n    };\n    _this.onSortEnd = _this.onSortEnd.bind(_this);M;\n    return _this;\n  }\n\n  _createClass(List, [{\n    key: 'onSortEnd',\n    value: function onSortEnd(oldIndex, newIndex) {\n      var items = this.state.items;\n\n      this.setState({\n        items: (0, _reactSortableHoc.arrayMove)(items, oldIndex, newIndex)\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var items = this.state.items;\n\n\n      return _react3.default.createElement(SortableList, { items: items, onSortEnd: this.onSortEnd, useDragHandle: true });\n    }\n  }]);\n\n  return List;\n}(_react2.Component));\n\nexports.default = List;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpc3QuanM/ODM3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7XHJcbiAgU29ydGFibGVDb250YWluZXIsXHJcbiAgU29ydGFibGVFbGVtZW50LFxyXG4gIFNvcnRhYmxlSGFuZGxlLFxyXG4gIGFycmF5TW92ZSxcclxufSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xyXG5cclxuY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKCgpID0+IDxzcGFuPjo6PC9zcGFuPik7IC8vIFRoaXMgY2FuIGJlIGFueSBjb21wb25lbnQgeW91IHdhbnRcclxuXHJcbmNvbnN0IFNvcnRhYmxlSXRlbSA9IFNvcnRhYmxlRWxlbWVudCgoe3ZhbHVlfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGk+XHJcbiAgICAgIDxEcmFnSGFuZGxlIC8+XHJcbiAgICAgIHt2YWx1ZX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigoe2l0ZW1zfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtpdGVtcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxTb3J0YWJsZUl0ZW0ga2V5PXtgaXRlbS0ke2luZGV4fWB9IGluZGV4PXtpbmRleH0gdmFsdWU9e3ZhbHVlfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXRlbXM6IFsnSXRlbSAxJywgJ0l0ZW0gMicsICdJdGVtIDMnLCAnSXRlbSA0JywgJ0l0ZW0gNScsICdJdGVtIDYnXSxcclxuICAgIH07XHJcbiAgICB0aGlzLm9uU29ydEVuZCA9IHRoaXMub25Tb3J0RW5kLmJpbmQodGhpcyk7TVxyXG4gIH1cclxuICBvblNvcnRFbmQob2xkSW5kZXgsIG5ld0luZGV4KXtcclxuICAgIGNvbnN0IHtpdGVtc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGl0ZW1zOiBhcnJheU1vdmUoaXRlbXMsIG9sZEluZGV4LCBuZXdJbmRleCksXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIDxTb3J0YWJsZUxpc3QgaXRlbXM9e2l0ZW1zfSBvblNvcnRFbmQ9e3RoaXMub25Tb3J0RW5kfSB1c2VEcmFnSGFuZGxlPXt0cnVlfSAvPjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL0xpc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFNQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})