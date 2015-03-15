var React = require('react');

var TextGradient = React.createClass({

    propTypes: {
        text: React.PropTypes.string,
        fromColor: React.PropTypes.string,
        toColor: React.PropTypes.string,
        fallbackColor: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            text: '',
            fromColor: 'transparent',
            toColor: 'transparent'
        }
    },

    render() {
        var {text, component, fromColor, toColor, fallbackColor, direction, ...other} = this.props;

        var style;
        var isWebkit = 'WebkitTextFillColor' in document.documentElement.style;

        if(isWebkit) {
            style = {
                display: 'block',
                color: fallbackColor || fromColor,
                background: '-webkit-linear-gradient(right, ' + fromColor + ',' + toColor + ')',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }
        } else {
            style  = {
                display: 'block',
                color: fallbackColor || fromColor,
                mask: 'url(#svgGrad)'
            }
        }

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
            <div>
                <h1>
                    <TextGradient
                        text='react-textgradient'
                        fromColor='#FF8008'
                        toColor='#FFFF00'
                        direction='right'
                        />
                </h1>

                <div className='big'>
                    <TextGradient
                        text='Text gradient react component. CSS with SVG fallback.'
                        fromColor='#eef2f3'
                        toColor='#8e9eab'
                        direction='right'
                        />
                </div>
            </div>
        );
    }

});

React.render(<App/>, document.getElementById('demo'));