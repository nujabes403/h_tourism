var React = require('react');

module.exports = React.createClass({
  render:function(){
    return <div className="section_4_main">
      <div className="section_4_jumbotron jumbotron">
        <h1 className="section_4_jumbotron_h1">관광학부에 들어온다면?</h1>
        <h2 className="section_4_jumbotron_h2">Benefits?</h2>
        <div className="row">
          <div className="col-md-3">
            <img className="section_4_imgs" src="assets/imgs/dahak.png"/>
            <h3 className="section_4_jumbotron_h3">다학제적 접근</h3>
            </div>
          <div className="col-md-3">
            <img className="section_4_imgs" src="assets/imgs/dayang.png"/>
            <h3 className="section_4_jumbotron_h3">다양한 진로</h3>
            </div>
          <div className="col-md-3">
            <img className="section_4_imgs" src="assets/imgs/taking_money.png"/>
            <h3 className="section_4_jumbotron_h3">교비유학 / 외부장학금 <br/>지원</h3>
            </div>
          <div className="col-md-3">
            <img className="section_4_imgs" src="assets/imgs/networking.png"/>
            <h3 className="section_4_jumbotron_h3">업계-학계-공공기관 <br/>한양관광의 탄탄한 네트워킹</h3>
            </div>
        </div>
      </div>
    </div>
  }
});
