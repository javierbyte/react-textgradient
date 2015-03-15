var React = require('react');

var TextGradient = React.createClass({

    propTypes: {
        text: React.PropTypes.string,
        component: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            text: '',
            component: 'span'
        }
    },

    render() {
        var {text, component, gradient, direction, ...other} = this.props;

        var style;
        var isWebkit = 'WebkitTextFillColor' in document.body.style;

        if(isWebkit) {
            console.log('webkit!');
            style = {
                color: gradient[0],
                background: '-webkit-linear-gradient(right, ' + gradient.join(',') + ')',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }
        } else {
            style  = {
                color: gradient[0],
                mask: 'url(#svgGrad)'
            }
        }

        console.log(style);

        if(!isWebkit) var SvgGrad = "" +
            "<svg height='0' width='0' style='position:absolute'>" +
                "<mask id='svgGrad' maskUnits='objectBoundingBox' maskContentUnits='objectBoundingBox'>" +
                    "<linearGradient id='g' gradientUnits='objectBoundingBox' x1='0' x2='1'>" +
                        "<stop stop-color='white' offset='0' />" +
                        "<stop stop-color='white' stop-opacity='0' offset='1' />" +
                    "</linearGradient>" +
                    "<rect x='0' y='0' width='1' height='1' fill='url(#g)' />" +
                "</mask>" +
            "</svg>";

        return (
            <span {...other} style={style}>
                {(function() {
                    if(isWebkit) return text;
                    else return (
                        <span>
                            {text}
                            <div dangerouslySetInnerHTML={{ __html: SvgGrad }} />
                        </span>
                    );
                })()}
            </span>
        );
    }

});

var App = React.createClass({

    render() {
        return (
            <h1>
                <TextGradient
                    text='I will be textgradient'
                    gradient={['#FF8008', 'transparent']}
                    direction='right'
                    />
            </h1>
        );
    }

});

React.render(<App/>, document.getElementById('demo'));