'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function windowDimensions(WrappedComponent) {
  var WindowDimensions = function (_React$Component) {
    _inherits(WindowDimensions, _React$Component);

    function WindowDimensions(props) {
      _classCallCheck(this, WindowDimensions);

      var _this = _possibleConstructorReturn(this, (WindowDimensions.__proto__ || Object.getPrototypeOf(WindowDimensions)).call(this, props));

      _this.state = {
        width: '0',
        height: '0'
      };

      _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);
      return _this;
    }

    _createClass(WindowDimensions, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
    }, {
      key: 'updateWindowDimensions',
      value: function updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, {
          windowWidth: this.state.width,
          windowHeight: this.state.height
        });
      }
    }]);

    return WindowDimensions;
  }(_react2.default.Component);

  WindowDimensions.displayName = 'WindowDimensions(' + getDisplayName(WrappedComponent) + ')';

  return WindowDimensions;
}

exports.default = windowDimensions;