import React from 'react'; import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const AuthorForm = ({author, onSave, onChange, saving, errors}) => {
    return (
      <form>
        <h1>
          Manage Course
        </h1>
        <TextInput
          name="firstName"
          label = "First name"
          value={author.firstName}
          onChange={onChange}
          error={errors.title} />

        <TextInput
          name="lastName"
          label = "Last name"
          value={author.lastName}
          onChange={onChange}
          error={errors.category} />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          onClick={onSave}
          className="btn btn-primary" />


      </form>
    );
};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default AuthorForm;
