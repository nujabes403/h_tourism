var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  render:function(){
    return <div className="layout2_header">
      <header>
		<nav>
      <div className="logo_div">
        <img className="layout2_logo" src="../assets/imgs/tourism_logo.png"/>
      </div>
      <div>
        <h3 className="layout2_logo_text">한양대 관광학부</h3>
      </div>
				<div>
						<a><span>관광학부 소개</span></a>
						<div>
								<Link to="hyu/what_tourism">관광학이란?</Link>
								<Link to="hyu/career_tourism">관광학부 진로</Link>
								<Link to="hyu/professor_tourism">관광학부 교수진</Link>
								<a href="http://kimhoonil.firebaseapp.com">관광지 생애주기</a>
								<Link to="hyu/hyu_tourism">왜 한양대 관광학부?</Link>
								<a>Link 6</a>
						</div>
				</div>
				<div>
						<a><span>학부생 코너</span></a>
						<div>
								<a href="http://www.podbbang.com/ch/9939">무브토크</a>
								<a href="http://www.kcti.re.kr/index.dmw">한국문화관광연구원</a>
								<a href="http://kto.visitkorea.or.kr/kor/notice/data/statis/profit.kto">한국관광공사</a>
								<a href="http://www.dbpia.co.kr/">DBPIA</a>
								<a href="http://www.riss.kr/index.do">RISS</a>
								<Link to="hyu/board">자유게시판</Link>
						</div>
				</div>
		</nav>
</header>
<p>-</p>
      </div>

  }
});
