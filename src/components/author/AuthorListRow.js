/**
 * Created by jacob on 28-06-17.
 */
import React from 'react'; import PropTypes from 'prop-types';
import {Link} from 'react-router';

const AuthorListRow = ({author, onDelete}) => {
  return (
    <tr>
      <td>
        <button type="button"
                onClick={onDelete}
                data-id={author.id}
                className="btn btn-primary">Delete</button>
      </td>
      <td><Link to={'/author/' + author.id}>Edit author </Link></td>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AuthorListRow;
