/**
 * Created by jacob on 28-06-17.
 */
import React from 'react'; import PropTypes from 'prop-types';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors, onDelete}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>
          &nbsp;
        </th>
        <th>
          &nbsp;
        </th>
        <th>
          First name
        </th>
        <th>
          Last name
        </th>

      </tr>
      </thead>
      <tbody>
      {authors.map(author =>
        <AuthorListRow key={author.id}
                       author={author}
                       onDelete={onDelete}
        />
        )}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AuthorList;
