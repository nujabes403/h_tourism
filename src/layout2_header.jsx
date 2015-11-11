var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  render:function(){
    return <div className="layout2_header">
      <div className="row">
        <div className="col-md-4">
          <h3>Layout2</h3>
        </div>
        <div className="col-md-4">
          header-middle
        </div>
        <div className="col-md-4">
          header-right
        </div>
      </div>
      </div>

  }
});
