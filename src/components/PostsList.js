import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts();
  };

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`/posts/view/${post.id}`}><div>{post.title}</div></Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  };
}

// Maps properties from state to props
const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { getPosts })(PostsList);
