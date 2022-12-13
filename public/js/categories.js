/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js-react/categories.js":
/*!***************************************!*\
  !*** ./public/js-react/categories.js ***!
  \***************************************/
/***/ (() => {

eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar categories = {\n\t\"Статьи\": [\"Новинки\", \"Тренды\", \"Коллаборации\"],\n\t\"Одежда\": [\"Б/У\", \"Российское\", \"ХендМейд\", \"Обувь\", \"Верх\", \"Низ\", \"Головные уборы\"]\n};\n\nvar CategoriesBar = function (_React$Component) {\n\t_inherits(CategoriesBar, _React$Component);\n\n\tfunction CategoriesBar(props) {\n\t\t_classCallCheck(this, CategoriesBar);\n\n\t\tvar _this = _possibleConstructorReturn(this, (CategoriesBar.__proto__ || Object.getPrototypeOf(CategoriesBar)).call(this, props));\n\n\t\t_initialiseProps.call(_this);\n\n\t\tvar active = [];\n\t\tfor (var i = 0; i < Object.keys(categories).length; i++) {\n\t\t\tactive.push(false);\n\t\t}\n\t\t_this.state = { isActive: active };\n\t\t_this.output = _this.output.bind(_this);\n\t\treturn _this;\n\t}\n\n\t_createClass(CategoriesBar, [{\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar rows = [];\n\t\t\tfor (var i = 0; i < Object.keys(categories).length; i++) {\n\t\t\t\trows.push(React.createElement(Category, { isActive: this.state.isActive[i], name: Object.keys(categories)[i], links: categories[Object.keys(categories)[i]], func: this.output }));\n\t\t\t}\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"dropdown\" },\n\t\t\t\trows\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn CategoriesBar;\n}(React.Component);\n\nvar _initialiseProps = function _initialiseProps() {\n\tvar _this4 = this;\n\n\tthis.output = function (num) {\n\t\tvar active = [];\n\t\tfor (var i = 0; i < Object.keys(categories).length; i++) {\n\t\t\tactive.push(false);\n\t\t}\n\t\tactive[num] = !_this4.state.isActive[num];\n\t\t_this4.setState({ isActive: active });\n\t};\n};\n\nvar Category = function (_React$Component2) {\n\t_inherits(Category, _React$Component2);\n\n\tfunction Category(props) {\n\t\t_classCallCheck(this, Category);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));\n\n\t\t_initialiseProps2.call(_this2);\n\n\t\tvar active = [];\n\t\tfor (var i = 0; i < categories[_this2.props.name].length; i++) {\n\t\t\tactive.push(false);\n\t\t}\n\t\t_this2.state = { isActive: active };\n\t\t_this2.handleClick = _this2.handleClick.bind(_this2);\n\t\t_this2.output = _this2.output.bind(_this2);\n\t\treturn _this2;\n\t}\n\n\t_createClass(Category, [{\n\t\tkey: \"getNum\",\n\t\tvalue: function getNum() {\n\t\t\tfor (var i = 0; i < Object.keys(categories).length; i++) {\n\t\t\t\tif (this.props.name == Object.keys(categories)[i]) {\n\t\t\t\t\treturn i;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"handleClick\",\n\t\tvalue: function handleClick() {\n\t\t\tvar num = this.getNum();\n\t\t\tthis.props.func(num);\n\t\t}\n\t}, {\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar display = 'none';\n\t\t\tif (this.props.isActive) {\n\t\t\t\tdisplay = 'block';\n\t\t\t}\n\t\t\tvar rows = [];\n\t\t\tfor (var i = 0; i < this.props.links.length; i++) {\n\t\t\t\trows.push(React.createElement(Link, { isActive: this.state.isActive[i], name: this.props.links[i], num: i, func: this.output }));\n\t\t\t}\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"button\",\n\t\t\t\t\t{ onClick: this.handleClick, className: \"btn dropdown-toggle\", type: \"button\", id: \"dropdownMenuButton\", \"data-toggle\": \"dropdown\", \"aria-haspopup\": \"true\", \"aria-expanded\": this.props.isActive },\n\t\t\t\t\tthis.props.name\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ style: { display: display }, className: \"px-2\" },\n\t\t\t\t\trows\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Category;\n}(React.Component);\n\nvar _initialiseProps2 = function _initialiseProps2() {\n\tvar _this5 = this;\n\n\tthis.output = function (num) {\n\t\tvar active = [];\n\t\tfor (var i = 0; i < categories[_this5.props.name].length; i++) {\n\t\t\tactive.push(false);\n\t\t}\n\t\tactive[num] = true;\n\t\t_this5.setState({ isActive: active });\n\t};\n};\n\nvar Link = function (_React$Component3) {\n\t_inherits(Link, _React$Component3);\n\n\tfunction Link(props) {\n\t\t_classCallCheck(this, Link);\n\n\t\tvar _this3 = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));\n\n\t\t_this3.handleClick = _this3.handleClick.bind(_this3);\n\t\treturn _this3;\n\t}\n\n\t_createClass(Link, [{\n\t\tkey: \"handleClick\",\n\t\tvalue: function handleClick() {\n\t\t\tthis.props.func(this.props.num);\n\t\t}\n\t}, {\n\t\tkey: \"render\",\n\t\tvalue: function render() {\n\t\t\tvar classLink = \"dropdown-item\";\n\t\t\tif (this.props.isActive) {\n\t\t\t\tclassLink += \" active\";\n\t\t\t}\n\t\t\treturn React.createElement(\n\t\t\t\t\"a\",\n\t\t\t\t{ className: classLink, href: \"#\", onClick: this.handleClick },\n\t\t\t\tthis.props.name\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Link;\n}(React.Component);\n\nReactDOM.render(React.createElement(CategoriesBar, null), document.getElementById('categories'));\n\n//# sourceURL=webpack://fartza.ru/./public/js-react/categories.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js-react/categories.js"]();
/******/ 	
/******/ })()
;