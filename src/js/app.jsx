var React = require('react'),
    Gradient = require('react-textgradient');

var App = React.createClass({

    render() {
        return (
            <div>
                Hey! I will be react-textgradient
            </div>
        );
    }

});

React.render(<App/>, document.getElementById('demo'));