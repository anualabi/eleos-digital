import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledContactContainer = styled(Box, {})`
  color: white;
  padding: 5rem 0;
  ${({ theme }) => ({
    backgroundColor: theme.palette.primary.main
  })}

  @media (max-width: 699px) {
    text-align: center;
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
    margin-bottom: 0.25rem;

    @media (max-width: 699px) {
      font-size: 1rem;
    }
  }

  a {
    color: white;

    &:hover {
      text-decoration: none;
      ${({ theme }) => ({
        color: theme.palette.secondary.main
      })}
    }
  }

  svg {
    margin-right: 0.5rem;
    width: 30px;
  }

  .email-wrapper {
    display: flex;
    align-items: center;

    @media (max-width: 699px) {
      justify-content: center;
    }
  }
`;
