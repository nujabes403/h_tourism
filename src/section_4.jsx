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
            <p>다학제적 접근</p>
            </div>
          <div className="col-md-3">
            <img className="section_4_imgs" src="assets/imgs/dayang.png"/>
            <p>다양한 진로</p>
            </div>
          <div className="col-md-3">
            <img className="section_4_imgs" src="assets/imgs/taking_money.png"/>
            <p>교비유학 / 외부장학금 지원</p>
            </div>
          <div className="col-md-3">
            <img className="section_4_imgs" src="assets/imgs/networking.png"/>
            <p>업계-학계-공공기관 <br/>한양관광의 탄탄한 네트워킹</p>
            </div>
        </div>
      </div>
    </div>
  }
});
