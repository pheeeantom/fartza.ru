"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["react_categories_js"],{

/***/ "./react/categories.js":
/*!*****************************!*\
  !*** ./react/categories.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoriesBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var categories = {
  "Статьи": ["Новинки", "Тренды", "Коллаборации"],
  "Одежда": ["Б/У", "Российское", "ХендМейд", "Обувь", "Верх", "Низ", "Головные уборы"]
};
var CategoriesBar = /*#__PURE__*/function (_React$Component) {
  _inherits(CategoriesBar, _React$Component);
  var _super = _createSuper(CategoriesBar);
  function CategoriesBar(props) {
    var _this;
    _classCallCheck(this, CategoriesBar);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "output", function (num) {
      var active = [];
      for (var i = 0; i < Object.keys(categories).length; i++) {
        active.push(false);
      }
      active[num] = !_this.state.isActive[num];
      _this.setState({
        isActive: active
      });
    });
    var _active = [];
    for (var _i = 0; _i < Object.keys(categories).length; _i++) {
      _active.push(false);
    }
    _this.state = {
      isActive: _active
    };
    _this.output = _this.output.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(CategoriesBar, [{
    key: "render",
    value: function render() {
      var rows = [];
      for (var i = 0; i < Object.keys(categories).length; i++) {
        rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Category, {
          isActive: this.state.isActive[i],
          name: Object.keys(categories)[i],
          links: categories[Object.keys(categories)[i]],
          func: this.output
        }));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        "class": "col-xs-12 col-sm-12 col-md-4 col-lg-3 mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        "class": "d-flex flex-column p-3 bg-light"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
        id: "categories"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "dropdown"
      }, rows))));
    }
  }]);
  return CategoriesBar;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Category = /*#__PURE__*/function (_React$Component2) {
  _inherits(Category, _React$Component2);
  var _super2 = _createSuper(Category);
  function Category(props) {
    var _this2;
    _classCallCheck(this, Category);
    _this2 = _super2.call(this, props);
    _defineProperty(_assertThisInitialized(_this2), "output", function (num) {
      var active = [];
      for (var i = 0; i < categories[_this2.props.name].length; i++) {
        active.push(false);
      }
      active[num] = true;
      _this2.setState({
        isActive: active
      });
    });
    var _active2 = [];
    for (var _i2 = 0; _i2 < categories[_this2.props.name].length; _i2++) {
      _active2.push(false);
    }
    _this2.state = {
      isActive: _active2
    };
    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));
    _this2.output = _this2.output.bind(_assertThisInitialized(_this2));
    return _this2;
  }
  _createClass(Category, [{
    key: "getNum",
    value: function getNum() {
      for (var i = 0; i < Object.keys(categories).length; i++) {
        if (this.props.name == Object.keys(categories)[i]) {
          return i;
        }
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var num = this.getNum();
      this.props.func(num);
    }
  }, {
    key: "render",
    value: function render() {
      var display = 'none';
      if (this.props.isActive) {
        display = 'block';
      }
      var rows = [];
      for (var i = 0; i < this.props.links.length; i++) {
        rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Link, {
          isActive: this.state.isActive[i],
          name: this.props.links[i],
          num: i,
          func: this.output
        }));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: this.handleClick,
        className: "btn dropdown-toggle",
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": this.props.isActive
      }, this.props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          display: display
        },
        className: "px-2"
      }, rows));
    }
  }]);
  return Category;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var Link = /*#__PURE__*/function (_React$Component3) {
  _inherits(Link, _React$Component3);
  var _super3 = _createSuper(Link);
  function Link(props) {
    var _this3;
    _classCallCheck(this, Link);
    _this3 = _super3.call(this, props);
    _this3.handleClick = _this3.handleClick.bind(_assertThisInitialized(_this3));
    return _this3;
  }
  _createClass(Link, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.func(this.props.num);
    }
  }, {
    key: "render",
    value: function render() {
      var classLink = "dropdown-item";
      if (this.props.isActive) {
        classLink += " active";
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: classLink,
        href: "#",
        onClick: this.handleClick
      }, this.props.name);
    }
  }]);
  return Link;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/*ReactDOM.render(
  <CategoriesBar />,
  document.getElementById('categories')
);*/

/***/ })

}]);
//# sourceMappingURL=react_categories_js.bundle.js.map