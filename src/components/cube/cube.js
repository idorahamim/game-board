import * as React from "react";
import './cubeStyle.css'
import Typography from "@material-ui/core/Typography";

class Cube extends React.Component {
    state = {
        cubeNumber: null
    };

    renderCube() {
        return (
            <Typography className="cube" variant="h5" component="h6" gutterBottom>
                {this.props.number}
            </Typography>
        )
    }


    render() {
        return (
            this.renderCube()
        )
    }
}


export default Cube;
