import React from 'react';
import { connect } from 'react-redux';
class VotingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            voting: {
                Blue: 0,
                Green: 0,
                Red: 0
            },
            isVoted: false
        }
    }
    boxStyle = () => {
        return {
            textAlign: "center",
            width: '250px',
            height: '300px',
            margin: '0% 42%'
        }
    }
    onClickHandler = (name) => {
        const temp = Object.assign({}, this.state.voting);
        if (name === 1 && !this.state.isVoted) {
            temp.Blue++;
        }
        if (name === 2 && !this.state.isVoted) {
            temp.Green++;
        }
        if (name === 3 && !this.state.isVoted) {
            temp.Red++;
        }
        this.setState({ voting: temp,isVoted:true });
    }
    componentWillMount() {
        console.log(this.props.loginValue.userName);
    }
    render() {
        return (
            <div style={this.boxStyle()}>
                <h1>Welcome! {this.props.loginValue.userName} Click to Vote!!</h1>
                <br />
                <button className='btn btn-primary' onClick={(e) => { e.preventDefault, this.onClickHandler(1) }}>Blue</button><br /><br />
                <button className='btn btn-success' onClick={(e) => { e.preventDefault, this.onClickHandler(2) }}>Green</button><br /><br />
                <button className='btn btn-danger' onClick={(e) => { e.preventDefault, this.onClickHandler(3) }}>Red</button><br /><br />
                <p>Blue: {this.state.voting.Blue}</p>
                <p>Green: {this.state.voting.Green}</p>
                <p>Blue: {this.state.voting.Red}</p>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        loginValue: state.VotingReducer
    }
}
export default connect(mapStateToProps, null)(VotingPage);