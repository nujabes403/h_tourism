var React = require('react');

module.exports = React.createClass({
  render:function(){
    return <div className="section_2_main">
      <div className="section_2_jumbotron jumbotron">
        <h1 className="section_2_jumbotron_h1">관광의 중요성?</h1>
        <h2 className="section_2_jumbotron_h2">Tourism?</h2>
        <div className="row">
          <div className="col-md-4">
            <img className="section_2_imgs" src="assets/imgs/sales_up.png"/>
            <p>성장산업</p>
            </div>
          <div className="col-md-4">
            <img className="section_2_imgs" src="assets/imgs/pie_chart.png"/>
            <p>세계경제의 관광분야 기여도</p>
            </div>
          <div className="col-md-4">
            <img className="section_2_imgs" src="assets/imgs/employee.png"/>
            <p>전체의 일자리</p>
            </div>
        </div>
      </div>
    </div>
  }
});
