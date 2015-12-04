var React = require('react');
module.exports = React.createClass({
  render:function(){
    return <div className="col-md-3">
      <div className="card">
        <div className="card_top">
          <div className="card_top_header">
          <h4>{this.props.name}</h4>
          <h6>{this.props.major}</h6>
          </div>
        </div>
        <div className="card_img">
          <img src={"assets/imgs/"+this.props.img+".png"}/>
        </div>
        <div className="card_contents">
          &nbsp;<i className="fa fa-phone"></i>&nbsp;{this.props.number}<br/>
        &nbsp;<i className="fa fa-envelope"></i>&nbsp;{this.props.email}<br/>
        </div>
      </div>
    </div>
  }
})
