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
    var attackable = [];
    moves.forEach(function (m) {
      if (!m.isPassingMove)
        attackable[O.ix(m.x, m.y)] = true;
    });

    var rows = [];
    for (var y = -1; y < O.N; y++) {
      var cells = [];
      for (var x = -1; x < O.N; x++) {
        var key = 'cell_' + x + '_' + y;
        if (0 <= y && 0 <= x) {
          var classNames = [];
          classNames.push('cell');
          classNames.push(attackable[O.ix(x, y)] ? player : board[O.ix(x, y)]);
          if (attackable[O.ix(x, y)]) {
            classNames.push('attackable');
          }
          cells.push(
            <td key={key} id={key} className={classNames.join(' ')}>
              <span className="disc"></span>
            </td>
          );
        } else if (0 <= x && y === -1) {
          cells.push(
            <th key={key}>
              {String.fromCharCode('a'.charCodeAt(0) + x)}
            </th>
          );
        } else if (x === -1 && 0 <= y) {
          cells.push(<th key={key}>{y + 1}</th>);
        } else /* if (x === -1 && y === -1) */ {
          cells.push(<th key={key}></th>);
        }
      }
      rows.push(<tr key={rows.length}>{cells}</tr>);
    }

    return (
      <div id="game-board">
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
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
