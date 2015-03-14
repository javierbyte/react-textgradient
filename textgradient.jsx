var React = require('react');

var TextGradient = React.createClass({

    propTypes: {
        text: React.PropTypes.string
    },

    defaultProps: {
        text: ''
    },

    render() {
        var {text, ...other} = this.props;

        return (
            <h1>
                {text}
            </h1>
        );
    }

});

module.exports = React.createFactory(TextGradient);;