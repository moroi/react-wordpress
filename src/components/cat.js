import React, { Component } from 'react';

import Main from './main';
import Post from './post';
import Button from './button';

export default class Cat extends Component {
  constructor(props) {
    super(props);
    this.currentPage = 1;
    this.renderMoreButton = this.renderMoreButton.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts(this.currentPage);
  }

  renderPosts(posts) {
    return posts.map(post => {
      return (
        <Post post={post} />
      );
    });
  }

  renderMoreButton(totalPages) {
    let clickHandler = function() {
      this.currentPage += 1;
      this.props.fetchPosts(this.currentPage);
    };
    clickHandler = clickHandler.bind(this);
    if (this.currentPage < totalPages) {
      return <Button clickHandler={clickHandler} />;
    }
  }

  render() {
    const { posts, totalPages, isError, isLoading } = this.props.posts;

    if (isLoading) {
      return <div>Loading...</div>;
    } else if (isError) {
      return <div>{isError.message}</div>;
    }

    return (
      <Main>
        {this.renderPosts(posts)}
        {this.renderMoreButton(totalPages)}
      </Main>
    );
  }
}
