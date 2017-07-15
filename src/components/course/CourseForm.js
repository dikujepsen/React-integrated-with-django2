import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>
        Manage Course
      </h1>
      <TextInput
        name="title"
        label = "Title"
        value={course.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name="author_id"
        label="Author"
        value={course.author_id}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} errors={errors.author_id} />

      <TextInput
        name="category"
        label = "Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />


      <TextInput
        name="length"
        label = "Length"
        value={course.length}
        onChange={onChange}
        error={errors.length} />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        onClick={onSave}
        className="btn btn-primary" />


    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
