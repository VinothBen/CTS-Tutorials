import React from 'react';
import * as Actions from '../Actions/action';
import { connect } from 'react-redux';
import HomeImage from '../Images/Jellyfish.jpg';

class HomePage extends React.Component {
    componentWillMount() {
        try {
            this.props.dispatch(Actions.changeTitle("Home"));
        } catch (error) {
            console.log('ERROR_MESSAGE:' + error.message);
        }

    }
    boxStyle = () => {
        return {
            textAlign: "center",
            width: '50%',
            height: '20%',
            margin: '0% 10%',
            opacity: '1',
            textAlign: 'left'
        }
    }
    render() {
        return (
            <div style={this.boxStyle()}>
                <h1>HomePage</h1>
                <img src={HomeImage} />
            </div>
        );
    }
}
export default connect(null, null)(HomePage);