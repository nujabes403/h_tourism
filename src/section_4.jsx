var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sec4_first_img_on:false,
      sec4_second_img_on:false,
      sec4_third_img_on:false,
      sec4_fourth_img_on:false
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
    t.to(e.target, .5, {y:'20'});
    this.setState({
      [e.target.id + '_on'] : false
    });
  },
  render:function(){
    return <div className="section_4_main">
      <div className="section_4_jumbotron jumbotron">
        <h1 className="section_4_jumbotron_h1">관광학부에 들어온다면?</h1>
        <h2 className="section_4_jumbotron_h2">Benefits?</h2>
        <div className="row">
          <div className="col-md-3">
            <img onMouseEnter={this.handle_enterImg} onMouseLeave={this.handle_leaveImg} id="sec4_first_img" className="section_4_imgs" src="assets/imgs/dahak.png"/>
            <h3 className="section_4_jumbotron_h3">다학제적 접근</h3>
            {this.state.sec4_first_img_on ? <h5>관광학은 경영,경제,심리,통계,인문학 등을<br/>포함하여 학습하는 다학제적 접근이 이루어지는 학문으로,이러한 폭 넓은 접근을 바탕으로 <br/>관광이라는 복잡한
            사회현상에 대한 <br/>이해-분석-해결을 목표로 합니다.</h5>:''}
            </div>
          <div className="col-md-3">
            <img onMouseEnter={this.handle_enterImg} onMouseLeave={this.handle_leaveImg} id="sec4_second_img" className="section_4_imgs" src="assets/imgs/dayang.png"/>
            <h3 className="section_4_jumbotron_h3">다양한 진로</h3>
            {this.state.sec4_second_img_on ? <h5>국내 관광관련 최고대학인 한양대학교 관광학부에 들어오면 연구소,정부부처,공기업,대기업 등 다양한 진로를 선택할 수 있습니다.</h5>:''}
            </div>
          <div className="col-md-3">
            <img onMouseEnter={this.handle_enterImg} onMouseLeave={this.handle_leaveImg} id="sec4_third_img" className="section_4_imgs" src="assets/imgs/taking_money.png"/>
            <h3 className="section_4_jumbotron_h3">교비유학 / 외부장학금 <br/>지원</h3>
            {this.state.sec4_third_img_on ? <h5>관광학부는 세계 여러 대학과 자매결연을 맺고 있어 교비유학이 자유롭고, 외부장학금 지원이 탄탄합니다.</h5>:''}
            </div>
          <div className="col-md-3">
            <img onMouseEnter={this.handle_enterImg} onMouseLeave={this.handle_leaveImg} id="sec4_fourth_img" className="section_4_imgs" src="assets/imgs/networking.png"/>
            <h3 className="section_4_jumbotron_h3">업계-학계-공공기관 <br/>한양관광의 탄탄한 네트워킹</h3>
            {this.state.sec4_fourth_img_on ? <h5>...</h5>:''}
            </div>
        </div>
      </div>
    </div>
  }
});
