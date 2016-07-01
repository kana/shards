const React = require('react');
const ReactDOM = require('react-dom');
const Othello = require('./othello');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameTree: Othello.makeInitialGameTree()
    };
  }

  render() {
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
  }

  shiftToNewGameTree(gameTree) {
    this.setState({
      gameTree: gameTree
    });
  }

  renderBoard(board, player, moves) {
    const O = Othello;
    let attackable = [];
    let passingMove = null;
    moves.forEach(m => {
      if (m.isPassingMove) {
        passingMove = m;
      } else {
        attackable[O.ix(m.x, m.y)] = m;
      }
    });

    let rows = [];
    for (let y = -1; y < O.N; y++) {
      let cells = [];
      for (let x = -1; x < O.N; x++) {
        let key = 'cell_' + x + '_' + y;
        if (0 <= y && 0 <= x) {
          let classNames = [];
          let move = attackable[O.ix(x, y)];
          let attack = null;
          classNames.push('cell');
          classNames.push(move ? player : board[O.ix(x, y)]);
          if (move) {
            classNames.push('attackable');
            attack = () => {
              this.shiftToNewGameTree(O.force(move.gameTreePromise));
            };
          }
          cells.push(
            <td key={key} id={key} className={classNames.join(' ')}
                onClick={attack}>
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

    let pass = null;
    if (passingMove) {
      pass = (
        <button onClick={() => {
          this.shiftToNewGameTree(O.force(passingMove.gameTreePromise));
        }}>
          Pass
        </button>
      );
    }

    return (
      <div id="game-board">
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
        {pass}
      </div>
    );
  }

  resetGame() {
    this.setState({
      gameTree: Othello.makeInitialGameTree()
    });
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
