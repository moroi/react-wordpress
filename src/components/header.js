import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { setting } from '../styles/setting';

import style from "../styles/style.css";

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${setting.grayColor};
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  width: ${setting.siteWidth};
  margin: 0 auto;
  padding: 1rem 0;
`;

const Logo = styled.h1`
  font-family: ${setting.webFontFamily};
  font-weight: 900;
  width: 200px;
  font-size: 2rem;
`;

const LogoLink = styled(Link)`
  color: ${setting.blackColor};
  text-decoration: none;
`;

const Nav = styled.nav`
  flex: 1;
`;

const NavList = styled.ul`
  text-align: right;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-left: 1rem;
`;

const NavLink = styled(Link)`
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer><HeaderInner>
        <Logo>
          <LogoLink to="/" title="">Reparade</LogoLink>
        </Logo>

        <Nav>
          <NavList>
            <NavItem><NavLink to="/" title="">1</NavLink></NavItem>
            <NavItem><NavLink to="/" title="">2</NavLink></NavItem>
            <NavItem><NavLink to="/" title="">3</NavLink></NavItem>
            <NavItem><NavLink to="/" title="">4</NavLink></NavItem>
            <NavItem><NavLink to="/" title="">5</NavLink></NavItem>
          </NavList>
        </Nav>

      </HeaderInner></HeaderContainer>
    );
  }
}
