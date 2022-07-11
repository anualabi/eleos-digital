import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledNavBar = styled(AppBar, {})`
  height: 100px;

  ${({ theme }) => ({
    backgroundColor: theme.palette.primary.light
  })}

  @media (max-width: 699px) {
    height: 90px;
  }
`;

export const StyledLogo = styled(Box)`
  ${() => ({
    display: 'block',
    flexGrow: 1
  })};

  svg {
    display: flex;
    width: 200px;

    @media (max-width: 399px) {
      width: 160px;
    }
  }
`;

export const StyledMenu = styled(Box)`
  display: flex;
  justify-content: flex-end;

  a {
    border-radius: 4px;
    color: white;
    margin: 1rem 0 1rem 1rem;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;

    @media (max-width: 699px) {
      display: none;
    }

    &:last-child {
      ${({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        color: 'black'
      })}
    }
  }
`;

export const StyledDrawer = styled(Box)`
  display: none;

  @media (max-width: 699px) {
    display: block;
  }
`;
