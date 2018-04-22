import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <l1
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </l1>
      )
    })
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
