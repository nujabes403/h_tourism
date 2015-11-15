var React = require('react');

module.exports = React.createClass({
  render:function(){
    return <div className="section_5_main">
      <div className="section_5_jumbotron jumbotron">
        <div className="row">
          <div className="col-md-3 section_5_row_part1">
            <h1 className="section_5_jumbotron_h1">졸업하면?</h1>
          </div>
            {this.props.winWidth > 1000 ?
              <div className="col-md-3 section_5_row_part2">
                <img className="section_5_imgs" src="assets/imgs/branch.png"/>
              </div>
              : ''}
          <div className="col-md-6">
          <ul>
            <li><h2 className="section_5_ul_h2"><img className="section_5_ul_imgs" src="assets/imgs/company.png"/>관광/레저 산업</h2></li>
            <li><h2 className="section_5_ul_h2"><img className="section_5_ul_imgs" src="assets/imgs/government.png"/>정부/국제기구</h2></li>
            <li><h2 className="section_5_ul_h2"><img className="section_5_ul_imgs" src="assets/imgs/professor.png"/>학계</h2></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  }
});
