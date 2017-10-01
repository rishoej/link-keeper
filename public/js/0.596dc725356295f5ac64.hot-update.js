webpackHotUpdate(0,{

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(15);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(46);\n\nvar _reactSortableHoc = __webpack_require__(512);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  List: {\n    displayName: 'List'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/Tobias/Desktop/linkia/app/components/List.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/Tobias/Desktop/linkia/app/components/List.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {\n  return _react3.default.createElement(\n    'span',\n    null,\n    '#'\n  );\n}); // This can be any component you want\n\nvar SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref) {\n  var value = _ref.value;\n\n  return _react3.default.createElement(\n    'li',\n    null,\n    _react3.default.createElement(DragHandle, null),\n    value\n  );\n});\n\nvar SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {\n  var items = _ref2.items;\n\n  return _react3.default.createElement(\n    'ul',\n    null,\n    items.map(function (value, index) {\n      return _react3.default.createElement(SortableItem, { key: 'item-' + index, index: index, value: value });\n    })\n  );\n});\n\nvar List = _wrapComponent('List')(function (_Component) {\n  _inherits(List, _Component);\n\n  function List(props) {\n    _classCallCheck(this, List);\n\n    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));\n\n    _this.state = {\n      items: _this.props.items\n    };\n    _this.onSortEnd = _this.onSortEnd.bind(_this);\n    return _this;\n  }\n\n  _createClass(List, [{\n    key: 'onSortEnd',\n    value: function onSortEnd(_ref3) {\n      var oldIndex = _ref3.oldIndex,\n          newIndex = _ref3.newIndex;\n\n      var items = this.state.items;\n\n      this.setState({\n        items: (0, _reactSortableHoc.arrayMove)(items, oldIndex, newIndex)\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var items = this.state.items;\n\n      return _react3.default.createElement(SortableList, { items: items, onSortEnd: this.onSortEnd, useDragHandle: true });\n    }\n  }]);\n\n  return List;\n}(_react2.Component));\n\nexports.default = List;\n\n/*\r\nimport React, {Component} from 'react';\r\nimport {\r\n  SortableContainer,\r\n  SortableElement,\r\n  SortableHandle,\r\n  arrayMove,\r\n} from 'react-sortable-hoc';\r\n\r\nconst DragHandle = SortableHandle(() => <span>::</span>); // This can be any component you want\r\n\r\nconst SortableItem = SortableElement(({value}) => {\r\n  return (\r\n    <li>\r\n      <DragHandle />\r\n      {value}\r\n    </li>\r\n  );\r\n});\r\n\r\nconst SortableList = SortableContainer(({items}) => {\r\n  return (\r\n    <ul>\r\n      {items.map((value, index) => (\r\n        <SortableItem key={`item-${index}`} index={index} value={value} />\r\n      ))}\r\n    </ul>\r\n  );\r\n});\r\n\r\n\r\nexport default class List extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],\r\n    };\r\n    this.onSortEnd = this.onSortEnd.bind(this);\r\n  }\r\n  onSortEnd({oldIndex, newIndex}){\r\n    const {items} = this.state.items;\r\n\r\n    this.setState({\r\n      items: arrayMove(items, oldIndex, newIndex),\r\n    });\r\n  }\r\n  render() {\r\n    const {items} = this.state.items;\r\n    return <SortableList items={items} onSortEnd={this.onSortEnd} useDragHandle={true} />;\r\n  }\r\n}*/\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xpc3QuanM/ODM3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7XHJcbiAgU29ydGFibGVDb250YWluZXIsXHJcbiAgU29ydGFibGVFbGVtZW50LFxyXG4gIFNvcnRhYmxlSGFuZGxlLFxyXG4gIGFycmF5TW92ZSxcclxufSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xyXG5cclxuY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKCgpID0+IDxzcGFuPiM8L3NwYW4+KTsgLy8gVGhpcyBjYW4gYmUgYW55IGNvbXBvbmVudCB5b3Ugd2FudFxyXG5cclxuY29uc3QgU29ydGFibGVJdGVtID0gU29ydGFibGVFbGVtZW50KCh7dmFsdWV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPERyYWdIYW5kbGUgLz5cclxuICAgICAge3ZhbHVlfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59KTtcclxuXHJcbmNvbnN0IFNvcnRhYmxlTGlzdCA9IFNvcnRhYmxlQ29udGFpbmVyKCh7aXRlbXN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bD5cclxuICAgICAge2l0ZW1zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFNvcnRhYmxlSXRlbSBrZXk9e2BpdGVtLSR7aW5kZXh9YH0gaW5kZXg9e2luZGV4fSB2YWx1ZT17dmFsdWV9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpdGVtczogdGhpcy5wcm9wcy5pdGVtcyxcclxuICAgIH07XHJcbiAgICB0aGlzLm9uU29ydEVuZCA9IHRoaXMub25Tb3J0RW5kLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIG9uU29ydEVuZCh7b2xkSW5kZXgsIG5ld0luZGV4fSkge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpdGVtczogYXJyYXlNb3ZlKGl0ZW1zLCBvbGRJbmRleCwgbmV3SW5kZXgpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuXHJcbiAgICByZXR1cm4gPFNvcnRhYmxlTGlzdCBpdGVtcz17aXRlbXN9IG9uU29ydEVuZD17dGhpcy5vblNvcnRFbmR9IHVzZURyYWdIYW5kbGU9e3RydWV9IC8+O1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgU29ydGFibGVDb250YWluZXIsXHJcbiAgU29ydGFibGVFbGVtZW50LFxyXG4gIFNvcnRhYmxlSGFuZGxlLFxyXG4gIGFycmF5TW92ZSxcclxufSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xyXG5cclxuY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKCgpID0+IDxzcGFuPjo6PC9zcGFuPik7IC8vIFRoaXMgY2FuIGJlIGFueSBjb21wb25lbnQgeW91IHdhbnRcclxuXHJcbmNvbnN0IFNvcnRhYmxlSXRlbSA9IFNvcnRhYmxlRWxlbWVudCgoe3ZhbHVlfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGk+XHJcbiAgICAgIDxEcmFnSGFuZGxlIC8+XHJcbiAgICAgIHt2YWx1ZX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBTb3J0YWJsZUxpc3QgPSBTb3J0YWJsZUNvbnRhaW5lcigoe2l0ZW1zfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtpdGVtcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxTb3J0YWJsZUl0ZW0ga2V5PXtgaXRlbS0ke2luZGV4fWB9IGluZGV4PXtpbmRleH0gdmFsdWU9e3ZhbHVlfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGl0ZW1zOiBbJ0l0ZW0gMScsICdJdGVtIDInLCAnSXRlbSAzJywgJ0l0ZW0gNCcsICdJdGVtIDUnLCAnSXRlbSA2J10sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vblNvcnRFbmQgPSB0aGlzLm9uU29ydEVuZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBvblNvcnRFbmQoe29sZEluZGV4LCBuZXdJbmRleH0pe1xyXG4gICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGl0ZW1zOiBhcnJheU1vdmUoaXRlbXMsIG9sZEluZGV4LCBuZXdJbmRleCksXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICByZXR1cm4gPFNvcnRhYmxlTGlzdCBpdGVtcz17aXRlbXN9IG9uU29ydEVuZD17dGhpcy5vblNvcnRFbmR9IHVzZURyYWdIYW5kbGU9e3RydWV9IC8+O1xyXG4gIH1cclxufSovXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9MaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFDQTs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBTUE7QUFDQTs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})