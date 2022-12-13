var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import CurrencyInput from 'react-currency-input-field';

var fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png'];

var GoodsCreateForm = function (_React$Component) {
	_inherits(GoodsCreateForm, _React$Component);

	function GoodsCreateForm(props) {
		_classCallCheck(this, GoodsCreateForm);

		var _this = _possibleConstructorReturn(this, (GoodsCreateForm.__proto__ || Object.getPrototypeOf(GoodsCreateForm)).call(this, props));

		_this.updateImageDisplay = _this.updateImageDisplay.bind(_this);
		_this.validFileType = _this.validFileType.bind(_this);
		_this.returnFileSize = _this.returnFileSize.bind(_this);
		_this.load = _this.load.bind(_this);
		_this.inputName = _this.inputName.bind(_this);
		_this.state = { first: true, errorName: false, errorDesc: false };
		return _this;
	}

	_createClass(GoodsCreateForm, [{
		key: 'validFileType',
		value: function validFileType(file) {
			for (var i = 0; i < fileTypes.length; i++) {
				if (file.type === fileTypes[i]) {
					return true;
				}
			}

			return false;
		}
	}, {
		key: 'returnFileSize',
		value: function returnFileSize(number) {
			if (number < 1024) {
				return number + 'bytes';
			} else if (number > 1024 && number < 1048576) {
				return (number / 1024).toFixed(1) + 'KB';
			} else if (number > 1048576) {
				return (number / 1048576).toFixed(1) + 'MB';
			}
		}
	}, {
		key: 'load',
		value: function load(img) {
			//console.log(img);
			img.nextSibling.textContent += ', ширина и высота: ' + img.width + 'x' + img.height;
		}
	}, {
		key: 'updateImageDisplay',
		value: function updateImageDisplay(event) {
			var _this2 = this;

			console.log("upd");

			var input = document.querySelector('#images');
			var preview = document.querySelector('.preview');

			while (preview.firstChild) {
				preview.removeChild(preview.firstChild);
			}

			var curFiles = input.files;
			if (curFiles.length === 0) {
				var para = document.createElement('p');
				para.textContent = '';
				preview.appendChild(para);
			} else if (curFiles.length > 3) {
				input.value = '';
				var para = document.createElement('small');
				para.classList.add("form-text");
				para.classList.add("text-danger");
				para.textContent = 'Слишком много файлов!';
				preview.appendChild(para);
			} else {
				var list = document.createElement('ol');
				preview.appendChild(list);
				var para = [null, null, null];
				var image = [null, null, null];
				var listItem = [null, null, null];
				for (var i = 0; i < curFiles.length; i++) {
					listItem[i] = document.createElement('li');
					para[i] = document.createElement('p');
					para[i].style.display = 'inline-block';
					para[i].style.width = "80%";
					if (this.validFileType(curFiles[i])) {
						//console.log(curFiles[i]);
						image[i] = document.createElement('img');
						image[i].style.display = 'inline-block';
						image[i].style.width = "20%";
						image[i].src = window.URL.createObjectURL(curFiles[i]);

						listItem[i].appendChild(image[i]);
						para[i].textContent = 'Имя файла: ' + curFiles[i].name + ', размер файла: ' + this.returnFileSize(curFiles[i].size);
						image[i].onload = function (event) {
							return _this2.load(event.target);
						};
						listItem[i].appendChild(para[i]);
					} else {
						para[i].textContent = 'Имя файла: ' + curFiles[i].name + ' - Неверный формат файла, выберите файлы заново';
						listItem[i].appendChild(para[i][i]);
					}

					list.appendChild(listItem[i]);
				}
			}
		}
	}, {
		key: 'inputName',
		value: function inputName(event) {
			if (event.target.value.length > 127 || event.target.value.length < 3) {
				this.setState({ errorName: true });
			} else {
				this.setState({ errorName: false });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var className = "form-text text-danger";
			if (!this.state.errorName) {
				className += " d-none";
			}
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'col-md-3 col-lg-4', style: { float: 'left' } },
					'\xA0'
				),
				React.createElement(
					'div',
					{ className: 'col-xs-12 col-sm-12 col-md-6 col-lg-4', style: { float: 'left' } },
					React.createElement(
						'h2',
						{ style: { textAlign: 'center' } },
						'\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440'
					),
					React.createElement(
						'form',
						{ action: '/api', method: 'post', autoComplete: 'off' },
						React.createElement(
							'div',
							{ className: 'mb-3' },
							React.createElement(
								'label',
								{ 'for': 'name', className: 'form-label' },
								'\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'
							),
							React.createElement('textarea', { className: 'form-control', id: 'name', rows: '2', onInput: this.inputName }),
							React.createElement(
								'small',
								{ className: className },
								'\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0438\u043B\u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043B\u0438\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435!'
							)
						),
						React.createElement(
							'div',
							{ className: 'mb-3' },
							React.createElement(
								'label',
								{ 'for': 'description', className: 'form-label' },
								'\u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
							),
							React.createElement('textarea', { className: 'form-control', id: 'description', rows: '3' })
						),
						React.createElement(
							'div',
							{ className: 'mb-3' },
							React.createElement(
								'label',
								{ 'for': 'images', className: 'form-label' },
								'\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F...'
							),
							React.createElement('input', { title: '', className: 'form-control', type: 'file', id: 'images', onChange: this.updateImageDisplay, accept: '.jpg, .jpeg, .png', multiple: true })
						),
						React.createElement(
							'div',
							{ className: 'preview' },
							React.createElement('p', null)
						),
						React.createElement(
							'div',
							{ 'class': 'mb-3' },
							React.createElement(
								'label',
								{ 'for': 'price', 'class': 'form-label' },
								'\u0426\u0435\u043D\u0430 \u0432 \u0440\u0443\u0431\u043B\u044F\u0445'
							),
							React.createElement(CurrencyInput, {
								id: 'input-example',
								name: 'input-name',
								placeholder: 'Please enter a number',
								defaultValue: 1000,
								decimalsLimit: 2,
								onValueChange: function onValueChange(value, name) {
									return console.log(value, name);
								}
							})
						)
					)
				)
			);
		}
	}]);

	return GoodsCreateForm;
}(React.Component);

ReactDOM.render(React.createElement(GoodsCreateForm, null), document.getElementById('goods-create'));