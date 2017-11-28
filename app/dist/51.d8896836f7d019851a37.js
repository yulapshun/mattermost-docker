webpackJsonp([51],{

/***/ 2192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(7);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(8);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(9);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _propTypes = __webpack_require__(2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactIntl = __webpack_require__(18);\n\nvar _es = __webpack_require__(45);\n\nvar _channel_store = __webpack_require__(34);\n\nvar _channel_store2 = _interopRequireDefault(_channel_store);\n\nvar _team_store = __webpack_require__(38);\n\nvar _team_store2 = _interopRequireDefault(_team_store);\n\nvar _announcement_bar = __webpack_require__(2167);\n\nvar _announcement_bar2 = _interopRequireDefault(_announcement_bar);\n\nvar _back_button = __webpack_require__(2166);\n\nvar _back_button2 = _interopRequireDefault(_back_button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.\n// See License.txt for license information.\n\nvar CreateTeamController = function (_React$Component) {\n    (0, _inherits3.default)(CreateTeamController, _React$Component);\n\n    function CreateTeamController(props) {\n        (0, _classCallCheck3.default)(this, CreateTeamController);\n\n        var _this = (0, _possibleConstructorReturn3.default)(this, (CreateTeamController.__proto__ || (0, _getPrototypeOf2.default)(CreateTeamController)).call(this, props));\n\n        _this.submit = _this.submit.bind(_this);\n        _this.updateParent = _this.updateParent.bind(_this);\n\n        var state = {};\n        state.team = {};\n        state.wizard = 'display_name';\n        _this.state = state;\n        return _this;\n    }\n\n    (0, _createClass3.default)(CreateTeamController, [{\n        key: 'submit',\n        value: function submit() {\n            // todo fill in\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            _es.browserHistory.push('/create_team/display_name');\n        }\n    }, {\n        key: 'updateParent',\n        value: function updateParent(state) {\n            this.setState(state);\n            _es.browserHistory.push('/create_team/' + state.wizard);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var description = null;\n            if (global.window.mm_license.IsLicensed === 'true' && global.window.mm_license.CustomBrand === 'true' && global.window.mm_config.EnableCustomBrand === 'true') {\n                description = global.window.mm_config.CustomDescriptionText;\n            } else {\n                description = _react2.default.createElement(_reactIntl.FormattedMessage, {\n                    id: 'web.root.signup_info',\n                    defaultMessage: 'All team communication in one place, searchable and accessible anywhere'\n                });\n            }\n\n            var url = '/select_team';\n            var team = _team_store2.default.getCurrent();\n            var channel = _channel_store2.default.getCurrent();\n            if (team) {\n                url = '/' + team.name;\n                if (channel) {\n                    url += '/channels/' + channel.name;\n                }\n            }\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_announcement_bar2.default, null),\n                _react2.default.createElement(_back_button2.default, { url: url }),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-sm-12' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'signup-team__container' },\n                        _react2.default.createElement(\n                            'h1',\n                            null,\n                            global.window.mm_config.SiteName\n                        ),\n                        _react2.default.createElement(\n                            'h4',\n                            { className: 'color--light' },\n                            description\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'signup__content' },\n                            _react2.default.cloneElement(this.props.children, {\n                                state: this.state,\n                                updateParent: this.updateParent\n                            })\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n    return CreateTeamController;\n}(_react2.default.Component);\n\nexports.default = CreateTeamController;\n\n\nCreateTeamController.propTypes = {\n    children: _propTypes2.default.node\n};\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE5Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb25lbnRzL2NyZWF0ZV90ZWFtL2NyZWF0ZV90ZWFtX2NvbnRyb2xsZXIuanN4Pzk2ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE1LXByZXNlbnQgTWF0dGVybW9zdCwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU2VlIExpY2Vuc2UudHh0IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXIvZXM2JztcblxuaW1wb3J0IENoYW5uZWxTdG9yZSBmcm9tICdzdG9yZXMvY2hhbm5lbF9zdG9yZS5qc3gnO1xuaW1wb3J0IFRlYW1TdG9yZSBmcm9tICdzdG9yZXMvdGVhbV9zdG9yZS5qc3gnO1xuXG5pbXBvcnQgQW5ub3VuY2VtZW50QmFyIGZyb20gJ2NvbXBvbmVudHMvYW5ub3VuY2VtZW50X2Jhcic7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9iYWNrX2J1dHRvbi5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVUZWFtQ29udHJvbGxlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVQYXJlbnQgPSB0aGlzLnVwZGF0ZVBhcmVudC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge307XG4gICAgICAgIHN0YXRlLnRlYW0gPSB7fTtcbiAgICAgICAgc3RhdGUud2l6YXJkID0gJ2Rpc3BsYXlfbmFtZSc7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIC8vIHRvZG8gZmlsbCBpblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvY3JlYXRlX3RlYW0vZGlzcGxheV9uYW1lJyk7XG4gICAgfVxuXG4gICAgdXBkYXRlUGFyZW50KHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvY3JlYXRlX3RlYW0vJyArIHN0YXRlLndpemFyZCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICBpZiAoZ2xvYmFsLndpbmRvdy5tbV9saWNlbnNlLklzTGljZW5zZWQgPT09ICd0cnVlJyAmJiBnbG9iYWwud2luZG93Lm1tX2xpY2Vuc2UuQ3VzdG9tQnJhbmQgPT09ICd0cnVlJyAmJiBnbG9iYWwud2luZG93Lm1tX2NvbmZpZy5FbmFibGVDdXN0b21CcmFuZCA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGdsb2JhbC53aW5kb3cubW1fY29uZmlnLkN1c3RvbURlc2NyaXB0aW9uVGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gKFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlkPSd3ZWIucm9vdC5zaWdudXBfaW5mbydcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J0FsbCB0ZWFtIGNvbW11bmljYXRpb24gaW4gb25lIHBsYWNlLCBzZWFyY2hhYmxlIGFuZCBhY2Nlc3NpYmxlIGFueXdoZXJlJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9ICcvc2VsZWN0X3RlYW0nO1xuICAgICAgICBjb25zdCB0ZWFtID0gVGVhbVN0b3JlLmdldEN1cnJlbnQoKTtcbiAgICAgICAgY29uc3QgY2hhbm5lbCA9IENoYW5uZWxTdG9yZS5nZXRDdXJyZW50KCk7XG4gICAgICAgIGlmICh0ZWFtKSB7XG4gICAgICAgICAgICB1cmwgPSBgLyR7dGVhbS5uYW1lfWA7XG4gICAgICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIHVybCArPSBgL2NoYW5uZWxzLyR7Y2hhbm5lbC5uYW1lfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QW5ub3VuY2VtZW50QmFyLz5cbiAgICAgICAgICAgICAgICA8QmFja0J1dHRvbiB1cmw9e3VybH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lnbnVwLXRlYW1fX2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2dsb2JhbC53aW5kb3cubW1fY29uZmlnLlNpdGVOYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdjb2xvci0tbGlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lnbnVwX19jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcmVudDogdGhpcy51cGRhdGVQYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ3JlYXRlVGVhbUNvbnRyb2xsZXIucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL2NyZWF0ZV90ZWFtL2NyZWF0ZV90ZWFtX2NvbnRyb2xsZXIuanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFiQTtBQUNBO0FBQ0E7QUFZQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFMQTtBQURBO0FBSEE7QUFtQkE7OztBQXJFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBc0VBO0FBQ0E7QUFEQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2192\n");

/***/ })

});