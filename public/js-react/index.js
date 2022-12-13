var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function eventEmitter() {
	var events = {};
	return {
		subscribe: function subscribe(name, cb) {
			(events[name] || (events[name] = [])).push(cb);
			return {
				unsubscribe: function unsubscribe() {
					events[name] && events[name].splice(events[name].indexOf(cb), 1);
				}
			};
		},
		emit: function emit(name, data) {
			(events[name] || []).forEach(function (fn) {
				return fn(data);
			});
		}
	};
}

var emitter = eventEmitter();

var GoodsMin = function (_React$Component) {
	_inherits(GoodsMin, _React$Component);

	function GoodsMin(props) {
		_classCallCheck(this, GoodsMin);

		var _this = _possibleConstructorReturn(this, (GoodsMin.__proto__ || Object.getPrototypeOf(GoodsMin)).call(this, props));

		_this.state = { goods: 0 };
		_this.getNew = _this.getNew.bind(_this);
		_this.getPopular = _this.getPopular.bind(_this);
		if (!window.location.href.match("search=true")) {
			if (window.location.href.match("sort=new") || !window.location.href.match("sort")) {
				_this.getNew();
			} else if (window.location.href.match("sort=popular")) {
				_this.getPopular();
			}
		}
		var subscriptionChangeState = emitter.subscribe("CHANGE", function (state) {
			return _this.setState({ goods: state });
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
				body: JSON.stringify({ command: 'getNew', since: 0 })
			}).then(function (response) {
				response.json().then(function (body) {
					_this2.setState({ goods: body.goods[0] });
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
				body: JSON.stringify({ command: 'getPopular', since: 0 })
			}).then(function (response) {
				response.json().then(function (body) {
					_this3.setState({ goods: body.goods[0] });
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
			for (var i = 0; i < this.state.goods.length; i++) {
				rows.push(React.createElement(Card, { id: this.state.goods[i].id, name: this.state.goods[i].name, img: this.state.goods[i].photos, price: this.state.goods[i].price, createdAt: this.state.goods[i].created_at }));
			}return React.createElement(
				"div",
				null,
				rows
			);
		}
	}]);

	return GoodsMin;
}(React.Component);

var Card = function (_React$Component2) {
	_inherits(Card, _React$Component2);

	function Card(props) {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
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
				if (i == 0) butImg.push(React.createElement("button", { type: "button", "data-bs-target": "#carouselGoodsIndicators" + this.props.id, "data-bs-slide-to": i, "class": "active", "aria-current": "true", "aria-label": "Slide " + i }));else butImg.push(React.createElement("button", { type: "button", "data-bs-target": "#carouselGoodsIndicators" + this.props.id, "data-bs-slide-to": i, "aria-label": "Slide " + i }));
			}
			var img = [];
			for (var _i = 0; _i < this.props.img.length; _i++) {
				if (_i == 0) img.push(React.createElement(
					"div",
					{ className: "carousel-item active" },
					React.createElement("img", { className: "d-block w-100", src: "goods_photos/" + this.props.img[_i], alt: "Slide " + _i })
				));else img.push(React.createElement(
					"div",
					{ className: "carousel-item" },
					React.createElement("img", { className: "d-block w-100", src: "goods_photos/" + this.props.img[_i], alt: "Slide " + _i })
				));
			}
			return React.createElement(
				"div",
				{ className: "col-xs-12 col-sm-12 col-md-4 col-lg-3", style: { float: 'left', height: '450px' } },
				React.createElement(
					"div",
					{ className: "card m-1" },
					React.createElement(
						"div",
						{ id: "carouselGoodsIndicators" + this.props.id, "data-bs-interval": "false", className: "carousel slide", "data-bs-ride": "carousel" },
						React.createElement(
							"div",
							{ className: "carousel-indicators" },
							butImg
						),
						React.createElement(
							"div",
							{ className: "carousel-inner" },
							img
						),
						React.createElement(
							"button",
							{ className: "carousel-control-prev", type: "button", "data-bs-target": "#carouselGoodsIndicators" + this.props.id, "data-bs-slide": "prev" },
							React.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
							React.createElement(
								"span",
								{ className: "visually-hidden" },
								"Previous"
							)
						),
						React.createElement(
							"button",
							{ className: "carousel-control-next", type: "button", "data-bs-target": "#carouselGoodsIndicators" + this.props.id, "data-bs-slide": "next" },
							React.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
							React.createElement(
								"span",
								{ className: "visually-hidden" },
								"Next"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "card-body" },
						React.createElement(
							"a",
							{ href: "/goods/" + this.props.id, target: "_blank", style: { color: "black" } },
							React.createElement(
								"h5",
								{ className: "card-title" },
								this.props.name.length > 45 ? this.props.name.substring(0, 45) + "..." : this.props.name
							)
						),
						React.createElement(
							"p",
							{ className: "card-text" },
							this.props.price + "₽"
						),
						React.createElement(
							"p",
							{ className: "card-text" },
							React.createElement(
								"small",
								{ className: "text-muted" },
								dateStr
							)
						)
					)
				)
			);
		}
	}]);

	return Card;
}(React.Component);

ReactDOM.render(React.createElement(GoodsMin, null), document.getElementById('goods-min'));

var Search = function (_React$Component3) {
	_inherits(Search, _React$Component3);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this5 = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this5.getGoods = _this5.getGoods.bind(_this5);
		_this5.getGoodsURL = _this5.getGoodsURL.bind(_this5);
		return _this5;
	}

	_createClass(Search, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			if (window.location.href.match("search=true")) {
				var params = new URLSearchParams(new URL(window.location.href).search);
				var query = void 0;
				var sort = void 0;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = params.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var pair = _step.value;

						if (pair[0] == 'query') {
							query = pair[1];
						} else if (pair[0] == 'sort') {
							sort = pair[1];
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				document.getElementById("search").value = query;
				this.getGoodsURL(query, 0, sort);
			}
		}
	}, {
		key: "getGoodsURL",
		value: function getGoodsURL(query, since, sort) {
			fetch('/api', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ command: 'searchGoods', word: query, since: since, sort: sort })
			}).then(function (response) {
				response.json().then(function (body) {
					emitter.emit("CHANGE", body.goods[0]);
				});
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
			var url = new URL(window.location);
			url.searchParams.set('search', 'true');
			url.searchParams.set('query', document.getElementById("search").value);
			window.history.pushState({}, '', url);
			window.location.reload();
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ style: { textAlign: 'center', marginBottom: '25px' } },
				React.createElement("input", { type: "text", "class": "form-control", id: "search", style: { display: 'inline', width: '60vw', marginRight: '10px' } }),
				React.createElement(
					"button",
					{ type: "button", "class": "btn btn-primary", onClick: this.getGoods, style: { display: 'inline' } },
					"\u041D\u0430\u0439\u0442\u0438!"
				)
			);
		}
	}]);

	return Search;
}(React.Component);

ReactDOM.render(React.createElement(Search, null), document.getElementById('search-wrapper'));

var links = ["Новые", "Подписки", "Популярные"];

var NavBar = function (_React$Component4) {
	_inherits(NavBar, _React$Component4);

	function NavBar(props) {
		_classCallCheck(this, NavBar);

		var _this6 = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

		_initialiseProps.call(_this6);

		_this6.output = _this6.output.bind(_this6);
		var params = new URLSearchParams(new URL(window.location.href).search);
		var sort = void 0;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = params.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var pair = _step2.value;

				if (pair[0] == 'sort') {
					sort = pair[1];
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		if (!sort || sort == 'new') {
			var active = [true];
			for (var i = 1; i < links.length; i++) {
				active.push(false);
			}
		} else if (sort == 'popular') {
			var active = [];
			for (var i = 0; i < links.length; i++) {
				active.push(false);
			}
			active[2] = true;
		}
		_this6.state = { isActive: active };
		return _this6;
	}

	_createClass(NavBar, [{
		key: "render",
		value: function render() {
			var rows = [];
			for (var i = 0; i < links.length; i++) {
				rows.push(React.createElement(Nav, { isActive: this.state.isActive[i], name: links[i], func: this.output }));
			}
			return React.createElement(
				"span",
				null,
				rows,
				React.createElement(LogReg, null)
			);
		}
	}]);

	return NavBar;
}(React.Component);

var _initialiseProps = function _initialiseProps() {
	var _this10 = this;

	this.output = function (num) {
		var active = [];
		for (var i = 0; i < links.length; i++) {
			active.push(false);
		}
		active[num] = true;
		_this10.setState({ isActive: active });
	};
};

var Nav = function (_React$Component5) {
	_inherits(Nav, _React$Component5);

	function Nav(props) {
		_classCallCheck(this, Nav);

		// Эта привязка обязательна для работы `this` в колбэке.
		var _this7 = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

		_this7.handleClick = _this7.handleClick.bind(_this7);
		return _this7;
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
			if (this.props.name == "Популярные") {
				var url = new URL(window.location);
				url.searchParams.set('sort', 'popular');
				window.history.pushState({}, '', url);
				window.location.reload();
			} else if (this.props.name == "Новые") {
				var _url = new URL(window.location);
				_url.searchParams.set('sort', 'new');
				window.history.pushState({}, '', _url);
				window.location.reload();
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
			return React.createElement(
				"li",
				{ className: "nav-item d-block d-sm-block d-md-inline-block" },
				React.createElement(
					"a",
					{ href: "#", className: className, "aria-current": ariaCurrent, onClick: this.handleClick },
					this.props.name
				)
			);
		}
	}]);

	return Nav;
}(React.Component);

var LogReg = function (_React$Component6) {
	_inherits(LogReg, _React$Component6);

	function LogReg(props) {
		_classCallCheck(this, LogReg);

		var _this8 = _possibleConstructorReturn(this, (LogReg.__proto__ || Object.getPrototypeOf(LogReg)).call(this, props));

		_this8.state = { logout: false, confirm: null, nick: null };
		return _this8;
	}

	_createClass(LogReg, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this9 = this;

			fetch('/api', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ command: 'isLoggedIn' })
			}).then(function (response) {
				response.json().then(function (body) {
					_this9.setState({ logout: body.logout, confirm: body.confirm, nick: body.nick });
				});
			});
		}
	}, {
		key: "render",
		value: function render() {
			console.log(this.state);
			if (!this.state.logout) {
				return React.createElement(
					"li",
					{ className: "nav-item d-block d-sm-block d-md-inline-block px-3" },
					React.createElement(
						"a",
						{ href: "/logreg", className: "nav-link", id: "logreg" },
						"\u0412\u0445\u043E\u0434/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
					)
				);
			} else {
				return React.createElement(
					"div",
					{ className: "dropdown d-block d-sm-block d-md-inline-block px-3" },
					React.createElement(
						"button",
						{ className: "btn btn-primary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-bs-toggle": "dropdown", "aria-expanded": "false" },
						this.state.nick,
						" ",
						this.state.confirm ? "(осуществлен вход)" : "(требуется подтверждение почты)"
					),
					React.createElement(
						"ul",
						{ className: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" },
						this.state.confirm ? React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "dropdown-item", href: "/goods/create" },
								"\u041F\u0440\u043E\u0434\u0430\u0442\u044C"
							)
						) : '',
						this.state.confirm ? React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "dropdown-item", href: "#" },
								"\u0421\u043E\u0437\u0434\u0430\u043D\u043E"
							)
						) : '',
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "dropdown-item", href: "#" },
								"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"a",
								{ className: "dropdown-item", href: "/logout" },
								"\u0412\u044B\u0439\u0442\u0438"
							)
						)
					)
				);
			}
		}
	}]);

	return LogReg;
}(React.Component);

ReactDOM.render(React.createElement(NavBar, null), document.getElementById('nav'));