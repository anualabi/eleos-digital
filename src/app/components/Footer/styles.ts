import Container from '@mui/material/Container';
import { styled } from '@mui/system';

export const StyledFooterContainer = styled(Container)(
  ({ theme }) => `
    color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 1.75rem 0;

    .copyright,
    .all-rights {
      margin: 0.25rem 0;
      text-align: center;
      width: 100%;
    }

    .copyright {
      margin-right: 0.5rem;
    }

    ${theme.breakpoints.up('md')} {
      .copyright,
      .all-rights {
        text-align: left;
        width: auto;
      }
    }
  `
);
