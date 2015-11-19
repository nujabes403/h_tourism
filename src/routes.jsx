var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Layout = require('./layout');
var Layout2 = require('./layout2');

var WhatTourism = require('./what_tourism');
var CareerTourism = require('./career_tourism');
var ProfessorTourism = require('./professor_tourism');

var Board = require('./board');
var BoardItem = require('./boardItem');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Layout}></Route>
    <Route path="hyu" component={Layout2}>
      <Route path="what_tourism" component={WhatTourism}/>
      <Route path="career_tourism" component={CareerTourism}/>
      <Route path="professor_tourism" component={ProfessorTourism}/>
      <Route path="board" component={Board}/>
      <Route path="board/:boardItemId" component={BoardItem}/>
    </Route>
  </Router>
);
