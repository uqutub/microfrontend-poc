"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _mikaelsTalentadore = _interopRequireDefault(require("@bit/mikaels.talentadore.datatables"));

require("./login.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Login = function Login(_ref) {
  var onLogin = _ref.onLogin,
      isLoggedin = _ref.isLoggedin,
      history = _ref.history;

  var _useState = (0, _react.useState)({
    username: "",
    password: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      creadentials = _useState2[0],
      setCreadentials = _useState2[1];

  var _useState3 = (0, _react.useState)([{
    first: 'innpt first from login',
    last: 'laaaassssst',
    email: 'emememememail login'
  }]),
      _useState4 = _slicedToArray(_useState3, 2),
      dt = _useState4[0],
      setDt = _useState4[1];

  (0, _react.useEffect)(function () {
    isLoggedin && history.push("/dashboard");
  }, [isLoggedin]);

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    onLogin(creadentials);
  };

  var onChangeText = function onChangeText(e) {
    return setCreadentials(_objectSpread(_objectSpread({}, creadentials), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var changeDatatable = function changeDatatable() {
    return setDt([{
      first: 'innpt first from login',
      last: 'laaaassssst',
      email: 'emememememail login'
    }, {
      first: 'innpt first from login',
      last: 'laaaassssst',
      email: 'emememememail login'
    }, {
      first: 'innpt first from login',
      last: 'laaaassssst',
      email: 'emememememail login'
    }, {
      first: 'innpt first from login',
      last: 'laaaassssst',
      email: 'emememememail login'
    }, {
      first: 'innpt first from login',
      last: 'laaaassssst',
      email: 'emememememail login'
    }]);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "login-box",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Login Application on React"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      children: "Username"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "text",
      name: "username",
      onChange: onChangeText,
      placeholder: "Username"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      children: "Password"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "password",
      name: "password",
      onChange: onChangeText,
      placeholder: "Password"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: onSubmit,
      children: "Login"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_mikaelsTalentadore.default, {
      datatable: dt
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      onClick: changeDatatable,
      children: "Change data via props"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Using Bootstrap Form"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      class: "input-group input-group-lg",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        class: "input-group-addon",
        id: "sizing-addon1",
        children: "@"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "text",
        class: "form-control",
        placeholder: "Username",
        "aria-describedby": "sizing-addon1"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      class: "input-group",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        class: "input-group-addon",
        id: "sizing-addon2",
        children: "@"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "text",
        class: "form-control",
        placeholder: "Username",
        "aria-describedby": "sizing-addon2"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      class: "input-group input-group-sm",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        class: "input-group-addon",
        id: "sizing-addon3",
        children: "@"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "text",
        class: "form-control",
        placeholder: "Username",
        "aria-describedby": "sizing-addon3"
      })]
    })]
  });
};

var _default = (0, _reactRouterDom.withRouter)(Login);

exports.default = _default;

//# sourceMappingURL=index.js.map