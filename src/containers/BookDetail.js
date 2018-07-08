import React, { Component } from 'React';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    console.log(this.props)
    var book = this.props.book;

    if (!book) return <div>Select a book.</div>;

    return (
      <div>
        <h3>Detail for:</h3>
        <div>Title: {book.title}</div>
        <div>Pages: {book.pages}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
