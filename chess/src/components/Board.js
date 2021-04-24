import React from 'react';
import '../css/board.css'

export default class Board extends React.Component {

    render() {
        let board = [];
        for (let i = 0; i < 19; i++) {
            for (let j = 0; j < 19; j++) {
                board.push(<div className="board-cell">{i}{j}</div>)
            }
        }

        return (
            <div className="display-board">
                <div className="main-board">
                    <div className="board-size">
                        {board}
                    </div>
                </div>
                <div className="display-info">

                </div>
            </div>
        )
    }
}

