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
		_this.getGoods = _this.getGoods.bind(_this);
		_this.getGoods();
		var subscriptionChangeState = emitter.subscribe("CHANGE", function (state) {
			return _this.setState({ goods: state });
		});
		return _this;
	}

	_createClass(GoodsMin, [{
		key: 'getGoods',
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
				body: JSON.stringify({ command: 'getGoods', since: 0 })
			}).then(function (response) {
				response.json().then(function (body) {
					_this2.setState({ goods: body.goods[0] });
				});
			});
			//console.log(10);
		}
	}, {
		key: 'render',
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
				'div',
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
		key: 'render',
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
				if (i == 0) butImg.push(React.createElement('button', { type: 'button', 'data-bs-target': "#carouselGoodsIndicators" + this.props.id, 'data-bs-slide-to': i, 'class': 'active', 'aria-current': 'true', 'aria-label': "Slide " + i }));else butImg.push(React.createElement('button', { type: 'button', 'data-bs-target': "#carouselGoodsIndicators" + this.props.id, 'data-bs-slide-to': i, 'aria-label': "Slide " + i }));
			}
			var img = [];
			for (var _i = 0; _i < this.props.img.length; _i++) {
				if (_i == 0) img.push(React.createElement(
					'div',
					{ className: 'carousel-item active' },
					React.createElement('img', { className: 'd-block w-100', src: "goods_photos/" + this.props.img[_i], alt: "Slide " + _i })
				));else img.push(React.createElement(
					'div',
					{ className: 'carousel-item' },
					React.createElement('img', { className: 'd-block w-100', src: "goods_photos/" + this.props.img[_i], alt: "Slide " + _i })
				));
			}
			return React.createElement(
				'div',
				{ className: 'col-xs-12 col-sm-12 col-md-4 col-lg-3', style: { float: 'left' } },
				React.createElement(
					'div',
					{ className: 'card m-1' },
					React.createElement(
						'div',
						{ id: "carouselGoodsIndicators" + this.props.id, 'data-bs-interval': 'false', className: 'carousel slide', 'data-bs-ride': 'carousel' },
						React.createElement(
							'div',
							{ className: 'carousel-indicators' },
							butImg
						),
						React.createElement(
							'div',
							{ className: 'carousel-inner' },
							img
						),
						React.createElement(
							'button',
							{ className: 'carousel-control-prev', type: 'button', 'data-bs-target': "#carouselGoodsIndicators" + this.props.id, 'data-bs-slide': 'prev' },
							React.createElement('span', { className: 'carousel-control-prev-icon', 'aria-hidden': 'true' }),
							React.createElement(
								'span',
								{ className: 'visually-hidden' },
								'Previous'
							)
						),
						React.createElement(
							'button',
							{ className: 'carousel-control-next', type: 'button', 'data-bs-target': "#carouselGoodsIndicators" + this.props.id, 'data-bs-slide': 'next' },
							React.createElement('span', { className: 'carousel-control-next-icon', 'aria-hidden': 'true' }),
							React.createElement(
								'span',
								{ className: 'visually-hidden' },
								'Next'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'card-body' },
						React.createElement(
							'a',
							{ href: "/goods/" + this.props.id },
							React.createElement(
								'h5',
								{ className: 'card-title' },
								this.props.name
							)
						),
						React.createElement(
							'p',
							{ className: 'card-text' },
							this.props.price + "₽"
						),
						React.createElement(
							'p',
							{ className: 'card-text' },
							React.createElement(
								'small',
								{ className: 'text-muted' },
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

var Search = function (_React$Component3) {
	_inherits(Search, _React$Component3);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this4 = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this4.getGoods = _this4.getGoods.bind(_this4);
		return _this4;
	}

	_createClass(Search, [{
		key: 'getGoods',
		value: function getGoods(event) {
			/*const data = new FormData();
   data.append('command', 'getGoods');
   data.append('since', 0);*/
			fetch('/api', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ command: 'searchGoods', word: document.getElementById("search").value })
			}).then(function (response) {
				response.json().then(function (body) {
					emitter.emit("CHANGE", body.goods[0]);
					//console.log(this.state.goods);
				});
			});
			//console.log(10);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ style: { textAlign: 'center', marginBottom: '25px' } },
				React.createElement('input', { type: 'text', 'class': 'form-control', id: 'search', style: { display: 'inline', width: '60vw', marginRight: '10px' } }),
				React.createElement(
					'button',
					{ type: 'button', 'class': 'btn btn-primary', onClick: this.getGoods, style: { display: 'inline' } },
					'\u041D\u0430\u0439\u0442\u0438!'
				)
			);
		}
	}]);

	return Search;
}(React.Component);

ReactDOM.render(React.createElement(GoodsMin, null), document.getElementById('goods-min'));

ReactDOM.render(React.createElement(Search, null), document.getElementById('search-wrapper'));