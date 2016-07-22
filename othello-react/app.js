const React = require('react');
const ReactDOM = require('react-dom');
const Othello = require('./othello');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameTree: Othello.makeInitialGameTree(),
      blackPlayerType: 'human',
      whitePlayerType: 'better-131072',
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
            this.state.gameTree,
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

  renderBoard(gameTree, started) {
    const O = Othello;
    const {board, player, moves} = gameTree;
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
      this.chooseMoveByAI(gameTree, this.state.aiTable[player]);
    }

    const finished = moves.length === 0;
    const result = finished ? O.judge(board) : undefined;
    return (
      <div id="game-board">
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
        {started && !finished &&
          <div className="console">
            <div className="turn">Current player: {player}</div>
            <div className="move">{
              isHuman ? (pass || 'Choose your move.') : 'Now thinking...'
            }</div>
          </div>
        }
        {started && finished &&
          <div className="result">
            {
              result === 0 ?
              'The game ends in a draw.' :
              'The winner is ' + (result === 1 ? O.BLACK : O.WHITE) + '.'
            }
          </div>
        }
      </div>
    );
  }

  chooseMoveByAI(gameTree, ai) {
    setTimeout(
      () => {
        const minimumDelayForAI = 500;  // milliseconds
        const start = Date.now();
        const move = ai.findTheBestMove(gameTree);
        const end = Date.now();
        const delta = end - start;
        setTimeout(
          () => {
            this.shiftToNewGameTree(Othello.force(move.gameTreePromise));
          },
          Math.max(minimumDelayForAI - delta, 1)
        );
      },
      1
    )
  }

  resetGame() {
    this.setState({
      gameTree: Othello.makeInitialGameTree(),
      aiTable: {
        black: this.state.blackPlayerType !== 'human' &&
               Othello.makeAI(this.state.blackPlayerType),
        white: this.state.whitePlayerType !== 'human' &&
               Othello.makeAI(this.state.whitePlayerType)
      },
      started: true
    });
  }
}

class PlayerTypeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const availablePlayerTypeDetails = [
      {playerType: 'human', label: 'Human'},
      {playerType: 'simpleCount-131072', label: 'AI (Type A; try to get many disks)'},
      {playerType: 'basic-131072', label: 'AI (Type B; try to own corner positions)'},
      {playerType: 'better-131072', label: 'AI (Type C; try to own corner positions carefully)'},
      {playerType: 'moveCount-131072', label: 'AI (Type D; Prioritize number of moves)'},
      {playerType: 'moveCountAndPositions-131072', label: 'AI (Type E; Prioritize number of moves and positions)'},
      {playerType: 'mcts-128', label: 'AI (Type M-128; Monte Carlo Tree Search with 128 iterations)'},
      {playerType: 'mcts-256', label: 'AI (Type M-256; Monte Carlo Tree Search with 256 iterations)'},
      {playerType: 'mcts-512', label: 'AI (Type M-512; Monte Carlo Tree Search with 512 iterations)'},
      {playerType: 'mcts-1024', label: 'AI (Type M-1024; Monte Carlo Tree Search with 1024 iterations)'},
      {playerType: 'mcts-2048', label: 'AI (Type M-2048; Monte Carlo Tree Search with 2048 iterations)'},
      {playerType: 'mcts-4096', label: 'AI (Type M-4096; Monte Carlo Tree Search with 4096 iterations)'},
      {playerType: 'pmc-100-m', label: 'AI (Type PM-100/m; Primitive Monte Carlo with 100 iterations for each move)'},
      {playerType: 'pmc-200-m', label: 'AI (Type PM-200/m; Primitive Monte Carlo with 200 iterations for each move)'},
      {playerType: 'pmc-1024-e', label: 'AI (Type PM-1024/e; Primitive Monte Carlo with 1024 iterations divided for each move)'}
    ];
    return (
      <select defaultValue={this.props.playerType} onChange={this.onChange}>
        {availablePlayerTypeDetails.map(d =>
          <option key={d.playerType} value={d.playerType}>{d.label}</option>
        )}
      </select>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
