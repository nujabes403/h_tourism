var React = require('react');
var Top_menu = require('./top_menu');
var Second_menu = require('./second_menu');

module.exports = React.createClass({
  render:function(){
    return <main className="mdl-layout__content">
        <div className="page-content">
            <Top_menu />
            <Second_menu />
        </div>
      </main>
  }
});
