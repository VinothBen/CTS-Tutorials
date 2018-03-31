import React from 'react';
import Header from './Header';
import Footer from './Footer';
import * as Actions from '../Actions/action';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
class Box extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            formData: {
                userName: '',
                emailId: '',
                phoneNumber: '',
            },
            submited: false
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
        // this.props.dispatch(Actions.changeData(this.state.formData.userName));
        this.props.dispatch(Actions.addUserApi(this.state.formData));
        this.setState({submited: true});
    }
    componentWillMount() {
        try {
            this.props.dispatch(Actions.changeTitle("Add User"));
        } catch (error) {
            console.log('ERROR_MESSAGE:' + error.message);
        }

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.values.status == true) {
            toast.success("Data Added Successfully !", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000,
                progressClassName: 'transparent-progress'

            });
            this.setState({submited:false});
            this.props.dispatch(Actions.addUserStatusToogle(false));
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="form-group" style={this.boxStyle()}>
                    <h1 style={{}}>User Details!!</h1>
                    <form onSubmit={e => {
                        e.preventDefault()
                        {/*if (!this.state.formData.name.trim()) {
                       console.log("input field is empty!!");
                        return '';
                    }*/}
                        this.handleSubmit();
                    }
                    }>

                        <input type='text' name='userName' className="form-control" placeholder="Name..." onChange={this.handleChange} required />
                        <br /> <input type='text' name='emailId' className="form-control" placeholder="Email Id..." onChange={this.handleChange} required />
                        <br /> <input type='text' name='phoneNumber' className="form-control" placeholder="PhoneNumber..." onChange={this.handleChange} required />
                        <br /> {this.state.submited ? <button type='submit' className="btn .btn-warning">Submit.....</button> : <button type='submit' className="btn btn-primary">Submit</button>}
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        values: state.App
    }
};
export default connect(mapStateToProps, null)(Box);