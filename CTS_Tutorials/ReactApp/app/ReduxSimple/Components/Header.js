import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (data) => {
        if (data == "home") {
            browserHistory.push('/');
        }
        if (data == "adduser") {
            browserHistory.push('/adduser');
        }
        if (data == "listuser") {
            browserHistory.push('/listuser');
        }
    }
    styles = () => {
        title: {
            cursor: 'pointer'
        }
    }

    render() {
        return (
            <div>
                <ToastContainer />
                <MuiThemeProvider>
                    <AppBar
                        title={<div style={{ paddingTop: '5px' }}>{this.props.values.title}</div>}
                        //onTitleTouchTap={handleTouchTap}
                        iconElementLeft={
                            <IconMenu iconButtonElement={<IconButton iconClassName="material-icons" ><span style={{color: 'white'}}>&#9776;</span></IconButton>}>
                                <MenuItem primaryText="Home" onClick={e => { e.preventDefault, this.handleClick("home") }} />
                                <MenuItem primaryText="Add User" onClick={e => { e.preventDefault, this.handleClick("adduser") }} />
                                <MenuItem primaryText="User List" onClick={e => { e.preventDefault, this.handleClick("listuser") }} />
                            </IconMenu>}
                        iconElementRight={<FlatButton label="SignIn" />}
                    />
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
export default connect(mapStateToProps)(Header);