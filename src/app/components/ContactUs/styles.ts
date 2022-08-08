import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledContactContainer = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.primary.main};
    color: white;
    padding: 5rem 0;
    text-align: center;

    .divider {
      background-color: ${theme.palette.secondary.main};
      width: 90px;
      margin: 0.5rem auto 1rem;
    }

    p {
      margin-bottom: 0.25rem;
    }

    a {
      color: white;

      &:hover {
        color: ${theme.palette.secondary.main};
        text-decoration: none;
      }
    }

    svg {
      margin-right: 0.5rem;
      width: 30px;
    }

    .email-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ${theme.breakpoints.up('md')} {
      text-align: left;

      .divider {
        margin: 0.5rem 0 1rem;
      }

      .email-wrapper {
        justify-content: start;
      }
    }
  `
);
