var React = require('react');
var Header = require('./header');
var Header_drawer = require('./header_drawer');
var Menus = require('./menus');
module.exports = React.createClass({
  render:function(){
      return <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <Header_drawer />
        <Menus />
          </div>
  }
});
