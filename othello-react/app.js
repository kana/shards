var React = require('react');
var ReactDOM = require('react-dom');
var Othello = require('./othello');

var App = React.createClass({
  getInitialState: function () {
    return {
      gameTree: Othello.makeInitialGameTree()
    };
  },

  render: function () {
    return (
      <div className="app">
        {this.state.gameTree.player}
        {this.state.gameTree.moves.length}
        <button onClick={this.resetGame}>Start a new game</button>
      </div>
    );
  },

  resetGame: function () {
    this.setState({
      gameTree: Othello.makeInitialGameTree()
    });
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
