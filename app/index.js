var React = require('react');
var ReactDOM = require('react-dom');
var AppContainer = require('./containers/AppContainer');

var app = (
    <AppContainer/>
);


ReactDOM.render(
    app,
    document.getElementById('app')
);