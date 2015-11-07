var React = require('react');
var Section_1 = require('./section_1');
var Section_2 = require('./section_2');
var Section_3 = require('./section_3');
var Section_4 = require('./section_4');
var Section_5 = require('./section_5');

module.exports = React.createClass({
  render:function(){
    return <div className="container-fluid">
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
    </div>
  }
});
