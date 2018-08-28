import React, { Component } from 'react';
import Board from './Board';
class Game extends Component{
    render() {
        return (<div>
            <div className="game">
                <div className="game-board">
                    <Board />

                </div>
                <div className="game-info">
                    <div> { } </div>
                    <ol> { } </ol>
                 </div>
            </div>
        </div>);
    }
}
export default Game;