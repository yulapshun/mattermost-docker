webpackJsonp([25],{

/***/ 2209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends2 = __webpack_require__(20);\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _reactRedux = __webpack_require__(33);\n\nvar _redux = __webpack_require__(22);\n\nvar _integrations = __webpack_require__(769);\n\nvar _add_incoming_webhook = __webpack_require__(2451);\n\nvar _add_incoming_webhook2 = _interopRequireDefault(_add_incoming_webhook);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.\n// See License.txt for license information.\n\nfunction mapStateToProps(state, ownProps) {\n    return (0, _extends3.default)({}, ownProps, {\n        createIncomingHookRequest: state.requests.integrations.createIncomingHook\n    });\n}\n\nfunction mapDispatchToProps(dispatch) {\n    return {\n        actions: (0, _redux.bindActionCreators)({\n            createIncomingHook: _integrations.createIncomingHook\n        }, dispatch)\n    };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_add_incoming_webhook2.default);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIwOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb25lbnRzL2ludGVncmF0aW9ucy9jb21wb25lbnRzL2FkZF9pbmNvbWluZ193ZWJob29rL2luZGV4LmpzPzUxYjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQgTWF0dGVybW9zdCwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU2VlIExpY2Vuc2UudHh0IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7Y3JlYXRlSW5jb21pbmdIb29rfSBmcm9tICdtYXR0ZXJtb3N0LXJlZHV4L2FjdGlvbnMvaW50ZWdyYXRpb25zJztcblxuaW1wb3J0IEFkZEluY29taW5nV2ViaG9vayBmcm9tICcuL2FkZF9pbmNvbWluZ193ZWJob29rLmpzeCc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5vd25Qcm9wcyxcbiAgICAgICAgY3JlYXRlSW5jb21pbmdIb29rUmVxdWVzdDogc3RhdGUucmVxdWVzdHMuaW50ZWdyYXRpb25zLmNyZWF0ZUluY29taW5nSG9va1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgICAgICAgICBjcmVhdGVJbmNvbWluZ0hvb2tcbiAgICAgICAgfSwgZGlzcGF0Y2gpXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkSW5jb21pbmdXZWJob29rKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL2ludGVncmF0aW9ucy9jb21wb25lbnRzL2FkZF9pbmNvbWluZ193ZWJob29rL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFUQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2209\n");

/***/ }),

/***/ 2451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regenerator = __webpack_require__(77);\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(78);\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar _getPrototypeOf = __webpack_require__(7);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(8);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(9);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _propTypes = __webpack_require__(2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _es = __webpack_require__(45);\n\nvar _abstract_incoming_webhook = __webpack_require__(2175);\n\nvar _abstract_incoming_webhook2 = _interopRequireDefault(_abstract_incoming_webhook);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.\n// See License.txt for license information.\n\nvar HEADER = { id: 'integrations.add', defaultMessage: 'Add' };\nvar FOOTER = { id: 'add_incoming_webhook.save', defaultMessage: 'Save' };\n\nvar AddIncomingWebhook = function (_React$PureComponent) {\n    (0, _inherits3.default)(AddIncomingWebhook, _React$PureComponent);\n\n    function AddIncomingWebhook(props) {\n        var _this2 = this;\n\n        (0, _classCallCheck3.default)(this, AddIncomingWebhook);\n\n        var _this = (0, _possibleConstructorReturn3.default)(this, (AddIncomingWebhook.__proto__ || (0, _getPrototypeOf2.default)(AddIncomingWebhook)).call(this, props));\n\n        _this.addIncomingHook = function () {\n            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(hook) {\n                var _ref2, data;\n\n                return _regenerator2.default.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                _this.setState({ serverError: '' });\n\n                                _context.next = 3;\n                                return _this.props.actions.createIncomingHook(hook);\n\n                            case 3:\n                                _ref2 = _context.sent;\n                                data = _ref2.data;\n\n                                if (!data) {\n                                    _context.next = 8;\n                                    break;\n                                }\n\n                                _es.browserHistory.push('/' + _this.props.team.name + '/integrations/confirm?type=incoming_webhooks&id=' + data.id);\n                                return _context.abrupt('return');\n\n                            case 8:\n\n                                if (_this.props.createIncomingHookRequest.error) {\n                                    _this.setState({ serverError: _this.props.createIncomingHookRequest.error.message });\n                                }\n\n                            case 9:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, _this2);\n            }));\n\n            return function (_x) {\n                return _ref.apply(this, arguments);\n            };\n        }();\n\n        _this.state = {\n            serverError: ''\n        };\n        return _this;\n    }\n\n    (0, _createClass3.default)(AddIncomingWebhook, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(_abstract_incoming_webhook2.default, {\n                team: this.props.team,\n                header: HEADER,\n                footer: FOOTER,\n                action: this.addIncomingHook,\n                serverError: this.state.serverError\n            });\n        }\n    }]);\n    return AddIncomingWebhook;\n}(_react2.default.PureComponent);\n\nAddIncomingWebhook.propTypes = {\n\n    /**\n    * The current team\n    */\n    team: _propTypes2.default.object.isRequired,\n\n    /**\n    * The request state for createIncomingHook action. Contains status and error\n    */\n    createIncomingHookRequest: _propTypes2.default.object.isRequired,\n\n    actions: _propTypes2.default.shape({\n\n        /**\n        * The function to call to add a new incoming webhook\n        */\n        createIncomingHook: _propTypes2.default.func.isRequired\n    }).isRequired\n};\nexports.default = AddIncomingWebhook;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQ1MS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb25lbnRzL2ludGVncmF0aW9ucy9jb21wb25lbnRzL2FkZF9pbmNvbWluZ193ZWJob29rL2FkZF9pbmNvbWluZ193ZWJob29rLmpzeD80NzVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxNi1wcmVzZW50IE1hdHRlcm1vc3QsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNlZSBMaWNlbnNlLnR4dCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXIvZXM2JztcblxuaW1wb3J0IEFic3RyYWN0SW5jb21pbmdXZWJob29rIGZyb20gJ2NvbXBvbmVudHMvaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvYWJzdHJhY3RfaW5jb21pbmdfd2ViaG9vay5qc3gnO1xuXG5jb25zdCBIRUFERVIgPSB7aWQ6ICdpbnRlZ3JhdGlvbnMuYWRkJywgZGVmYXVsdE1lc3NhZ2U6ICdBZGQnfTtcbmNvbnN0IEZPT1RFUiA9IHtpZDogJ2FkZF9pbmNvbWluZ193ZWJob29rLnNhdmUnLCBkZWZhdWx0TWVzc2FnZTogJ1NhdmUnfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkSW5jb21pbmdXZWJob29rIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgKiBUaGUgY3VycmVudCB0ZWFtXG4gICAgICAgICovXG4gICAgICAgIHRlYW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgICAgICAvKipcbiAgICAgICAgKiBUaGUgcmVxdWVzdCBzdGF0ZSBmb3IgY3JlYXRlSW5jb21pbmdIb29rIGFjdGlvbi4gQ29udGFpbnMgc3RhdHVzIGFuZCBlcnJvclxuICAgICAgICAqL1xuICAgICAgICBjcmVhdGVJbmNvbWluZ0hvb2tSZXF1ZXN0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAgICAgYWN0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAqIFRoZSBmdW5jdGlvbiB0byBjYWxsIHRvIGFkZCBhIG5ldyBpbmNvbWluZyB3ZWJob29rXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgY3JlYXRlSW5jb21pbmdIb29rOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlcnZlckVycm9yOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFkZEluY29taW5nSG9vayA9IGFzeW5jIChob29rKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlcnZlckVycm9yOiAnJ30pO1xuXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IHRoaXMucHJvcHMuYWN0aW9ucy5jcmVhdGVJbmNvbWluZ0hvb2soaG9vayk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKGAvJHt0aGlzLnByb3BzLnRlYW0ubmFtZX0vaW50ZWdyYXRpb25zL2NvbmZpcm0/dHlwZT1pbmNvbWluZ193ZWJob29rcyZpZD0ke2RhdGEuaWR9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jcmVhdGVJbmNvbWluZ0hvb2tSZXF1ZXN0LmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZXJ2ZXJFcnJvcjogdGhpcy5wcm9wcy5jcmVhdGVJbmNvbWluZ0hvb2tSZXF1ZXN0LmVycm9yLm1lc3NhZ2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBYnN0cmFjdEluY29taW5nV2ViaG9va1xuICAgICAgICAgICAgICAgIHRlYW09e3RoaXMucHJvcHMudGVhbX1cbiAgICAgICAgICAgICAgICBoZWFkZXI9e0hFQURFUn1cbiAgICAgICAgICAgICAgICBmb290ZXI9e0ZPT1RFUn1cbiAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuYWRkSW5jb21pbmdIb29rfVxuICAgICAgICAgICAgICAgIHNlcnZlckVycm9yPXt0aGlzLnN0YXRlLnNlcnZlckVycm9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY29tcG9uZW50cy9pbnRlZ3JhdGlvbnMvY29tcG9uZW50cy9hZGRfaW5jb21pbmdfd2ViaG9vay9hZGRfaW5jb21pbmdfd2ViaG9vay5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBc0JBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBQ0E7QUFEQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBZUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBOzs7QUF0REE7QUFDQTtBQURBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUxBO0FBWkE7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2451\n");

/***/ })

});