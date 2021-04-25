import React from 'react';
import '../components/css/board.css';
import gameboard from '../components/data/gameboard.json'

export default class Board extends React.Component {

    constructor(){
        super();
            this.state = {
                board: [],
            }
        }

    componentWillMount() {
        let temp = []
        {gameboard.map( game => {
            temp.push(game.id,game.data)
        }
        )}
        this.setState({
            board : temp
        })

    }

    

    render() {
      
        return (
            <div className="display-board">
                <div className="main-board">
                    <div className="board-size">
                    
                    </div>
                </div>
                <div className="display-info">

                </div>
            </div>
        )
    }
}

