import React, { Component } from 'react';
import styled from 'styled-components';
import { setting } from '../styles/setting';

const MainContainer = styled.div`
  width: ${setting.siteWidth};
  margin: 0 auto;
  padding: 2rem 0;
`;

export default class Main extends Component {
  render() {
    return (
      <MainContainer>
        {this.props.children}
      </MainContainer>
    );
  }
}
