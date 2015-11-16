var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  render:function(){
    return <div className="layout2_header">
      <header>
		<nav>
				<div>
						<a><span>관광학부 소개</span></a>
						<div>
								<Link to="hyu/what_tourism">관광학이란?</Link>
								<Link to="/carrer_tourism">관광학부 진로</Link>
								<Link to="/professor_tourism">관광학부 교수진</Link>
								<a>Link 4</a>
								<a>Link 5</a>
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
								<a>자유게시판</a>
						</div>
				</div>
		</nav>
</header>
<h1>한양대 관광학부!</h1>
<p></p>
      </div>

  }
});
