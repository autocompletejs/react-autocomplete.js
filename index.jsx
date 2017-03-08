"use strict";

const autocomplete = require("autocomplete-js"),
    React = require("react");

class AutoComplete extends React.Component {
    componentDidMount() {
        this.autocomplete = autocomplete(this.props, this.input);
    }

    componentWillUnmount() {
        autocomplete.prototype.destroy(this.autocomplete);
    }

    componentWillReceiveProps(nextProps) {
        Object.assign(this.autocomplete, nextProps);
    }

    render() {
        return <input
            type="text"
            ref={(input) => {
                this.input = input;
            }}
        />;
    }
}

module.exports = AutoComplete;
