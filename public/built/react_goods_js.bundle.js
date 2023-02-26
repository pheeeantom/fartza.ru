"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["react_goods_js"],{

/***/ "./react/goods.js":
/*!************************!*\
  !*** ./react/goods.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductWrapper, _React$Component);
  var _super = _createSuper(ProductWrapper);
  function ProductWrapper(props) {
    var _this;
    _classCallCheck(this, ProductWrapper);
    _this = _super.call(this, props);
    _this.state = {
      goods: 0
    };
    _this.getGoods = _this.getGoods.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ProductWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(1000);
      this.getGoods();
    }
  }, {
    key: "getGoods",
    value: function getGoods() {
      var _this2 = this;
      /*const data = new FormData();
      data.append('command', 'getGoods');
      data.append('since', 0);*/
      fetch('/api', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          command: 'getGoodsById',
          id: window.location.href.match("goods/(.+)#?")[1]
        })
      }).then(function (response) {
        response.json().then(function (body) {
          _this2.setState({
            goods: body.goods[0]
          });
          //console.log(this.state.goods);
        });
      });
      //console.log(10);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.goods[0]) {
        return null;
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          "class": "mb-3 mt-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
          id: "goods-min"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Product, {
          id: this.state.goods[0].id,
          name: this.state.goods[0].name,
          img: this.state.goods[0].photos,
          price: this.state.goods[0].price,
          createdAt: this.state.goods[0].created_at,
          desc: this.state.goods[0].description,
          views: this.state.goods[0].views
        })));
      }
    }
  }]);
  return ProductWrapper;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Product = /*#__PURE__*/function (_React$Component2) {
  _inherits(Product, _React$Component2);
  var _super2 = _createSuper(Product);
  function Product(props) {
    _classCallCheck(this, Product);
    return _super2.call(this, props);
  }
  _createClass(Product, [{
    key: "render",
    value: function render() {
      //console.log(this.props.id);
      var date = new Date(this.props.createdAt);
      var dateStr = date.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      });
      var butImg = [];
      for (var i = 0; i < this.props.img.length; i++) {
        if (i == 0) butImg.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          type: "button",
          "data-bs-target": "#carouselGoodsIndicators" + this.props.id,
          "data-bs-slide-to": i,
          className: "active",
          "aria-current": "true",
          "aria-label": "Slide " + i
        }));else butImg.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          type: "button",
          "data-bs-target": "#carouselGoodsIndicators" + this.props.id,
          "data-bs-slide-to": i,
          "aria-label": "Slide " + i
        }));
      }
      var img = [];
      for (var _i = 0; _i < this.props.img.length; _i++) {
        if (_i == 0) img.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "carousel-item active"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          className: "d-block w-100",
          src: "/goods_photos/" + this.props.img[_i],
          alt: "Slide " + _i
        })));else img.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "carousel-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          className: "d-block w-100",
          src: "/goods_photos/" + this.props.img[_i],
          alt: "Slide " + _i
        })));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-md-1 col-lg-2",
        style: {
          "float": 'left'
        }
      }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-xs-12 col-sm-12 col-md-10 col-lg-8",
        style: {
          "float": 'left'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "my-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "carouselGoodsIndicators" + this.props.id,
        "data-bs-interval": "false",
        className: "carousel slide col-xs-12 col-sm-12 col-md-6 col-lg-6",
        "data-bs-ride": "carousel",
        style: {
          "float": 'left'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "carousel-indicators"
      }, butImg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "carousel-inner"
      }, img), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "carousel-control-prev",
        type: "button",
        "data-bs-target": "#carouselGoodsIndicators" + this.props.id,
        "data-bs-slide": "prev"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "carousel-control-prev-icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "visually-hidden"
      }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "carousel-control-next",
        type: "button",
        "data-bs-target": "#carouselGoodsIndicators" + this.props.id,
        "data-bs-slide": "next"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "carousel-control-next-icon",
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "visually-hidden"
      }, "Next"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "card-body col-xs-12 col-sm-12 col-md-6 col-lg-6",
        style: {
          "float": 'left'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
        className: "card-title"
      }, this.props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "card-text"
      }, this.props.desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "card-text"
      }, this.props.price + "₽"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "card-text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
        className: "text-muted"
      }, dateStr)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "card-text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
        className: "text-muted"
      }, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u044B: ", this.props.views))))));
    }
  }]);
  return Product;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/*class SearchGoods extends React.Component {
	constructor(props) {
		super(props);
	}

	goToIndex(event) {
		window.open('/?search=true&query=' + document.getElementById("search").value);
	}

	render() {
		return (
			<div style={{textAlign: 'center', marginBottom: '25px'}}>
				<input type="text" class="form-control" id="search" style={{display: 'inline', width: '60vw', marginRight: '10px'}}/>
				<button type="button" class="btn btn-primary" onClick={this.goToIndex} style={{display: 'inline'}}>Найти!</button>
			</div>
		);
	}
}*/
/*ReactDOM.render(
  <ProductWrapper />,
  document.getElementById('goods-min')
);

ReactDOM.render(
  <SearchGoods />,
  document.getElementById('search-wrapper')
);*/

/***/ })

}]);
//# sourceMappingURL=react_goods_js.bundle.js.map