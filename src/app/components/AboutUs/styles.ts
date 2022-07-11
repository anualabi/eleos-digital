import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledAboutContainer = styled(Container, {})`
  color: white;
  display: flex;
  align-items: center;
  padding-bottom: 4rem;

  @media (max-width: 699px) {
    flex-direction: column;
  }
`;

export const StyledAboutIcon = styled(Box, {})`
  width: 50%;

  @media (max-width: 699px) {
    margin: -4rem auto 0;
    width: 95%;
  }
  svg {
    width: 90%;
  }
`;

export const StyledAboutText = styled(Box, {})`
  padding: 0 8%;
  width: 50%;

  @media (max-width: 699px) {
    margin: -8rem auto 0;
    text-align: center;
    width: 95%;
  }

  h2 {
    font-size: 2.5rem;

    @media (max-width: 699px) {
      font-size: 2.2rem;
    }
  }

  hr {
    width: 90px;
    margin-bottom: 1rem;
    ${({ theme }) => ({
      backgroundColor: theme.palette.secondary.main
    })}

    @media (max-width: 699px) {
      margin: 0 auto 1rem;
    }
  }

  p {
    font-weight: 300;
    margin-bottom: 2rem;

    @media (max-width: 699px) {
      font-size: 1rem;
    }
  }
`;

export const StyledAboutCard = styled(Box, {})`
  padding: 5rem 0;
  ${({ theme }) => ({
    backgroundColor: theme.palette.primary.main
  })}
`;

export const StyledScoreCard = styled(Box, {})`
  padding: 2rem 1rem;
  text-align: center;
  ${({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    borderBottom: `6px solid ${theme.palette.secondary.main}`
  })}

  @media (max-width: 699px) {
    margin: 0 2rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    ${({ theme }) => ({
      color: theme.palette.secondary.main
    })}
  }

  p {
    color: white;
    font-weight: 300;
  }
`;
