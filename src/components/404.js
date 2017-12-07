import React, { Component } from 'react';

import styled from 'styled-components';
import { setting } from '../styles/setting';

const NotFoundContainer = styled.aside`
  padding: 20vh 0;
  font-family: ${setting.webFontFamily};
  font-size: ${setting.fontSizeLarge};
  text-align: center;
  font-weight: 900;
`;

export default class NotFound extends Component {
  render() {
    return (
      <NotFoundContainer>404 Not Found</NotFoundContainer>
    );
  }
}
