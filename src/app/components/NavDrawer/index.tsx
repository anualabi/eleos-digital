import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import { menu } from '../NavBar';
import HamburgerIcon from '../../svgs/Hamburger';
import { StyledNavDrawer, StyledMenuIcon } from './styles';

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
    <Box
      sx={{ width: 200, height: '100%', backgroundColor: 'secondary.main', color: 'primary.main' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2, px: 4 }}>
        <CloseIcon />
      </Box>
      <List>
        {menu.map((text) => (
          <ListItem button key={text} sx={{ my: 1 }}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledNavDrawer>
      <StyledMenuIcon onClick={toggleDrawer(anchor, true)}>
        <HamburgerIcon />
      </StyledMenuIcon>
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </StyledNavDrawer>
  );
};

export default NavDrawer;