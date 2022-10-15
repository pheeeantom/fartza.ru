var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductWrapper = function (_React$Component) {
	_inherits(ProductWrapper, _React$Component);

	function ProductWrapper(props) {
		_classCallCheck(this, ProductWrapper);

		var _this = _possibleConstructorReturn(this, (ProductWrapper.__proto__ || Object.getPrototypeOf(ProductWrapper)).call(this, props));

		_this.state = { goods: 0 };
		_this.getGoods = _this.getGoods.bind(_this);
		return _this;
	}

	_createClass(ProductWrapper, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			console.log(1000);
			this.getGoods();
		}
	}, {
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
				body: JSON.stringify({ command: 'getGoodsById', id: window.location.href.match("goods/(.+)#?")[1] })
			}).then(function (response) {
				response.json().then(function (body) {
					_this2.setState({ goods: body.goods[0] });
					//console.log(this.state.goods);
				});
			});
			//console.log(10);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.state.goods[0]) {
				return null;
			} else {
				return React.createElement(Product, { id: this.state.goods[0].id, name: this.state.goods[0].name, img: this.state.goods[0].photos, price: this.state.goods[0].price, createdAt: this.state.goods[0].created_at, desc: this.state.goods[0].description });
			}
		}
	}]);

	return ProductWrapper;
}(React.Component);

var Product = function (_React$Component2) {
	_inherits(Product, _React$Component2);

	function Product(props) {
		_classCallCheck(this, Product);

		return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));
	}

	_createClass(Product, [{
		key: 'render',
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
				if (i == 0) butImg.push(React.createElement('button', { type: 'button', 'data-bs-target': "#carouselGoodsIndicators" + this.props.id, 'data-bs-slide-to': i, className: 'active', 'aria-current': 'true', 'aria-label': "Slide " + i }));else butImg.push(React.createElement('button', { type: 'button', 'data-bs-target': "#carouselGoodsIndicators" + this.props.id, 'data-bs-slide-to': i, 'aria-label': "Slide " + i }));
			}
			var img = [];
			for (var _i = 0; _i < this.props.img.length; _i++) {
				if (_i == 0) img.push(React.createElement(
					'div',
					{ className: 'carousel-item active' },
					React.createElement('img', { className: 'd-block w-100', src: "/goods_photos/" + this.props.img[_i], alt: "Slide " + _i })
				));else img.push(React.createElement(
					'div',
					{ className: 'carousel-item' },
					React.createElement('img', { className: 'd-block w-100', src: "/goods_photos/" + this.props.img[_i], alt: "Slide " + _i })
				));
			}
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'col-md-1 col-lg-2', style: { float: 'left' } },
					'\xA0'
				),
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-12 col-md-10 col-lg-8', style: { float: 'left' } },
					React.createElement(
						'div',
						{ className: 'my-card' },
						React.createElement(
							'div',
							{ id: "carouselGoodsIndicators" + this.props.id, 'data-bs-interval': 'false', className: 'carousel slide col-xs-12 col-sm-12 col-md-6 col-lg-6', 'data-bs-ride': 'carousel', style: { float: 'left' } },
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
							{ className: 'card-body col-xs-12 col-sm-12 col-md-6 col-lg-6', style: { float: 'left' } },
							React.createElement(
								'h5',
								{ className: 'card-title' },
								this.props.name
							),
							React.createElement(
								'p',
								{ className: 'card-text' },
								this.props.desc
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
				)
			);
		}
	}]);

	return Product;
}(React.Component);

ReactDOM.render(React.createElement(ProductWrapper, null), document.getElementById('goods-min'));