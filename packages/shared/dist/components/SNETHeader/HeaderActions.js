"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var buttonColor = {
  white: "primary",
  purple: "purple"
};

var HeaderActions = function HeaderActions(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      actions = _ref.actions,
      headerColor = _ref.headerColor;
=======
var HeaderActions = function HeaderActions(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      LoggedInActions = _ref.LoggedInActions,
      LoggedOutActions = _ref.LoggedOutActions;
>>>>>>> ad00213e6383dc46a16bf0bca66f3a3f428a8ec9

  if (isLoggedIn) {
    return _react.default.createElement(LoggedInActions, null);
  }

<<<<<<< HEAD
  return actions.map(function (action) {
    return _react.default.createElement(_SNETButton.default, _extends({
      key: action.children
    }, action, {
      color: buttonColor[headerColor]
    }));
  });
};

HeaderActions.propTypes = {
  actions: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    color: _propTypes.default.string,
    vaiant: _propTypes.default.string,
    handler: _propTypes.default.func
  })),
  headerColor: _propTypes.default.string
=======
  return _react.default.createElement(LoggedOutActions, null);
};

HeaderActions.propTypes = {
  LoggedInActions: _propTypes.default.elementType,
  LoggedOutActions: _propTypes.default.elementType
>>>>>>> ad00213e6383dc46a16bf0bca66f3a3f428a8ec9
};
var _default = HeaderActions;
exports.default = _default;