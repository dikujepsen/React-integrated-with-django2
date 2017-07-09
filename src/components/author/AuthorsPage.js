import {bindActionCreators} from 'redux';
import React from 'react'; import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AuthorList from './AuthorList';
import * as authorActions from '../../actions/authorActions';
import {browserHistory} from 'react-router';


class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/author');
  }

  render() {
    const authors = this.props.authors;
    return (
      <div >
        <h1>Authors</h1>
        <input type="submit"
               value="Add Author"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <AuthorList authors={authors}/>
      </div>
    );
  }
}


AuthorsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
