'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain projects\\kickstarter\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:

                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:

                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { className: 'btn btn-block', color: 'green', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Contribute'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkZpZWxkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iLCJoZWFkZXIiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLHFFQUFuQjs7O0FBT0EsSUFBSUMsaUJBQWlCLFVBQVVDLFVBQVYsRUFBc0I7QUFDekMsMEJBQVVELGNBQVYsRUFB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LE1BQU4sQ0FBYTNDLEtBQXRCLEVBQWhCLENBQVA7QUFDRCxTQUp3QjtBQUt6QjRDLGVBQU8sT0FMa0I7QUFNekJDLHVCQUFlLE9BTlU7QUFPekJQLGtCQUFVO0FBQ1JDLG9CQUFVMUQsWUFERjtBQUVSMkQsc0JBQVk7QUFGSjtBQVBlLE9BQTNCLENBbEJGLENBUEssRUFzQ0wsZ0JBQU1KLGFBQU4sMkJBQTZCLEVBQUVDLE9BQU8sSUFBVCxFQUFlUyxRQUFRLE9BQXZCLEVBQWdDQyxTQUFTLEtBQUtoRCxLQUFMLENBQVdFLFlBQXBELEVBQWtFcUMsVUFBVTtBQUNyR0Msb0JBQVUxRCxZQUQyRjtBQUVyRzJELHNCQUFZO0FBRnlGO0FBQTVFLE9BQTdCLENBdENLLEVBMkNMLGdCQUFNSixhQUFOLDBCQUVFLEVBQUVZLFdBQVcsZUFBYixFQUE4QkMsT0FBTyxPQUFyQyxFQUE4Qy9DLFNBQVMsS0FBS0gsS0FBTCxDQUFXRyxPQUFsRSxFQUEyRW9DLFVBQVU7QUFDakZDLG9CQUFVMUQsWUFEdUU7QUFFakYyRCxzQkFBWTtBQUZxRTtBQUFyRixPQUZGLEVBT0UsWUFQRixDQTNDSyxDQUFQO0FBcUREO0FBMUQyQixHQUFELENBQTdCOztBQTZEQSxTQUFPMUQsY0FBUDtBQUNELENBeklvQixrQkFBckI7O2tCQTJJZUEsYyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJ0Q6XFxcXGJsb2NrY2hhaW4gcHJvamVjdHNcXFxca2lja3N0YXJ0ZXJcXFxcY29tcG9uZW50c1xcXFxDb250cmlidXRlRm9ybS5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbnZhciBDb250cmlidXRlRm9ybSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb250cmlidXRlRm9ybSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29udHJpYnV0ZUZvcm0oKSB7XG4gICAgdmFyIF9yZWYsXG4gICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyaWJ1dGVGb3JtKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBDb250cmlidXRlRm9ybS5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihDb250cmlidXRlRm9ybSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSwgX3RoaXMub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGV2ZW50KSB7XG4gICAgICAgIHZhciBjYW1wYWlnbiwgYWNjb3VudHM7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNhbXBhaWduID0gQ2FtcGFpZ24oX3RoaXMucHJvcHMuYWRkcmVzcyk7XG5cblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcblxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAzO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaShfdGhpcy5zdGF0ZS52YWx1ZSwgJ2V0aGVyJylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDk6XG5cbiAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKCcvY2FtcGFpZ25zLycgKyBfdGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTI7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFsnY2F0Y2gnXSgzKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBfY29udGV4dC50MC5tZXNzYWdlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTU6XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCB2YWx1ZTogJycgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgX3RoaXMyLCBbWzMsIDEyXV0pO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KCksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnRyaWJ1dGVGb3JtLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRm9ybSxcbiAgICAgICAgeyBvblN1Ym1pdDogdGhpcy5vblN1Ym1pdCwgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMzhcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgRm9ybS5GaWVsZCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzOVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ0Ftb3VudCB0byBDb250cmlidXRlJ1xuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWw6ICdldGhlcicsXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2UsIHsgZXJyb3I6IHRydWUsIGhlYWRlcjogJ09vcHMhJywgY29udGVudDogdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogNDlcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2J0biBidG4tYmxvY2snLCBjb2xvcjogJ2dyZWVuJywgbG9hZGluZzogdGhpcy5zdGF0ZS5sb2FkaW5nLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0NvbnRyaWJ1dGUnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRyaWJ1dGVGb3JtO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkZpZWxkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iLCJoZWFkZXIiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFMQSxJQUFJQSxlQUFlLHFFQUFuQjs7O0FBT0EsSUFBSUMsaUJBQWlCLFVBQVVDLFVBQVYsRUFBc0I7QUFDekMsMEJBQVVELGNBQVYsRUFB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