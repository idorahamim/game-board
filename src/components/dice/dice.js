import * as React from "react";
import Cube from "../cube/cube";
import './diceStyle.css'
import {getRandomNumber} from "../../utils";
import Button from "@material-ui/core/Button";

class Dice extends React.Component {
    state = {
        firsCube: null,
        secondCube: null,
    };


    handleClick() {
        this.setState({
            firsCube: getRandomNumber(),
            secondCube: getRandomNumber(),
        })
    }

    render() {
        return (
            <div className="dice">
                <div className="dice-button">
                    <Button onClick={() => this.handleClick()} variant="contained" color="primary">
                        Throw Cubes
                    </Button>
                </div>
                <div className="first-cube">
                    <Cube number={this.state.firsCube}/>
                </div>
                <div className="second-cube">
                    <Cube number={this.state.secondCube}/>
                </div>
            </div>
        )
    }
}

export default Dice;
