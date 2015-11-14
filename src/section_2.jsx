var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sec2_first_img_on:false,
      sec2_second_img_on:false,
      sec2_third_img_on:false
    };
  },
  handle_enterImg:function(e){
    var target_img = e.target.id;
    var t = new TimelineMax();
    t.to(e.target, .5, {y:'-20'});
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
            <img onMouseLeave={this.handle_leaveImg} onMouseEnter={this.handle_enterImg} id="sec2_first_img" className="section_2_imgs" src="assets/imgs/sales_up.png"/>
            <h3 className="section_2_jumbotron_h3">성장산업</h3>
            {this.state.sec2_first_img_on ? <h5>관광은 고용없는 성장이라는 세계적인 문제에 대한 해결책으로<br/> 국가 이미지 제고, 일자리 창출을 동시에 이룰 수 있는<br/> 성장하는 산업입니다.</h5>:''}
            </div>
          <div className="col-md-4">
            <img onMouseLeave={this.handle_leaveImg} onMouseEnter={this.handle_enterImg} id="sec2_second_img" className="section_2_imgs" src="assets/imgs/pie_chart.png"/>
            <h3 className="section_2_jumbotron_h3">세계경제의 관광분야 기여도</h3>
            {this.state.sec2_second_img_on ? <h5>세계경제의 관광분야 기여도는 전체 GDP의 9%에 달합니다.</h5>:''}
            </div>
          <div className="col-md-4">
            <img onMouseLeave={this.handle_leaveImg} onMouseEnter={this.handle_enterImg} id="sec2_third_img" className="section_2_imgs" src="assets/imgs/employee.png"/>
            <h3 className="section_2_jumbotron_h3">전체의 일자리</h3>
            {this.state.sec2_third_img_on ? <h5>전체의 일자리 11개 중 1개는 관광관련 일자리입니다.</h5>:''}
            </div>
        </div>
      </div>
    </div>
  }
});
