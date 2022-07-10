import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledHeroContainer = styled(Container, {})`
  display: flex;
  justify-content: space-evenly;
  height: 90vh;
  margin-top: 5rem;

  @media (max-width: 699px) {
    flex-direction: column-reverse;
  }
`;

export const StyledHeroText = styled(Box, {})`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  width: 50%;

  @media (max-width: 699px) {
    margin: -10rem auto 0;
    padding: 0 1%;
    text-align: center;
    width: 95%;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 1rem;

    @media (max-width: 699px) {
      font-size: 2.3rem;
    }
  }

  p {
    font-size: 1.1rem;
    font-weight: 300;
    margin-bottom: 2rem;

    @media (max-width: 699px) {
      font-size: 1rem;
    }
  }

  button,
  button:hover {
    font-size: 1rem;
    font-weight: 500;
    text-alin: left;
    text-transform: uppercase;
    height: 55px;
    width: 190px;
    ${({ theme }) => ({
      backgroundColor: theme.palette.secondary.main,
      color: 'black'
    })}

    @media (max-width: 699px) {
      margin: auto;
    }
  }
`;

export const StyledHeroIcon = styled(Box, {})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 699px) {
    margin-top: -8rem;
    width: 100%;
  }

  svg {
    width: 90%;

    @media (max-width: 699px) {
      width: 80%;
    }
  }
`;
