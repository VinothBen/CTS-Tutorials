import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Actions'
import { browserHistory } from 'react-router';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                password: ''
            },
            isSubmited: false
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

    componentWillReceiveProps(nextProps) {
        console.log("Nextprops::",nextProps.loginValue.isAthunticated);
        if (nextProps.loginValue.isAthunticated) {
            browserHistory.push('/votingpage');
        }
    }


    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        var data = this.state.formData;
        data[name] = value;
        this.setState({ formData: data });

    }
    handleSubmit = () => {
        this.props.dispatch(Actions.logIn(this.state.formData));
        this.setState({ isSubmited: true });
        console.log(this.props.loginValue.isAthunticated);
    }

    render() {
        return (
            <div style={this.boxStyle()}><h1>Login Page!!</h1>
                <br />
                <form onSubmit={
                    (e) => {
                        e.preventDefault();
                        this.handleSubmit();
                    }
                }>
                    <input type='text' name='userName' className="form-control" placeholder='UserName...' onChange={this.handleChange} required /><br />
                    <input type='text' name='password' className="form-control" placeholder='Password...' onChange={this.handleChange} required /><br />
                    <button type='submit' className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loginValue: state.VotingReducer
    }
}
export default connect(mapStateToProps, null)(Login);