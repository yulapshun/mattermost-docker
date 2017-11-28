webpackJsonp([16],{

/***/ 2231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = GetIosApp;\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactIntl = __webpack_require__(18);\n\nvar _reactRouter = __webpack_require__(455);\n\nvar _url = __webpack_require__(79);\n\nvar _appStoreButton = __webpack_require__(2586);\n\nvar _appStoreButton2 = _interopRequireDefault(_appStoreButton);\n\nvar _iphone6Mockup = __webpack_require__(2587);\n\nvar _iphone6Mockup2 = _interopRequireDefault(_iphone6Mockup);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.\n// See License.txt for license information.\n\nfunction GetIosApp() {\n    return _react2.default.createElement(\n        'div',\n        { className: 'get-app get-ios-app' },\n        _react2.default.createElement(\n            'h1',\n            { className: 'get-app__header' },\n            _react2.default.createElement(_reactIntl.FormattedMessage, {\n                id: 'get_app.iosHeader',\n                defaultMessage: 'Mattermost works best if you switch to our iPhone app'\n            })\n        ),\n        _react2.default.createElement('hr', null),\n        _react2.default.createElement(\n            'a',\n            {\n                className: 'get-ios-app__app-store-link',\n                href: (0, _url.useSafeUrl)(global.window.mm_config.IosAppDownloadLink),\n                rel: 'noopener noreferrer'\n            },\n            _react2.default.createElement('img', { src: _appStoreButton2.default })\n        ),\n        _react2.default.createElement('img', {\n            className: 'get-app__screenshot',\n            src: _iphone6Mockup2.default\n        }),\n        _react2.default.createElement(\n            'h2',\n            { className: 'get-ios-app__already-have-it' },\n            _react2.default.createElement(_reactIntl.FormattedMessage, {\n                id: 'get_app.alreadyHaveIt',\n                defaultMessage: 'Already have it?'\n            })\n        ),\n        _react2.default.createElement(\n            'a',\n            {\n                className: 'btn btn-primary get-ios-app__open-mattermost',\n                href: 'mattermost://'\n            },\n            _react2.default.createElement(_reactIntl.FormattedMessage, {\n                id: 'get_app.openMattermost',\n                defaultMessage: 'Open Mattermost'\n            })\n        ),\n        _react2.default.createElement(\n            'span',\n            { className: 'get-app__continue-with-browser' },\n            _react2.default.createElement(_reactIntl.FormattedMessage, {\n                id: 'get_app.continueWithBrowser',\n                defaultMessage: 'Or {link}',\n                values: {\n                    link: _react2.default.createElement(\n                        _reactRouter.Link,\n                        { to: '/switch_team' },\n                        _react2.default.createElement(_reactIntl.FormattedMessage, {\n                            id: 'get_app.continueWithBrowserLink',\n                            defaultMessage: 'continue with browser'\n                        })\n                    )\n                }\n            })\n        )\n    );\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIzMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb21wb25lbnRzL2dldF9pb3NfYXBwL2dldF9pb3NfYXBwLmpzeD81ZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxNi1wcmVzZW50IE1hdHRlcm1vc3QsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNlZSBMaWNlbnNlLnR4dCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7dXNlU2FmZVVybH0gZnJvbSAndXRpbHMvdXJsJztcblxuaW1wb3J0IEFwcFN0b3JlQnV0dG9uIGZyb20gJ2ltYWdlcy9hcHAtc3RvcmUtYnV0dG9uLnBuZyc7XG5pbXBvcnQgSVBob25lNk1vY2t1cCBmcm9tICdpbWFnZXMvaXBob25lLTYtbW9ja3VwLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldElvc0FwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2V0LWFwcCBnZXQtaW9zLWFwcCc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdnZXQtYXBwX19oZWFkZXInPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlkPSdnZXRfYXBwLmlvc0hlYWRlcidcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J01hdHRlcm1vc3Qgd29ya3MgYmVzdCBpZiB5b3Ugc3dpdGNoIHRvIG91ciBpUGhvbmUgYXBwJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdnZXQtaW9zLWFwcF9fYXBwLXN0b3JlLWxpbmsnXG4gICAgICAgICAgICAgICAgaHJlZj17dXNlU2FmZVVybChnbG9iYWwud2luZG93Lm1tX2NvbmZpZy5Jb3NBcHBEb3dubG9hZExpbmspfVxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17QXBwU3RvcmVCdXR0b259Lz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dldC1hcHBfX3NjcmVlbnNob3QnXG4gICAgICAgICAgICAgICAgc3JjPXtJUGhvbmU2TW9ja3VwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2dldC1pb3MtYXBwX19hbHJlYWR5LWhhdmUtaXQnPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlkPSdnZXRfYXBwLmFscmVhZHlIYXZlSXQnXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPSdBbHJlYWR5IGhhdmUgaXQ/J1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSBnZXQtaW9zLWFwcF9fb3Blbi1tYXR0ZXJtb3N0J1xuICAgICAgICAgICAgICAgIGhyZWY9J21hdHRlcm1vc3Q6Ly8nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWQ9J2dldF9hcHAub3Blbk1hdHRlcm1vc3QnXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPSdPcGVuIE1hdHRlcm1vc3QnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2V0LWFwcF9fY29udGludWUtd2l0aC1icm93c2VyJz5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZD0nZ2V0X2FwcC5jb250aW51ZVdpdGhCcm93c2VyJ1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nT3Ige2xpbmt9J1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL3N3aXRjaF90ZWFtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdnZXRfYXBwLmNvbnRpbnVlV2l0aEJyb3dzZXJMaW5rJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9J2NvbnRpbnVlIHdpdGggYnJvd3NlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb21wb25lbnRzL2dldF9pb3NfYXBwL2dldF9pb3NfYXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFZQTtBQUNBO0FBVkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFGQTtBQUhBO0FBREE7QUFsQ0E7QUFvREE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2231\n");

/***/ }),

/***/ 2586:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"files/2827d14f5d3cfea4480bcf8499718513.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU4Ni5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ltYWdlcy9hcHAtc3RvcmUtYnV0dG9uLnBuZz8yMmUyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZpbGVzLzI4MjdkMTRmNWQzY2ZlYTQ0ODBiY2Y4NDk5NzE4NTEzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vaW1hZ2VzL2FwcC1zdG9yZS1idXR0b24ucG5nXG4vLyBtb2R1bGUgaWQgPSAyNTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2586\n");

/***/ }),

/***/ 2587:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"files/404129e84d1b42ae8fcf587db11f977f.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU4Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ltYWdlcy9pcGhvbmUtNi1tb2NrdXAucG5nP2ExZWQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmlsZXMvNDA0MTI5ZTg0ZDFiNDJhZThmY2Y1ODdkYjExZjk3N2YucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbWFnZXMvaXBob25lLTYtbW9ja3VwLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjU4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE2Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2587\n");

/***/ })

});