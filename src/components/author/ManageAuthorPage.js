import {bindActionCreators} from 'redux';
import React from 'react'; import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import authorActions from '../../actions/authorActions';
import AuthorForm from './AuthorForm';
import toastr from 'toastr';

class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: Object.assign({}, this.props.author),
      errors: {},
      saving: false
    };

    this.saveAuthor = this.saveAuthor.bind(this);
    this.updateAuthorState = this.updateAuthorState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.author.id !== nextProps.author.id) {
      this.setState({author: Object.assign({}, nextProps.author)});
    }
  }


  updateAuthorState(event) {
    const field = event.target.name;
    let author = this.state.author;
    author[field] = event.target.value;
    return this.setState({author: author});
  }

  setValidationError(message) {
    toastr.error(message);
    this.setState({saving: false});
  }

  saveAuthor(event) {
    event.preventDefault();
    this.setState({saving: true});
    let author = this.state.author;
    const minAuthorNameLength = 3;
    if (author.firstName.length < minAuthorNameLength) {
      this.setValidationError(`First name must be at least ${minAuthorNameLength} characters.`);
      return;
    }

    if (author.lastName.length < minAuthorNameLength) {
      this.setValidationError(`Last name must be at least ${minAuthorNameLength} characters.`);
      return;
    }


    this.props.actions.saveDataItem(this.state.author)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Author saved');
    this.context.router.push('/authors');
  }

  render() {
    return (
      <AuthorForm
        onChange={this.updateAuthorState}
        onSave ={this.saveAuthor}
        author={this.state.author}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}


ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};


function getAuthorById(authors, id) {
  const author = authors.filter(author => author.id === id);
  if (author.length) return author[0];
  return null;
}

function mapStateToProps(state, ownProps) {

  const authorId = parseInt(ownProps.params.id);

  let author = {id: '', firstName: '', lastName: ''};

  if (authorId && state.authors.length) {
    author = getAuthorById(state.authors, authorId);
  }

  return {
    author: author
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
