import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledHeroContainer = styled(Container)(
  ({ theme }) => `
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    min-height: 90vh;
    margin-top: 5rem;

    ${theme.breakpoints.up('md')} {
      flex-direction: row;
    }
  `
);

export const StyledHeroText = styled(Box)(
  ({ theme }) => `
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: -15rem auto 0;
    padding: 0 1%;
    text-align: center;
    width: 95%;

    .heading {
      margin: -1rem auto 1rem;
    }

    .subheading {
      margin-bottom: 2rem;
    }

    .cta-btn,
    .cta-btn:hover {
      background-color: ${theme.palette.secondary.main};
      color: ${theme.palette.primary.main};
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;
      font-weight: 600;
      margin: auto;
      text-alin: left;
      text-transform: uppercase;
      height: 55px;
      width: 190px;
    }

    ${theme.breakpoints.up('md')} {
      margin: 0 auto;
      padding: 0 5%;
      text-align: left;
      width: 50%;

      .cta-btn,
      .cta-btn:hover {
        margin: 0;
      }
    }
  `
);

export const StyledHeroImage = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -15rem auto 0;
    max-width: 350px;

    svg {
      width: 90%;
    }


    ${theme.breakpoints.up('md')} {
      margin-top: 0rem;
      max-width: 50%;
    }
  `
);
