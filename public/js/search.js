var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

		_this.state = { goods: 0 };
		_this.getGoods = _this.getGoods.bind(_this);
		return _this;
	}

	_createClass(Search, [{
		key: 'getGoods',
		value: function getGoods(event) {
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
				body: JSON.stringify({ command: 'searchGoods', id: event.target.value })
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
			return React.createElement('input', { type: 'text', 'class': 'form-control', id: 'search', onClick: this.getGoods });
		}
	}]);

	return Search;
}(React.Component);