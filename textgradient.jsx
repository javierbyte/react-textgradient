var React = require('react');

var TextGradient = React.createClass({

    propTypes: {
        text: React.PropTypes.string,
        fromColor: React.PropTypes.string,
        toColor: React.PropTypes.string,
        fallbackColor: React.PropTypes.string,
        direction: React.PropTypes.oneOf(['top', 'left', 'bottom', 'right'])
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

        var style, overStyle;
        var isWebkit = 'WebkitTextFillColor' in document.documentElement.style;

        if(isWebkit) {
            style = {
                display: 'inline-block',
                color: fallbackColor || toColor,
                background: '-webkit-linear-gradient(' + direction + ', ' + toColor + ',' + fromColor + ')',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }
        } else {
            style  = {
                position: 'relative',
                display: 'inline-block',
                color: fallbackColor || toColor,
                width: '100%'
            }

            overStyle = {
                display: 'block',
                mask: 'url(#svgGrad' + direction +')',
                color: fromColor,
                position: 'absolute',
                width: '100%',
                left: 0,
                right: 0,
                zIndex: 1,
                textAlign: 'inherit'
            }
        }

        if(!isWebkit) var SvgGrad = "" +
            "<svg height='0' width='0' style='position:absolute'>" +
                "<mask id='svgGrad" + direction +"' maskUnits='objectBoundingBox' maskContentUnits='objectBoundingBox'>" +
                    (function(){
                        switch(direction) {
                            case 'right':
                                return "<linearGradient id='g' gradientUnits='objectBoundingBox' x1='0' x2='1'>";
                                break;
                            case 'left':
                                return "<linearGradient id='g' gradientUnits='objectBoundingBox' x1='1' x2='0'>";
                                break;
                            case 'bottom':
                                return "<linearGradient id='g' gradientUnits='objectBoundingBox' y1='0' y2='1'>";
                                break;
                            case 'top':
                                return "<linearGradient id='g' gradientUnits='objectBoundingBox' y1='1' y2='0'>";
                                break;
                        }
                    })() +
                        "<stop stop-color='white' offset='0' />" +
                        "<stop stop-color='white' stop-opacity='0' offset='1' />" +
                    "</linearGradient>" +
                    "<rect x='0' y='0' width='1' height='1' fill='url(#g)' />" +
                "</mask>" +
            "</svg>";

        if(isWebkit) {
            return (
                <span {...other} style={style}>
                    {text}
                </span>
            )
        } else return (
            <span {...other} style={style}>
                <div dangerouslySetInnerHTML={{ __html: SvgGrad }} />
                <span style={overStyle}>{text}</span>
                {text}
            </span>
        );
    }

});

module.exports = TextGradient;