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
  renderBoard:function(){
    var board_output = this.state.boardsItem.map(function(item){
      return <Link to={"/hyu/board/" + item.id }>{item.title}<br/></Link>
    });
    return board_output;
  },
  render:function(){
    return <div className="board_container">
      <ul>
        {this.renderBoard()}
      </ul>
    </div>
  }
});
