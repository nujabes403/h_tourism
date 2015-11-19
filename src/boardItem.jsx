var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      boardsItem:[{
        id:1,
        title:'Item1',
        content:'Hello I am Item1'
      },
      {
        id:2,
        title:'Item2',
        content:'Hola! I am Item2'
      },
      {
        id:3,
        title:'Item3',
        content:'Je suis Un Item3'
      }]
    }
  },
  render:function(){
    return <div className="boardItems">
      <Link to="/hyu/board">목록으로..</Link>
      <h1>제목 : {this.state.boardsItem[this.props.params.boardItemId - 1].title}</h1>
      <h2>내용 :{this.state.boardsItem[this.props.params.boardItemId - 1].content}</h2>
    </div>
  }
});
