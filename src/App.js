// ----
// Dependencies
import React, { Component } from 'react';


// ----
// Child Components
import Board from './components/Board';



// ----
// App Class Component
class App extends Component {
  state = {
    height: 8,
    width: 8,
    mines: 10
  };

  render() {
    const { height, width, mines } = this.state;
    return (
      <div className="game">
        <h1 className="title">
          React Minesweeper
        </h1>

        <Board 
          height={height} 
          width={width} 
          mines={mines} 
        />
      </div>
    );
  }
}


// ----
// Export App 
export default App;
