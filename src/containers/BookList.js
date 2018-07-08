import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book =>
      <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
      </li>);
  }

  render () {
    return <ul className="list-group col-sm-4">
      {this.renderList()}
    </ul>
  }
}

// whatever is returned will be shown as props for the BookList
const mapStateToProps = ({ books }) => { return { books }};

// whatever is returned will be shown as props for the BookList
// bindActionCreators - whenever selectBook is called, the result should be passed to all redurcers
const mapDispatchToProps = dispatch => bindActionCreators( { selectBook }, dispatch);

// Promote BookList from a component to a container
// needs to know about this new dispatch method, select book
// make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
