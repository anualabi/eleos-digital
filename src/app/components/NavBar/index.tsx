import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../svgs/Logo';
import NavDrawer from '../NavDrawer';
import { StyledNavBar, StyledLogo, StyledMenu, StyledDrawer } from './styles';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const menu = [
  { id: 1, link: '/#about-us', text: 'About us' },
  { id: 2, link: '/#services', text: 'Services' },
  { id: 3, link: '/#contact-us', text: 'Contact us' }
];

const NavBar = () => {
  return (
    <HideOnScroll>
      <StyledNavBar>
        <Container>
          <Toolbar disableGutters>
            <StyledLogo>
              <HashLink smooth to="#top">
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
    </HideOnScroll>
  );
};

export default NavBar;
