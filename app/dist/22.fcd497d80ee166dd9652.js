webpackJsonp([22],{

/***/ 2214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _values = __webpack_require__(318);\n\nvar _values2 = _interopRequireDefault(_values);\n\nvar _extends2 = __webpack_require__(20);\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _reactRedux = __webpack_require__(33);\n\nvar _redux = __webpack_require__(22);\n\nvar _integrations = __webpack_require__(769);\n\nvar _integrations2 = __webpack_require__(2168);\n\nvar _users = __webpack_require__(51);\n\nvar _commands_container = __webpack_require__(2457);\n\nvar _commands_container2 = _interopRequireDefault(_commands_container);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.\n// See License.txt for license information.\n\nfunction mapStateToProps(state, ownProps) {\n    return (0, _extends3.default)({}, ownProps, {\n        commands: (0, _values2.default)((0, _integrations2.getCommands)(state)),\n        users: (0, _users.getUsers)(state)\n    });\n}\n\nfunction mapDispatchToProps(dispatch) {\n    return {\n        actions: (0, _redux.bindActionCreators)({\n            getCustomTeamCommands: _integrations.getCustomTeamCommands\n        }, dispatch)\n    };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_commands_container2.default);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIxNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb25lbnRzL2ludGVncmF0aW9ucy9jb21wb25lbnRzL2NvbW1hbmRzX2NvbnRhaW5lci9pbmRleC5qcz9iNzhkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxNyBNYXR0ZXJtb3N0LCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTZWUgTGljZW5zZS50eHQgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHtnZXRDdXN0b21UZWFtQ29tbWFuZHN9IGZyb20gJ21hdHRlcm1vc3QtcmVkdXgvYWN0aW9ucy9pbnRlZ3JhdGlvbnMnO1xuaW1wb3J0IHtnZXRDb21tYW5kc30gZnJvbSAnbWF0dGVybW9zdC1yZWR1eC9zZWxlY3RvcnMvZW50aXRpZXMvaW50ZWdyYXRpb25zJztcbmltcG9ydCB7Z2V0VXNlcnN9IGZyb20gJ21hdHRlcm1vc3QtcmVkdXgvc2VsZWN0b3JzL2VudGl0aWVzL3VzZXJzJztcblxuaW1wb3J0IENvbW1hbmRzQ29udGFpbmVyIGZyb20gJy4vY29tbWFuZHNfY29udGFpbmVyLmpzeCc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5vd25Qcm9wcyxcbiAgICAgICAgY29tbWFuZHM6IE9iamVjdC52YWx1ZXMoZ2V0Q29tbWFuZHMoc3RhdGUpKSxcbiAgICAgICAgdXNlcnM6IGdldFVzZXJzKHN0YXRlKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgICAgICAgICBnZXRDdXN0b21UZWFtQ29tbWFuZHNcbiAgICAgICAgfSwgZGlzcGF0Y2gpXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29tbWFuZHNDb250YWluZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvY29tbWFuZHNfY29udGFpbmVyL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2214\n");

/***/ }),

/***/ 2457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(7);\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(5);\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(6);\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(8);\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(9);\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _propTypes = __webpack_require__(2);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.\n// See License.txt for license information.\n\nvar CommandsContainer = function (_React$PureComponent) {\n    (0, _inherits3.default)(CommandsContainer, _React$PureComponent);\n\n    function CommandsContainer(props) {\n        (0, _classCallCheck3.default)(this, CommandsContainer);\n\n        var _this = (0, _possibleConstructorReturn3.default)(this, (CommandsContainer.__proto__ || (0, _getPrototypeOf2.default)(CommandsContainer)).call(this, props));\n\n        _this.state = {\n            loading: true\n        };\n        return _this;\n    }\n\n    (0, _createClass3.default)(CommandsContainer, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            if (window.mm_config.EnableCommands === 'true') {\n                this.props.actions.getCustomTeamCommands(this.props.team.id).then(function () {\n                    return _this2.setState({ loading: false });\n                });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.cloneElement(this.props.children, {\n                    loading: this.state.loading,\n                    commands: this.props.commands || [],\n                    users: this.props.users,\n                    team: this.props.team,\n                    user: this.props.user,\n                    isAdmin: this.props.isAdmin\n                })\n            );\n        }\n    }]);\n    return CommandsContainer;\n}(_react2.default.PureComponent);\n\nCommandsContainer.propTypes = {\n\n    /**\n    * The team data needed to pass into child components\n    */\n    team: _propTypes2.default.object,\n\n    /**\n    * The user data needed to pass into child components\n    */\n    user: _propTypes2.default.object,\n\n    /**\n    * The children prop needed to render child component\n    */\n    children: _propTypes2.default.node.isRequired,\n\n    /**\n    * Set if user is admin\n    */\n    isAdmin: _propTypes2.default.bool,\n\n    /**\n    * The users collection\n    */\n    users: _propTypes2.default.object,\n\n    /**\n    * Installed slash commands to display\n    */\n    commands: _propTypes2.default.array,\n\n    actions: _propTypes2.default.shape({\n\n        /**\n        * The function to call to fetch team commands\n        */\n        getCustomTeamCommands: _propTypes2.default.func.isRequired\n    }).isRequired\n};\nexports.default = CommandsContainer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQ1Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb25lbnRzL2ludGVncmF0aW9ucy9jb21wb25lbnRzL2NvbW1hbmRzX2NvbnRhaW5lci9jb21tYW5kc19jb250YWluZXIuanN4PzUzMWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQgTWF0dGVybW9zdCwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU2VlIExpY2Vuc2UudHh0IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFuZHNDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAqIFRoZSB0ZWFtIGRhdGEgbmVlZGVkIHRvIHBhc3MgaW50byBjaGlsZCBjb21wb25lbnRzXG4gICAgICAgICovXG4gICAgICAgIHRlYW06IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICogVGhlIHVzZXIgZGF0YSBuZWVkZWQgdG8gcGFzcyBpbnRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgICAgKi9cbiAgICAgICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgICAgICAvKipcbiAgICAgICAgKiBUaGUgY2hpbGRyZW4gcHJvcCBuZWVkZWQgdG8gcmVuZGVyIGNoaWxkIGNvbXBvbmVudFxuICAgICAgICAqL1xuICAgICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAgICAgICAvKipcbiAgICAgICAgKiBTZXQgaWYgdXNlciBpcyBhZG1pblxuICAgICAgICAqL1xuICAgICAgICBpc0FkbWluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgICAgICAvKipcbiAgICAgICAgKiBUaGUgdXNlcnMgY29sbGVjdGlvblxuICAgICAgICAqL1xuICAgICAgICB1c2VyczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgICAgICAvKipcbiAgICAgICAgKiBJbnN0YWxsZWQgc2xhc2ggY29tbWFuZHMgdG8gZGlzcGxheVxuICAgICAgICAqL1xuICAgICAgICBjb21tYW5kczogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgICAgIGFjdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBUaGUgZnVuY3Rpb24gdG8gY2FsbCB0byBmZXRjaCB0ZWFtIGNvbW1hbmRzXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0Q3VzdG9tVGVhbUNvbW1hbmRzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubW1fY29uZmlnLkVuYWJsZUNvbW1hbmRzID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5nZXRDdXN0b21UZWFtQ29tbWFuZHModGhpcy5wcm9wcy50ZWFtLmlkKS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0aGlzLnN0YXRlLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmRzOiB0aGlzLnByb3BzLmNvbW1hbmRzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICB1c2VyczogdGhpcy5wcm9wcy51c2VycyxcbiAgICAgICAgICAgICAgICAgICAgdGVhbTogdGhpcy5wcm9wcy50ZWFtLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB0aGlzLnByb3BzLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgIGlzQWRtaW46IHRoaXMucHJvcHMuaXNBZG1pblxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNvbXBvbmVudHMvaW50ZWdyYXRpb25zL2NvbXBvbmVudHMvY29tbWFuZHNfY29udGFpbmVyL2NvbW1hbmRzX2NvbnRhaW5lci5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFMQTtBQUNBO0FBQ0E7QUFJQTs7O0FBMENBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFXQTs7O0FBdEVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUxBO0FBaENBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2457\n");

/***/ })

});