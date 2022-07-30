import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink } from 'react-router-hash-link';
import { menu } from '../../../utils/constants';
import HamburgerIcon from '../../svgs/Hamburger';
import { StyledMenuIcon, StyledMobileNavList } from './styles';

type Anchor = 'right';

const NavDrawer = () => {
  const [state, setState] = React.useState({ right: false });
  const anchor = 'right';

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <StyledMobileNavList
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box className="close-mobile-nav">
        <CloseIcon />
      </Box>
      <List className="mobile-nav-list">
        {menu.map((menu) => (
          <HashLink smooth to={menu.link} key={menu.id}>
            <ListItem button sx={{ my: 1 }}>
              <ListItemText primary={menu.text} />
            </ListItem>
          </HashLink>
        ))}
      </List>
    </StyledMobileNavList>
  );

  return (
    <Box>
      <StyledMenuIcon onClick={toggleDrawer(anchor, true)}>
        <HamburgerIcon />
      </StyledMenuIcon>
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </Box>
  );
};

export default NavDrawer;
