var React = require('react');
var ReactDOM = require('react-dom');
var VideoInput = require('./components/input')

var app = (
    <div>
        <VideoInput />
    </div>
);


ReactDOM.render(
    app,
    document.getElementById('app')
);