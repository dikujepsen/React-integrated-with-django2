import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const LoginForm = ({login, onLogin, onChange, saving, errors}) => {
  return (
    <form>
      <h3>
        Login
      </h3>
      <TextInput
        name="username"
        label = "Username"
        value={login.username}
        onChange={onChange}
        error={errors.username} />

      <TextInput
        name="password"
        label = "Password"
        value={login.password}
        onChange={onChange}
        error={errors.password} />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Logging in...' : 'Login'}
        onClick={onLogin}
        className="btn btn-primary" />

    </form>
  );
};

LoginForm.propTypes = {
  login: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default LoginForm;
