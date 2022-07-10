import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
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

export const menu = ['About us', 'Services', 'Contact us'];

const NavBar = () => {
  return (
    <HideOnScroll>
      <StyledNavBar>
        <Container>
          <Toolbar disableGutters>
            <StyledLogo>
              <Logo />
            </StyledLogo>
            <StyledMenu>
              {menu.map((menu) => (
                <Button key={menu}>{menu}</Button>
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
