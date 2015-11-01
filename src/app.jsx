var React = require('react');
var Layout = require('./layout');
var Routes = require('./routes');
// var App = React.createClass({
//   render: function() {
//     return <div>
//     <Layout />
//     </div>
//   }
// });
//
// var element = React.createElement(App , {});
React.render(Routes, document.querySelector('.target'));
