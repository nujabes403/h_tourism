var React = require('react');

module.exports = React.createClass({
  render:function(){
      return <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="header_title mdl-layout-title">한플랫</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <a className="mdl-navigation__link" href=""><span className="material-icons mdl-badge header_icon" data-badge="3">message</span></a>
          <a className="mdl-navigation__link" href=""><span className="material-icons header_icon">face</span><span className="header_nickname">Kim</span></a>
        </nav>
      </div>
    </header>
  }
});
