webpackJsonp([0,3],{

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(169);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(170);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(173);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(171);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(172);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(60);

var _reactRedux = __webpack_require__(106);

var _articalActions = __webpack_require__(168);

__webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (_dec = (0, _reactRedux.connect)(function (state) {
				return state.articals;
}), _dec(_class = (_temp = _class2 = function (_Component) {
				(0, _inherits3.default)(Home, _Component);
				(0, _createClass3.default)(Home, null, [{
								key: 'fetchData',
								value: function fetchData(state, dispatch) {
												var fetchTasks = [];
												fetchTasks.push(dispatch((0, _articalActions.fetchAticals)(state)));
												return fetchTasks;
								}
				}]);

				function Home(props) {
								(0, _classCallCheck3.default)(this, Home);
								return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
				}

				(0, _createClass3.default)(Home, [{
								key: 'componentDidMount',
								value: function componentDidMount() {
												var loaded = this.props.loaded;

												if (!loaded) {
																this.constructor.fetchData(this.props, this.props.dispatch);
												}
								}
				}, {
								key: 'goTo',
								value: function goTo(artical) {
												this.context.router.push({
																pathname: '/articals/' + artical.articalId
												});
								}
				}, {
								key: 'render',
								value: function render() {
												var _this2 = this;

												var articalList = this.props.articals;
												return _react2.default.createElement(
																'div',
																null,
																_react2.default.createElement(
																				'div',
																				{ id: 'layout', className: 'pure-g' },
																				_react2.default.createElement(
																								'div',
																								{ className: 'sidebar pure-u-1 pure-u-md-1-4' },
																								_react2.default.createElement(
																												'div',
																												{ className: 'header' },
																												_react2.default.createElement(
																																'h1',
																																{ className: 'brand-title' },
																																'A Sample Blog'
																												),
																												_react2.default.createElement(
																																'h2',
																																{ className: 'brand-tagline' },
																																'Creating a blog layout using Pure'
																												),
																												_react2.default.createElement(
																																'nav',
																																{ className: 'nav' },
																																_react2.default.createElement(
																																				'ul',
																																				{ className: 'nav-list' },
																																				_react2.default.createElement(
																																								'li',
																																								{ className: 'nav-item' },
																																								_react2.default.createElement(
																																												'a',
																																												{ className: 'pure-button', href: 'http://purecss.io' },
																																												'Pure'
																																								)
																																				),
																																				_react2.default.createElement(
																																								'li',
																																								{ className: 'nav-item' },
																																								_react2.default.createElement(
																																												'a',
																																												{ className: 'pure-button', href: 'http://yuilibrary.com' },
																																												'YUI Library'
																																								)
																																				)
																																)
																												)
																								)
																				),
																				_react2.default.createElement(
																								'div',
																								{ className: 'content pure-u-1 pure-u-md-3-4' },
																								_react2.default.createElement(
																												'div',
																												null,
																												_react2.default.createElement(
																																'div',
																																{ className: 'posts' },
																																articalList.map(function (artical) {
																																				return _react2.default.createElement(
																																								'section',
																																								{ className: 'post', key: artical.articalId, onClick: function onClick() {
																																																_this2.goTo(artical);
																																												} },
																																								_react2.default.createElement(
																																												'header',
																																												{ className: 'post-header' },
																																												_react2.default.createElement(
																																																'h2',
																																																{ className: 'post-title' },
																																																_react2.default.createElement(
																																																				'a',
																																																				{ href: '/artical/' + artical.articalId },
																																																				artical.Title
																																																)
																																												),
																																												_react2.default.createElement(
																																																'p',
																																																{ className: 'post-meta' },
																																																'By ',
																																																_react2.default.createElement(
																																																				'a',
																																																				{ href: '#', className: 'post-author' },
																																																				'Tilo Mitra'
																																																),
																																																' under ',
																																																_react2.default.createElement(
																																																				'a',
																																																				{ className: 'post-category post-category-design', href: '#' },
																																																				'CSS'
																																																),
																																																' ',
																																																_react2.default.createElement(
																																																				'a',
																																																				{ className: 'post-category post-category-pure', href: '#' },
																																																				'Pure'
																																																)
																																												)
																																								),
																																								_react2.default.createElement(
																																												'div',
																																												{ className: 'post-description' },
																																												_react2.default.createElement(
																																																'p',
																																																null,
																																																'Yesterday at CSSConf, we launched Pure \u2013 a new CSS library. Phew! Here are the ',
																																																_react2.default.createElement(
																																																				'a',
																																																				{ href: 'https://speakerdeck.com/tilomitra/pure-bliss' },
																																																				'slides from the presentation'
																																																),
																																																'. Although it looks pretty minimalist, we\u2019ve been working on Pure for several months. After many iterations, we have released Pure as a set of small, responsive, CSS modules that you can use in every web project.'
																																												)
																																								)
																																				);
																																})
																												),
																												_react2.default.createElement(
																																'div',
																																{ className: 'footer' },
																																_react2.default.createElement(
																																				'div',
																																				{ className: 'pure-menu pure-menu-horizontal' },
																																				_react2.default.createElement(
																																								'ul',
																																								null,
																																								_react2.default.createElement(
																																												'li',
																																												{ className: 'pure-menu-item' },
																																												_react2.default.createElement(
																																																'a',
																																																{ href: 'http://purecss.io/', className: 'pure-menu-link' },
																																																'About'
																																												)
																																								),
																																								_react2.default.createElement(
																																												'li',
																																												{ className: 'pure-menu-item' },
																																												_react2.default.createElement(
																																																'a',
																																																{ href: 'http://twitter.com/yuilibrary/', className: 'pure-menu-link' },
																																																'Twitter'
																																												)
																																								),
																																								_react2.default.createElement(
																																												'li',
																																												{ className: 'pure-menu-item' },
																																												_react2.default.createElement(
																																																'a',
																																																{ href: 'http://github.com/yahoo/pure/', className: 'pure-menu-link' },
																																																'GitHub'
																																												)
																																								)
																																				)
																																)
																												)
																								)
																				)
																),
																_react2.default.createElement('div', { id: 'cover' })
												);
								}
				}]);
				return Home;
}(_react.Component), _class2.contextTypes = {
				router: _react2.default.PropTypes.object.isRequired
}, _temp)) || _class);
exports.default = Home;
module.exports = exports['default'];

/***/ },

/***/ 389:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=0.chunk.js.map