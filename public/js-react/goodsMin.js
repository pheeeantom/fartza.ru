function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoriesBar = function (_React$Component) {
	_inherits(CategoriesBar, _React$Component);

	function CategoriesBar(props) {
		_classCallCheck(this, CategoriesBar);

		var _this = _possibleConstructorReturn(this, (CategoriesBar.__proto__ || Object.getPrototypeOf(CategoriesBar)).call(this, props));

		var active = [];
		for (var i = 0; i < Object.keys(categories).length; i++) {
			active.push(false);
		}
		_this.state = { isActive: active };
		_this.output = _this.output.bind(_this);
		return _this;
	}

	return CategoriesBar;
}(React.Component);