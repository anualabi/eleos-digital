import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledNavBar = styled(AppBar)(
  ({ theme }) => `
    background-color: ${theme.palette.primary.light};
    height: 80px;

    ${theme.breakpoints.up('md')} {
      height: 100px;
    }
  `
);

export const StyledLogo = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    flexGrow: 1;
    margin-right: auto;
    height: 100%;

    a {
      height: 100%;

      svg {
        display: flex;
        align-items: center;
        margin-left: -10px;
        width: 180px;
        height: 100%;

        ${theme.breakpoints.up('md')} {
          width: 200px;
        }
      }
    }
  `
);

export const StyledMenu = styled(Box)(
  ({ theme }) => `
    display: flex;
    justify-content: flex-end;

    a {
      border-radius: 4px;
      color: white;
      display: none;
      margin: 1rem 0 1rem 1rem;
      padding: 0.75rem 1.5rem;
      text-transform: uppercase;
  
      &:last-child {
        background-color: ${theme.palette.secondary.main};
        color: black;
      }
    }

    ${theme.breakpoints.up('md')} {
      a {
        display: block;
      }
    }
  `
);

export const StyledDrawer = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    height: 100%;

    ${theme.breakpoints.up('md')} {
      display: none;
    }
  `
);
