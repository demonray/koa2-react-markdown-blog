webpackJsonp([1,3],{

/***/ 388:
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

var _dec, _class;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(60);

var _reactRedux = __webpack_require__(106);

var _articalActions = __webpack_require__(168);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticalList = (_dec = (0, _reactRedux.connect)(function (state) {
	return state.articals;
}), _dec(_class = function (_Component) {
	(0, _inherits3.default)(ArticalList, _Component);
	(0, _createClass3.default)(ArticalList, null, [{
		key: 'fetchData',
		value: function fetchData(state, dispatch) {
			var fetchTasks = [];
			fetchTasks.push(dispatch((0, _articalActions.fetchAticals)(state)));
			return fetchTasks;
		}
	}]);

	function ArticalList(props) {
		(0, _classCallCheck3.default)(this, ArticalList);
		return (0, _possibleConstructorReturn3.default)(this, (ArticalList.__proto__ || (0, _getPrototypeOf2.default)(ArticalList)).call(this, props));
	}

	(0, _createClass3.default)(ArticalList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var loaded = this.props.loaded;

			if (!loaded) {
				this.constructor.fetchData(this.props, this.props.dispatch);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var articalList = this.props.articals;
			return _react2.default.createElement(
				'div',
				null,
				articalList.map(function (artical) {
					return _react2.default.createElement(
						'li',
						{ key: artical.articalId },
						_react2.default.createElement(
							'a',
							{ href: '/artical/' + artical.articalId },
							artical.Title
						)
					);
				})
			);
		}
	}]);
	return ArticalList;
}(_react.Component)) || _class);
exports.default = ArticalList;
module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=1.chunk.js.map