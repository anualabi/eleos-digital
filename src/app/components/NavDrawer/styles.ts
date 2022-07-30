import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledMenuIcon = styled(Box)(
  ({ theme }) => `
    svg {
      width: 35px;

      ${theme.breakpoints.up('sm')} {
        width: 40px;
      }
    }
  `
);

export const StyledMobileNavList = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.primary.main};
    width: 220px;
    height: 100%;

    .close-mobile-nav {
      display: flex;
      justify-content: flex-end;
      padding: 1rem 2rem;

      svg {
        font-size: 2rem;
      }
    }

    .mobile-nav-list {
      a {
        span {
          font-size: 1rem;
          font-wight: bold;
          text-transform: uppercase;
        }
      }
    }

    ${theme.breakpoints.up('sm')} {
      width: 320px;

      .mobile-nav-list {
        a {
          span {
            font-size: 1.1rem;
          }
        }
      }
    }
  `
);
