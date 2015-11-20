var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var rootUrl = 'https://httest.firebaseio.com';
module.exports = React.createClass({
  mixins:[ReactFireMixin],
  componentWillMount: function() {
    var boardItemsRef = new Firebase(rootUrl + '/boardsItem');
    this.bindAsObject(boardItemsRef,'boardsItem');
    this.setState({
      boardsItem : this.state.boardsItem
    });
  },
  getInitialState: function() {
    return {
      boardsItem:[]
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
