var React = require('react'),
    TextGradient = require('react-textgradient');

var App = React.createClass({

    componentDidMount() {
        (function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}})(document, 'script', 'twitter-wjs');
    },

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

                        <br/><br/>
                        <a href="https://twitter.com/share" className="twitter-share-button" data-url="http://javierbyte.github.io/react-textgradient/" data-via="javierbyte" data-size="large">Tweet</a>

                        <iframe src="https://ghbtns.com/github-btn.html?user=javierbyte&repo=react-textgradient&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
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