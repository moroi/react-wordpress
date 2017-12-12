import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { setting } from '../styles/setting';

const ButtonContainer = styled.button`
  display: block;
  width: 100%;
  padding: 1rem 0;
  background-color: ${setting.blueColor};
  color: ${setting.whiteColor};
  font-weight: bold;
  font-size: ${setting.fontSizeMedium};
  border-width: 0;
  border-radius: 100px;
  cursor: pointer;
  outline: none;
`;

export default class Button extends Component {
  render() {
    const clickHandler = this.props.clickHandler;

    return (
      <ButtonContainer onClick={clickHandler}>もっとみる</ButtonContainer>
    );
  }
}
