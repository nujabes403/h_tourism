var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Layout2_header = require('./layout2_header');
var Footer = require('./footer');

module.exports = React.createClass({
  render:function(){
    return <div className="container-fluid">
      <Layout2_header/>
      {this.props.children}
    </div>
  }
});
