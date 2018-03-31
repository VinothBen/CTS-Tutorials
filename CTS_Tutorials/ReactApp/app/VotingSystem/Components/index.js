import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import LoginPage from './login';
import VotingPage from './votingpage';
class RootApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  }
   componentWillReceiveProps(nextProps) {
    if (nextProps.loginValue.isAthunticated) {
        this.setState({authenticated:true});
    }
    else if(!nextProps.loginValue.isAthunticated){
        this.setState({authenticated:false});
    }
  }

  loggedin = () => {
    if (this.state.authenticated){
      return true;
    }
    else{
      return false;
    }
  }
  requireAuth = (nextState, replace) => {
    if (!this.loggedin()) {
      replace({
        pathname: '/'
      })
    }
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route exact path="/" component={LoginPage} />
        <Route path="/votingpage" component={VotingPage} onEnter={this.requireAuth} />
      </Router>
    );
  }
}
function mapStateToProps(state) {
    return {
        loginValue: state.VotingReducer
    }
}
export default connect(mapStateToProps,null)(RootApp);