import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from '../../svgs/Logo';
import NavDrawer from '../NavDrawer';
import { StyledNavBar, StyledLogo, StyledMenu, StyledDrawer } from './styles';

export const menu = ['About us', 'Services', 'Contact us'];

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
