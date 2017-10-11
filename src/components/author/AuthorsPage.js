import {bindActionCreators} from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AuthorList from './AuthorList';
import authorActions from '../../actions/authorActions';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import constants from '../../constants/constants';
import Pager from '../common/Pager';


class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.deleteAuthor = this.deleteAuthor.bind(this);
    //this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/authors/add');
  }

  nextPage = (event) =>  {
    event.preventDefault();
    this.props.actions.loadNextPage(this.props.authors);
  }

  previousPage(event) {
    event.preventDefault();
    this.props.actions.loadPreviousPage(this.props.authors);
  }

  deleteAuthor(event) {
    event.preventDefault();
    let authorId = $(event.target).data('id');
    let author = this.props.authors.results.filter(author => author.id === authorId)[0];
    this.props.actions.deleteDataItem(author)
      .then(success => {
        if (success) {
          toastr.success("Author deleted");
        }
      })
      .catch(error => {
        if (error.message === constants.DELETE_FAILED) {
          toastr.error('Cannot delete, because author is active on one or more courses');
        } else {
          toastr.error(error);
        }

      });
  }

  render() {
    const authors = this.props.authors.results;
    return (
      <div >
        <h1>Authors</h1>
        <input type="submit"
               value="Add Author"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <AuthorList
          authors={authors}
          onDelete={this.deleteAuthor}
        />

        <Pager
          dataList={this.props.authors}
          nextPage={this.nextPage}
          previousPage={this.previousPage}
        />
      </div>
    );
  }
}


AuthorsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.object.isRequired
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
