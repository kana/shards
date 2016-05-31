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
        {this.renderBoard(
            this.state.gameTree.board,
            this.state.gameTree.player,
            this.state.gameTree.moves
        )}
        <button onClick={this.resetGame}>Start a new game</button>
      </div>
    );
  },

  renderBoard: function (board, player, moves) {
    var O = Othello;
    var ss = [];
    var attackable = [];
    moves.forEach(function (m) {
      if (!m.isPassingMove)
        attackable[O.ix(m.x, m.y)] = true;
    });

    for (var y = -1; y < O.N; y++) {
      for (var x = -1; x < O.N; x++) {
        var key = x + 'x' + y;
        if (0 <= y && 0 <= x) {
          var classNames = [];
          classNames.push('cell');
          classNames.push(attackable[O.ix(x, y)] ? player : board[O.ix(x, y)]);
          if (attackable[O.ix(x, y)]) {
            classNames.push('attackable');
          }
          ss.push(
            <span key={key} id={'cell-' + x + '-' + y} className={classNames}>
            </span>
          );
        } else if (0 <= x && y === -1) {
          ss.push(<span key={key}>{String.fromCharCode('a'.charCodeAt(0) + x)}</span>);
        } else if (x === -1 && 0 <= y) {
          ss.push(<span key={key}>{y + 1}</span>);
        } else /* if (x === -1 && y === -1) */ {
          ss.push(<span key={key}></span>);
        }
      }
    }

    return (
      <div className="board">
        {ss}
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
