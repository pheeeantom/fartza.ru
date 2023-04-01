"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["react_search_js"],{

/***/ "./react/search.js":
/*!*************************!*\
  !*** ./react/search.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducers/goods_slice */ "./store/reducers/goods_slice.js");
/* harmony import */ var _store_services_goods_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/services/goods_service */ "./store/services/goods_service.js");
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




var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);
  var _super = _createSuper(Search);
  function Search(props) {
    var _this;
    _classCallCheck(this, Search);
    _this = _super.call(this, props);
    _this.getGoods = _this.getGoods.bind(_assertThisInitialized(_this));
    _this.getGoodsURL = _this.getGoodsURL.bind(_assertThisInitialized(_this));
    _this.getGoodsEnter = _this.getGoodsEnter.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var searchParams = new URLSearchParams(location.search);
      if (searchParams.get('query') && searchParams.get('query').length > 1) {
        /*let params = new URLSearchParams(new URL(window.location.href).search);
        let query;
        let sort;
        for(let pair of params.entries()) {
        if (pair[0] == 'query') {
        query = pair[1];
        }
        else if (pair[0] == 'sort') {
        sort = pair[1];
        }
        }*/
        var _searchParams = new URLSearchParams(location.search);
        var query = _searchParams.get('query');
        //let sort = searchParams.get('sort');
        document.getElementById("search").value = query;
        //this.getGoodsURL(query, 0, sort);
      }
    }
  }, {
    key: "getGoodsURL",
    value: function getGoodsURL(query, since, sort) {
      var _sort;
      /*fetch('/api', {
      	method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ command: 'searchGoods', word: query, since: since, sort: sort })
      }).then(response => {
      	response.json().then(body => {
      		this.props.updateGoods(body.goods[0]);
      	});
      });*/
      /*this.props.sendAPIRequest({ command: 'searchGoods', word: query, since: since, sort: sort }, '/api', 'POST').then(resolve => {
      	if (resolve.body.goods[0].length == 0) {
      		this.props.updateGoods('Ничего не найдено!');
      		return;
      	}
      	this.props.updateGoods(resolve.body.goods[0]);
      }).catch(reject => {
      	this.props.updateGoods(reject.error);
      });*/
      sort = (_sort = sort) !== null && _sort !== void 0 ? _sort : 'new';
      this.props.fetchAllGoods({
        word: query,
        since: since,
        sort: sort
      });
      this.props.setLastArgs({
        word: query,
        since: since,
        sort: sort
      });
    }

    /*getGoods(event) {
    	fetch('/api', {
    		method: 'POST',
    	    headers: {
    	      'Accept': 'application/json',
    	      'Content-Type': 'application/json'
    	    },
    	    body: JSON.stringify({ command: 'searchGoods', word: document.getElementById("search").value, since: 0 })
    	}).then(response => {
    		response.json().then(body => {
    			emitter.emit("CHANGE", body.goods[0]);
    		});
    	});
    }*/
  }, {
    key: "getGoods",
    value: function getGoods(event) {
      /*const url = new URL(window.location);
      url.searchParams.set('search', 'true');
      url.searchParams.set('query', document.getElementById("search").value);
            url.pathname = "/";
      window.history.pushState({}, '', url);*/
      if (document.getElementById("search").value.length > 1) {
        var searchParams = new URLSearchParams(location.search);
        searchParams.set('query', document.getElementById("search").value);
        window.history.replaceState({}, '', "".concat(location.pathname, "?").concat(searchParams));
        //window.location.reload();
        /*let params = new URLSearchParams(new URL(window.location.href).search);
        let sort;
        for(let pair of params.entries()) {
        	if (pair[0] == 'sort') {
        		sort = pair[1];
        	}
        }*/
        var sort = searchParams.get('sort');
        this.getGoodsURL(document.getElementById("search").value, 0, sort);
      }
    }
  }, {
    key: "getGoodsEnter",
    value: function getGoodsEnter(event) {
      if (event.keyCode == 13) {
        this.getGoods(event);
      }
    }
  }, {
    key: "reset",
    value: function reset(event) {
      var searchParams = new URLSearchParams(location.search);
      searchParams.set('query', '');
      window.history.replaceState({}, '', "".concat(location.pathname, "?").concat(searchParams));
      document.getElementById("search").value = "";
      var sort = searchParams.get('sort');
      this.getGoodsURL("", 0, sort);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "search-wrapper",
        className: "border-bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          textAlign: 'center',
          marginBottom: '25px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        className: "form-control",
        id: "search",
        style: {
          display: 'inline',
          width: '60vw',
          marginRight: '10px',
          verticalAlign: 'middle'
        },
        onKeyUp: this.getGoodsEnter
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.getGoods,
        style: {
          display: 'inline',
          verticalAlign: 'middle'
        }
      }, "\u041D\u0430\u0439\u0442\u0438!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "link-secondary res",
        onClick: this.reset,
        style: {
          display: 'inline',
          verticalAlign: 'middle'
        }
      }, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C")));
    }
  }]);
  return Search;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/*const mapStateToProps = (state) => {
    return {
		fetchAllGoodsState: (args) => goodsAPI.endpoints.fetchAllGoods.select(args)(state),
		lastArgs: state.goodsReducer.lastArgs
    };
}*/
var mapDispatchToProps = {
  fetchAllGoods: _store_services_goods_service__WEBPACK_IMPORTED_MODULE_3__.goodsAPI.endpoints.fetchAllGoods.initiate,
  //(args) => dispatch(goodsAPI.endpoints.fetchAllGoods.initiate(args)) //(args) => dispatch(getGoodsFromAPI(args))
  setLastArgs: _store_reducers_goods_slice__WEBPACK_IMPORTED_MODULE_2__.setLastArgs
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps)(Search));

/***/ })

}]);
//# sourceMappingURL=react_search_js.bundle.js.map