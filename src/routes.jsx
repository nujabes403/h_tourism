var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Layout = require('./layout');
var SecondMenu = require('./second_menu');
var Nested = React.createClass({
  render: function() {
    return (
      <h1>Hello I'm nested Child</h1>
    );
  }
});

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Layout}>
      <Route path="1" component={Nested}/>
      <Route path="2" component={SecondMenu}/>
    </Route>
  </Router>
);
