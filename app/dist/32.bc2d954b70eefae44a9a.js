webpackJsonp([32],{

/***/ 2229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(7);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(8);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(9);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _propTypes = __webpack_require__(2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactIntl = __webpack_require__(18);\n\nvar _user_actions = __webpack_require__(71);\n\nvar _back_button = __webpack_require__(2166);\n\nvar _back_button2 = _interopRequireDefault(_back_button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ShouldVerifyEmail = function (_React$Component) {\n    (0, _inherits3.default)(ShouldVerifyEmail, _React$Component);\n\n    function ShouldVerifyEmail(props) {\n        (0, _classCallCheck3.default)(this, ShouldVerifyEmail);\n\n        var _this = (0, _possibleConstructorReturn3.default)(this, (ShouldVerifyEmail.__proto__ || (0, _getPrototypeOf2.default)(ShouldVerifyEmail)).call(this, props));\n\n        _this.handleResend = _this.handleResend.bind(_this);\n\n        _this.state = {\n            resendStatus: 'none'\n        };\n        return _this;\n    }\n\n    (0, _createClass3.default)(ShouldVerifyEmail, [{\n        key: 'handleResend',\n        value: function handleResend() {\n            var _this2 = this;\n\n            var email = this.props.location.query.email;\n\n            this.setState({ resendStatus: 'sending' });\n\n            (0, _user_actions.resendVerification)(email, function () {\n                _this2.setState({ resendStatus: 'success' });\n            }, function () {\n                _this2.setState({ resendStatus: 'failure' });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var resendConfirm = '';\n            if (this.state.resendStatus === 'success') {\n                resendConfirm = _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(\n                        'p',\n                        { className: 'alert alert-success' },\n                        _react2.default.createElement('i', { className: 'fa fa-check' }),\n                        _react2.default.createElement(_reactIntl.FormattedMessage, {\n                            id: 'email_verify.sent',\n                            defaultMessage: ' Verification email sent.'\n                        })\n                    )\n                );\n            }\n\n            if (this.state.resendStatus === 'failure') {\n                resendConfirm = _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement('br', null),\n                    _react2.default.createElement(\n                        'p',\n                        { className: 'alert alert-danger' },\n                        _react2.default.createElement('i', { className: 'fa fa-times' }),\n                        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'email_verify.failed' })\n                    )\n                );\n            }\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_back_button2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-sm-12' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'signup-team__container' },\n                        _react2.default.createElement(\n                            'h3',\n                            null,\n                            _react2.default.createElement(_reactIntl.FormattedMessage, {\n                                id: 'email_verify.almost',\n                                defaultMessage: '{siteName}: You are almost done',\n                                values: {\n                                    siteName: global.window.mm_config.SiteName\n                                }\n                            })\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            null,\n                            _react2.default.createElement(\n                                'p',\n                                null,\n                                _react2.default.createElement(_reactIntl.FormattedMessage, {\n                                    id: 'email_verify.notVerifiedBody',\n                                    defaultMessage: 'Please verify your email address. Check your inbox for an email.'\n                                })\n                            ),\n                            _react2.default.createElement(\n                                'button',\n                                {\n                                    onClick: this.handleResend,\n                                    className: 'btn btn-primary'\n                                },\n                                _react2.default.createElement(_reactIntl.FormattedMessage, {\n                                    id: 'email_verify.resend',\n                                    defaultMessage: 'Resend Email'\n                                })\n                            ),\n                            resendConfirm\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n    return ShouldVerifyEmail;\n}(_react2.default.Component); // Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.\n// See License.txt for license information.\n\nexports.default = ShouldVerifyEmail;\n\n\nShouldVerifyEmail.defaultProps = {};\nShouldVerifyEmail.propTypes = {\n    location: _propTypes2.default.object.isRequired\n};\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIyOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb25lbnRzL3Nob3VsZF92ZXJpZnlfZW1haWwuanN4PzJjYTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE2LXByZXNlbnQgTWF0dGVybW9zdCwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU2VlIExpY2Vuc2UudHh0IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7cmVzZW5kVmVyaWZpY2F0aW9ufSBmcm9tICdhY3Rpb25zL3VzZXJfYWN0aW9ucy5qc3gnO1xuXG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9iYWNrX2J1dHRvbi5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG91bGRWZXJpZnlFbWFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzZW5kID0gdGhpcy5oYW5kbGVSZXNlbmQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmVzZW5kU3RhdHVzOiAnbm9uZSdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaGFuZGxlUmVzZW5kKCkge1xuICAgICAgICBjb25zdCBlbWFpbCA9IHRoaXMucHJvcHMubG9jYXRpb24ucXVlcnkuZW1haWw7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVzZW5kU3RhdHVzOiAnc2VuZGluZyd9KTtcblxuICAgICAgICByZXNlbmRWZXJpZmljYXRpb24oXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXNlbmRTdGF0dXM6ICdzdWNjZXNzJ30pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXNlbmRTdGF0dXM6ICdmYWlsdXJlJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCByZXNlbmRDb25maXJtID0gJyc7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlc2VuZFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICByZXNlbmRDb25maXJtID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWNoZWNrJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbF92ZXJpZnkuc2VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nIFZlcmlmaWNhdGlvbiBlbWFpbCBzZW50LidcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZXNlbmRTdGF0dXMgPT09ICdmYWlsdXJlJykge1xuICAgICAgICAgICAgcmVzZW5kQ29uZmlybSA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXRpbWVzJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD0nZW1haWxfdmVyaWZ5LmZhaWxlZCcvPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJhY2tCdXR0b24vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tMTInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lnbnVwLXRlYW1fX2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsX3ZlcmlmeS5hbG1vc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPSd7c2l0ZU5hbWV9OiBZb3UgYXJlIGFsbW9zdCBkb25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVOYW1lOiBnbG9iYWwud2luZG93Lm1tX2NvbmZpZy5TaXRlTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbF92ZXJpZnkubm90VmVyaWZpZWRCb2R5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J1BsZWFzZSB2ZXJpZnkgeW91ciBlbWFpbCBhZGRyZXNzLiBDaGVjayB5b3VyIGluYm94IGZvciBhbiBlbWFpbC4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZXNlbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbF92ZXJpZnkucmVzZW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J1Jlc2VuZCBFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzZW5kQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU2hvdWxkVmVyaWZ5RW1haWwuZGVmYXVsdFByb3BzID0ge1xufTtcblNob3VsZFZlcmlmeUVtYWlsLnByb3BUeXBlcyA9IHtcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvc2hvdWxkX3ZlcmlmeV9lbWFpbC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUxBO0FBUUE7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBRkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7QUFoQkE7QUFWQTtBQURBO0FBRkE7QUFtQ0E7OztBQTFGQTtBQVZBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUEyRkE7QUFFQTtBQUNBO0FBREE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2229\n");

/***/ })

});