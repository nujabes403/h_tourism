var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      first_img_on:false,
      second_img_on:false,
      third_img_on:false
    };
  },
  handle_enterImg:function(e){
    var target_img = e.target.id;
    var t = new TimelineMax();
    t.to(e.target, .5, {y:'-70'});
    this.setState({
      [e.target.id + '_on'] : true
    });
  },
  handle_leaveImg:function(e){
    var target_img = e.target.id;
    var t = new TimelineMax();
    t.to(e.target, .5, {y:'30'});
    this.setState({
      [e.target.id + '_on'] : false
    });
  },
  render:function(){
    return <div className="section_2_main">
      <div className="section_2_jumbotron jumbotron">
        <h1 className="section_2_jumbotron_h1">관광의 중요성?</h1>
        <h2 className="section_2_jumbotron_h2">Tourism?</h2>
        <div className="row">
          <div className="col-md-4">
            <img onMouseLeave={this.handle_leaveImg} onMouseEnter={this.handle_enterImg} id="first_img" className="section_2_imgs" src="assets/imgs/sales_up.png"/>
            <h3 className="section_2_jumbotron_h3">성장산업</h3>
            </div>
          <div className="col-md-4">
            <img onMouseLeave={this.handle_leaveImg} onMouseEnter={this.handle_enterImg} id="second_img" className="section_2_imgs" src="assets/imgs/pie_chart.png"/>
            <h3 className="section_2_jumbotron_h3">세계경제의 관광분야 기여도</h3>
            </div>
          <div className="col-md-4">
            <img onMouseLeave={this.handle_leaveImg} onMouseEnter={this.handle_enterImg} id="third_img" className="section_2_imgs" src="assets/imgs/employee.png"/>
            <h3 className="section_2_jumbotron_h3">전체의 일자리</h3>
            </div>
        </div>
      </div>
    </div>
  }
});
