var React = require('react');
var Layout = require('./layout');
var App = React.createClass({
  render: function() {
    return <div>
    <Layout />
    </div>
  }
});

var element = React.createElement(App , {});
React.render(element, document.querySelector('.target'));
