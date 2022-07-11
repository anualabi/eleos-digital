import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledServicesContainer = styled(Container, {})`
  padding: 5rem 0;
`;

export const StyledServicesHeading = styled(Box, {})`
  color: white;
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;

    @media (max-width: 699px) {
      font-size: 2.2rem;
    }
  }

  hr {
    width: 90px;
    margin: 0 auto 1rem;

    ${({ theme }) => ({
      backgroundColor: theme.palette.secondary.main
    })}
  }

  p {
    font-weight: 300;

    @media (max-width: 699px) {
      font-size: 1rem;
    }
  }
`;

export const StyledServicesGrid = styled(Grid, {})`
  padding: 0 9rem;

  @media (max-width: 699px) {
    padding: 0 1rem;
  }
`;

export const StyledServicesCard = styled(Box, {})`
  width: 85%;
  min-height: 350px;
  margin: 2rem auto;
  padding: 2rem 2.2rem;

  ${({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderBottom: `6px solid ${theme.palette.secondary.main}`
  })}

  @media (max-width: 699px) {
    width: 90%;
    min-height: 350px;
    margin: 1.5rem auto;
    padding: 1.5rem 1.75rem;
    text-align: center;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 1rem 0;

    ${({ theme }) => ({
      color: theme.palette.secondary.main
    })}
  }

  p {
    color: white;
    font-weight: 300;
  }
`;
