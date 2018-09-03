import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getPost(id);
  };

  onDeleteClick() {
    const id = this.props.match.params.id;
    this.props.deletePost(id, () => this.props.history.push('/'));
  }

  render() {
    const { post } = this.props;
    console.log(this.props);
    return (
      <div>
        <Link to="/">Back</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>Tags: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => ({ post });

export default connect(mapStateToProps, { getPost, deletePost })(PostView);
