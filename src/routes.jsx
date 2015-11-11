var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Layout = require('./layout');
var Layout2 = require('./layout2');
module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Layout}></Route>
    <Route path="hyu" component={Layout2}></Route>
  </Router>
);
