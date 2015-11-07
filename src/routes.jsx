var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Layout = require('./layout');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>
);
