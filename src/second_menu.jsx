var React = require('react');

module.exports = React.createClass({
  render:function(){
    return <div className="second_menu_grid mdl-grid">
      <div className="text-center mdl-cell mdl-cell--3-col"></div>
      <div className="text-center mdl-cell mdl-cell--6-col">
        <button className="mdl-button mdl-js-button mdl-js-ripple-effect">
          <span className="second_menu_title">
            View1
          </span>
        </button>
        </div>
        <div className="text-center mdl-cell mdl-cell--3-col"></div>
    </div>
  }
});
