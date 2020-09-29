import * as React from "react";
import Cube from "../cube/cube";
import CatanCube from "../catanCube/catanCube";
import {getRandomNumber} from "../../utils";
import './catanDiceStyle.css'
import Button from "@material-ui/core/Button";

class CatanDice extends React.Component {
    state = {
        firstCube: null,
        secondCube: null,
        cubeColor: null,
    };

    setCubeColor() {
        let cubeColor;
        const randNumber = getRandomNumber();
        switch (randNumber) {
            case 1:
            case 2:
            case 3:
                cubeColor = 'black';
                break;
            case 4:
                cubeColor = 'blue';
                break;
            case 5:
                cubeColor = 'green';
                break;
            case 6:
                cubeColor = 'yellow';
                break;
        }
        this.setState({cubeColor: cubeColor});
    }

    handleClick() {
        this.setState({
            firstCube: getRandomNumber(),
            secondCube: getRandomNumber(),
            collorCube: this.setCubeColor(),
        })
    }

    render() {
        return (
            <div className="catanDice">
                <div className="catan-cubes-button">
                    <Button onClick={() => this.handleClick()} variant="contained" color="primary">
                        Throw Catan Cubes
                    </Button>
                </div>
                <div className="first-cube">
                    <Cube number={this.state.firstCube}/>
                </div>
                <div className="second-cube">
                    <Cube number={this.state.secondCube}/>
                </div>
                <div className="color-cube">
                    <CatanCube color={this.state.cubeColor}/>
                </div>
            </div>
        );
    }

}

export default CatanDice;
