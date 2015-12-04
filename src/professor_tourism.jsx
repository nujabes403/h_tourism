var React = require('react');
var Card = require('./card');
module.exports = React.createClass({
  render:function(){
    var professors_raw = [
      {name:"이연택",
       major:"관광정책 / 국제관광",
       number:"02-2220-0864",
       email:"ytlee@hanyang.ac.kr",
       img:"yt_lee"
     },
     {name:"최승담",
      major:"관광개발 / 관광계획",
      number:"02-2220-0861",
      email:"sdchoi@hanyang.ac.kr",
      img:"sd_choi"
    },
    {name:"김남조",
     major:"관광자원계획 / 관리",
     number:"02-2220-0866",
     email:"njkim@hanyang.ac.kr",
     img:"nj_kim"
   },
   {name:"조민호",
    major:"호텔경영 / 관광경영",
    number:"02-2220-0865",
    email:"chomh@hanyang.ac.kr",
    img:"mh_cho"
  },
  {name:"이훈",
   major:"레저 / 관광경영",
   number:"02-2220-0863",
   email:"hoon2@hanyang.ac.kr",
   img:"lee_hoon"
 },
 {name:"정철",
  major:"관광정보 / 문화경영",
  number:"02-2220-0869",
  email:"jeong72@empal.com",
  img:"jeong_choel"
},
{name:"현성협",
 major:"컨벤션 / 신융합관광",
 number:"02-2220-0862",
 email:"sshyun@hanyang.ac.kr",
 img:'sh_hyeon'
}];
var professor_render = professors_raw.map(function(prof){
  return (
    <Card name={prof.name + " 교수"} major={prof.major} number={prof.number}
      email={prof.email} img={prof.img}/>
  );
});
    return <div className="professor_tourism_block">
      <div className="panel panel-default">
  <div className="panel-heading"><h1>한양대 관광학부 교수진</h1></div>
  <div className="panel-body">
    미래의 관광전문가를 양성하고 계시는 관광학부 교수님들입니다.
  </div>
</div>
    <div className="row">
        {professor_render}
      </div>
    </div>
  }
})
