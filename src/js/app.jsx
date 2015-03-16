var React = require('react'),
    TextGradient = require('react-textgradient');

var App = React.createClass({

    render() {
        return (
            <div>
                <div className='demo-block'><div className='demo-block-container'>
                    <h1>
                        <TextGradient
                            text='React Text Gradient'
                            fromColor='#FFFF00'
                            toColor='#FF8008'
                            direction='right'
                            />
                    </h1>

                    <TextGradient
                        className='big-text'
                        text='A React component that creates text gradients with CSS, including a SVG fallback.'
                        fromColor='#eef2f3'
                        toColor='#8e9eab'
                        direction='left'
                        />
                </div></div>

                <div className='demo-block demo-block-explain'><div className='demo-block-container'>
                    <h2>
                        <TextGradient
                            text='How it works'
                            fromColor='#222'
                            toColor='#555'
                            direction='right'
                            />
                    </h2>


                    <div className='big-text'>
                        {'The component detects if WebkitBackgroundClip is available and apply the gradient over the text, otherwise the component creates a <svg> gradient with opacity, and applies it to the html with a mask.'}
                    </div>
                </div></div>

                <div className='demo-block demo-block-gold'><div className='demo-block-container'>
                    <TextGradient
                        className='gradient-text'
                        text='Also supports opacity gradients!'
                        fromColor='#fff'
                        toColor='rgba(255,255,255,.1)'
                        direction='bottom'
                        />
                </div></div>

                <div className='demo-block demo-block-github'><div className='demo-block-container'>
                    <a href='http://github.com/javierbyte/react-textgradient' className='cta'>
                        <TextGradient
                            text='More on Github'
                            fromColor='#fff'
                            toColor='rgba(255,255,255,.8)'
                            direction='bottom'
                            />
                    </a>
                </div></div>

            </div>
        );
    }

});

React.render(<App/>, document.getElementById('demo'));