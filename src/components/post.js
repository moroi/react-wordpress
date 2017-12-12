import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { setting } from '../styles/setting';

const PostContainer = styled.section`
  margin-bottom: 2rem;
`;

const PostLink = styled(Link)`
  color: ${setting.blackColor};
  text-decoration: none;

  &:hover h1 {
    color: ${setting.blueColor};
  }
`;

const PostThumbnail = styled.div`
  height: 340px;
  margin-bottom: 1rem;
  background-position: center;
  background-size: cover;
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const PostDescription = styled.div`
  margin-bottom: 1rem;
`;

const PostList = styled.ul`
`;

const PostItem = styled.li`
  display: inline-block;
  margin-right: 1rem;

  &::before {
    content: "#";
    margin-right: .4rem;
    color: ${setting.grayColor};
  }
}
`;

export default class Post extends Component {
  render() {
    const post = this.props.post;
    console.log(post);
    
    const id = post.id;
    const title = post.title.rendered;
    let excerpt = post.excerpt.rendered.replace("[&hellip;]", "");
    const categories = post._embedded['wp:term'][0];
    const tags = post._embedded['wp:term'][1];
    let thumbnail = post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    const backgroundImage = { backgroundImage: 'url(' + thumbnail + ')' }

    return (
      <PostContainer key={id}><PostLink to={"/" + id} title={title}>
        <PostThumbnail style={backgroundImage}></PostThumbnail>
        <PostTitle>{title}</PostTitle>
        <PostDescription dangerouslySetInnerHTML={{ __html: excerpt }} />
        <PostList>
          {categories.map((category) => (
            <PostItem>{category.name}</PostItem>
          ))}
          {tags.map((tag) => (
            <PostItem>{tag.name}</PostItem>
          ))}
        </PostList>
      </PostLink></PostContainer>
    );
  }
}
