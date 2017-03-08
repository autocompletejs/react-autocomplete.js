"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var autocomplete = require("autocomplete-js"),
    React = require("react");

var AutoComplete = function (_React$Component) {
    _inherits(AutoComplete, _React$Component);

    function AutoComplete() {
        _classCallCheck(this, AutoComplete);

        return _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).apply(this, arguments));
    }

    _createClass(AutoComplete, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.autocomplete = autocomplete(this.props, this.input);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            autocomplete.prototype.destroy(this.autocomplete);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            Object.assign(this.autocomplete, nextProps);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement("input", {
                type: "text",
                ref: function ref(input) {
                    _this2.input = input;
                }
            });
        }
    }]);

    return AutoComplete;
}(React.Component);

module.exports = AutoComplete;
