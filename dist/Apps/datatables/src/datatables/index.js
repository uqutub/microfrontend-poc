"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

function Datatbles(_ref) {
  var datatable = _ref.datatable;
  var arr = datatable || [{
    first: 'F1',
    last: 'L1',
    email: 'E1'
  }, {
    first: 'F2',
    last: 'L2',
    email: 'E2'
  }, {
    first: 'F3',
    last: 'L3',
    email: 'E3'
  }, {
    first: 'F4',
    last: 'L4',
    email: 'E4'
  }, {
    first: 'F5',
    last: 'L5',
    email: 'E5'
  }, {
    first: 'F6',
    last: 'L6',
    email: 'E6'
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "datatable-mfe",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Datatable MFE"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
      class: "table table-striped",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
            children: "Firstname"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
            children: "Lastname"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
            children: "Email"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
        children: arr.map(function (i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
              children: i.first
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
              children: i.last
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
              children: i.email
            })]
          });
        })
      })]
    })]
  });
}

var _default = Datatbles;
exports.default = _default;

//# sourceMappingURL=index.js.map