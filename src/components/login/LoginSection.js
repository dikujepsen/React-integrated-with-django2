import {bindActionCreators} from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import LoginApi from '../../api/loginApi';
import toastr from 'toastr';

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

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
    this.setState({saving: true});
    event.preventDefault();
    let token = $("[name='csrfmiddlewaretoken']").val();
    let stateLogin = this.state.login;
    stateLogin.csrfmiddlewaretoken = token;
    LoginApi.LoginUser(stateLogin).then(response => {
      let csrftoken = getCookie('csrftoken');
      $('#container').data('csrftoken', csrftoken);
      if (response.type === 'opaqueredirect') {
        toastr.success('Login successful');
      } else {
        toastr.error('Login failed');
      }
      stateLogin.password = '';
      this.setState({saving: false, login: stateLogin});
    });
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
