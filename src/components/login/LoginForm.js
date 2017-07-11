import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const LoginForm = ({login, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>
        Manage Course
      </h1>
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
        onClick={onSave}
        className="btn btn-primary" />

    </form>
  );
};

LoginForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default LoginForm;
