import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Footer extends React.Component {
    render() {
        return (
            <div>
                <p style={{textAlign:'center'}}>-------------Footer---------------</p>
                {/*<MuiThemeProvider>
                    <AppBar style={{height:'30px', backgroundColor:'#33FFBB'}}
                     title={<h4 style={{textAlign:'center'}}>Footer</h4>}
                     iconElementLeft={<h2></h2>} />
                </MuiThemeProvider>*/}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        values: state.App
    }
};
export default Footer;