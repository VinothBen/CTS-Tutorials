import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Actions/action';
import swal from 'sweetalert';
import Header from './Header';
import Footer from './Footer';
import QString from 'query-string';
import { browserHistory } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ToastContainer, toast } from 'react-toastify';
class Update extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            formData: {
                name: '',
                emailId: '',
                phoneNumber: '',
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

    handleChange = (event) => {

        const { name, value } = event.target;
        var data = this.state.formData;
        data[name] = value;
        this.setState({ formData: data });
        //  this.setState({formData:{ [name] : value }});
        // this.setState({ input: event.target.value });
    }
    handleSubmit = () => {

        this.props.dispatch(Actions.updateUserApi(this.state.formData));
        this.setState({ isSubmited: true });

    }
    componentWillMount() {
        try {
            this.props.dispatch(Actions.changeTitle("Update"));
        } catch (error) {
            console.log('ERROR_MESSAGE:' + error.message);
        }
        //this.props.dispatch(Actions.loadJsonData());
        this.props.dispatch(Actions.getAllUserApi());
        console.log("ComponentWillMount");
    }
    componentDidMount() {
        console.log("ComponentDidMount", this.props.values.searchItems);
    }
    componentWillReceiveProps(nextProps) {

        console.log("componentWillReceiveProps", nextProps.values.searchItems, "UserId:", this.props.routeParams.userid);
        const temp = nextProps.values.searchItems.filter((item) => {
            if (item.id == this.props.routeParams.userid) {
                this.setState({ formData: item });
                console.log(item);
            }
        });
        if (nextProps.values.isUpdateCompleted == true) {
            // browserHistory.push('/listuser');
            toast.success("Data Updated Successfully !", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000,
                progressClassName: 'transparent-progress'

            });
            this.setState({ isSubmited: false });
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="form-group" style={this.boxStyle()}>
                    <h1><i>Details!! </i></h1>
                    <form onSubmit={e => {
                        e.preventDefault()
                        this.handleSubmit();
                    }
                    }>

                        <input type='text' name='name' className="form-control" value={this.state.formData.name} onChange={this.handleChange} required />
                        <br /> <input type='text' name='emailId' className="form-control" value={this.state.formData.emailId} onChange={this.handleChange} required />
                        <br /> <input type='text' name='phoneNumber' className="form-control" value={this.state.formData.phoneNumber} onChange={this.handleChange} required />
                        <br /> {this.state.isSubmited ? <button type='submit' className="btn .btn-warning">Submit.....</button> : <button type='submit' className="btn btn-primary">Submit</button>}
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
};
class CirclerBar extends React.Component {
    boxStyle = () => {
        return {

            width: '250px',
            height: '300px',
            margin: '0% 0%'
        }
    }
    render() {
        return (
            <div style={this.boxStyle()}>
                <MuiThemeProvider>
                    <CircularProgress size={40} thickness={4} />
                </MuiThemeProvider>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        values: state.App
    }
};
export default connect(mapStateToProps, null)(Update);