"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["react_nav_js"],{

/***/ "./react/nav.js":
/*!**********************!*\
  !*** ./react/nav.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
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

var links = ["Новые", "Подписки", "Популярные"];
var NavBar = /*#__PURE__*/function (_React$Component) {
  _inherits(NavBar, _React$Component);
  var _super = _createSuper(NavBar);
  function NavBar(props) {
    var _this;
    _classCallCheck(this, NavBar);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "output", function (num) {
      var active = [];
      for (var i = 0; i < links.length; i++) {
        active.push(false);
      }
      active[num] = true;
      _this.setState({
        isActive: active
      });
    });
    _this.output = _this.output.bind(_assertThisInitialized(_this));
    var _active = [true];
    for (var i = 1; i < links.length; i++) {
      _active.push(false);
    }
    _this.state = {
      isActive: _active
    };
    /*let params = new URLSearchParams(new URL(window.location.href).search);
    let sort;
    for(let pair of params.entries()) {
      if (pair[0] == 'sort') {
          sort = pair[1];
      }
    }*/
    /*if (!sort || sort == 'new') {
        var active = [true];
        for (var i = 1; i < links.length; i++) {
          active.push(false);
        }
    }
    else if (sort == 'popular') {
        var active = [];
        for (var i = 0; i < links.length; i++) {
          active.push(false);
        }
        active[2] = true;
    }
    this.state = {isActive: active};*/
    return _this;
  }
  _createClass(NavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //let [searchParams, setSearchParams] = useSearchParams();
      var searchParams = new URLSearchParams(location.search);
      var sort = searchParams.get('sort');
      if (sort == 'popular') {
        var active = [];
        for (var i = 0; i < links.length; i++) {
          active.push(false);
        }
        active[2] = true;
        this.setState({
          isActive: active
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var rows = [];
      for (var i = 0; i < links.length; i++) {
        rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Nav, {
          isActive: this.state.isActive[i],
          name: links[i],
          func: this.output,
          updateGoods: this.props.updateGoods,
          getGoodsFromAPI: this.props.getGoodsFromAPI
        }));
      }
      var tiles;
      if (!this.props.disableTiles) {
        tiles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "d-md-none",
          style: {
            width: '100vw'
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
          className: "nav nav-pills d-block d-sm-block d-md-flex",
          id: "nav"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, rows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogReg, null)))));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
        className: "d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom px-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "/",
        className: "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "fs-4"
      }, "FARTZA")), tiles);
    }
  }]);
  return NavBar;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Nav = /*#__PURE__*/function (_React$Component2) {
  _inherits(Nav, _React$Component2);
  var _super2 = _createSuper(Nav);
  function Nav(props) {
    var _this2;
    _classCallCheck(this, Nav);
    _this2 = _super2.call(this, props);

    // Эта привязка обязательна для работы `this` в колбэке.
    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));
    return _this2;
  }
  _createClass(Nav, [{
    key: "handleClick",
    value: function handleClick() {
      var num;
      for (var i = 0; i < links.length; i++) {
        if (this.props.name == links[i]) {
          num = i;
        }
      }
      this.props.func(num);
      //let [searchParams, setSearchParams] = useSearchParams();
      var searchParams = new URLSearchParams(location.search);
      if (this.props.name == "Популярные") {
        /*const url = new URL(window.location);
        url.searchParams.set('sort', 'popular');
        window.history.pushState({}, '', url);
        window.location.reload();*/
        searchParams.set('sort', 'popular');
        window.history.replaceState({}, '', "".concat(location.pathname, "?").concat(searchParams));
        /*this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'popular' }, '/api', 'POST').then(resolve => {
          if (resolve.body.goods[0].length == 0) {
            this.props.updateGoods('Ничего не найдено!');
            return;
          }
          this.props.updateGoods(resolve.body.goods[0]);
        }).catch(reject => {
          this.props.updateGoods(reject.error);
        });*/
        this.props.getGoodsFromAPI(searchParams.get('query') && searchParams.get('query').length > 1 ? searchParams.get('query') : "", 0, 'popular');
      } else if (this.props.name == "Новые") {
        /*const url = new URL(window.location);
        url.searchParams.set('sort', 'new');
        window.history.pushState({}, '', url);
        window.location.reload();*/
        searchParams.set('sort', 'new');
        window.history.replaceState({}, '', "".concat(location.pathname, "?").concat(searchParams));
        /*this.props.sendAPIRequest({ command: 'searchGoods', word: (searchParams.get('query') && searchParams.get('query').length > 1) ? searchParams.get('query') : "", since: 0, sort: 'new' }, '/api', 'POST').then(resolve => {
          if (resolve.body.goods[0].length == 0) {
            this.props.updateGoods('Ничего не найдено!');
            return;
          }
          this.props.updateGoods(resolve.body.goods[0]);
        }).catch(reject => {
          this.props.updateGoods(reject.error);
        });*/
        this.props.getGoodsFromAPI(searchParams.get('query') && searchParams.get('query').length > 1 ? searchParams.get('query') : "", 0, 'new');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var ariaCurrent = this.props.isActive ? "page" : null;
      var className = 'nav-link';
      if (this.props.isActive) {
        className += ' active';
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "nav-item d-block d-sm-block d-md-inline-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "#",
        className: className,
        "aria-current": ariaCurrent,
        onClick: this.handleClick
      }, this.props.name));
    }
  }]);
  return Nav;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var LogReg = /*#__PURE__*/function (_React$Component3) {
  _inherits(LogReg, _React$Component3);
  var _super3 = _createSuper(LogReg);
  function LogReg(props) {
    var _this3;
    _classCallCheck(this, LogReg);
    _this3 = _super3.call(this, props);
    _this3.state = {
      logout: false,
      confirm: null,
      nick: null
    };
    return _this3;
  }
  _createClass(LogReg, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;
      fetch('/api', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          command: 'isLoggedIn'
        })
      }).then(function (response) {
        response.json().then(function (body) {
          _this4.setState({
            logout: body.logout,
            confirm: body.confirm,
            nick: body.nick
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state);
      if (!this.state.logout) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          className: "nav-item d-block d-sm-block d-md-inline-block px-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          href: "/logreg",
          className: "nav-link",
          id: "logreg"
        }, "\u0412\u0445\u043E\u0434/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "dropdown d-block d-sm-block d-md-inline-block px-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          className: "btn btn-primary dropdown-toggle",
          type: "button",
          id: "dropdownMenuButton",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false"
        }, this.state.nick, " ", this.state.confirm ? "(осуществлен вход)" : "(требуется подтверждение почты)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
          className: "dropdown-menu",
          "aria-labelledby": "dropdownMenuButton"
        }, this.state.confirm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          className: "dropdown-item",
          href: "/goods/create"
        }, "\u041F\u0440\u043E\u0434\u0430\u0442\u044C")) : '', this.state.confirm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          className: "dropdown-item",
          href: "#"
        }, "\u0421\u043E\u0437\u0434\u0430\u043D\u043E")) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          className: "dropdown-item",
          href: "#"
        }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
          className: "dropdown-item",
          href: "/logout"
        }, "\u0412\u044B\u0439\u0442\u0438"))));
      }
    }
  }]);
  return LogReg;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

/***/ })

}]);
//# sourceMappingURL=react_nav_js.bundle.js.map