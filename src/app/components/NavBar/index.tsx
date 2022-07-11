import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../svgs/Logo';
import NavDrawer from '../NavDrawer';
import { StyledNavBar, StyledLogo, StyledMenu, StyledDrawer } from './styles';
import React from 'react';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

export const menu = [
  { id: 1, link: '/#about-us', text: 'About us' },
  { id: 2, link: '/#services', text: 'Services' },
  { id: 3, link: '/#contact-us', text: 'Contact us' }
];

const NavBar = () => {
  return (
    <ElevationScroll>
      <StyledNavBar>
        <Container>
          <Toolbar disableGutters>
            <StyledLogo>
              <HashLink smooth to="#top" aria-label="Logo">
                <Logo />
              </HashLink>
            </StyledLogo>
            <StyledMenu>
              {menu.map((menu) => (
                <HashLink smooth to={menu.link} key={menu.id}>
                  {menu.text}
                </HashLink>
              ))}
            </StyledMenu>
            <StyledDrawer>
              <NavDrawer />
            </StyledDrawer>
          </Toolbar>
        </Container>
      </StyledNavBar>
    </ElevationScroll>
  );
};

export default NavBar;
