"use strict";
(self["webpackChunkfartza_ru"] = self["webpackChunkfartza_ru"] || []).push([["react_goods-min_js"],{

/***/ "./react/goods-min.js":
/*!****************************!*\
  !*** ./react/goods-min.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoodsMin)
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

var GoodsMin = /*#__PURE__*/function (_React$Component) {
  _inherits(GoodsMin, _React$Component);
  var _super = _createSuper(GoodsMin);
  function GoodsMin(props) {
    var _this;
    _classCallCheck(this, GoodsMin);
    _this = _super.call(this, props);
    _this.state = {
      goods: 0
    };
    _this.getNew = _this.getNew.bind(_assertThisInitialized(_this));
    _this.getPopular = _this.getPopular.bind(_assertThisInitialized(_this));
    if (!window.location.href.match("search=true")) {
      if (window.location.href.match("sort=new") || !window.location.href.match("sort")) {
        _this.getNew();
      } else if (window.location.href.match("sort=popular")) {
        _this.getPopular();
      }
    }
    var subscriptionChangeState = _this.props.emitter.subscribe("CHANGE", function (state) {
      return _this.setState({
        goods: state
      });
    });
    return _this;
  }
  _createClass(GoodsMin, [{
    key: "getNew",
    value: function getNew() {
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
          command: 'getNew',
          since: 0
        })
      }).then(function (response) {
        response.json().then(function (body) {
          _this2.setState({
            goods: body.goods[0]
          });
        });
      });
      //console.log(10);
    }
  }, {
    key: "getPopular",
    value: function getPopular() {
      var _this3 = this;
      fetch('/api', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          command: 'getPopular',
          since: 0
        })
      }).then(function (response) {
        response.json().then(function (body) {
          _this3.setState({
            goods: body.goods[0]
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      /*let rows = [];
      let rowsGroups = [];
      let j = 0;
      for (let i = 0; i < this.state.goods.length; i++) {
      	rows.push(<Card name={this.state.goods[i].name} img={this.state.goods[i].photos} price={this.state.goods[i].price} createdAt={this.state.goods[i].created_at} />);
      	j++;
      	if (j == 3 || i == this.state.goods.length - 1) {
      		j = 0;
      		rowsGroups.push(<div className="card-group">{rows}</div>);
      		rows = [];
      	}
      }
      return (
      	<div>
      	  {rowsGroups}
      	</div>
      );*/
      console.log(this.state.goods);
      var rows = [];
      for (var i = 0; i < this.state.goods.length; i++) rows.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Card, {
        id: this.state.goods[i].id,
        name: this.state.goods[i].name,
        img: this.state.goods[i].photos,
        price: this.state.goods[i].price,
        createdAt: this.state.goods[i].created_at
      }));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, rows);
    }
  }]);
  return GoodsMin;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Card = /*#__PURE__*/function (_React$Component2) {
  _inherits(Card, _React$Component2);
  var _super2 = _createSuper(Card);
  function Card(props) {
    _classCallCheck(this, Card);
    return _super2.call(this, props);
  }
  _createClass(Card, [{
    key: "render",
    value: function render() {
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
          "class": "active",
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
          src: "goods_photos/" + this.props.img[_i],
          alt: "Slide " + _i
        })));else img.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "carousel-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
          className: "d-block w-100",
          src: "goods_photos/" + this.props.img[_i],
          alt: "Slide " + _i
        })));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        "class": "col-xs-12 col-sm-12 col-md-8 col-lg-9 mb-3 mt-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
        id: "goods-min"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "col-xs-12 col-sm-12 col-md-4 col-lg-3",
        style: {
          "float": 'left',
          height: '450px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "card m-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "carouselGoodsIndicators" + this.props.id,
        "data-bs-interval": "false",
        className: "carousel slide",
        "data-bs-ride": "carousel"
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
        className: "card-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "/goods/" + this.props.id,
        target: "_blank",
        style: {
          color: "black"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
        className: "card-title"
      }, this.props.name.length > 45 ? this.props.name.substring(0, 45) + "..." : this.props.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "card-text"
      }, this.props.price + "₽"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "card-text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", {
        className: "text-muted"
      }, dateStr)))))));
    }
  }]);
  return Card;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/*ReactDOM.render(
  <GoodsMin />,
  document.getElementById('goods-min')
);

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.getGoods = this.getGoods.bind(this);
		this.getGoodsURL = this.getGoodsURL.bind(this);
	}

	componentDidMount() {
        if (window.location.href.match("search=true")) {
        	let params = new URLSearchParams(new URL(window.location.href).search);
			let query;
			let sort;
			for(let pair of params.entries()) {
			  if (pair[0] == 'query') {
			  	query = pair[1];
			  }
			  else if (pair[0] == 'sort') {
			  	sort = pair[1];
			  }
			}
        	document.getElementById("search").value = query;
			this.getGoodsURL(query, 0, sort);
		}
    }

	getGoodsURL(query, since, sort) {
		fetch('/api', {
			method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify({ command: 'searchGoods', word: query, since: since, sort: sort })
		}).then(response => {
			response.json().then(body => {
				emitter.emit("CHANGE", body.goods[0]);
			});
		});
	}*/
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
/*getGoods(event) {
	const url = new URL(window.location);
	url.searchParams.set('search', 'true');
	url.searchParams.set('query', document.getElementById("search").value);
	window.history.pushState({}, '', url);
	window.location.reload();
}

render() {
	return (
		<div style={{textAlign: 'center', marginBottom: '25px'}}>
			<input type="text" class="form-control" id="search" style={{display: 'inline', width: '60vw', marginRight: '10px'}}/>
			<button type="button" class="btn btn-primary" onClick={this.getGoods} style={{display: 'inline'}}>Найти!</button>
		</div>
	);
}
}

ReactDOM.render(
 <Search />,
 document.getElementById('search-wrapper')
);

var links = [
 "Новые",
 "Подписки",
 "Популярные"
];

class NavBar extends React.Component {
 constructor(props) {
   super(props);
   this.output = this.output.bind(this);
   let params = new URLSearchParams(new URL(window.location.href).search);
let sort;
for(let pair of params.entries()) {
  if (pair[0] == 'sort') {
  	sort = pair[1];
  }
}
if (!sort || sort == 'new') {
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
this.state = {isActive: active};
 }

 output = num => {
   var active = [];
   for (var i = 0; i < links.length; i++) {
     active.push(false);
   }
   active[num] = true;
   this.setState({ isActive : active});
 }

 render() {
   var rows = [];
   for (var i = 0; i < links.length; i++) {
     rows.push(<Nav isActive={this.state.isActive[i]} name={links[i]} func={this.output}/>);
   }
   return (
     <span>
       {rows}
       <LogReg/>
     </span>
   );
 }
}

class Nav extends React.Component {
 constructor(props) {
   super(props);

   // Эта привязка обязательна для работы `this` в колбэке.
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick() {
   var num;
   for (var i = 0; i < links.length; i++) {
     if (this.props.name == links[i]) {
       num = i;
     }
   }
   this.props.func(num);
   if (this.props.name == "Популярные") {
     const url = new URL(window.location);
  url.searchParams.set('sort', 'popular');
  window.history.pushState({}, '', url);
  window.location.reload();
   }
   else if (this.props.name == "Новые") {
     const url = new URL(window.location);
  url.searchParams.set('sort', 'new');
  window.history.pushState({}, '', url);
  window.location.reload();
   }
 }

 render() {
   var ariaCurrent = this.props.isActive ? "page" : null;
   var className = 'nav-link';
   if (this.props.isActive) {
     className += ' active';
   }
   return (
     <li className="nav-item d-block d-sm-block d-md-inline-block"><a href="#" className={className} aria-current={ariaCurrent} onClick={this.handleClick}>{this.props.name}</a></li>
   );
 }
}

class LogReg extends React.Component {
 constructor(props) {
 	super(props);
 	this.state = {logout: false, confirm: null, nick: null};
 }
 componentDidMount() {
 	fetch('/api', {
		method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({ command: 'isLoggedIn' })
	}).then(response => {
		response.json().then(body => {
			this.setState({logout: body.logout, confirm: body.confirm, nick: body.nick});
		});
	});
 }
 render() {
 	console.log(this.state);
 	if (!this.state.logout) {
 	  return (
    <li className="nav-item d-block d-sm-block d-md-inline-block px-3"><a href="/logreg" className="nav-link" id="logreg">Вход/Регистрация</a></li>
  );
 	}
   else {
     return (
     	<div className="dropdown d-block d-sm-block d-md-inline-block px-3">
         <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
           {this.state.nick} {this.state.confirm ? "(осуществлен вход)" : "(требуется подтверждение почты)"}
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           {this.state.confirm ? <li><a className="dropdown-item" href="/goods/create">Продать</a></li> : ''}
           {this.state.confirm ? <li><a className="dropdown-item" href="#">Создано</a></li> : ''}
           <li><a className="dropdown-item" href="#">Настройки</a></li>
           <li><a className="dropdown-item" href="/logout">Выйти</a></li>
         </ul>
       </div>
     );
   }
 }
}

ReactDOM.render(
 <NavBar />,
 document.getElementById('nav')
);*/

/***/ })

}]);
//# sourceMappingURL=react_goods-min_js.bundle.js.map