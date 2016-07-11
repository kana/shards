const React = require('react');
const ReactDOM = require('react-dom');
const Othello = require('./othello');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameTree: Othello.makeInitialGameTree(),
      blackPlayerType: 'human',
      whitePlayerType: 'random',
      started: false
    };

    this.setBlackPlayerType = this.setBlackPlayerType.bind(this);
    this.setWhitePlayerType = this.setWhitePlayerType.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  setBlackPlayerType(playerType) {
    this.setState({
      blackPlayerType: playerType
    });
  }

  setWhitePlayerType(playerType) {
    this.setState({
      whitePlayerType: playerType
    });
  }

  render() {
    return (
      <div className="app">
        {this.renderBoard(
            this.state.gameTree.board,
            this.state.gameTree.player,
            this.state.gameTree.moves,
            this.state.started
        )}
        <div className="preferences">
          <div className="player-types">
            <label>
              Black:
              <PlayerTypeSelector
                playerType={this.state.blackPlayerType}
                onChange={this.setBlackPlayerType}
              />
            </label>
            <label>
              White:
              <PlayerTypeSelector
                playerType={this.state.whitePlayerType}
                onChange={this.setWhitePlayerType}
              />
            </label>
          </div>
          <button onClick={this.resetGame}>Start a new game</button>
        </div>
      </div>
    );
  }

  shiftToNewGameTree(gameTree) {
    this.setState({
      gameTree: gameTree
    });
  }

  renderBoard(board, player, moves, started) {
    const O = Othello;
    const currentPlayerType = player === O.BLACK ?
        this.state.blackPlayerType :
        this.state.whitePlayerType;
    const isHuman = currentPlayerType === 'human';
    let attackable = [];
    let passingMove = null;
    if (started) {
      moves.forEach(m => {
        if (m.isPassingMove) {
          passingMove = m;
        } else {
          attackable[O.ix(m.x, m.y)] = m;
        }
      });
    }

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
            if (isHuman) {
              attack = () => {
                this.shiftToNewGameTree(O.force(move.gameTreePromise));
              };
            }
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
    if (passingMove && isHuman) {
      pass = (
        <button onClick={() => {
          this.shiftToNewGameTree(O.force(passingMove.gameTreePromise));
        }}>
          Pass
        </button>
      );
    }

    if (started && !isHuman && moves.length > 0) {
      setTimeout(
        () => {
          const m = moves[Math.floor(Math.random() * moves.length)];
          this.shiftToNewGameTree(O.force(m.gameTreePromise));
        },
        500
      )
    }

    return (
      <div id="game-board">
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
        {started &&
          <div className="console">
            <div className="turn">Current player: {player}</div>
            <div className="move">{
              isHuman ? (pass || 'Choose your move.') : 'Now thinking...'
            }</div>
          </div>
        }
      </div>
    );
  }

  resetGame() {
    this.setState({
      gameTree: Othello.makeInitialGameTree(),
      started: true
    });
  }
}

class PlayerTypeSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const availablePlayerTypeDetails = [
      {playerType: 'human', label: 'Human'},
      {playerType: 'random', label: 'AI (Random)'}
    ];
    return (
      <select defaultValue={this.props.playerType} onChange={this.props.onChange}>
        {availablePlayerTypeDetails.map(d =>
          <option value={d.playerType}>{d.label}</option>
        )}
      </select>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
