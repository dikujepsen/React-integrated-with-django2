import {bindActionCreators} from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';

class LoginSection extends React.Component {
    constructor(props, context) {
        super(props, context);

      this.state = {
        login: {username: "", password: ""},
        errors: {},
        saving: false
      };
      this.loginUser = this.loginUser.bind(this);
      this.updateLoginState = this.updateLoginState.bind(this);
    }

  updateLoginState(event) {
    const field = event.target.name;
    let stateLogin = this.state.login;
    stateLogin[field] = event.target.value;
    return this.setState({login: stateLogin});
  }

  loginUser(event) {
    event.preventDefault();
    this.setState({saving: true});
  }


    render() {
        return (
          <LoginForm
            login={this.state.login}
            onLogin ={this.loginUser}
            onChange={this.updateLoginState}
            errors ={this.state.errors}
            saving={this.state.saving}
          />
        );
    }



}


LoginSection.propTypes = {
  // actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     };
// }

export default connect(mapStateToProps)(LoginSection);
