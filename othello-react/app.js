var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function () {
    return {
      n: 123
    };
  },

  render: function () {
    return (
      <div className="app">
        {this.state.n}
        <button onClick={this.resetGame}>Start a new game</button>
      </div>
    );
  },

  resetGame: function () {
    this.setState({
      n: Math.random()
    });
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
