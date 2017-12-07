import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { setting } from '../styles/setting';

import Main from './main';

const SingleHeader = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  height: 40vh;
  margin-bottom: 2rem;
  background-position: center;
  background-size: cover;
`;

const SingleTitle = styled.h1`
  margin: 0 1rem 1rem;
  color: ${setting.whiteColor};
  font-size: ${setting.fontSizeLarge};
  font-weight: bold;
  text-align: center;
`;

const SingleList = styled.ul`
  text-align: center;
`;

const SingleItem = styled.li`
  display: inline-block;
  margin: 0 1rem;
`;

const SingleLink = styled(Link)`
  color: ${setting.whiteColor};
  text-decoration: none;

  &::before {
    content: "#";
    margin-right: .4rem;
    color: ${setting.grayColor};
  }
`;

const SingleContent = styled.article`

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1em 0;
    font-weight: bold;
  }

  h1 {
    padding-bottom: .2rem;
    border-bottom: .2em solid ${setting.blueColor};
    font-size: ${setting.fontSizeLarge};
  }

  h2 {
    font-size: ${setting.fontSizeLarge};
  }

  h3 {
    padding-bottom: .2rem;
    border-bottom: .2em solid ${setting.blueColor};
    font-size: ${setting.fontSizeMedium};
  }

  h4 {
    font-size: ${setting.fontSizeMedium};
    }
  }

  h5 {
    padding-bottom: .2rem;
    border-bottom: .2em solid ${setting.blueColor};
  }

  h6 {
  }

  p {
    margin: 1em 0;
    
    & > strong,
    & > em {
      font-weight: bold;
    }

    & > img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  ul, ol {
    margin: 1em 0;
    padding-left: 2em;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: circle;
    
    ul, ol {
      margin: 0 0 0 2rem;
      list-style: circle;
    }
  }

  blockquote {
    margin: 1em 0;
    padding: 1em;
    background-color: ${setting.grayColor};
    
    & > *:first-child {
      margin-top: 0;
    }
    
    & > *:last-child {
      margin-bottom: 0;
    }
  }

  table {
    max-width: 100%;
    margin: 1em 0;
    border-collepce: collapse; 

    th {
      background-color: ${setting.grayColor};
    }

    th, td {
      padding: 1em;
      border: 1px solid ${setting.grayColor};
    }
  }
`;

export default class Single extends Component {
  componentWillReceiveProps(nextprops) {
    if (this.props.match.params.id !== nextprops.match.params.id) {
      this.scrollToTop(nextprops.match.params.id);
    }
  }

  scrollToTop(id) {
    const fetchPost = this.props.fetchPost;
    const s = setInterval(function() {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
        if (pos < 40) fetchPost(id);
      } else {
        clearInterval(s);
      }
    }, 16);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetPost();
  }

  render() {
    const { post, isLoading, isError } = this.props.post;
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (isError) {
      return <div>{isError.message}</div>;
    } else if (!post) {
      return <span />;
    }

    const title = post.title.rendered;
    const content = post.content.rendered;
    const categories = post._embedded['wp:term'][0];
    const tags = post._embedded['wp:term'][1];
    let thumbnail = post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    const backgroundImage = {
      backgroundImage: 'url(' + thumbnail + ')'
    }

    return (
      <Main>
        <SingleHeader style={backgroundImage}>
          <SingleTitle>{title}</SingleTitle>

          <SingleList>
            {categories.map((category) => (
              <SingleItem>
                <SingleLink to={"/" + category.slug} title={category.name}>{category.name}</SingleLink>
              </SingleItem>
             ))}
            {tags.map((tag) => (
              <SingleItem>
                <SingleLink to={"/tag/" + tag.slug} title={tag.name}>{tag.name}</SingleLink>
              </SingleItem>
             ))}
          </SingleList>

        </SingleHeader>

        <SingleContent dangerouslySetInnerHTML={{ __html: content }} />
      </Main>
    );
  }
}
