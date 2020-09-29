import React from "react";
import Dice from "../dice/dice";
import './canvasStyle.css'
import CatanDice from "../catanDice/catanDice";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import CasinoTwoToneIcon from '@material-ui/icons/CasinoTwoTone';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as CatanIcon} from '../../svg/catan.svg'

class Canvas extends React.Component {
    state = {
        showDice: true,
        showCatan: true,
    };

    changeCatanState() {
        this.setState({
            showCatan: !this.state.showCatan
        })
    }


    changeDiceState() {
        this.setState({
            showDice: !this.state.showDice
        })
    }

    render() {
        return (
            <div className="canvas">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Game Board
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={"game-picker"}>
                    <Checkbox
                        color={"primary"}
                        checked={this.state.showCatan}
                        onChange={() => this.changeCatanState()}
                    />
                    <Chip
                        icon={<CatanIcon color={"primary"}/>}
                        label="Catan"
                        color="primary"
                    />
                    <Checkbox
                        color={"primary"}
                        checked={this.state.showDice}
                        onChange={() => this.changeDiceState()}
                    />
                    <Chip
                        icon={<CasinoTwoToneIcon/>}
                        label="Dice"
                        color="primary"
                    />
                </div>
                <div className={`game ${this.state.showDice ? '' : 'hidden'}`}>
                    <Typography variant="h5" component="h6" gutterBottom>Dice Game</Typography>
                    <Dice/>
                </div>
                <div className={`game  ${this.state.showCatan ? '' : 'hidden'}`}>
                    <Typography variant="h5" component="h6" gutterBottom>Catan Game</Typography>
                    <CatanDice/>
                </div>
            </div>
        )
    }

}

export default Canvas;
