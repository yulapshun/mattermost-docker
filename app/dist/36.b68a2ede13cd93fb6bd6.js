webpackJsonp([36],{

/***/ 2202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(7);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(8);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(9);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _propTypes = __webpack_require__(2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactIntl = __webpack_require__(18);\n\nvar _es = __webpack_require__(45);\n\nvar _global_actions = __webpack_require__(57);\n\nvar _logo = __webpack_require__(2165);\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nvar _back_button = __webpack_require__(2166);\n\nvar _back_button2 = _interopRequireDefault(_back_button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MFAController = function (_React$Component) {\n    (0, _inherits3.default)(MFAController, _React$Component);\n\n    function MFAController() {\n        (0, _classCallCheck3.default)(this, MFAController);\n        return (0, _possibleConstructorReturn3.default)(this, (MFAController.__proto__ || (0, _getPrototypeOf2.default)(MFAController)).apply(this, arguments));\n    }\n\n    (0, _createClass3.default)(MFAController, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            if (window.mm_license.MFA !== 'true' || window.mm_config.EnableMultifactorAuthentication !== 'true') {\n                _es.browserHistory.push('/');\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var backButton = void 0;\n            if (window.mm_config.EnforceMultifactorAuthentication === 'true') {\n                backButton = _react2.default.createElement(\n                    'div',\n                    { className: 'signup-header' },\n                    _react2.default.createElement(\n                        'a',\n                        {\n                            href: '#',\n                            onClick: function onClick(e) {\n                                e.preventDefault();\n                                (0, _global_actions.emitUserLoggedOutEvent)('/login');\n                            }\n                        },\n                        _react2.default.createElement('span', { className: 'fa fa-chevron-left' }),\n                        _react2.default.createElement(_reactIntl.FormattedMessage, {\n                            id: 'web.header.logout',\n                            defaultMessage: 'Logout'\n                        })\n                    )\n                );\n            } else {\n                backButton = _react2.default.createElement(_back_button2.default, null);\n            }\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'inner-wrap sticky' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'content' },\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        backButton,\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'col-sm-12' },\n                            _react2.default.createElement(\n                                'div',\n                                { className: 'signup-team__container' },\n                                _react2.default.createElement(\n                                    'h3',\n                                    null,\n                                    _react2.default.createElement(_reactIntl.FormattedMessage, {\n                                        id: 'mfa.setupTitle',\n                                        defaultMessage: 'Multi-factor Authentication Setup'\n                                    })\n                                ),\n                                _react2.default.createElement('img', {\n                                    className: 'signup-team-logo',\n                                    src: _logo2.default\n                                }),\n                                _react2.default.createElement(\n                                    'div',\n                                    { id: 'mfa' },\n                                    _react2.default.cloneElement(this.props.children, {})\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n    return MFAController;\n}(_react2.default.Component); // Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.\n// See License.txt for license information.\n\nexports.default = MFAController;\n\n\nMFAController.defaultProps = {};\nMFAController.propTypes = {\n    location: _propTypes2.default.object.isRequired,\n    children: _propTypes2.default.node\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIwMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb25lbnRzL21mYS9tZmFfY29udHJvbGxlci5qc3g/YWQ3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTYtcHJlc2VudCBNYXR0ZXJtb3N0LCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTZWUgTGljZW5zZS50eHQgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlci9lczYnO1xuXG5pbXBvcnQge2VtaXRVc2VyTG9nZ2VkT3V0RXZlbnR9IGZyb20gJ2FjdGlvbnMvZ2xvYmFsX2FjdGlvbnMuanN4JztcblxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICdpbWFnZXMvbG9nby5wbmcnO1xuXG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9iYWNrX2J1dHRvbi5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNRkFDb250cm9sbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tbV9saWNlbnNlLk1GQSAhPT0gJ3RydWUnIHx8IHdpbmRvdy5tbV9jb25maWcuRW5hYmxlTXVsdGlmYWN0b3JBdXRoZW50aWNhdGlvbiAhPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBiYWNrQnV0dG9uO1xuICAgICAgICBpZiAod2luZG93Lm1tX2NvbmZpZy5FbmZvcmNlTXVsdGlmYWN0b3JBdXRoZW50aWNhdGlvbiA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBiYWNrQnV0dG9uID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWdudXAtaGVhZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0VXNlckxvZ2dlZE91dEV2ZW50KCcvbG9naW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmEgZmEtY2hldnJvbi1sZWZ0Jy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd3ZWIuaGVhZGVyLmxvZ291dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nTG9nb3V0J1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhY2tCdXR0b24gPSAoPEJhY2tCdXR0b24vPik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lubmVyLXdyYXAgc3RpY2t5Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YmFja0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWdudXAtdGVhbV9fY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbWZhLnNldHVwVGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J011bHRpLWZhY3RvciBBdXRoZW50aWNhdGlvbiBTZXR1cCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2lnbnVwLXRlYW0tbG9nbydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nb0ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtZmEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7fSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5NRkFDb250cm9sbGVyLmRlZmF1bHRQcm9wcyA9IHtcbn07XG5NRkFDb250cm9sbGVyLnByb3BUeXBlcyA9IHtcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL21mYS9tZmFfY29udHJvbGxlci5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQURBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFEQTtBQUZBO0FBREE7QUFEQTtBQXlCQTs7O0FBekRBO0FBYkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQTBEQTtBQUVBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2202\n");

/***/ })

});