import * as React from "react";
import {getRandomNumber} from "../../utils";
import "./catanCubeStyle.css"

class CatanCube extends React.Component {


    render() {
        return (<div className={"catan-cube " + this.props.color}></div>)
    }

}

export default CatanCube;
