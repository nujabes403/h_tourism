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
								<a>관광학이란?</a>
								<a>관광학부 진로</a>
								<a>관광학부 교수진</a>
								<a>Link 4</a>
								<a>Link 5</a>
								<a>Link 6</a>
						</div>
				</div>
				<div>
						<a><span>학부생 코너</span></a>
						<div>
								<a>무브토크</a>
								<a>한국문화관광연구원</a>
								<a>한국관광공사</a>
								<a>DBPIA</a>
								<a>RISS</a>
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
