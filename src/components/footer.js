import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { setting } from '../styles/setting';

const FooterContainer = styled.footer`
  border-top: 1px solid ${setting.grayColor};
`;

const FooterInner = styled.div`
  width: ${setting.siteWidth};
  margin: 0 auto;
  padding: 2rem 0;
`;

const Copyright = styled.div`
  text-align: center;
`;

const CopyrightLink = styled(Link)`
  color: ${setting.blackColor};
`;


export default class Footer extends Component {
  render() {
    return (
      <FooterContainer><FooterInner>
        <Copyright>© 2017 <CopyrightLink to="https://reparade.com" title="Reparade" target="_blank" rel="noopener">Reparade</CopyrightLink>.</Copyright>
      </FooterInner></FooterContainer>
    );
  }
}
