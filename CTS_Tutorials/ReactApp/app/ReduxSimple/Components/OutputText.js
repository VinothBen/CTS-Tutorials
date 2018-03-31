import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../Actions/action';
import Header from './Header';
import Footer from './Footer';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListData from './ListData'

class TextOt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            results: []
        };
        // this.handleClick = this.handleClick.bind(this);
        //this.handleChange = this.handleChange.bind(this);
    }

    // handleClick = () => {
    //     this.setState({ clicked: true });
    //     this.props.dispatch(Actions.getAllUserApi());
    // }
    componentWillMount() {
        try {
            this.props.dispatch(Actions.changeTitle("User List"));
            this.props.dispatch(Actions.getAllUserApi());
            //this.props.dispatch(Actions.loadJsonData());
            this.props.dispatch(Actions.updateToggle(false));
        } catch (error) {
            console.log('ERROR_MESSAGE:' + error.message);
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.state.results = [];
        if (name == "search" && value != null) {
            this.props.values.items.map((item) => {
                if (item.name.toLowerCase().indexOf(value) != -1) {
                    this.state.results.push(item);
                    // Object.assign({},this.state , {results: item});
                }
            });
            this.props.dispatch(Actions.searchData(this.state.results));
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{ margin: '0% 10%' }}>
                    <h3>All User Details!!</h3>
                    <br />
                    {/*<button className="btn btn-primary" name='butt' onClick={e => { e.preventDefault, this.handleClick() }}>Click !!</button>*/}
                    {this.props.values.isFetching ? null : <input type="text" name="search" placeholder="Search..." onChange={this.handleChange} />}
                    {this.props.values.isFetching ? <CirclerBar /> : <ListData obj={this.props.values.searchItems} />}
                </div>
                <Footer />
            </div>
        );
    }
};


class CirclerBar extends React.Component {
    boxStyle = () => {
        return {
            textAlign: "center",
            width: '250px',
            height: '300px',
            margin: '0% 42%'
        }
    }
    render() {
        return (
            <div style={this.boxStyle()}>
                <MuiThemeProvider>
                    <CircularProgress size={80} thickness={5} />
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

// TextOt.PropTypes = {
//     text: PropTypes.string.isRequired
// }
export default connect(mapStateToProps, null)(TextOt);