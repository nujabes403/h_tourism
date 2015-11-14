var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  render:function(){
    return <div className="section_1_main">
      <div className="section_1_jumbotron jumbotron">
        <div className="section_1_jumbotron_first_row row">
          <div className="header_left col-md-3">
            <img className="header_right_logo" src="assets/imgs/leo.png"/>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="header_right col-md-3">
            <h3>한양대 관광학부</h3>
          </div>
        </div>
        <h1 className="section_1_jumbotron_h1">TOURISM SCIENCE</h1>
        <h2 className="section_1_jumbotron_h2">인간의 여행활동과 이와 관련된 사회조직, 그리고 이를 둘러싼 환경간의 상호작용에 대해서...</h2>
      <p className="section_1_jumbotron_p"><Link className="section_1_jumbotron_btn btn btn-primary btn-lg" to="/hyu" role="button">입장</Link></p>
      </div>
    </div>
  }
});
