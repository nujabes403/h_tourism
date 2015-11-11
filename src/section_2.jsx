var React = require('react');

module.exports = React.createClass({
  componentDidMount: function() {
    this.setState({
      first_img : this.refs.first_img.getDOMNode()
    });
  },
  handleImg:function(){
    var t = new TimelineMax();
    t.to(this.state.first_img, .5, {y:'-100'});
    t.to(this.state.first_img, .5, {y:'30'});
  },
  render:function(){
    return <div className="section_2_main">
      <div className="section_2_jumbotron jumbotron">
        <h1 className="section_2_jumbotron_h1">관광의 중요성?</h1>
        <h2 className="section_2_jumbotron_h2">Tourism?</h2>
        <div className="row">
          <div className="col-md-4">
            <img onClick={this.handleImg} ref="first_img" className="section_2_imgs" src="assets/imgs/sales_up.png"/>
            <h3 className="section_2_jumbotron_h3">성장산업</h3>
            </div>
          <div className="col-md-4">
            <img className="section_2_imgs" src="assets/imgs/pie_chart.png"/>
            <h3 className="section_2_jumbotron_h3">세계경제의 관광분야 기여도</h3>
            </div>
          <div className="col-md-4">
            <img className="section_2_imgs" src="assets/imgs/employee.png"/>
            <h3 className="section_2_jumbotron_h3">전체의 일자리</h3>
            </div>
        </div>
      </div>
    </div>
  }
});
